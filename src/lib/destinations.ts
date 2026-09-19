export type Destination = {
  id: string;
  slug: string;
  name: string;
  state: string;
  country: string;
  status: 'live' | 'coming-soon';
  tagline: string;
  shortDescription: string;
  longDescription: string;
  heroImage: string;
  gallery?: string[];
  experiences?: { title: string; copy: string; href: string }[];
  bestTime?: string;
  idealDuration?: string;
  facts?: { label: string; value: string }[];
  services?: string[];
  guides?: { title: string; href: string }[];
  seo?: { title: string; description: string };
  languages?: string[];
  availability?: string;
  featured: boolean;
  href: string;
};

export const destinations: Destination[] = [{
  id: 'jaisalmer',
  slug: 'jaisalmer',
  name: 'Jaisalmer',
  state: 'Rajasthan',
  country: 'India',
  status: 'live',
  featured: true,
  tagline: 'The Golden Soul of the Thar.',
  shortDescription: 'A living fort, golden streets and desert horizons.',
  longDescription: 'A living fort. Golden streets. Desert horizons. Stories carried through generations. Discover Jaisalmer through its architecture, kitchens, crafts, people and the landscape beyond the city.',
  heroImage: '/fort.jpg',
  href: '/destinations/jaisalmer',
  gallery: [
    '/images/jaisalmer/fort-palace.jpg',
    '/images/jaisalmer/living-lanes.jpg',
    '/images/jaisalmer/nathmal-haveli.jpg',
    '/images/jaisalmer/amar-sagar.jpg',
    '/images/jaisalmer/bada-bagh.jpg',
    '/images/jaisalmer/camp-dance.jpg',
    '/images/jaisalmer/camp-fire.jpg',
    '/images/jaisalmer/camp-twilight.jpg',
    '/images/jaisalmer/tent-interior-royal.jpg',
    '/images/jaisalmer/tent-interior-luxury.jpg',
  ],
  bestTime: 'October to March (cooler, pleasant days and crisp desert nights)',
  idealDuration: '2 to 4 days',
  languages: ['Hindi', 'Rajasthani / Marwari', 'English'],
  availability: 'Year-round; desert camps active October through March',
  services: [
    'Tailored private trip planning',
    'Local heritage & haveli walks',
    'Curated Thar desert safari & camp stays',
    'Private chauffeured airport & intercity transfers',
    'Local culinary & craft introductions',
  ],
}];

export const featuredDestination = destinations.find(destination => destination.featured)!;

export const indiaThemes = [
  { number: '01', title: 'Mountains', copy: 'High paths, valley cultures and a different rhythm of life.', image: '/images/india/himalayas.jpg' },
  { number: '02', title: 'Heritage', copy: 'Living cities, layered histories and architecture with a human story.', image: '/images/india/heritage.jpg' },
  { number: '03', title: 'Nature & Coast', copy: 'Forests, rivers, shores and landscapes that ask you to slow down.', image: '/images/india/kerala.jpg' },
  { number: '04', title: 'Culture & People', copy: 'Food, craft, music, ritual and the everyday details that make a place.', image: '/images/india/street.jpg' },
];

export const jaisalmerExperiences = [
  { title: 'Fort & Heritage', copy: 'Living lanes, carved havelis and old-city stories.', href: '/experiences/jaisalmer-fort-heritage', image: '/images/jaisalmer/nathmal-haveli.jpg' },
  { title: 'Thar Desert Safari', copy: 'Dunes, camel or jeep journeys, authentic camps and stars.', href: '/experiences/jaisalmer-desert-safari', image: '/images/jaisalmer/camp-twilight.jpg' },
  { title: 'Private Itineraries', copy: 'Flexible two, three and four-day starting points.', href: '/destinations/jaisalmer', image: '/images/jaisalmer/living-lanes.jpg' },
  { title: 'Local Planning & Transfers', copy: 'Transport, stays and experiences shaped around your pace.', href: '/contact', image: '/images/jaisalmer/amar-sagar.jpg' },
];

export const localLens = [
  { label: 'Ideal duration', value: '2–4 days, shaped around arrival and departure times.' },
  { label: 'Best time', value: 'Cooler months (Oct–Mar) suit longer outdoor days; check current weather for your dates.' },
  { label: 'Pack for', value: 'Sun, walking and temperature changes between day and evening.' },
  { label: 'Local etiquette', value: 'Ask before photographing people and respect homes and places of worship.' },
];

