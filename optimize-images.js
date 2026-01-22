import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// En ES Modules no existen __dirname, hay que crearlos así:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, 'src/images');
const outputDir = path.join(__dirname, 'public/images');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach(file => {
    const inputPath = path.join(inputDir, file);
    const fileName = path.parse(file).name;

    sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(path.join(outputDir, `${fileName}.webp`))
        .then(() => console.log(`✅ Optimizado: ${file}`))
        .catch(err => console.error(`❌ Error en ${file}:`, err));
});