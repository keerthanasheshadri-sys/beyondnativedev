# How to Generate Multiple Favicon Sizes

I've updated your `index.html` to support multiple favicon sizes. Now you need to create the actual image files.

## Option 1: Use Online Tool (Easiest)
1. Go to https://realfavicongenerator.net/ or https://favicon.io/
2. Upload your `src/assets/logo.jpeg` or `public/favicon.ico`
3. Download the generated favicon package
4. Extract and copy these files to your `public/` folder:
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `favicon-192x192.png`
   - `favicon-512x512.png`
   - `apple-touch-icon.png`

## Option 2: Use Image Editing Software
1. Open your logo or favicon in an image editor (Photoshop, GIMP, or online editor)
2. Create and export these sizes:
   - 16x16 pixels → `favicon-16x16.png`
   - 32x32 pixels → `favicon-32x32.png`
   - 192x192 pixels → `favicon-192x192.png`
   - 512x512 pixels → `favicon-512x512.png`
   - 180x180 pixels → `apple-touch-icon.png`
3. Save all files to the `public/` folder

## Option 3: Use Command Line (if you have ImageMagick)
```bash
# Install ImageMagick first: brew install imagemagick (on Mac)
convert src/assets/logo.jpeg -resize 16x16 public/favicon-16x16.png
convert src/assets/logo.jpeg -resize 32x32 public/favicon-32x32.png
convert src/assets/logo.jpeg -resize 192x192 public/favicon-192x192.png
convert src/assets/logo.jpeg -resize 512x512 public/favicon-512x512.png
convert src/assets/logo.jpeg -resize 180x180 public/apple-touch-icon.png
```

## Note
The larger sizes (192x192, 512x512) will make your favicon appear bigger and clearer on:
- Mobile home screens
- Browser tabs
- Bookmarks
- PWA installations

