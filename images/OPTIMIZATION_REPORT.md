# Image Optimization Report

Date: 2026-02-03

## Summary
- **Tool Used**: ImageMagick (convert)
- **Settings**: 300x300 max, 85% quality, stripped metadata, progressive JPEG
- **Backup Location**: `/home/nick/nfl-mock-draft-2026/images/players_backup/`

## Results

| Metric | Value |
|--------|-------|
| Total Images | 63 |
| Images Optimized | 30 |
| Empty Files | 33 |
| Total Size Before | 251,382 bytes (245.49 KB) |
| Total Size After | 197,784 bytes (193.15 KB) |
| **Bytes Saved** | **53,598 bytes (52.34 KB)** |
| **Percentage Savings** | **21.3%** |

## Largest Files After Optimization
1. keldric-faulk.jpg - 14,331 bytes
2. makai-lemon.jpg - 12,211 bytes
3. rueben-bain-jr.jpg - 11,507 bytes
4. carson-beck.jpg - 11,153 bytes
5. ty-simpson.jpg - 9,622 bytes

## Quality Settings
- JPEG Quality: 85%
- Max Dimensions: 300x300 pixels
- Metadata: Stripped
- Interlacing: Progressive (Plane)

## To Restore Originals
```bash
cp /home/nick/nfl-mock-draft-2026/images/players_backup/*.jpg /home/nick/nfl-mock-draft-2026/images/players/
```
