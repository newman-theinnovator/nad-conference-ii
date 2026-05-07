import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, '../src/assets');

async function convertImages() {
  const files = fs.readdirSync(assetsDir);
  const jpgFiles = files.filter(file => file.endsWith('.jpg') || file.endsWith('.jpeg'));

  for (const file of jpgFiles) {
    const filePath = path.join(assetsDir, file);
    const parsedPath = path.parse(filePath);
    const webpPath = path.join(assetsDir, `${parsedPath.name}.webp`);

    try {
      await sharp(filePath)
        .webp({ quality: 80 })
        .toFile(webpPath);
      console.log(`Converted ${file} to ${path.basename(webpPath)}`);
    } catch (err) {
      console.error(`Error converting ${file}:`, err);
    }
  }
}

convertImages();
