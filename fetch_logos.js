import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error('Failed to download: ' + res.statusCode));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', reject);
  });
};

const fetchWikiUrl = (filename) => {
  return new Promise((resolve, reject) => {
    https.get(`https://en.wikipedia.org/w/api.php?action=query&titles=File:${filename}&prop=imageinfo&iiprop=url&format=json`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query.pages;
          const key = Object.keys(pages)[0];
          resolve(pages[key].imageinfo[0].url);
        } catch (e) {
          reject('Error parsing wiki JSON');
        }
      });
    });
  });
};

const fetchOsworthUrl = () => {
  return new Promise((resolve) => {
    https.get('https://www.osworthnigeria.com', (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const match = data.match(/src="([^"]*logo[^"]*\.(png|jpg|jpeg|webp))"/i);
        if (match) {
          let src = match[1];
          if (!src.startsWith('http')) {
            src = 'https://www.osworthnigeria.com' + (src.startsWith('/') ? '' : '/') + src;
          }
          resolve(src);
        } else {
          resolve('https://placehold.co/400x150?text=OSWORTH');
        }
      });
    }).on('error', () => resolve('https://placehold.co/400x150?text=OSWORTH'));
  });
};

(async () => {
  try {
    const faesUrl = await fetchWikiUrl('Faes_Farma_Logo.svg');
    console.log('Faes Farma:', faesUrl);
    await download(faesUrl, path.join(__dirname, 'public', 'faesfarma.svg'));

    const sebaUrl = await fetchWikiUrl('Sebamed.svg');
    console.log('Sebamed:', sebaUrl);
    await download(sebaUrl, path.join(__dirname, 'public', 'sebamed.svg'));

    const osUrl = await fetchOsworthUrl();
    console.log('Osworth:', osUrl);
    await download(osUrl, path.join(__dirname, 'public', 'osworth.png'));
    
    console.log('Done downloading logos');
  } catch (err) {
    console.error(err);
  }
})();
