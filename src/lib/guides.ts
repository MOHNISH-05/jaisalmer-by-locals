export interface GuideSection {
  title: string;
  body: string;
  tips?: string[];
}

export interface TravelGuideItem {
  id: string;
  slug: string;
  title: string;
  eyebrow: string;
  category: 'Planning' | 'Heritage' | 'Desert' | 'Food' | 'Culture';
  duration: string;
  readTime: string;
  publishDate: string;
  author: string;
  authorRole: string;
  summary: string;
  heroImage: string;
  heroImageAlt: string;
  sections: GuideSection[];
  relatedPackages: string[];
  relatedExperiences: string[];
  seoTitle: string;
  seoDescription: string;
}

export const travelGuidesData: TravelGuideItem[] = [
  {
    id: 'guide-best-time',
    slug: 'best-time-to-visit-jaisalmer',
    title: 'Best Time to Visit Jaisalmer: Weather, Seasons & Month-by-Month Guide',
    eyebrow: 'Trip Planning Guide',
    category: 'Planning',
    duration: 'Season Guide',
    readTime: '6 min read',
    publishDate: '2026-09-15',
    author: 'FolkMiles Local Editorial',
    authorRole: 'Jaisalmer Travel Specialists',
    summary: 'A complete seasonal breakdown of Jaisalmer’s desert climate: when to visit for pleasant fort walking, clear desert nights, and what to expect during transition months.',
    heroImage: '/images/jaisalmer/fort-palace.jpg',
    heroImageAlt: 'Golden morning sunlight on Jaisalmer Fort palace balconies',
    sections: [
      {
        title: 'The Golden Window: October to March (Peak Season)',
        body: 'The ideal window to explore Jaisalmer is between October and March. During these months, the intense desert heat recedes, leaving clear blue skies, crisp desert breezes, and comfortable daytime temperatures ranging between 20°C and 28°C (68°F to 82°F). Walking through the cobblestone alleys of the living fort and exploring havelis is delightful during these months.',
        tips: [
          'November through February is peak season; book boutique havelis and verified desert camps 4–6 weeks ahead.',
          'Pack warm layers (fleece, shawls, light thermals) as night temperatures in the Thar Desert often dip to 8°C–12°C.',
          'Midday sun remains bright; sunglasses and sun hats are recommended even in January.',
        ],
      },
      {
        title: 'The Desert Winter (December to January)',
        body: 'Winter brings Jaisalmer’s most celebrated atmosphere. Days are pleasantly crisp, and evenings around the camp hearth are atmospheric with traditional folk music and dancing. Nights under the desert sky are extraordinary for stargazing, as dry desert air provides exceptional atmospheric transparency.',
        tips: [
          'Carry a warm windproof jacket for sunset camel rides and early morning desert trails.',
          'Desert camps provide heavy quilts, but packing warm sleeping socks ensures total comfort.',
        ],
      },
      {
        title: 'Shoulder Months: October & March',
        body: 'October marks the reopening of luxury desert camps after summer. Days can be warm during the afternoon, but mornings and evenings are pleasant. March brings warming breezes, fewer crowds, and lower accommodation rates before the summer heat arrives.',
        tips: [
          'Schedule outdoor walking between 7:30 AM and 10:30 AM, and 4:00 PM to 6:30 PM.',
          'Great months for travellers who prefer quieter monuments and unhurried photo opportunities.',
        ],
      },
      {
        title: 'Summer & Monsoon: April to September (Off-Season)',
        body: 'From April to June, temperatures routinely exceed 42°C (108°F), making midday outdoor sightseeing challenging. Most desert camps close between April and September for safety and seasonal maintenance. The monsoon (July to September) brings sparse rainfall to the Thar, occasionally turning the arid plains pale green.',
        tips: [
          'If visiting during summer, explore the fort strictly at dawn and relax in air-conditioned heritage stays during the afternoon.',
          'Ensure your vehicle has robust air-conditioning and carry electrolyte hydration powders.',
        ],
      },
    ],
    relatedPackages: ['3-days-2-nights', '2-days-1-night'],
    relatedExperiences: ['jaisalmer-desert-safari', 'stargazing-jaisalmer'],
    seoTitle: 'Best Time to Visit Jaisalmer (Weather & Season Guide) | FolkMiles',
    seoDescription: 'When is the best time to visit Jaisalmer? Month-by-month breakdown of weather, temperatures, desert camp seasons, and packing tips by FolkMiles.',
  },
  {
    id: 'guide-how-many-days',
    slug: 'how-many-days-in-jaisalmer',
    title: 'How Many Days in Jaisalmer? 2, 3, or 4-Day Itinerary Recommendations',
    eyebrow: 'Itinerary Planning',
    category: 'Planning',
    duration: 'Itinerary Guide',
    readTime: '7 min read',
    publishDate: '2026-09-16',
    author: 'FolkMiles Local Editorial',
    authorRole: 'Jaisalmer Travel Specialists',
    summary: 'Should you spend 2, 3, or 4 days in Jaisalmer? Compare realistic paces, travel times, and recommended daily flows based on your arrival and departure schedule.',
    heroImage: '/images/jaisalmer/camp-twilight.jpg',
    heroImageAlt: 'Illuminated desert camp under twilight sky in the Thar Desert near Jaisalmer',
    sections: [
      {
        title: 'Why Trip Duration Matters in Jaisalmer',
        body: 'Because Jaisalmer sits on the western edge of Rajasthan, reaching the city takes time—whether by overnight train, flight, or road transfer from Jodhpur. Deciding how many days to spend depends on whether you want a swift introduction, a balanced city-and-desert retreat, or a deep slow-travel exploration.',
      },
      {
        title: 'Option 1: 2 Days / 1 Night (The Golden Introduction)',
        body: 'Best for travellers on a tight Rajasthan circuit with limited vacation days. Day 1 focuses on Sonar Qila (Jaisalmer Fort) and an evening sunset excursion out to the Thar sand dunes. Day 2 covers the carved havelis (Patwon & Nathmal) and a peaceful hour along the ghats of Gadisar Lake before departure.',
        tips: [
          'Requires morning arrival on Day 1 and late afternoon/evening departure on Day 2.',
          'Consider sleeping in the city both nights or choosing a camp with prompt transfer services.',
        ],
      },
      {
        title: 'Option 2: 3 Days / 2 Nights (Our Recommended Balance)',
        body: 'Our most popular and highly recommended itinerary. It allows 1 night in a restored boutique heritage haveli in the city and 1 night in a luxury Swiss desert tent under the stars. You explore the fort, havelis, and Jain temples without rushing, enjoy an unhurried sunset camel safari, and wake up to a quiet desert sunrise.',
        tips: [
          'Allows you to experience both the living urban heritage and the desert solitude.',
          'Ideal for couples, families, and first-time visitors.',
        ],
      },
      {
        title: 'Option 3: 4 Days / 3 Nights (The Slow Discovery)',
        body: 'For travellers who prefer room to breathe. In addition to the major landmarks, 4 days allows you to visit Bada Bagh royal cenotaphs, Amar Sagar, the abandoned ghost village of Kuldhara, and Desert National Park. You also have time for authentic culinary masterclasses and respectful rural artisan visits.',
        tips: [
          'Perfect for photographers, writers, and travellers who dislike rushed travel checklists.',
          'Can easily connect with an onward private road trip to Jodhpur or Bikaner.',
        ],
      },
    ],
    relatedPackages: ['2-days-1-night', '3-days-2-nights', '4-days-3-nights'],
    relatedExperiences: ['jaisalmer-fort-heritage', 'jaisalmer-desert-safari'],
    seoTitle: 'How Many Days to Spend in Jaisalmer? (2, 3, or 4 Days) | FolkMiles',
    seoDescription: 'Plan your Jaisalmer trip duration. Compare 2-day, 3-day, and 4-day itineraries with practical daily flows, transit advice, and sightseeing tips.',
  },
  {
    id: 'guide-fort-heritage',
    slug: 'jaisalmer-fort-guide',
    title: 'Inside the Living Fort: Sonar Qila & Havelis Heritage Guide',
    eyebrow: 'Architectural Guide',
    category: 'Heritage',
    duration: 'Heritage Guide',
    readTime: '8 min read',
    publishDate: '2026-09-17',
    author: 'FolkMiles Local Editorial',
    authorRole: 'Jaisalmer Travel Specialists',
    summary: 'How to explore Jaisalmer Fort respectfully as a living neighbourhood, navigate 12th-century Jain temples, and understand the climate-responsive sandstone carving of Patwon Ki Haveli.',
    heroImage: '/heritage.jpg',
    heroImageAlt: 'Ornate yellow sandstone jali lattice and balconies on Patwon Ki Haveli in Jaisalmer',
    sections: [
      {
        title: 'A Fort That is Still a Home',
        body: 'Built in 1156 AD by Rawal Jaisal, Sonar Qila (The Golden Fort) rises majestically from the Thar Desert atop Trikuta Hill. Unlike most Indian forts that function purely as ticketed archaeological monuments, Jaisalmer Fort remains home to approximately 4,000 residents. Hereditary families, priests, shopkeepers, and musicians still live within the defensive ramparts, creating a vibrant living community.',
        tips: [
          'Enter early in the morning (around 8:00 AM) to experience the fort waking up before commercial shops open.',
          'Be mindful of residential privacy: ask before photographing doorsteps, family altars, or craftspeople.',
        ],
      },
      {
        title: 'The Seven Jain Temples of Sonar Qila',
        body: 'Tucked within the fort’s interior lanes is an extraordinary cluster of seven interconnected Jain temples dating from the 12th to 15th centuries. Carved from yellow sandstone and white marble, the temples feature thousands of finely sculpted celestial dancers, tirthankaras, and geometric mandalas.',
        tips: [
          'Temples are generally open to visitors between 8:00 AM and 12:00 noon.',
          'All footwear and leather items (belts, wallets, watchbands) must be deposited at the temple entrance.',
        ],
      },
      {
        title: 'The Merchant Havelis: Sandstone Lace',
        body: 'During the 18th and 19th centuries, wealthy Marwari and Jain merchants commissioned magnificent mansions called havelis. The most famous is Patwon Ki Haveli, a five-storey complex featuring over 60 intricately carved sandstone balconies (jharokhas). Nathmal Ki Haveli and Salim Singh Ki Haveli showcase equally remarkable stone sculpture, engineered to catch desert breezes while shielding family living spaces from direct sun.',
        tips: [
          'Visit Patwon Ki Haveli in the afternoon when golden sunlight streams through the western jali screens.',
          'Notice how the jali screens create a natural venturi effect, cooling the interior by several degrees.',
        ],
      },
    ],
    relatedPackages: ['2-days-1-night', '3-days-2-nights'],
    relatedExperiences: ['jaisalmer-fort-heritage'],
    seoTitle: 'Jaisalmer Fort (Sonar Qila) & Havelis Guide | FolkMiles',
    seoDescription: 'Complete guide to Jaisalmer Fort and merchant havelis. Living fort history, Jain temples, stone architecture, photography tips, and respectful etiquette.',
  },
  {
    id: 'guide-desert-safari',
    slug: 'jaisalmer-desert-safari-guide',
    title: 'Thar Desert Safari & Camp Guide: What to Expect, Dunes & Etiquette',
    eyebrow: 'Desert Guide',
    category: 'Desert',
    duration: 'Desert Guide',
    readTime: '7 min read',
    publishDate: '2026-09-18',
    author: 'FolkMiles Local Editorial',
    authorRole: 'Jaisalmer Travel Specialists',
    summary: 'Everything you need to know about visiting the Thar Desert: choosing between Sam and quieter dunes, camp comfort standards, camel welfare, and night sky stargazing.',
    heroImage: '/desert.jpg',
    heroImageAlt: 'Rolling sand dunes in the Thar Desert near Jaisalmer at sunset',
    sections: [
      {
        title: 'Understanding the Thar Desert Landscape',
        body: 'The Thar Desert, also known as the Great Indian Desert, covers over 200,000 square kilometres across Rajasthan and into neighbouring regions. Near Jaisalmer, the desert alternates between gravel plains, arid scrub forests, and magnificent wind-rippled sand dunes. Understanding where to go makes the difference between a peaceful desert retreat and a crowded tourist spectacle.',
      },
      {
        title: 'Sam Dunes vs. Quieter Dune Ridges',
        body: 'Sam Sand Dunes (42 km west of Jaisalmer) is the most famous dune cluster. While spectacular in scale, Sam can become busy during peak winter weekends with vehicular traffic and loud music. FolkMiles arranges dune excursions and camp stays in quieter, vetted sectors away from commercial clusters, preserving the silence and majesty of the desert sunset.',
        tips: [
          'If you seek peace, request a secluded dune setup away from the main camp roads.',
          'Sunset light shifts rapidly; plan to arrive at the dunes by 4:45 PM in winter.',
        ],
      },
      {
        title: 'What to Expect at a Luxury Desert Camp',
        body: 'Modern luxury Swiss tents have evolved significantly. Our verified partners provide weather-proof canvas tents pitched on solid platforms, featuring comfortable queen or twin beds, fresh cotton linens, electric lighting, mobile charging ports, and private attached bathrooms with running hot water.',
        tips: [
          'Confirm that your camp has attached bathrooms with running water before booking.',
          'Camp evenings typically feature a warm bonfire, Kalbelia folk dance, Manganiyar songs, and a traditional buffet dinner.',
        ],
      },
      {
        title: 'Responsible Desert Travel & Camel Welfare',
        body: 'We believe travel in the Thar must respect both the delicate desert ecosystem and working animals. We partner exclusively with local handlers who treat their camels with care and do not overload or mistreat them.',
        tips: [
          'Carry all plastic wrappers and water bottles back to your camp or vehicle; never leave waste in the dunes.',
          'Do not pressure handlers for unnatural poses or aggressive riding.',
        ],
      },
    ],
    relatedPackages: ['3-days-2-nights', '4-days-3-nights'],
    relatedExperiences: ['jaisalmer-desert-safari', 'desert-walking-jaisalmer', 'stargazing-jaisalmer'],
    seoTitle: 'Jaisalmer Desert Safari & Camp Guide | FolkMiles',
    seoDescription: 'Complete guide to Thar desert safaris in Jaisalmer. Compare Sam dunes vs quiet dunes, luxury camp facilities, camel treks, stargazing, and packing tips.',
  },
  {
    id: 'guide-food',
    slug: 'jaisalmer-food-guide',
    title: 'Jaisalmer Food Guide: Authentic Desert Cuisine, Dishes & Dining Tips',
    eyebrow: 'Culinary Guide',
    category: 'Food',
    duration: 'Culinary Guide',
    readTime: '6 min read',
    publishDate: '2026-09-19',
    author: 'FolkMiles Local Editorial',
    authorRole: 'Jaisalmer Travel Specialists',
    summary: 'Discover the ingenious flavours of Thar desert cooking: Dal Baati Churma, Ker Sangri, hot Bajra rotis, and where to find genuine Rajasthani recipes.',
    heroImage: '/images/india/food.jpg',
    heroImageAlt: 'Traditional Rajasthani thali featuring Dal Baati Churma, Ker Sangri, and gatte ki sabzi',
    sections: [
      {
        title: 'The Philosophy of Desert Cuisine',
        body: 'Traditional Rajasthani desert food was shaped by necessity: in a land of scarce water and intense sunlight, cooks mastered the art of preserving food using wild dried berries, beans, buttermilk, and clarified butter (ghee). The result is a robust, intensely flavourful cuisine that sustains body and spirit.',
      },
      {
        title: 'Must-Try Iconic Dishes',
        body: 'When in Jaisalmer, seek out these authentic regional dishes rather than generic pan-Indian cream curries:',
        tips: [
          'Dal Baati Churma: Hard-baked whole wheat dumplings dipped in fragrant ghee, served with spicy mixed lentil dal and sweet crushed wheat churma.',
          'Ker Sangri: Tangy dried caper berries (ker) and wild desert beans (sangri) sautéed in mustard oil with whole red chillies and dry mango powder.',
          'Bajra Roti with Safed Makhan: Hand-patted pearl millet flatbread served steaming hot with fresh churned white butter and organic jaggery.',
          'Gatte ki Sabzi: Steamed gram flour dumplings simmered in a spiced, velvety yogurt gravy.',
          'Ghotua Ladoo: Jaisalmer’s royal sweet made from condensed milk and roasted gram flour, scented with cardamom and saffron.',
        ],
      },
      {
        title: 'Dining Etiquette & Practical Advice',
        body: 'Traditional meals are best enjoyed slowly. Many heritage havelis serve set thalis where you can taste a dozen regional preparations in one sitting. Inform your host if you prefer mild spice, as authentic home-style cooking uses warming spices like coriander, cumin, and dried ginger rather than burning heat.',
        tips: [
          'Drink only bottled or reverse-osmosis purified water.',
          'Avoid raw unpeeled salads from roadside stalls; stick to freshly cooked hot dishes.',
        ],
      },
    ],
    relatedPackages: ['2-days-1-night', '3-days-2-nights'],
    relatedExperiences: ['rajasthani-food-experience'],
    seoTitle: 'Jaisalmer Food Guide: Authentic Rajasthani Dishes | FolkMiles',
    seoDescription: 'Taste the best of Jaisalmer cuisine. Dal Baati Churma, Ker Sangri, Bajra roti, Ghotua Ladoo, and where to find authentic desert recipes.',
  },
];

export function getGuideBySlug(slug: string): TravelGuideItem | undefined {
  return travelGuidesData.find((g) => g.slug === slug);
}
