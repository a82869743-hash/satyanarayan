Add-Type -AssemblyName System.Drawing
$imgFile = "C:\Users\Aryan\.gemini\antigravity\brain\490d5cb5-40ab-4da6-b2d4-76b8077f080c\media__1772130183089.jpg"
$img = [System.Drawing.Image]::FromFile($imgFile)
$cols = 4
$rows = 6
$cellW = $img.Width / $cols
$cellH = $img.Height / $rows

# The images look like squares with text underneath them.
# The aspect ratio is approx square for the photo part.
$cropW = [int]($cellW * 0.90)  # reduce slightly to avoid edges
$cropH = [int]($cellW * 0.90) 
$offsetX = [int]($cellW * 0.05)
$offsetY = [int]($cellH * 0.05)

$outDir = "C:\Users\Aryan\OneDrive\Desktop\ice cream project\images\menu_crops"
if (!(Test-Path $outDir)) { New-Item -ItemType Directory -Force -Path $outDir | Out-Null }

for ($r=0; $r -lt $rows; $r++) {
    for ($c=0; $c -lt $cols; $c++) {
        $x = [int]($c * $cellW + $offsetX)
        $y = [int]($r * $cellH + $offsetY)
        
        $bmp = New-Object System.Drawing.Bitmap($cropW, $cropH)
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        
        $srcRect = New-Object System.Drawing.Rectangle($x, $y, $cropW, $cropH)
        $destRect = New-Object System.Drawing.Rectangle(0, 0, $cropW, $cropH)
        
        $g.DrawImage($img, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
        $idx = ($r * $cols) + $c + 1
        $bmp.Save("$outDir\$idx.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
        
        $g.Dispose()
        $bmp.Dispose()
    }
}
$img.Dispose()
Write-Host "Sliced $imgFile into 24 images in $outDir."
