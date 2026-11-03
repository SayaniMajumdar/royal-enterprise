const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = 'C:/Users/Sayani Majumdar/.gemini/antigravity/brain/beb3b5ec-b956-4bc0-96af-8a6b5b281eea/.user_uploaded/media_1793733678338_13e32cef.jpg';
const outputPngPath = path.resolve(__dirname, '../client/public/logo-crest.png');
const outputJpgPath = path.resolve(__dirname, '../client/public/logo-crest.jpg');

async function processImage() {
  console.log('Processing user uploaded crest logo...');

  // Copy raw image as well
  fs.copyFileSync(inputPath, outputJpgPath);
  console.log('✓ Copied original JPG to client/public/logo-crest.jpg');

  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;

  // Create RGBA buffer (4 channels)
  const rgba = Buffer.alloc(width * height * 4);
  const isBg = new Uint8Array(width * height); // 1 = background (transparent)

  const isBgColor = (x, y) => {
    const idx = (y * width + x) * 3;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    // Background is cream ivory around (247, 243, 235)
    // Distance from pure cream
    return (r >= 236 && g >= 228 && b >= 215);
  };

  // BFS from edges
  const queue = new Int32Array(width * height);
  let head = 0;
  let tail = 0;

  // Seed top and bottom borders
  for (let x = 0; x < width; x++) {
    if (isBgColor(x, 0)) {
      const idx = 0 * width + x;
      isBg[idx] = 1;
      queue[tail++] = idx;
    }
    if (isBgColor(x, height - 1)) {
      const idx = (height - 1) * width + x;
      isBg[idx] = 1;
      queue[tail++] = idx;
    }
  }

  // Seed left and right borders
  for (let y = 0; y < height; y++) {
    if (isBgColor(0, y)) {
      const idx = y * width + 0;
      if (!isBg[idx]) {
        isBg[idx] = 1;
        queue[tail++] = idx;
      }
    }
    if (isBgColor(width - 1, y)) {
      const idx = y * width + (width - 1);
      if (!isBg[idx]) {
        isBg[idx] = 1;
        queue[tail++] = idx;
      }
    }
  }

  // Flood fill
  while (head < tail) {
    const curr = queue[head++];
    const cx = curr % width;
    const cy = Math.floor(curr / width);

    // 4 directions
    const neighbors = [
      cx > 0 ? curr - 1 : -1,
      cx < width - 1 ? curr + 1 : -1,
      cy > 0 ? curr - width : -1,
      cy < height - 1 ? curr + width : -1,
    ];

    for (const n of neighbors) {
      if (n !== -1 && !isBg[n]) {
        const nx = n % width;
        const ny = Math.floor(n / width);
        if (isBgColor(nx, ny)) {
          isBg[n] = 1;
          queue[tail++] = n;
        }
      }
    }
  }

  console.log(`Flood filled ${tail} background pixels (${((tail / (width * height)) * 100).toFixed(1)}%).`);

  // Build RGBA with soft edge anti-aliasing
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pIdx = y * width + x;
      const srcIdx = pIdx * 3;
      const dstIdx = pIdx * 4;

      const r = data[srcIdx];
      const g = data[srcIdx + 1];
      const b = data[srcIdx + 2];

      if (isBg[pIdx]) {
        // Transparent
        rgba[dstIdx] = r;
        rgba[dstIdx + 1] = g;
        rgba[dstIdx + 2] = b;
        rgba[dstIdx + 3] = 0;
      } else {
        // Check if on boundary of background for smooth anti-aliased edge
        let adjacentBg = 0;
        if (x > 0 && isBg[pIdx - 1]) adjacentBg++;
        if (x < width - 1 && isBg[pIdx + 1]) adjacentBg++;
        if (y > 0 && isBg[pIdx - width]) adjacentBg++;
        if (y < height - 1 && isBg[pIdx + width]) adjacentBg++;

        rgba[dstIdx] = r;
        rgba[dstIdx + 1] = g;
        rgba[dstIdx + 2] = b;

        if (adjacentBg > 0) {
          // Soft edge blending
          const dist = Math.sqrt((r - 247)**2 + (g - 243)**2 + (b - 235)**2);
          const alpha = Math.min(255, Math.max(70, Math.round(dist * 5)));
          rgba[dstIdx + 3] = alpha;
        } else {
          rgba[dstIdx + 3] = 255;
        }
      }
    }
  }

  // Save full-res transparent PNG
  await sharp(rgba, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(outputPngPath);
  console.log('✓ Created transparent PNG at client/public/logo-crest.png');

  // Also create a 512x512 and 128x128 version for icons and favicons
  await sharp(outputPngPath)
    .resize(512, 512)
    .png()
    .toFile(path.resolve(__dirname, '../client/public/logo-crest-512.png'));

  await sharp(outputPngPath)
    .resize(128, 128)
    .png()
    .toFile(path.resolve(__dirname, '../client/public/favicon.png'));

  // Also update downloads folder
  const downloadsDir = path.resolve(__dirname, '../client/public/downloads');
  fs.copyFileSync(outputPngPath, path.join(downloadsDir, 'royal-enterprise-crest.png'));
  fs.copyFileSync(outputJpgPath, path.join(downloadsDir, 'royal-enterprise-crest.jpg'));

  // Also copy to artifacts directory
  const artifactsDir = 'C:\\Users\\Sayani Majumdar\\.gemini\\antigravity\\brain\\beb3b5ec-b956-4bc0-96af-8a6b5b281eea';
  fs.copyFileSync(outputPngPath, path.join(artifactsDir, 'royal-enterprise-crest.png'));
  fs.copyFileSync(outputJpgPath, path.join(artifactsDir, 'royal-enterprise-crest.jpg'));

  console.log('✓ All files and downloads updated successfully!');
}

processImage().catch(console.error);
