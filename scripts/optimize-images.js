import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const directories = [
  path.join(rootDir, 'src', 'assets'),
  path.join(rootDir, 'public')
];

async function optimizeImages() {
  for (const dir of directories) {
    if (!fs.existsSync(dir)) continue;

    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')) {
        const filePath = path.join(dir, file);
        const parsedPath = path.parse(filePath);
        const newFilePath = path.join(dir, `${parsedPath.name}.webp`);

        try {
          console.log(`Converting ${file} to webp...`);
          await sharp(filePath)
            .webp({ quality: 80 })
            .toFile(newFilePath);
          
          console.log(`Created ${parsedPath.name}.webp, deleting original...`);
          fs.unlinkSync(filePath);
        } catch (error) {
          console.error(`Error processing ${file}:`, error);
        }
      }
    }
  }
  console.log('Image optimization complete.');
}

optimizeImages();
