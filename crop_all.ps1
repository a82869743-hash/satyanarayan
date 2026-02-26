Add-Type -AssemblyName System.Drawing

$img1 = "C:\Users\Aryan\.gemini\antigravity\brain\490d5cb5-40ab-4da6-b2d4-76b8077f080c\media__1772131036078.jpg"
$img2 = "C:\Users\Aryan\.gemini\antigravity\brain\490d5cb5-40ab-4da6-b2d4-76b8077f080c\media__1772131048199.jpg"

$outDir = "C:\Users\Aryan\OneDrive\Desktop\ice cream project\images\menu_all"
if (!(Test-Path $outDir)) { New-Item -ItemType Directory -Force -Path $outDir | Out-Null }

$script:idx = 1

function Process-Grid {
    param($imgPath, $cols, $rows, $offsetY1=$false)
    $img = [System.Drawing.Image]::FromFile($imgPath)
    $cellW = $img.Width / $cols
    $cellH = $img.Height / $rows
    
    $cropW = [int]($cellW * 0.95)
    $cropH = [int]($cellW * 0.95) 
    
    for ($r=0; $r -lt $rows; $r++) {
        for ($c=0; $c -lt $cols; $c++) {
            $x = [int]($c * $cellW + ($cellW * 0.025))
            $y = [int]($r * $cellH)
            if ($offsetY1 -and $r -eq 0) {
                $y += [int]($cellH * 0.05)
            }
            
            $srcRect = New-Object System.Drawing.Rectangle($x, $y, $cropW, $cropH)
            
            if ($srcRect.Right -gt $img.Width) { $srcRect.Width = $img.Width - $srcRect.Left }
            if ($srcRect.Bottom -gt $img.Height) { $srcRect.Height = $img.Height - $srcRect.Top }
            
            $bmp = New-Object System.Drawing.Bitmap($cropW, $cropH)
            $g = [System.Drawing.Graphics]::FromImage($bmp)
            $destRect = New-Object System.Drawing.Rectangle(0, 0, $cropW, $cropH)
            $g.DrawImage($img, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
            
            $currIdx = $script:idx
            $bmp.Save("$outDir\item_$currIdx.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
            
            $g.Dispose()
            $bmp.Dispose()
            $script:idx++
        }
    }
    $img.Dispose()
}

Process-Grid -imgPath $img1 -cols 7 -rows 10 
Process-Grid -imgPath $img2 -cols 8 -rows 9

$total = $script:idx - 1
Write-Host "Sliced all images into $total distinct files."
