Add-Type -AssemblyName System.Drawing

$img = [System.Drawing.Bitmap]::FromFile((Join-Path (Get-Location) 'assets\images\blaze escrow\logo.jpg'))

$minX = 132
$maxX = 385
$minY = 244
$maxY = 524

$shieldW = $maxX - $minX
$shieldH = $maxY - $minY
$centerX = [int]($minX + ($shieldW / 2))
$centerY = [int]($minY + ($shieldH / 2))

# 340x340 crop window around center
$cropSize = 340
$cropX = [int]($centerX - ($cropSize / 2))
$cropY = [int]($centerY - ($cropSize / 2))

Write-Host "Shield Center: ($centerX, $centerY), Crop Window: X=$cropX, Y=$cropY, Size=$cropSize"

$outSize = 400
$bitmap = New-Object System.Drawing.Bitmap($outSize, $outSize)
$g = [System.Drawing.Graphics]::FromImage($bitmap)
$g.Clear([System.Drawing.Color]::White)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

$srcRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropSize, $cropSize)
$dstRect = New-Object System.Drawing.Rectangle(0, 0, $outSize, $outSize)
$g.DrawImage($img, $dstRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

$dest1 = Join-Path (Get-Location) 'public\experience\innovatex.png'
$dest2 = Join-Path (Get-Location) 'public\projects\blaze-escrow\icon.png'

$bitmap.Save($dest1, [System.Drawing.Imaging.ImageFormat]::Png)
$bitmap.Save($dest2, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$bitmap.Dispose()
$img.Dispose()

Write-Host "Successfully saved centered Blaze Escrow shield icon to $dest1 and $dest2"
