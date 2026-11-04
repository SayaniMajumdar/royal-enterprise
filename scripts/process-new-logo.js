const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = 'C:/Users/Sayani Majumdar/.gemini/antigravity/brain/beb3b5ec-b956-4bc0-96af-8a6b5b281eea/.user_uploaded/media_1793794330122_e2f5a540.jpg';
const clientPublic = path.resolve(__dirname, '../client/public');
const downloadsDir = path.resolve(clientPublic, 'downloads');
const artifactsDir = 'C:\\Users\\Sayani Majumdar\\.gemini\\antigravity\\brain\\beb3b5ec-b956-4bc0-96af-8a6b5b281eea';

async function run() {
  console.log('1. Reading input image...');
  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;

  console.log(`Original dimensions: ${width}x${height}`);

  // 2. Identify all background pixels (both outer and enclosed negative spaces)
  // Any pixel with r >= 244 && g >= 244 && b >= 244 is white background candidate
  const isWhite = new Uint8Array(width * height);
  for (let i = 0; i < width * height; i++) {
    const p = i * 3;
    if (data[p] >= 244 && data[p + 1] >= 244 && data[p + 2] >= 244) {
      isWhite[i] = 1;
    }
  }

  // Find connected components among white pixels to ignore tiny artifacts (< 10 px)
  const isBg = new Uint8Array(width * height);
  const visited = new Uint8Array(width * height);

  for (let i = 0; i < width * height; i++) {
    if (isWhite[i] && !visited[i]) {
      const q = [i];
      visited[i] = 1;
      let h = 0;
      while (h < q.length) {
        const curr = q[h++];
        const cx = curr % width;
        const cy = Math.floor(curr / width);
        const nbs = [
          cx > 0 ? curr - 1 : -1,
          cx < width - 1 ? curr + 1 : -1,
          cy > 0 ? curr - width : -1,
          cy < height - 1 ? curr + width : -1,
        ];
        for (const n of nbs) {
          if (n !== -1 && isWhite[n] && !visited[n]) {
            visited[n] = 1;
            q.push(n);
          }
        }
      }

      // If component has at least 15 pixels, it's negative background space
      if (q.length >= 15) {
        for (const idx of q) {
          isBg[idx] = 1;
        }
      }
    }
  }

  // 3. Find bounding box of non-background pixels
  let minX = width, maxX = 0, minY = height, maxY = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      if (!isBg[idx]) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  const emblemW = maxX - minX + 1;
  const emblemH = maxY - minY + 1;
  console.log(`Emblem bounds: [${minX}, ${minY}] to [${maxX}, ${maxY}], size: ${emblemW}x${emblemH}`);

  // 4. Create RGBA buffer with soft edge anti-aliasing
  const fullRgba = Buffer.alloc(width * height * 4);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pIdx = y * width + x;
      const srcIdx = pIdx * 3;
      const dstIdx = pIdx * 4;

      const r = data[srcIdx];
      const g = data[srcIdx + 1];
      const b = data[srcIdx + 2];

      if (isBg[pIdx]) {
        // Fully transparent
        fullRgba[dstIdx] = r;
        fullRgba[dstIdx + 1] = g;
        fullRgba[dstIdx + 2] = b;
        fullRgba[dstIdx + 3] = 0;
      } else {
        // Anti-aliased boundary check
        let bgNeighbors = 0;
        if (x > 0 && isBg[pIdx - 1]) bgNeighbors++;
        if (x < width - 1 && isBg[pIdx + 1]) bgNeighbors++;
        if (y > 0 && isBg[pIdx - width]) bgNeighbors++;
        if (y < height - 1 && isBg[pIdx + width]) bgNeighbors++;

        fullRgba[dstIdx] = r;
        fullRgba[dstIdx + 1] = g;
        fullRgba[dstIdx + 2] = b;

        if (bgNeighbors > 0) {
          // Soft edge blending against white
          const distFromWhite = Math.sqrt((255 - r) ** 2 + (255 - g) ** 2 + (255 - b) ** 2);
          const alpha = Math.min(255, Math.max(80, Math.round(distFromWhite * 4.5)));
          fullRgba[dstIdx + 3] = alpha;
        } else {
          fullRgba[dstIdx + 3] = 255;
        }
      }
    }
  }

  // 5. Crop to square with balanced padding (28px around emblem)
  const padding = 28;
  const targetSize = Math.max(emblemW, emblemH) + padding * 2;
  const centerX = Math.round((minX + maxX) / 2);
  const centerY = Math.round((minY + maxY) / 2);

  const cropX = Math.round(centerX - targetSize / 2);
  const cropY = Math.round(centerY - targetSize / 2);

  console.log(`Creating square ${targetSize}x${targetSize} emblem (center: ${centerX}, ${centerY})...`);

  // Create square RGBA buffer
  const squareRgba = Buffer.alloc(targetSize * targetSize * 4);

  for (let dy = 0; dy < targetSize; dy++) {
    for (let dx = 0; dx < targetSize; dx++) {
      const srcX = cropX + dx;
      const srcY = cropY + dy;
      const dstIdx = (dy * targetSize + dx) * 4;

      if (srcX >= 0 && srcX < width && srcY >= 0 && srcY < height) {
        const srcIdx = (srcY * width + srcX) * 4;
        squareRgba[dstIdx] = fullRgba[srcIdx];
        squareRgba[dstIdx + 1] = fullRgba[srcIdx + 1];
        squareRgba[dstIdx + 2] = fullRgba[srcIdx + 2];
        squareRgba[dstIdx + 3] = fullRgba[srcIdx + 3];
      } else {
        // Outside original image bounds (padded transparent)
        squareRgba[dstIdx] = 255;
        squareRgba[dstIdx + 1] = 255;
        squareRgba[dstIdx + 2] = 255;
        squareRgba[dstIdx + 3] = 0;
      }
    }
  }

  // 6. Write master transparent PNG
  const outPngPath = path.join(clientPublic, 'logo-crest.png');
  await sharp(squareRgba, { raw: { width: targetSize, height: targetSize, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(outPngPath);
  console.log('✓ Written client/public/logo-crest.png');

  // Also create clean white background JPG version (square)
  const squareJpgRgba = Buffer.alloc(targetSize * targetSize * 3);
  for (let dy = 0; dy < targetSize; dy++) {
    for (let dx = 0; dx < targetSize; dx++) {
      const srcX = cropX + dx;
      const srcY = cropY + dy;
      const dstIdx = (dy * targetSize + dx) * 3;

      if (srcX >= 0 && srcX < width && srcY >= 0 && srcY < height) {
        const srcIdx = (srcY * width + srcX) * 3;
        squareJpgRgba[dstIdx] = data[srcIdx];
        squareJpgRgba[dstIdx + 1] = data[srcIdx + 1];
        squareJpgRgba[dstIdx + 2] = data[srcIdx + 2];
      } else {
        squareJpgRgba[dstIdx] = 255;
        squareJpgRgba[dstIdx + 1] = 255;
        squareJpgRgba[dstIdx + 2] = 255;
      }
    }
  }
  const outJpgPath = path.join(clientPublic, 'logo-crest.jpg');
  await sharp(squareJpgRgba, { raw: { width: targetSize, height: targetSize, channels: 3 } })
    .jpeg({ quality: 95 })
    .toFile(outJpgPath);
  console.log('✓ Written client/public/logo-crest.jpg');

  // 7. Write 512x512 high-DPI icon & 128x128 favicon
  await sharp(outPngPath)
    .resize(512, 512)
    .png()
    .toFile(path.join(clientPublic, 'logo-crest-512.png'));
  console.log('✓ Written client/public/logo-crest-512.png');

  await sharp(outPngPath)
    .resize(128, 128)
    .png()
    .toFile(path.join(clientPublic, 'favicon.png'));
  console.log('✓ Written client/public/favicon.png');

  // 8. Update downloads directory
  if (!fs.existsSync(downloadsDir)) fs.mkdirSync(downloadsDir, { recursive: true });
  fs.copyFileSync(outPngPath, path.join(downloadsDir, 'royal-enterprise-crest.png'));
  fs.copyFileSync(outJpgPath, path.join(downloadsDir, 'royal-enterprise-crest.jpg'));
  console.log('✓ Updated client/public/downloads');

  // 9. Update brain artifacts directory
  fs.copyFileSync(outPngPath, path.join(artifactsDir, 'royal-enterprise-crest.png'));
  fs.copyFileSync(outJpgPath, path.join(artifactsDir, 'royal-enterprise-crest.jpg'));
  console.log('✓ Updated brain artifacts directory');

  console.log('\nAll logo files generated and replaced successfully!');
}

run().catch(console.error);