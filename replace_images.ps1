Add-Type -AssemblyName System.Drawing

$ArtifactsDir = "C:\Users\Aryan\.gemini\antigravity\brain\a7dbea97-ab10-4eaa-a5a1-d2ae1c202b1f"
$ProductsDir = "C:\Users\Aryan\OneDrive\Desktop\ice cream project\images\products"

$img_choc = (Get-ChildItem -Path $ArtifactsDir -Filter "chocolate_milkshake_*.png" | Sort-Object LastWriteTime -Descending | Select-Object -First 1).FullName
$img_straw = (Get-ChildItem -Path $ArtifactsDir -Filter "strawberry_milkshake_*.png" | Sort-Object LastWriteTime -Descending | Select-Object -First 1).FullName
$img_mango = (Get-ChildItem -Path $ArtifactsDir -Filter "mango_milkshake_*.png" | Sort-Object LastWriteTime -Descending | Select-Object -First 1).FullName
$img_vanilla = (Get-ChildItem -Path $ArtifactsDir -Filter "vanilla_milkshake_*.png" | Sort-Object LastWriteTime -Descending | Select-Object -First 1).FullName
$img_oreo = (Get-ChildItem -Path $ArtifactsDir -Filter "oreo_milkshake_*.png" | Sort-Object LastWriteTime -Descending | Select-Object -First 1).FullName
$img_butter = (Get-ChildItem -Path $ArtifactsDir -Filter "butterscotch_milkshake_*.png" | Sort-Object LastWriteTime -Descending | Select-Object -First 1).FullName
$img_thick_choc = (Get-ChildItem -Path $ArtifactsDir -Filter "thick_chocolate_shake_*.png" | Sort-Object LastWriteTime -Descending | Select-Object -First 1).FullName
$img_thick_fruit = (Get-ChildItem -Path $ArtifactsDir -Filter "thick_fruit_shake_*.png" | Sort-Object LastWriteTime -Descending | Select-Object -First 1).FullName
$img_coffee = (Get-ChildItem -Path $ArtifactsDir -Filter "classic_cold_coffee_*.png" | Sort-Object LastWriteTime -Descending | Select-Object -First 1).FullName
$img_coffee_ic = (Get-ChildItem -Path $ArtifactsDir -Filter "cold_coffee_ice_cream_*.png" | Sort-Object LastWriteTime -Descending | Select-Object -First 1).FullName
$img_coffee_oreo = (Get-ChildItem -Path $ArtifactsDir -Filter "cold_coffee_oreo_*.png" | Sort-Object LastWriteTime -Descending | Select-Object -First 1).FullName
$img_coffee_spec = (Get-ChildItem -Path $ArtifactsDir -Filter "special_cold_coffee_*.png" | Sort-Object LastWriteTime -Descending | Select-Object -First 1).FullName

function Map-Image {
    param($fileName)
    if ($fileName -match "^col-") {
        if ($fileName -match "oreo|hide-seek") { return $img_coffee_oreo }
        if ($fileName -match "ice-cream") { return $img_coffee_ic }
        if ($fileName -match "satyanarayan|special") { return $img_coffee_spec }
        return $img_coffee
    }
    if ($fileName -match "^thi-") {
        if ($fileName -match "mango|anjeer|pineapple|strawberry|rose|sitafal|black-current") { return $img_thick_fruit }
        return $img_thick_choc
    }
    if ($fileName -match "^mil-") {
        if ($fileName -match "mango|sitafal|kaju|pineapple") { return $img_mango }
        if ($fileName -match "strawberry|rose") { return $img_straw }
        if ($fileName -match "vanilla") { return $img_vanilla }
        if ($fileName -match "butter-scotch|bournvita|snickers") { return $img_butter }
        if ($fileName -match "oreo|hide-seek") { return $img_oreo }
        return $img_choc
    }
    return $null
}

$allFiles = Get-ChildItem -Path $ProductsDir -Filter "*.jpg"
$count = 0
foreach ($file in $allFiles) {
    if ($file.Name -match "^(mil-|thi-|col-)") {
        $sourceImg = Map-Image -fileName $file.Name
        if ($sourceImg) {
            $bmp = [System.Drawing.Image]::FromFile($sourceImg)
            $bmp.Save($file.FullName, [System.Drawing.Imaging.ImageFormat]::Jpeg)
            $bmp.Dispose()
            Write-Host "Replaced $($file.Name) with $([System.IO.Path]::GetFileName($sourceImg))"
            $count++
        }
    }
}
Write-Host "Replaced $count images."
