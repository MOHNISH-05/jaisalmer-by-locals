export interface ExperienceTimelineStep {
  step: number;
  title: string;
  description: string;
}

export interface ExperienceAtAGlance {
  label: string;
  value: string;
}

export interface ExperienceItem {
  id: string;
  slug: string;
  destination: string;
  title: string;
  cardTitle?: string;
  eyebrow: string;
  shortDescription: string;
  overview: string;
  heroImage: string;
  cardImage: string;
  heroImageAlt: string;
  duration: string;
  bestTime: string;
  whoItSuits: string[];
  whyDifferent: string[];
  whatGuestsExperience: string[];
  localContext: string;
  importantNotes: string[];
  whatToBring: string[];
  customization: string[];
  faq: { question: string; answer: string }[];
  relatedPackages: string[];
  seoTitle: string;
  seoDescription: string;
  price?: number | null;
  currency?: string;
  priceType?: 'on-request' | 'starting-from' | 'fixed';
  priceUnit?: string;
  inclusions?: string[];
  exclusions?: string[];
  atAGlance?: ExperienceAtAGlance[];
  timeline?: ExperienceTimelineStep[];
  quickAnswer?: {
    question: string;
    answer: string;
  };
}

export const experiencesList: ExperienceItem[] = [
  {
    id: 'exp-desert-safari',
    slug: 'jaisalmer-desert-safari',
    destination: 'Jaisalmer',
    title: 'Thar Desert Sunset & Cultural Experience',
    cardTitle: 'Thar Sunset & Cultural Experience',
    eyebrow: 'THAR DESERT · JAISALMER',
    shortDescription: 'A complete Thar evening with Jaisalmer pickup, desert transfer, camel ride, sunset, live Rajasthani culture, campfire, dinner and return transfer.',
    overview: 'A complete evening journey into the Thar Desert shaped around the natural light and authentic rhythms of Rajasthan. Departing from Jaisalmer, enjoy comfortable desert transfers, a gentle camel ride across rolling sand dunes, and the golden hour sunset. Return to camp for live Kalbelia dance, Manganiyar desert melodies, an evening campfire program, and a freshly prepared Rajasthani dinner before returning to Jaisalmer.',
    heroImage: '/desert.jpg',
    cardImage: '/images/jaisalmer/camp-twilight.jpg',
    heroImageAlt: 'Rolling sand dunes in the Thar Desert near Jaisalmer at sunset',
    duration: 'Evening Experience',
    bestTime: 'October to March (crisp afternoons and cool starry nights)',
    whoItSuits: ['Couples seeking quiet sunsets', 'Families wanting complete evening planning', 'Travellers eager for genuine folk music and desert culture'],
    price: 2100,
    currency: 'INR',
    priceType: 'starting-from',
    priceUnit: 'person',
    inclusions: [
      'Jaisalmer pickup',
      'Transfer from Jaisalmer to the desert',
      'Camel ride',
      'Thar Desert sunset experience',
      'Rajasthani cultural program',
      'Campfire / evening fire program (subject to weather, safety and local operating conditions)',
      'Dinner',
      'Return transfer to Jaisalmer',
    ],
    exclusions: [
      'Jeep safari (available as an optional add-on)',
      'Overnight desert camp stay (available as an upgrade)',
      'Hotel accommodation in Jaisalmer',
      'Breakfast or daytime meals',
      'Alcoholic beverages',
      'Border tour to Longewala / Tanot',
      'Private licensed monument guide',
      'Monument entrance tickets',
      'Airport or railway station transfer (available upon request)',
      'Personal expenses, tips, and personal travel insurance',
    ],
    atAGlance: [
      { label: 'Location', value: 'Thar Desert, Jaisalmer' },
      { label: 'Experience', value: 'Sunset + Culture + Dinner' },
      { label: 'Starting Price', value: '₹2,100 / person' },
      { label: 'Duration', value: 'Evening Experience' },
      { label: 'Pickup', value: 'Jaisalmer' },
      { label: 'Return', value: 'Jaisalmer' },
      { label: 'Camel Ride', value: 'Included' },
      { label: 'Dinner', value: 'Included' },
      { label: 'Cultural Program', value: 'Included' },
      { label: 'Customization', value: 'Available' },
    ],
    timeline: [
      { step: 1, title: 'Pickup in Jaisalmer', description: 'Convenient private pickup from your hotel or preferred central location in Jaisalmer.' },
      { step: 2, title: 'Transfer toward the Thar Desert', description: 'Comfortable road journey across the changing arid landscape toward the dunes.' },
      { step: 3, title: 'Camel ride', description: 'Gentle guided camel trek onto the sand dunes led by experienced local handlers.' },
      { step: 4, title: 'Sunset experience', description: 'Time to pause and take in the golden hour light across wide desert horizons.' },
      { step: 5, title: 'Rajasthani cultural program', description: 'Authentic folk music and traditional Kalbelia dance performances.' },
      { step: 6, title: 'Campfire / evening fire program', description: 'Campfire / evening fire program, subject to weather, safety and local operating conditions.' },
      { step: 7, title: 'Dinner', description: 'Traditional freshly prepared Rajasthani dinner buffet.' },
      { step: 8, title: 'Return transfer to Jaisalmer', description: 'Comfortable private transfer bringing you back to your hotel or stay in Jaisalmer.' },
    ],
    quickAnswer: {
      question: 'What is the FolkMiles Thar Desert Sunset & Cultural Experience?',
      answer: 'The FolkMiles Thar Desert Sunset & Cultural Experience is an evening journey from Jaisalmer that includes desert transfers, a camel ride, sunset in the Thar, Rajasthani cultural performances, a campfire program, dinner and return transfer. Prices start from ₹2,100 per person.',
    },
    whyDifferent: [
      'Complete, transparent evening experience with all core transfers, activities, and dinner included',
      'Quieter dune sections selected away from congested commercial vehicular strips',
      'Emphasis on unhurried golden hour contemplation rather than loud, disruptive convoys',
      'Genuine hereditary folk musicians and dancers performing traditional art forms',
      'Comfortable desert camp facilities with clean amenities and welcoming hospitality',
    ],
    whatGuestsExperience: [
      'Scenic afternoon drive from Jaisalmer city into the Thar Desert landscape',
      'Gentle camel trek along the crest of wind-sculpted sand dunes',
      'Watching the golden hour light deepen into amber and violet across the Thar horizon',
      'Welcoming masala chai and local refreshments at camp upon return from the dunes',
      'Live evening cultural performance featuring Kalbelia dance and Manganiyar songs',
      'Campfire / evening fire program, subject to weather, safety and local operating conditions',
      'Traditional Rajasthani buffet dinner featuring freshly prepared hot dishes',
      'Comfortable return transfer to your hotel or stay in Jaisalmer',
    ],
    localContext: 'The Thar is not a lifeless expanse; it is a living desert ecosystem inhabited by resilient communities, hardy desert vegetation, and hereditary artistic clans whose songs carry the oral history of Rajasthan.',
    importantNotes: [
      'Temperatures drop noticeably after sunset between November and February; warm layers are essential.',
      'Camel activities are carried out with vetted local handlers who treat animals responsibly.',
      'For travellers with back or neck sensitivities, a comfortable walking route or vehicle drop can replace camel rides.',
      'Campfire / evening fire program is subject to weather, safety and local operating conditions.',
    ],
    whatToBring: [
      'Warm fleece jacket, shawl, or windbreaker for evening',
      'Sunglasses, sun hat, and high-SPF sunscreen for late afternoon',
      'Sturdy closed-toe shoes for walking on sand',
      'Camera or smartphone with spare battery (sand and cold affect charge)',
    ],
    customization: [
      'Upgrade to an overnight luxury Swiss tent stay instead of an evening return',
      'Add an optional 4x4 jeep dune safari excursion',
      'Arrange a private dining setup on secluded dunes away from the main camp courtyard',
      'Tailor dietary preferences for dinner (vegetarian, vegan, or mild spice preparations)',
    ],
    faq: [
      {
        question: 'What is included in the ₹2,100 starting price?',
        answer: 'The ₹2,100 per person starting price includes Jaisalmer pickup, transfer to the desert, camel ride, Thar sunset experience, live Rajasthani cultural program, campfire program, dinner, and return transfer to Jaisalmer.',
      },
      {
        question: 'Does FolkMiles provide pickup from Jaisalmer?',
        answer: 'Yes. Convenient pickup from your hotel or central location in Jaisalmer is included in the starting price.',
      },
      {
        question: 'Is the camel ride included?',
        answer: 'Yes. A guided camel ride onto the dunes is included with local handlers. For guests who prefer not to ride, walking onto the dunes or vehicle transfer is also arranged.',
      },
      {
        question: 'Is dinner included?',
        answer: 'Yes. A freshly prepared traditional Rajasthani buffet dinner is included following the cultural program.',
      },
      {
        question: 'Is this an overnight desert stay?',
        answer: 'No, this starting experience is an evening journey returning to Jaisalmer after dinner. If you wish to stay overnight in a luxury Swiss tent, an overnight upgrade is readily available upon request.',
      },
      {
        question: 'Can I add a jeep safari?',
        answer: 'Yes. Optional 4x4 jeep dune excursions can be added to your booking on request.',
      },
      {
        question: 'Can the experience be customized?',
        answer: 'Yes. Pacing, dietary preferences, private seating, and special timing can all be customized.',
      },
      {
        question: 'Is the campfire guaranteed?',
        answer: 'The campfire and evening fire program is subject to weather, wind conditions, safety, and local operating regulations.',
      },
    ],
    relatedPackages: ['3-days-2-nights', '2-days-1-night', '4-days-3-nights'],
    seoTitle: 'Thar Desert Sunset & Cultural Experience, Jaisalmer | FolkMiles',
    seoDescription: 'Experience the Thar near Jaisalmer with camel ride, sunset, Rajasthani cultural program, dinner and return transfers. From ₹2,100/person.',
  },
  {
    id: 'exp-fort-heritage',
    slug: 'jaisalmer-fort-heritage',
    destination: 'Jaisalmer',
    title: 'Sonar Qila & Old City Heritage Walk',
    eyebrow: 'Look a little closer',
    shortDescription: 'A living fort, carved stone havelis, 12th-century Jain temples, and the everyday stories of old-city lanes.',
    overview: 'Jaisalmer Fort is not an empty monument frozen in amber; it is one of the world’s very few living citadels, home to thousands of residents whose ancestors have walked these sandstone cobblestones for nine centuries. This guided walk reveals the layers of royal history, climate-responsive stone architecture, and vibrant community life.',
    heroImage: '/heritage.jpg',
    cardImage: '/images/jaisalmer/nathmal-haveli.jpg',
    heroImageAlt: 'Intricate sandstone jali carvings and balcony on Patwon Ki Haveli in Jaisalmer',
    duration: '3 to 4 hours (morning or late afternoon)',
    bestTime: 'Early morning (8:00 AM) or late afternoon (3:30 PM) for the softest light and gentlest temperatures',
    whoItSuits: ['History and architecture enthusiasts', 'Photographers', 'Curious cultural travellers'],
    whyDifferent: [
      'Led by licensed local storytellers who live inside or near the fort walls',
      'Respectful exploration that treats residential courtyards as homes, not spectacles',
      'Focus on the functional genius of yellow sandstone jali carving and airflow design',
      'Paced around your curiosity and walking stamina with room to pause for chai',
    ],
    whatGuestsExperience: [
      'Entering through the four grand fort gates (Akhai Pol, Ganesh Pol, Suraj Pol, Hawa Pol)',
      'Walking cobblestone residential lanes where children play and cows wander past family doorsteps',
      'Admiring the delicate marble and stone carvings of the 12th to 15th-century Jain temple cluster',
      'Visiting the Maharaja Mahal (King’s Palace) and learning about the royal Bhatti Rajput dynasty',
      'Exploring Patwon Ki Haveli, Nathmal Ki Haveli, and Salim Singh Ki Haveli',
      'Taking in sweeping 360-degree views of the Golden City from historic fort bastions',
    ],
    localContext: 'Built in 1156 AD by Rawal Jaisal atop Trikuta Hill, the fort controlled lucrative Silk Route trade between India, Persia, and Arabia. Wealthy merchants built elaborate multi-storey havelis with intricate stone fretwork to display their affluence.',
    importantNotes: [
      'Cobblestone lanes can be uneven; sturdy flat walking shoes are recommended.',
      'Jain temples require removal of shoes and leather items (belts, wallets) before entry.',
      'Modest attire covering shoulders and knees is required for entering sacred spaces.',
    ],
    whatToBring: [
      'Comfortable walking shoes with good traction',
      'Socks for walking comfortably on stone temple courtyards in sunny weather',
      'Sun hat, sunglasses, and personal water bottle',
      'Camera with a wide-angle lens for narrow haveli lanes',
    ],
    customization: [
      'Add an early morning photo-walk before tourist shops open',
      'Include a visit to a local stone sculptor’s workshop in the old city',
      'Adjust route length for travellers requiring fewer stairs or gentle walking paths',
    ],
    faq: [
      {
        question: 'How much walking is involved in the fort and haveli tour?',
        answer: 'The walk covers approximately 2 to 3 kilometres over 3 to 4 hours at an easy, conversational pace with frequent stops in shady courtyards and viewpoints.',
      },
      {
        question: 'Is the fort wheelchair or stroller accessible?',
        answer: 'Due to historic cobblestones, inclines, and stone staircases, wheelchair access inside the fort is limited. However, we can arrange electric rickshaws to reach main public squares.',
      },
      {
        question: 'Are entrance tickets included?',
        answer: 'Ticket costs for the palace museum and havelis can either be itemized in your written quotation or purchased directly at the counters based on your preference.',
      },
    ],
    relatedPackages: ['2-days-1-night', '3-days-2-nights', '4-days-3-nights'],
    seoTitle: 'Jaisalmer Fort & Old City Heritage Walk | FolkMiles',
    seoDescription: 'Explore Sonar Qila and historic havelis with a licensed local guide. Uncover living fort lanes, Jain temples, and sandstone architecture.',
  },
  {
    id: 'exp-desert-walking',
    slug: 'desert-walking-jaisalmer',
    destination: 'Jaisalmer',
    title: 'Thar Desert Walking & Dune Trail',
    eyebrow: 'Quiet pace',
    shortDescription: 'A slow on-foot exploration of desert terrain, dune ecology, ancient vegetation, and wide open horizons.',
    overview: 'Step away from motors and camel saddles to experience the Thar Desert on foot. Accompanied by a knowledgeable local desert guide, this morning or sunset walk takes you along the ridges of undisturbed sand dunes, reading wind patterns, identifying desert flora like the Kair and Khejri, and discovering animal tracks in the morning sand.',
    heroImage: '/images/jaisalmer/real-camel-dunes.jpg',
    cardImage: '/images/jaisalmer/real-camel-dunes.jpg',
    heroImageAlt: 'Wind-rippled sand dune ridges in the quiet Thar Desert at dawn',
    duration: '2 to 3 hours (early morning or golden hour before sunset)',
    bestTime: 'October to March; dawn offers crisp air and pristine untrodden sand patterns',
    whoItSuits: ['Slow travellers', 'Nature enthusiasts', 'Walkers and photographers seeking quietude'],
    whyDifferent: [
      'A completely motor-free, engine-free experience dedicated to silence and landscape',
      'Conducted in secluded desert sectors far from commercial dune-bashing tracks',
      'Focus on understanding desert ecology, micro-habitats, and traditional water knowledge',
      'Safe, guided pacing suitable for regular walkers of all ages',
    ],
    whatGuestsExperience: [
      'Walking barefoot or in shoes along the sharp crests of wind-sculpted barchan dunes',
      'Discovering tracks left by desert beetles, lizards, and small nocturnal mammals',
      'Learning how the sacred Khejri tree provides nutrition, shade, and soil stability in arid zones',
      'Observing the shifting amber and rose hues across vast, silent desert expanses',
      'Sipping freshly brewed masala tea served with traditional snacks on a quiet dune ridge',
    ],
    localContext: 'For desert inhabitants, sand is not an obstacle; it is a canvas that tells the story of the previous night. Local shepherds and guides navigate by the shape of the dunes, sun angles, and ancient landmarks.',
    importantNotes: [
      'Walking on soft sand engages leg muscles more than flat pavement; pacing is kept relaxed with ample pauses.',
      'We practice strict Leave No Trace principles: all footprints wash away with the evening wind, and no litter is left behind.',
    ],
    whatToBring: [
      'Comfortable walking shoes (or go barefoot on clean dunes)',
      'Sun hat and UV protection',
      'Light jacket for early morning chill',
      'Refillable water bottle',
    ],
    customization: [
      'Combine with a morning desert breakfast arranged on the dunes',
      'Pair with an afternoon visit to nearby Desert National Park',
    ],
    faq: [
      {
        question: 'How difficult is walking on the sand dunes?',
        answer: 'The walk is rated easy to moderate. We walk along the firm crests of the dunes where sand is packed by wind, taking regular breaks to discuss the landscape.',
      },
      {
        question: 'Is this suitable for children?',
        answer: 'Yes. Children usually love running and exploring the soft sand dunes. We keep the trail flexible around your family’s comfort.',
      },
      {
        question: 'What time does the walk start?',
        answer: 'Morning walks typically start around 6:30 AM to catch the sunrise. Evening walks commence around 4:30 PM to conclude with sunset.',
      },
    ],
    relatedPackages: ['3-days-2-nights', '4-days-3-nights'],
    seoTitle: 'Thar Desert Walking & Dune Trail Jaisalmer | FolkMiles',
    seoDescription: 'Experience the Thar Desert on foot with a local guide. Quiet morning or sunset dune walks, arid ecology, and desert silence away from crowds.',
  },
  {
    id: 'exp-stargazing',
    slug: 'stargazing-jaisalmer',
    destination: 'Jaisalmer',
    title: 'Thar Desert Night Sky & Stargazing',
    eyebrow: 'Under dark skies',
    shortDescription: 'Quiet desert surroundings, vast dark skies, constellations, and the stillness of the Thar night.',
    overview: 'Away from the light pollution of major cities, the Thar Desert offers an extraordinary window into the night sky. In a quiet desert setting, relax under the celestial expanse as your host shares traditional desert folklore, navigational star lore, and constellations visible across the Rajasthani sky.',
    heroImage: '/images/jaisalmer/thar-night.jpg',
    cardImage: '/images/jaisalmer/thar-night.jpg',
    heroImageAlt: 'Constellations and star-filled night sky over the quiet Thar Desert horizon',
    duration: '1.5 to 2 hours (after dinner around 8:30 PM)',
    bestTime: 'October to March on clear nights, especially during new moon phases',
    whoItSuits: ['Couples', 'Families with curious children', 'Night sky and astronomy enthusiasts'],
    whyDifferent: [
      'Quiet, dark-sky setting away from camp floodlights and loud music speakers',
      'Comfortable low-seating arrangements with warm blankets and hot beverages',
      'Blends astronomical constellation identification with local desert navigational lore',
      'Realistic positioning: we appreciate natural sky conditions rather than making exaggerated scientific claims',
    ],
    whatGuestsExperience: [
      'Settling into comfortable desert floor cushions or camp chairs under an open sky',
      'Letting your eyes adapt to the darkness to reveal thousands of visible stars',
      'Identifying major constellations such as Orion, Ursa Major, Cassiopeia, and seasonal planets',
      'Hearing how desert caravans historically navigated long trade journeys by the North Star',
      'Enjoying warm ginger tea or spiced milk under the silent desert midnight',
    ],
    localContext: 'In the arid desert, before modern compasses and GPS, night travellers read the stars as their map. Local oral traditions associate particular stars with seasonal agricultural shifts and desert rainfall predictions.',
    importantNotes: [
      'Sky clarity and visibility depend entirely on real-time weather, haze, and the lunar cycle. Visibility of faint celestial objects varies by night.',
      'Desert winter nights (December–January) can drop below 8°C (46°F); heavy woollens are recommended.',
    ],
    whatToBring: [
      'Warm thermal jacket, beanie cap, and gloves during winter months',
      'A red-light flashlight or phone filter to preserve night-adjusted vision',
      'Binoculars if you have them (great for observing star clusters and the lunar surface)',
    ],
    customization: [
      'Plan your trip dates around the new moon for the darkest skies',
      'Arrange an intimate private setup away from the main camp courtyard',
    ],
    faq: [
      {
        question: 'Can we see the Milky Way every night?',
        answer: 'No. Stargazing is subject to atmospheric conditions, dust, clouds, and the moon phase. During a bright full moon, the desert is beautifully illuminated but fewer stars are visible. The darkest, clearest nights occur around the new moon.',
      },
      {
        question: 'Do you provide telescopes?',
        answer: 'Our standard experience is naked-eye and binocular stargazing focusing on wide-field constellations and desert lore. Specialist telescope sessions can be arranged on advance request depending on availability.',
      },
      {
        question: 'Can non-camp guests join for stargazing?',
        answer: 'Yes. We can organize a private evening desert drive from your city hotel for stargazing and return you to town afterwards.',
      },
    ],
    relatedPackages: ['3-days-2-nights', '4-days-3-nights'],
    seoTitle: 'Thar Desert Stargazing & Night Sky Jaisalmer | FolkMiles',
    seoDescription: 'Experience dark-sky stargazing in the Thar Desert near Jaisalmer. Constellations, quiet desert night atmosphere, and local navigational lore.',
  },
  {
    id: 'exp-village-experience',
    slug: 'jaisalmer-village-experience',
    destination: 'Jaisalmer',
    title: 'Rural Rajasthan & Desert Village Life',
    eyebrow: 'Life beyond the city',
    shortDescription: 'A respectful introduction to rural communities, earthen architecture, traditional crafts, and desert hospitality.',
    overview: 'Gain authentic insight into rural desert life through respectful, invited visits to traditional communities near Jaisalmer. Learn how families build climate-resilient mud and thatch homes (jhopas), conserve precious rainwater in tankas, weave durable wool textiles, and maintain enduring cultural traditions in one of the world’s harshest terrains.',
    heroImage: '/images/jaisalmer/real-dancer-camel.jpg',
    cardImage: '/images/jaisalmer/bada-bagh.jpg',
    heroImageAlt: 'Traditional Rajasthani rural desert home with earthen architecture and decorative motifs',
    duration: '3 to 4 hours (half-day excursion)',
    bestTime: 'October to March (morning 9:00 AM or afternoon 2:30 PM)',
    whoItSuits: ['Culture-minded travellers', 'Families wishing to share real perspectives with children', 'Craft enthusiasts'],
    whyDifferent: [
      'Strictly respectful, non-intrusive engagement: we visit as invited guests, never turning people into tourist props',
      'Direct contribution: host families and local artisans receive fair, direct compensation for their time and hospitality',
      'Focus on tangible traditions: water harvesting, architecture, pastoral farming, and artisanal craft',
      'No staging or commercialized human zoos—real everyday desert life',
    ],
    whatGuestsExperience: [
      'Walking through an authentic rural settlement with traditional circular jhopa huts',
      'Learning about traditional lime and clay plastering techniques that naturally insulate against extreme heat',
      'Observing traditional camel-hair and wool rug weaving on handlooms where available',
      'Understanding the brilliant engineering of village tankas (underground rainwater cisterns)',
      'Sharing a freshly prepared glass of buttermilk (chaas) or chai in a family courtyard',
      'Engaging in thoughtful conversation translated by your FolkMiles guide',
    ],
    localContext: 'Thar desert communities have perfected sustainable arid living for over a millennium. Every drop of monsoon rainwater is captured, while local crops like bajra (pearl millet) and cluster beans (guar) form the nutritional foundation of the region.',
    importantNotes: [
      'Always request permission before taking photographs of residents, especially elders and women.',
      'Remove footwear before stepping onto interior raised plinths or into family living quarters.',
      'We discourage distributing candy, money, or trinkets to village children, as this fosters dependency.',
    ],
    whatToBring: [
      'Modest, culturally sensitive clothing (covered shoulders and knees)',
      'Slip-on shoes for easy removal at homes',
      'Sun protection and refillable water bottle',
    ],
    customization: [
      'Combine with a traditional home-cooked village meal prepared over a wood chulha',
      'Include an extended visit to an artisan weaving or pottery hamlet',
    ],
    faq: [
      {
        question: 'How do you ensure this experience is ethical and respectful?',
        answer: 'We maintain long-term personal relationships with host families and village elders. Visits are kept small and limited in frequency, and hosts are compensated fairly as professional cultural educators.',
      },
      {
        question: 'Can we interact and ask questions?',
        answer: 'Yes! That is the core of "Explore by Locals". Your guide facilitates two-way conversations about daily life, farming, seasonal migrations, and family traditions.',
      },
      {
        question: 'How far are the villages from Jaisalmer city?',
        answer: 'Most partner villages are located between 20 and 45 minutes by private car from the city centre.',
      },
    ],
    relatedPackages: ['3-days-2-nights', '4-days-3-nights'],
    seoTitle: 'Rural Desert Village Experience Jaisalmer | FolkMiles',
    seoDescription: 'Respectful, authentic rural Rajasthan village visits. Discover traditional earthen architecture, water harvesting, and desert community hospitality.',
  },
  {
    id: 'exp-food-experience',
    slug: 'rajasthani-food-experience',
    destination: 'Jaisalmer',
    title: 'Traditional Rajasthani Culinary Experience',
    eyebrow: 'Desert flavours',
    shortDescription: 'Discover the rich flavours of desert cooking: Dal Baati Churma, Ker Sangri, Bajra Roti, and historic spice traditions.',
    overview: 'Thar cuisine is a masterclass in culinary ingenuity shaped by an arid environment. Developed around sun-dried desert berries, wild beans, buttermilk, and drought-hardy grains, authentic Rajasthani food is deeply satisfying and fragrant with ghee and whole spices. Join FolkMiles for an authentic dining or cooking introduction that goes far beyond generic hotel buffets.',
    heroImage: '/images/india/food.jpg',
    cardImage: '/images/jaisalmer/living-lanes.jpg',
    heroImageAlt: 'Traditional Rajasthani thali featuring Dal Baati Churma, Ker Sangri, and gatte ki sabzi',
    duration: '2 to 3 hours (lunch or dinner)',
    bestTime: 'Year-round; winter is especially celebratory for hearty bajra rotis with white butter',
    whoItSuits: ['Food lovers', 'Culinary travellers', 'Anyone curious about regional Indian cooking'],
    whyDifferent: [
      'Focus on genuine desert heritage recipes, not restaurant-adapted pan-Indian cream curries',
      'Dishes prepared using traditional stone-ground spices and slow-cooked earthen or brass pots',
      'Explanation of why desert cuisine relies on wild forage like Ker, Sangri, and Kumati',
      'Flexibility for dietary preferences: vegetarian-friendly with mild spice adjustments available',
    ],
    whatGuestsExperience: [
      'Savouring the classic trio: Dal Baati Churma—baked wheat balls crushed with spiced lentils and sweet jaggery churma',
      'Tasting Ker Sangri, the iconic desert delicacy prepared from dried caper berries and desert bean pods sautéed in mustard oil',
      'Enjoying hot Bajra Roti (pearl millet flatbread) served with fresh churned white butter (safed makhan) and jaggery',
      'Sampling Gatte ki Sabzi—gram flour dumplings gently simmered in a spiced yogurt gravy',
      'Concluding with local sweets such as Ghotua Ladoo, Jaisalmer’s famous condensed-milk delicacy',
    ],
    localContext: 'Because fresh water and green leafy vegetables were scarce in the Thar, desert cooks learned to create magnificent meals using preserved legumes, dried wild berries, milk, curd, and generous clarified butter (ghee).',
    importantNotes: [
      'Traditional Rajasthani cooking is predominantly vegetarian and naturally wholesome.',
      'Please inform us of any spice tolerances, nut allergies, or dietary restrictions in advance so your meal is calibrated to your comfort.',
    ],
    whatToBring: [
      'A hearty appetite',
      'Curiosity to try new textures and regional flavour profiles',
    ],
    customization: [
      'Choose between a curated heritage thali meal or a hands-on home cooking session with a local family',
      'Add a morning spice market walk in the old city bazaars to see raw ingredients',
    ],
    faq: [
      {
        question: 'Is the food very spicy?',
        answer: 'While traditional Rajasthani food uses fragrant spices like cloves, coriander, and mathania chillies, authentic home cooking is deeply flavourful rather than overwhelmingly hot. We adjust spice levels to your personal preference.',
      },
      {
        question: 'Are vegan or gluten-free options available?',
        answer: 'Yes. Bajra (pearl millet) is naturally gluten-free. Dishes like Ker Sangri and plain dal can easily be prepared without dairy upon advance notice.',
      },
      {
        question: 'Where does the meal take place?',
        answer: 'Depending on your package selection, meals are hosted at verified boutique heritage haveli dining rooms, private family courtyard kitchens, or around a desert campfire.',
      },
    ],
    relatedPackages: ['2-days-1-night', '3-days-2-nights', '4-days-3-nights'],
    seoTitle: 'Authentic Rajasthani Food & Dining Experience Jaisalmer | FolkMiles',
    seoDescription: 'Taste real desert cuisine with FolkMiles. Dal Baati Churma, Ker Sangri, hot Bajra roti, and traditional cooking traditions in Jaisalmer.',
  },
];

export function getExperienceBySlug(slug: string): ExperienceItem | undefined {
  return experiencesList.find((exp) => exp.slug === slug);
}
