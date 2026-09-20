import {paths} from '../src/lib/content';
import {existsSync,readFileSync} from 'node:fs';
const required = [
  '/',
  '/destinations/jaisalmer',
  '/jaisalmer-packages',
  '/destinations/jaisalmer/2-days-1-night',
  '/destinations/jaisalmer/3-days-2-nights',
  '/destinations/jaisalmer/4-days-3-nights',
  '/experiences',
  '/experiences/jaisalmer-desert-safari',
  '/experiences/jaisalmer-fort-heritage',
  '/experiences/desert-walking-jaisalmer',
  '/experiences/stargazing-jaisalmer',
  '/experiences/jaisalmer-village-experience',
  '/experiences/rajasthani-food-experience',
  '/travel-guides',
  '/travel-guides/best-time-to-visit-jaisalmer',
  '/travel-guides/how-many-days-in-jaisalmer',
  '/travel-guides/jaisalmer-fort-guide',
  '/travel-guides/jaisalmer-desert-safari-guide',
  '/travel-guides/jaisalmer-food-guide',
  '/about',
  '/b2b-travel-partners',
  '/local-partners',
  '/contact',
  '/privacy-policy',
  '/terms-and-conditions',
  '/cancellation-policy',
];
for (const path of required) {
  if (!paths.includes(path)) throw new Error(`Missing declared route: ${path}`);
}
for (const asset of ['public/logo.svg', 'public/fort.jpg', 'public/desert.jpg', 'public/heritage.jpg']) {
  if (!existsSync(asset)) throw new Error(`Missing asset: ${asset}`);
}
const source = readFileSync('src/lib/content.ts', 'utf8');
if (source.includes('Char Dham')) throw new Error('A non-bookable destination appeared in public content.');
console.log(`Checked ${required.length} public routes and 4 required assets.`);
