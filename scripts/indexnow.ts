const INDEXNOW_KEY = 'a7f93c2e1b4d68e5902fa4813bc57d29';
const HOST = 'folkmiles.com';
const BASE_URL = `https://${HOST}`;

const canonicalRoutes = [
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

async function submitIndexNow() {
  const urlList = canonicalRoutes.map((r) => `${BASE_URL}${r}`);

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
    urlList,
  };

  console.log(`Submitting ${urlList.length} URLs to IndexNow API for ${HOST}...`);

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (res.ok || res.status === 200 || res.status === 202) {
      console.log(`IndexNow submission successful! Status: ${res.status} ${res.statusText}`);
    } else {
      const text = await res.text();
      console.warn(`IndexNow returned status ${res.status}: ${text}`);
    }
  } catch (err) {
    console.error('Failed to submit to IndexNow:', err);
  }
}

submitIndexNow();
