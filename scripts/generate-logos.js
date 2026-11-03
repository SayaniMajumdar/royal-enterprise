const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const downloadsDir = path.resolve(__dirname, '../client/public/downloads');
const artifactsDir = 'C:\\Users\\Sayani Majumdar\\.gemini\\antigravity\\brain\\beb3b5ec-b956-4bc0-96af-8a6b5b281eea';

if (!fs.existsSync(downloadsDir)) {
  fs.mkdirSync(downloadsDir, { recursive: true });
}

async function convertLogos() {
  console.log('Generating high-resolution PNG & JPG logos...');

  // 1. Emblem Medallion (512x512 SVG -> 1024x1024 high-res)
  const emblemSvg = fs.readFileSync(path.join(downloadsDir, 'royal-enterprise-emblem.svg'));
  
  // 1a. Transparent PNG (1024x1024)
  const emblemPngBuffer = await sharp(emblemSvg, { density: 300 })
    .resize(1024, 1024)
    .png({ quality: 100 })
    .toBuffer();
  fs.writeFileSync(path.join(downloadsDir, 'royal-enterprise-emblem.png'), emblemPngBuffer);
  fs.writeFileSync(path.join(artifactsDir, 'royal-enterprise-emblem.png'), emblemPngBuffer);
  console.log('✓ royal-enterprise-emblem.png created (1024x1024, transparent)');

  // 1b. JPG on Warm Ivory Background (#FAF7F2)
  const emblemJpgBuffer = await sharp(emblemPngBuffer)
    .flatten({ background: '#FAF7F2' })
    .jpeg({ quality: 98 })
    .toBuffer();
  fs.writeFileSync(path.join(downloadsDir, 'royal-enterprise-emblem.jpg'), emblemJpgBuffer);
  fs.writeFileSync(path.join(artifactsDir, 'royal-enterprise-emblem.jpg'), emblemJpgBuffer);
  console.log('✓ royal-enterprise-emblem.jpg created (1024x1024, ivory canvas)');

  // 1c. JPG on Dark Obsidian Background (#141210)
  const emblemDarkJpgBuffer = await sharp(emblemPngBuffer)
    .flatten({ background: '#141210' })
    .jpeg({ quality: 98 })
    .toBuffer();
  fs.writeFileSync(path.join(downloadsDir, 'royal-enterprise-emblem-dark.jpg'), emblemDarkJpgBuffer);
  fs.writeFileSync(path.join(artifactsDir, 'royal-enterprise-emblem-dark.jpg'), emblemDarkJpgBuffer);
  console.log('✓ royal-enterprise-emblem-dark.jpg created (1024x1024, dark canvas)');

  // 2. Full Horizontal Logo - Light Mode (540x120 SVG -> 2160x480 4x)
  const logoLightSvg = fs.readFileSync(path.join(downloadsDir, 'royal-enterprise-logo.svg'));

  // 2a. Transparent PNG
  const logoLightPngBuffer = await sharp(logoLightSvg, { density: 300 })
    .resize(2160, 480)
    .png({ quality: 100 })
    .toBuffer();
  fs.writeFileSync(path.join(downloadsDir, 'royal-enterprise-logo.png'), logoLightPngBuffer);
  fs.writeFileSync(path.join(artifactsDir, 'royal-enterprise-logo.png'), logoLightPngBuffer);
  console.log('✓ royal-enterprise-logo.png created (2160x480, transparent)');

  // 2b. JPG on Warm Ivory Background (#FAF7F2)
  const logoLightJpgBuffer = await sharp(logoLightPngBuffer)
    .flatten({ background: '#FAF7F2' })
    .jpeg({ quality: 98 })
    .toBuffer();
  fs.writeFileSync(path.join(downloadsDir, 'royal-enterprise-logo.jpg'), logoLightJpgBuffer);
  fs.writeFileSync(path.join(artifactsDir, 'royal-enterprise-logo.jpg'), logoLightJpgBuffer);
  console.log('✓ royal-enterprise-logo.jpg created (2160x480, ivory canvas)');

  // 3. Full Horizontal Logo - Dark Mode (540x120 SVG -> 2160x480 4x)
  const logoDarkSvg = fs.readFileSync(path.join(downloadsDir, 'royal-enterprise-logo-dark.svg'));

  // 3a. Transparent PNG
  const logoDarkPngBuffer = await sharp(logoDarkSvg, { density: 300 })
    .resize(2160, 480)
    .png({ quality: 100 })
    .toBuffer();
  fs.writeFileSync(path.join(downloadsDir, 'royal-enterprise-logo-dark.png'), logoDarkPngBuffer);
  fs.writeFileSync(path.join(artifactsDir, 'royal-enterprise-logo-dark.png'), logoDarkPngBuffer);
  console.log('✓ royal-enterprise-logo-dark.png created (2160x480, transparent)');

  // 3b. JPG on Dark Background (#141210)
  const logoDarkJpgBuffer = await sharp(logoDarkPngBuffer)
    .flatten({ background: '#141210' })
    .jpeg({ quality: 98 })
    .toBuffer();
  fs.writeFileSync(path.join(downloadsDir, 'royal-enterprise-logo-dark.jpg'), logoDarkJpgBuffer);
  fs.writeFileSync(path.join(artifactsDir, 'royal-enterprise-logo-dark.jpg'), logoDarkJpgBuffer);
  console.log('✓ royal-enterprise-logo-dark.jpg created (2160x480, obsidian canvas)');

  console.log('\nAll PNG and JPG files generated successfully in public/downloads and artifacts!');
}

convertLogos().catch((err) => {
  console.error('Conversion failed:', err);
  process.exit(1);
});
