---
name: image-resizer
description: Resizes and optimizes project images and logos to web-ready dimensions using high-quality bicubic resampling. Use when images have dimensions bigger than needed for portfolio cards and detail galleries.
---

# Image Resizer & Optimizer Skill

This skill provides automated resizing, cropping, and optimization for portfolio project assets (logos, screenshots, banners, profile photos) using .NET's native `System.Drawing` engine with `HighQualityBicubic` interpolation.

## Available Scripts

1. **`process_all_project_images.ps1`**:
   Batch resizes raw screenshots and logos from `assets/images/` and outputs web-optimized assets into `public/projects/<project-id>/`.
   ```powershell
   powershell -ExecutionPolicy Bypass -File .agents/skills/image-resizer/scripts/process_all_project_images.ps1
   ```

2. **`crop_blaze_shield.ps1`**:
   Extracts and centers the Blaze Escrow emerald shield icon from the wide logo banner.
   ```powershell
   powershell -ExecutionPolicy Bypass -File .agents/skills/image-resizer/scripts/crop_blaze_shield.ps1
   ```

3. **`crop_profile_image.ps1`**:
   Crops user portrait to a centered 600×600 square with headroom for circular avatar borders (`public/profile-img.jpg`).
   ```powershell
   powershell -ExecutionPolicy Bypass -File .agents/skills/image-resizer/scripts/crop_profile_image.ps1
   ```

4. **`resize_images.ps1`**:
   Generic single or batch resizer utility function.
