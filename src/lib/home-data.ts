export interface BrandPrinciple {
  number: string;
  title: string;
  copy: string;
}

export const brandPrinciples: BrandPrinciple[] = [
  {
    number: '01',
    title: 'Local Understanding',
    copy: 'Travel shaped by people who understand the destination as home, not a product on a shelf.',
  },
  {
    number: '02',
    title: 'Thoughtful Journeys',
    copy: 'Trips built around the traveller, respecting your pace, interests, and curiosity.',
  },
  {
    number: '03',
    title: 'Real Experiences',
    copy: 'Culture, food, people, landscapes, and stories beyond landmark checklists.',
  },
  {
    number: '04',
    title: 'Human Support',
    copy: 'Real coordination and prompt human communication before and during travel.',
  },
];

export interface RajasthanTheme {
  title: string;
  tagline: string;
  copy: string;
  image: string;
  alt: string;
  provenance: 'illustrative' | 'authentic';
}

/* India & Rajasthan visual concepts from the Lookbook (illustrative brand imagery) */
export const rajasthanThemes: RajasthanTheme[] = [
  {
    title: 'Hawa Mahal & Amber Fort',
    tagline: 'Jaipur · Regal Architecture',
    copy: 'Terracotta facades and stone fortresses built for royal dynasties.',
    image: '/images/rajasthan/hawa-mahal.jpg',
    alt: 'Terracotta facade of Hawa Mahal in Jaipur, Rajasthan (illustrative concept visual)',
    provenance: 'illustrative',
  },
  {
    title: 'Udaipur Lakefronts',
    tagline: 'Udaipur · Lake City Elegance',
    copy: 'Serene waters and palace courtyards reflecting centuries of courtly life.',
    image: '/images/rajasthan/udaipur.jpg',
    alt: 'Lake Pichola and palace architecture in Udaipur, Rajasthan (illustrative concept visual)',
    provenance: 'illustrative',
  },
  {
    title: 'Jodhpur Blue City',
    tagline: 'Jodhpur · Beneath the Fort',
    copy: 'Indigo-washed homes tucked beneath the cliffs of Mehrangarh Fort.',
    image: '/images/rajasthan/jodhpur.jpg',
    alt: 'Blue houses of Jodhpur below the Mehrangarh Fort (illustrative concept visual)',
    provenance: 'illustrative',
  },
  {
    title: 'Folk Musicians & Song',
    tagline: 'Living Culture · Desert Rhythms',
    copy: 'Hereditary artists carrying ancient melodies on traditional string instruments.',
    image: '/images/rajasthan/musician.jpg',
    alt: 'Rajasthani folk musician with traditional string instrument (illustrative concept visual)',
    provenance: 'illustrative',
  },
  {
    title: 'Hand Block Printing & Craft',
    tagline: 'Centuries of Mastery',
    copy: 'Generations of artisans hand-carving teak blocks and printing natural dyes onto cloth.',
    image: '/images/rajasthan/textiles.jpg',
    alt: 'Artisan hand block printing intricate textile patterns (illustrative concept visual)',
    provenance: 'illustrative',
  },
  {
    title: 'Thar Desert Caravans',
    tagline: 'The Great Indian Desert',
    copy: 'Ancient trade routes and the quiet rhythm of desert travel.',
    image: '/images/rajasthan/caravan.jpg',
    alt: 'Camel caravan traversing sand dunes in the Thar Desert (illustrative concept visual)',
    provenance: 'illustrative',
  },
];

export interface JaisalmerEditorialChapter {
  id: string;
  number: string;
  title: string;
  subhead: string;
  copy: string;
  image: string;
  alt: string;
  provenance: 'authentic' | 'illustrative';
  layout: 'feature' | 'split' | 'panorama' | 'trio';
}

/* Genuine FolkMiles Jaisalmer photography with accurate place labelling */
export const jaisalmerChapters: JaisalmerEditorialChapter[] = [
  {
    id: 'fort-citadel',
    number: '01',
    title: 'The Golden Fort & Maharaja Mahal',
    subhead: 'Sonar Qila · A Living Citadel',
    copy: 'One of the very few inhabited forts in the world, where thousands of residents still live within golden sandstone ramparts built in 1156 AD. The Maharaja Mahal stands as the palace museum of the rulers of Jaisalmer.',
    image: '/images/jaisalmer/fort-palace.jpg',
    alt: 'Maharaja Mahal palace facade and carved sandstone balconies inside Jaisalmer Fort',
    provenance: 'authentic',
    layout: 'feature',
  },
  {
    id: 'living-lanes',
    number: '02',
    title: 'Living Fort Streets',
    subhead: 'Cobbled Lanes & Morning Rituals',
    copy: 'Narrow cobblestone alleys where cows wander past family doorsteps, chai stalls steam at dawn, and neighbours share daily greetings inside the historic walls.',
    image: '/images/jaisalmer/living-lanes.jpg',
    alt: 'Cobblestone living lane inside Jaisalmer Fort with golden morning sunlight',
    provenance: 'authentic',
    layout: 'split',
  },
  {
    id: 'havelis-nathmal',
    number: '03',
    title: 'Nathmal Ki Haveli & Stone Craft',
    subhead: 'Carved Lace in Sandstone',
    copy: 'Ornate 19th-century havelis carved by hereditary stone sculptors. Two architect brothers carved Nathmal ki Haveli simultaneously—one on the left, one on the right—creating an intricate, nearly symmetrical masterpiece.',
    image: '/images/jaisalmer/nathmal-haveli.jpg',
    alt: 'Nathmal Ki Haveli facade with carved stone elephants and sandstone jharokhas in Jaisalmer',
    provenance: 'authentic',
    layout: 'split',
  },
  {
    id: 'haveli-detail',
    number: '04',
    title: 'Intricate Sandstone Detail',
    subhead: 'The Hands Behind the Stone',
    copy: 'Geometric jali fretwork and sculpted balconies carved from local yellow sandstone, allowing desert breezes to cool the interior while preserving family privacy.',
    image: '/images/jaisalmer/haveli-detail.jpg',
    alt: 'Close-up of hand-carved golden sandstone architectural fretwork in Jaisalmer',
    provenance: 'authentic',
    layout: 'trio',
  },
  {
    id: 'amar-sagar',
    number: '05',
    title: 'Amar Sagar Lake & Pavilions',
    subhead: 'Historic Water Oasis',
    copy: 'A historic reservoir 5 km from Jaisalmer, framed by carved chhatri pavilions, stepped stone ghats, and an ornate 19th-century Jain temple pavilion.',
    image: '/images/jaisalmer/amar-sagar.jpg',
    alt: 'Amar Sagar lake waters reflecting carved stone chhatris and temple pavilion',
    provenance: 'authentic',
    layout: 'trio',
  },
  {
    id: 'bada-bagh',
    number: '06',
    title: 'Bada Bagh Royal Cenotaphs',
    subhead: 'Memorial Chhatris of the Maharawals',
    copy: 'Royal sandstone cenotaphs resting atop a quiet desert ridge, honouring past rulers with carved ceilings and pillars that catch the warm amber glow of late afternoon.',
    image: '/images/jaisalmer/bada-bagh.jpg',
    alt: 'Carved yellow sandstone chhatri royal cenotaph at Bada Bagh Jaisalmer',
    provenance: 'authentic',
    layout: 'trio',
  },
  {
    id: 'folk-dance',
    number: '07',
    title: 'Folk Rhythms & Kalbelia Dance',
    subhead: 'Celebrations by the Fire',
    copy: 'Traditional folk dancers in vibrant attire performing Chari pot-balancing and Kalbelia dances in desert camp courtyards as desert songs echo into the evening.',
    image: '/images/jaisalmer/real-dancer-camel.jpg',
    alt: 'Rajasthani folk dancer in traditional attire with decorated camel in front of desert camp Swiss tents',
    provenance: 'authentic',
    layout: 'split',
  },
  {
    id: 'fire-traditions',
    number: '08',
    title: 'Fireside Desert Performances',
    subhead: 'Ancient Martial & Folk Arts',
    copy: 'Flames swirling against the cool night air in time-honoured folk spectacles, accompanied by the rhythm of dholak and khartal.',
    image: '/images/jaisalmer/camp-fire.jpg',
    alt: 'Fire performer in a dramatic fireside exhibition at a Thar desert camp in Jaisalmer',
    provenance: 'authentic',
    layout: 'split',
  },
  {
    id: 'camel-trek',
    number: '09',
    title: 'Camel Journeys Across the Dunes',
    subhead: 'The Gentle Rhythm of the Thar',
    copy: 'Travelling across soft, wind-sculpted sand dunes at golden hour, taking in the vast silence and shifting light of the Great Indian Desert.',
    image: '/images/jaisalmer/real-camel-dunes.jpg',
    alt: 'Travellers on camels crossing sand dunes in the Thar Desert near Jaisalmer',
    provenance: 'authentic',
    layout: 'panorama',
  },
  {
    id: 'desert-camp',
    number: '10',
    title: 'Desert Camps & Swiss Tents',
    subhead: 'Comfort Under the Desert Sky',
    copy: 'Spacious Swiss tents with comfortable beds, ensuite bathrooms, and warm evening lighting, offering an authentic night outdoors away from city commotion.',
    image: '/images/jaisalmer/camp-twilight.jpg',
    alt: 'Illuminated desert camp tents under twilight sky in Jaisalmer',
    provenance: 'authentic',
    layout: 'split',
  },
  {
    id: 'thar-night',
    number: '11',
    title: 'Sunset & Stars Over the Thar',
    subhead: 'The Silent Midnight Sky',
    copy: 'Far from urban light pollution, the Thar Desert opens to an expanse of constellations and quiet desert breezes.',
    image: '/images/jaisalmer/thar-night.jpg',
    alt: 'Night sky with stars over the Thar Desert (illustrative concept visual)',
    provenance: 'illustrative',
    layout: 'split',
  },
];

export interface LocalLensItem {
  label: string;
  title: string;
  value: string;
}

/* Fact-checked local travel advice supported by project data */
export const localLensData: LocalLensItem[] = [
  {
    label: 'Best Time',
    title: 'When to visit',
    value: 'Cooler months (October through March) suit longer outdoor days. Early mornings and late afternoons are the most comfortable for walking.',
  },
  {
    label: 'Ideal Duration',
    title: 'How long to stay',
    value: '2 to 4 days provides a balanced rhythm between fort lanes, historic havelis, and an unhurried night in the Thar Desert.',
  },
  {
    label: 'Weather',
    title: 'Desert climate',
    value: 'Sunny, dry days with noticeable temperature drops between afternoon and evening. Light woollens or a jacket are recommended for evenings.',
  },
  {
    label: 'Packing',
    title: 'What to bring',
    value: 'Breathable cottons for daytime, warm layers for night, sturdy walking shoes for fort cobblestones, sun protection, and sunglasses.',
  },
  {
    label: 'Food',
    title: 'Local flavours',
    value: 'Authentic Rajasthani meals including dal baati churma, ker sangri, and bajra rotis with white butter. Mild preparations can be arranged while planning.',
  },
  {
    label: 'Cultural Etiquette',
    title: 'Respecting the community',
    value: 'Always ask permission before photographing residents and craftspeople. Remove shoes when entering temples, shrines, and sacred spaces.',
  },
  {
    label: 'Local Advice',
    title: 'Pacing your visit',
    value: 'Walk the living fort early in the morning before daytime visitors arrive; choose sunset dune locations away from crowded commercial clusters.',
  },
  {
    label: 'Getting Here',
    title: 'Reaching Jaisalmer',
    value: 'Jaisalmer connects by direct trains and seasonal flights. Pre-arranged private station and airport pickups can be included in your plan.',
  },
];

export const howItWorksSteps = [
  {
    step: '01',
    title: 'Tell us your travel vision',
    copy: 'Share your intended travel dates, group size, pace preference, and what excites you—whether historic architecture, desert solitude, or local craft.',
  },
  {
    step: '02',
    title: 'FolkMiles shapes the journey',
    copy: 'We build a tailored starting itinerary with hand-picked stays, verified desert camps, trusted local drivers, and authentic cultural hosts.',
  },
  {
    step: '03',
    title: 'Travel with local support',
    copy: 'Set off with a clear written plan, transparent pricing, and responsive coordination from real people on the ground before and during your trip.',
  },
];

export const whyFolkMilesItems = [
  {
    title: 'Local knowledge',
    copy: 'Travel shaped by people who understand the rhythm of each neighbourhood and landscape as home.',
  },
  {
    title: 'Personalized travel',
    copy: 'Trips built around your schedule and interests, never an inflexible, crowded bus package.',
  },
  {
    title: 'Complete coordination',
    copy: 'Stays, private chauffeured transfers, licensed local guides, and desert stays planned as one cohesive flow.',
  },
  {
    title: 'Human communication',
    copy: 'Real travel designers on phone and WhatsApp to answer questions, adjust plans, and support you on the road.',
  },
  {
    title: 'Deeper experiences',
    copy: 'Living craftspeople, family kitchens, and undisturbed desert ridges beyond the crowded commercial spots.',
  },
  {
    title: 'Built destination by destination',
    copy: 'We only offer destinations where we have real operational roots and verified partners, starting in Jaisalmer.',
  },
];

export const travellerTypesList = [
  { type: 'Couples', note: 'Romantic heritage stays, private sunset dunes, and intimate dining.' },
  { type: 'Families', note: 'Comfortable private transport, spacious family desert tents, and child-friendly pacing.' },
  { type: 'Solo Travellers', note: 'Reliable coordination, local walking companions, and curated small stays.' },
  { type: 'Friends & Groups', note: 'Private campfires, bespoke group safaris, and flexible multi-day exploration.' },
  { type: 'Senior Travellers', note: 'Gentle walking routes, accessible vehicles, and unhurried daily schedules.' },
  { type: 'International Travellers', note: 'Clear English communication, cultural context, and verified private transport.' },
  { type: 'Private Tours', note: 'Exclusively dedicated vehicles, private guides, and customized daily timing.' },
];

export const internationalFeatures = [
  { title: 'Local itinerary planning', copy: 'Thoughtful pacing adapted to long-distance travel and jet lag.' },
  { title: 'Destination guidance', copy: 'Reliable recommendations on dining, seasonal conditions, and customs.' },
  { title: 'Cultural context', copy: 'Historical background that helps decode centuries of Rajasthani traditions.' },
  { title: 'Private transport', copy: 'Well-maintained, air-conditioned vehicles with experienced, licensed local drivers.' },
  { title: 'Local coordination', copy: 'A direct human contact on WhatsApp ready to assist from arrival to departure.' },
  { title: 'English communication', copy: 'Fluent, courteous correspondence and English-speaking guides upon request.' },
  { title: 'Tailored journeys', copy: 'Flexible itineraries that adjust to your personal dietary and comfort needs.' },
];

export const b2bServices = [
  { title: 'Destination Planning', copy: 'Bespoke client itineraries designed for high satisfaction.' },
  { title: 'Local Operations', copy: 'Ground execution with real-time on-trip monitoring.' },
  { title: 'Private Transport', copy: 'Reliable fleet ranging from sedans to luxury vehicles.' },
  { title: 'Authentic Experiences', copy: 'Direct relationships with desert camps, havelis, and guides.' },
  { title: 'Itinerary Support', copy: 'White-label documentation and practical guest briefings.' },
  { title: 'Ground Handling', copy: 'Seamless station/airport arrivals, luggage handling, and assistance.' },
];

/* Verified published guides that have corresponding real routes in the site */
export const travelGuidesList = [
  {
    title: 'The Golden Introduction · 2 Days / 1 Night',
    category: 'Itinerary',
    duration: '2 Days',
    copy: 'A compact introduction balancing the living fort, old-city havelis, and an evening desert experience.',
    href: '/destinations/jaisalmer/2-days-1-night',
    image: '/images/jaisalmer/fort-palace.jpg',
  },
  {
    title: 'The Balanced Escape · 3 Days / 2 Nights',
    category: 'Recommended Itinerary',
    duration: '3 Days',
    copy: 'Our most popular balance: unhurried fort discovery, historic havelis, and an overnight desert camp under the stars.',
    href: '/destinations/jaisalmer/3-days-2-nights',
    image: '/images/jaisalmer/camp-twilight.jpg',
  },
  {
    title: 'The Slow Discovery · 4 Days / 3 Nights',
    category: 'Itinerary',
    duration: '4 Days',
    copy: 'A deeper, contemplative journey with time for artisan villages, lake sunsets, and remote desert landscapes.',
    href: '/destinations/jaisalmer/4-days-3-nights',
    image: '/images/jaisalmer/living-lanes.jpg',
  },
  {
    title: 'Inside the Golden City · Fort & Heritage Guide',
    category: 'Travel Guide',
    duration: 'Walking Guide',
    copy: 'How to experience Jaisalmer Fort as a living community, explore carved havelis, and walk historic lanes respectfully.',
    href: '/experiences/jaisalmer-fort-heritage',
    image: '/images/jaisalmer/nathmal-haveli.jpg',
  },
  {
    title: 'Into the Thar Desert · Desert Safari & Camp Guide',
    category: 'Travel Guide',
    duration: 'Desert Guide',
    copy: 'What to expect from dunes, camp comfort standards, sunset rides, and starry desert nights.',
    href: '/experiences/jaisalmer-desert-safari',
    image: '/images/jaisalmer/camp-sunset.jpg',
  },
];

/* Curated social moments from real FolkMiles travels */
export const socialGallery = [
  {
    caption: 'Cobbled living lanes of Sonar Qila in the morning light',
    image: '/images/jaisalmer/living-lanes.jpg',
    location: 'Jaisalmer Fort',
  },
  {
    caption: 'Ornate stone jharokhas of Nathmal Ki Haveli',
    image: '/images/jaisalmer/nathmal-haveli.jpg',
    location: 'Jaisalmer Old City',
  },
  {
    caption: 'Traditional folk dance in front of desert camp Swiss tents',
    image: '/images/jaisalmer/real-dancer-camel.jpg',
    location: 'Thar Desert Camp',
  },
  {
    caption: 'Sunset hues spreading across the Thar dunes',
    image: '/images/jaisalmer/camp-sunset.jpg',
    location: 'Thar Desert',
  },
  {
    caption: 'Quiet waters and chhatris at Amar Sagar',
    image: '/images/jaisalmer/amar-sagar.jpg',
    location: 'Amar Sagar Lake',
  },
  {
    caption: 'The vast starlit sky over the desert camp',
    image: '/images/jaisalmer/thar-night.jpg',
    location: 'Thar Desert (Illustrative)',
  },
];
