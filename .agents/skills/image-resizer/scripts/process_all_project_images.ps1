$resizer = ".\.agents\skills\image-resizer\scripts\resize_images.ps1"

Write-Host "========================================="
Write-Host "Processing Portfolio Project Images"
Write-Host "========================================="

# 1. UNICON
Write-Host "`n--- UNICON ---"
& $resizer -SourcePath "assets\images\unicon\unicon-logo.png" -DestinationPath "public\projects\unicon\logo.png" -MaxWidth 512 -MaxHeight 512
& $resizer -SourcePath "assets\images\unicon\landing-page.png" -DestinationPath "public\projects\unicon\landing-page.png" -MaxWidth 1280 -MaxHeight 850
& $resizer -SourcePath "assets\images\unicon\feed.png" -DestinationPath "public\projects\unicon\feed.png" -MaxWidth 1280 -MaxHeight 850
& $resizer -SourcePath "assets\images\unicon\profile.png" -DestinationPath "public\projects\unicon\profile.png" -MaxWidth 1280 -MaxHeight 850

# 2. CodeReplay
Write-Host "`n--- CodeReplay ---"
& $resizer -SourcePath "assets\images\codereplay\icon.png" -DestinationPath "public\projects\codereplay\logo.png" -MaxWidth 512 -MaxHeight 512
& $resizer -SourcePath "assets\images\codereplay\demo.gif" -DestinationPath "public\projects\codereplay\demo.gif"

# 3. StoreOS
Write-Host "`n--- StoreOS ---"
& $resizer -SourcePath "assets\images\storeos\icon.png" -DestinationPath "public\projects\storeos\logo.png" -MaxWidth 512 -MaxHeight 512
& $resizer -SourcePath "assets\images\storeos\dashboard.png" -DestinationPath "public\projects\storeos\dashboard.png" -MaxWidth 1280 -MaxHeight 850
& $resizer -SourcePath "assets\images\storeos\sales.png" -DestinationPath "public\projects\storeos\sales.png" -MaxWidth 1280 -MaxHeight 850
& $resizer -SourcePath "assets\images\storeos\inventory.png" -DestinationPath "public\projects\storeos\inventory.png" -MaxWidth 1280 -MaxHeight 850
& $resizer -SourcePath "assets\images\storeos\report.png" -DestinationPath "public\projects\storeos\report.png" -MaxWidth 1280 -MaxHeight 850

# 4. Prxx
Write-Host "`n--- Prxx ---"
& $resizer -SourcePath "assets\images\prxx\logo.png" -DestinationPath "public\projects\prxx\logo.png" -MaxWidth 512 -MaxHeight 512
& $resizer -SourcePath "assets\images\prxx\lobby.png" -DestinationPath "public\projects\prxx\lobby.png" -MaxWidth 1280 -MaxHeight 850
& $resizer -SourcePath "assets\images\prxx\join.png" -DestinationPath "public\projects\prxx\join.png" -MaxWidth 1280 -MaxHeight 850
& $resizer -SourcePath "assets\images\prxx\attendees.png" -DestinationPath "public\projects\prxx\attendees.png" -MaxWidth 1280 -MaxHeight 850
& $resizer -SourcePath "assets\images\prxx\chat.png" -DestinationPath "public\projects\prxx\chat.png" -MaxWidth 1280 -MaxHeight 850

# 5. Workforcely
Write-Host "`n--- Workforcely ---"
& $resizer -SourcePath "assets\images\workforcely\logo.png" -DestinationPath "public\projects\workforcely\logo.png" -MaxWidth 512 -MaxHeight 512
& $resizer -SourcePath "assets\images\workforcely\dashboard.png" -DestinationPath "public\projects\workforcely\dashboard.png" -MaxWidth 1280 -MaxHeight 850
& $resizer -SourcePath "assets\images\workforcely\payroll.png" -DestinationPath "public\projects\workforcely\payroll.png" -MaxWidth 1280 -MaxHeight 850
& $resizer -SourcePath "assets\images\workforcely\employees.png" -DestinationPath "public\projects\workforcely\employees.png" -MaxWidth 1280 -MaxHeight 850
& $resizer -SourcePath "assets\images\workforcely\leave.png" -DestinationPath "public\projects\workforcely\leave.png" -MaxWidth 1280 -MaxHeight 850

# 6. Blaze Escrow
Write-Host "`n--- Blaze Escrow ---"
& $resizer -SourcePath "assets\images\blaze escrow\logo.jpg" -DestinationPath "public\projects\blaze-escrow\logo.png" -MaxWidth 800 -MaxHeight 500
& $resizer -SourcePath "assets\images\blaze escrow\landing-page.png" -DestinationPath "public\projects\blaze-escrow\landing-page.png" -MaxWidth 1280 -MaxHeight 850
& $resizer -SourcePath "assets\images\blaze escrow\create.png" -DestinationPath "public\projects\blaze-escrow\create.png" -MaxWidth 1280 -MaxHeight 850
& $resizer -SourcePath "assets\images\blaze escrow\share.png" -DestinationPath "public\projects\blaze-escrow\share.png" -MaxWidth 1280 -MaxHeight 850
& $resizer -SourcePath "assets\images\blaze escrow\payment.png" -DestinationPath "public\projects\blaze-escrow\payment.png" -MaxWidth 1280 -MaxHeight 850

# 7. PredictNaija
Write-Host "`n--- PredictNaija ---"
& $resizer -SourcePath "assets\images\predictnaija\logo.png" -DestinationPath "public\projects\predictnaija\logo.png" -MaxWidth 512 -MaxHeight 512
& $resizer -SourcePath "assets\images\predictnaija\markets.png" -DestinationPath "public\projects\predictnaija\markets.png" -MaxWidth 1280 -MaxHeight 850
& $resizer -SourcePath "assets\images\predictnaija\predict.png" -DestinationPath "public\projects\predictnaija\predict.png" -MaxWidth 1280 -MaxHeight 850

Write-Host "`n========================================="
Write-Host "All project images processed successfully!"
Write-Host "========================================="
