import puppeteer from 'puppeteer-core';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, '..', 'docs', 'screenshots');
mkdirSync(OUT_DIR, { recursive: true });

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE_URL = 'http://localhost:5173';

const SECTIONS = [
  { id: 'hero',            file: 'hero.png',            label: 'Hero' },
  { id: 'skills',          file: 'skills.png',          label: 'Skills' },
  { id: 'experience',      file: 'experience.png',      label: 'Work Experience' },
  { id: 'projects',        file: 'projects.png',        label: 'Projects' },
  { id: 'hackathons',      file: 'hackathons.png',      label: 'Hackathons' },
  { id: 'certifications',  file: 'certifications.png',  label: 'Certifications' },
  { id: 'contact',         file: 'contact.png',         label: 'Contact' },
];

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 });

// Load the page and wait for it to settle
await page.goto(BASE_URL, { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 2000));

// Scroll the full page once so all lazy sections are rendered
await page.evaluate(async () => {
  await new Promise(resolve => {
    let totalHeight = 0;
    const distance = 400;
    const timer = setInterval(() => {
      window.scrollBy(0, distance);
      totalHeight += distance;
      if (totalHeight >= document.body.scrollHeight) {
        clearInterval(timer);
        resolve();
      }
    }, 80);
  });
});
await new Promise(r => setTimeout(r, 1500)); // wait for all animations

for (const section of SECTIONS) {
  try {
    // Scroll section into view and wait for animations
    await page.evaluate((id) => {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: y, behavior: 'instant' });
      }
    }, section.id);

    await new Promise(r => setTimeout(r, 1000)); // let animations settle

    const filePath = join(OUT_DIR, section.file);
    await page.screenshot({ path: filePath, type: 'png' }); // captures current viewport
    console.log(`✅ ${section.label} → ${section.file}`);
  } catch (err) {
    console.error(`❌ ${section.label}: ${err.message}`);
  }
}

await browser.close();
console.log('\nAll screenshots saved to docs/screenshots/');
