Add-Type -AssemblyName System.Drawing

$srcPath = 'C:\Users\Rokan\.gemini\antigravity-ide\brain\ebccb133-33d2-40d6-aa42-1f0116160507\.user_uploaded\media_1792008193370.jpg'
$img = [System.Drawing.Bitmap]::FromFile($srcPath)

# Add 70px of top headroom by extending the purple banner color
$topPad = 90
$cropSize = 920
$cropX = 30
$cropY = 0

$outSize = 600
$bitmap = New-Object System.Drawing.Bitmap($outSize, $outSize)
$g = [System.Drawing.Graphics]::FromImage($bitmap)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

# Background fill with banner purple
$bannerColor = $img.GetPixel(450, 10)
$brush = New-Object System.Drawing.SolidBrush($bannerColor)
$g.FillRectangle($brush, 0, 0, $outSize, $outSize)
$brush.Dispose()

# Draw source image shifted down by topPad (scaled)
$scale = $outSize / ($cropSize + $topPad)
$dstW = [int]($cropSize * $scale)
$dstH = [int]($cropSize * $scale)
$dstX = [int](($outSize - $dstW) / 2)
$dstY = [int]($topPad * $scale)

$srcRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropSize, [Math]::Min($cropSize, $img.Height))
$dstRect = New-Object System.Drawing.Rectangle($dstX, $dstY, $dstW, $dstH)
$g.DrawImage($img, $dstRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

$destPath = Join-Path (Get-Location) 'public\profile-img.jpg'

$encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.FormatDescription -eq 'JPEG' }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 95L)

$bitmap.Save($destPath, $encoder, $encoderParams)

$g.Dispose()
$bitmap.Dispose()
$img.Dispose()

Write-Host "Perfect circular-fit profile image saved with headroom."
