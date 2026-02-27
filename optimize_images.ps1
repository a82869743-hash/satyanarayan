Add-Type -AssemblyName System.Drawing

$srcDir = "images\menu"
$files = Get-ChildItem -Path $srcDir -Filter "*.jpg"

foreach ($file in $files) {
    try {
        $img = [System.Drawing.Image]::FromFile($file.FullName)
        
        # Calculate new dimensions
        $newWidth = $img.Width
        $newHeight = $img.Height
        
        $maxDimension = 800
        if ($img.Width -gt $maxDimension -or $img.Height -gt $maxDimension) {
            if ($img.Width -gt $img.Height) {
                $newWidth = $maxDimension
                $newHeight = [int]($img.Height * ($maxDimension / $img.Width))
            } else {
                $newHeight = $maxDimension
                $newWidth = [int]($img.Width * ($maxDimension / $img.Height))
            }
        }
        
        $bmp = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        
        # High quality scaling
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        
        $g.DrawImage($img, 0, 0, $newWidth, $newHeight)
        
        # Jpeg Encoder
        $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
        $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
        # Quality level (0-100). Higher = bigger size, better quality. We compress to ensure < 400KB
        $quality = 70 
        $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]$quality)
        
        $img.Dispose()
        
        # Overwrite file
        $bmp.Save($file.FullName, $codec, $encoderParams)
        
        $g.Dispose()
        $bmp.Dispose()
        Write-Host "Optimized: $($file.Name)"
    } catch {
        Write-Error "Failed to optimize $($file.Name): $_"
    }
}
Write-Host "Optimization Complete!"
