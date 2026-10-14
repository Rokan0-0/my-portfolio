param(
    [string]$SourcePath,
    [string]$DestinationPath,
    [int]$MaxWidth = 1280,
    [int]$MaxHeight = 900,
    [int]$Quality = 90
)

Add-Type -AssemblyName System.Drawing

function Resize-ImageFile {
    param(
        [string]$Src,
        [string]$Dst,
        [int]$MaxW,
        [int]$MaxH
    )

    $destDir = Split-Path $Dst -Parent
    if (!(Test-Path $destDir)) {
        New-Item -ItemType Directory -Path $destDir -Force | Out-Null
    }

    $ext = [System.IO.Path]::GetExtension($Src).ToLower()
    if ($ext -eq ".gif") {
        # Copy gif directly to preserve animation frames
        Copy-Item -Path $Src -Destination $Dst -Force
        Write-Host "Copied GIF directly (preserving animation): $Dst"
        return
    }

    # Open image
    $stream = [System.IO.File]::OpenRead($Src)
    $origImage = [System.Drawing.Image]::FromStream($stream)
    $origW = $origImage.Width
    $origH = $origImage.Height
    $stream.Close()
    $stream.Dispose()

    # Calculate target dimensions
    $scaleW = $MaxW / $origW
    $scaleH = $MaxH / $origH
    $scale = [Math]::Min($scaleW, $scaleH)

    if ($scale -ge 1.0) {
        # Image is within bounds, copy as is
        Copy-Item -Path $Src -Destination $Dst -Force
        Write-Host "Kept original size ($($origW)x$($origH)): $Dst"
        $origImage.Dispose()
        return
    }

    $newW = [int][Math]::Round($origW * $scale)
    $newH = [int][Math]::Round($origH * $scale)

    $bitmap = New-Object System.Drawing.Bitmap($newW, $newH)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

    $srcImage = [System.Drawing.Image]::FromFile($Src)
    $graphics.DrawImage($srcImage, 0, 0, $newW, $newH)

    # Save
    if ($Dst.EndsWith(".png", [System.StringComparison]::OrdinalIgnoreCase)) {
        $bitmap.Save($Dst, [System.Drawing.Imaging.ImageFormat]::Png)
    } elseif ($Dst.EndsWith(".jpg", [System.StringComparison]::OrdinalIgnoreCase) -or $Dst.EndsWith(".jpeg", [System.StringComparison]::OrdinalIgnoreCase)) {
        $bitmap.Save($Dst, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    } else {
        $bitmap.Save($Dst, $srcImage.RawFormat)
    }

    $graphics.Dispose()
    $bitmap.Dispose()
    $srcImage.Dispose()

    $origKb = (Get-Item $Src).Length / 1KB
    $newKb = (Get-Item $Dst).Length / 1KB
    Write-Host "Resized: $($origW)x$($origH) ($([Math]::Round($origKb,1)) KB) -> $($newW)x$($newH) ($([Math]::Round($newKb,1)) KB): $Dst"
}

if ($SourcePath -and $DestinationPath) {
    Resize-ImageFile -Src $SourcePath -Dst $DestinationPath -MaxW $MaxWidth -MaxH $MaxHeight
}
