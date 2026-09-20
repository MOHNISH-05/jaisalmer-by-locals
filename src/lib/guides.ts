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
  quickAnswer?: {
    question: string;
    answer: string;
    keyTakeaways: string[];
  };
  faqs?: {
    question: string;
    answer: string;
  }[];
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
    quickAnswer: {
      question: 'When is the best time to visit Jaisalmer?',
      answer: 'The best time to visit Jaisalmer is between October and March. During these winter months, daytime temperatures range pleasantly between 20°C and 28°C (68°F to 82°F) with clear sunny skies, making fort walking and desert safaris comfortable. Nights in the Thar Desert are cool (8°C to 12°C), ideal for fireside camps and stargazing.',
      keyTakeaways: [
        'Peak Season: October to March (pleasant weather, open desert camps)',
        'Winter Nights: December & January require warm layers (down to 8°C)',
        'Desert Festival: Usually held in February under the full moon',
        'Off-Season: April to September (summer heat exceeds 42°C, camps closed)',
      ],
    },
    faqs: [
      {
        question: 'Is Jaisalmer worth visiting in October?',
        answer: 'Yes. October marks the beginning of the tourist season. Desert camps reopen, afternoon temperatures soften, and visitor numbers are noticeably lower than peak December.',
      },
      {
        question: 'Can you visit Jaisalmer in summer (April to June)?',
        answer: 'Summer in the Thar Desert is harsh, with midday temperatures exceeding 42°C (108°F). Most desert camps close between April and September for seasonal maintenance.',
      },
      {
        question: 'When is the Jaisalmer Desert Festival held?',
        answer: 'The annual Desert Festival is held in February (Magh Poornima). It features Rajasthani folk music, Kalbelia dances, camel races, and cultural celebrations across the dunes.',
      },
    ],
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
    quickAnswer: {
      question: 'How many days are enough for Jaisalmer?',
      answer: '3 days and 2 nights is the recommended duration for Jaisalmer. This allows one full day for the living fort, merchant havelis, and Gadisar Lake; a second day for Kuldhara ghost village and an overnight Thar Desert camp; and a third morning for quiet village trails before departure. A 2-day trip is possible but rushed, while 4 days allows an unhurried, offbeat pace.',
      keyTakeaways: [
        '2 Days / 1 Night: Fast-paced highlights (Fort + 1 sunset dune visit)',
        '3 Days / 2 Nights: Ideal balance (1 night heritage hotel + 1 night desert camp)',
        '4 Days / 3 Nights: In-depth slow travel (includes Bada Bagh, Kuldhara & rural trails)',
        'Transit: Allow 5 hours by road or train from Jodhpur',
      ],
    },
    faqs: [
      {
        question: 'Is 2 days enough for Jaisalmer?',
        answer: 'Yes, 2 days and 1 night covers the core highlights: Jaisalmer Fort, Patwon Ki Haveli, and a sunset desert camp at Sam. However, the schedule will be packed.',
      },
      {
        question: 'Can you do a day trip to Jaisalmer from Jodhpur?',
        answer: 'A day trip is not recommended because the one-way drive takes approximately 4.5 to 5 hours (280 km). You would spend 10 hours driving with almost no time for the desert sunset.',
      },
      {
        question: 'What does a 4-day itinerary add?',
        answer: 'A fourth day gives you room to visit the abandoned ruins of Kuldhara, royal cenotaphs at Bada Bagh, Amar Sagar Lake, and offbeat desert trails without rushing.',
      },
    ],
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
    quickAnswer: {
      question: 'Is Jaisalmer Fort a living fort?',
      answer: 'Yes, Jaisalmer Fort (Sonar Qila) is one of the few fully living forts in the world. Built in 1156 AD atop Trikuta Hill, roughly 4,000 residents live within its sandstone ramparts. Entry to the public streets, havelis, and viewpoints is free and open 24/7. However, the Raja Mahal Fort Palace Museum and the cluster of 7 Jain temples charge separate ticket fees and have set visitor hours.',
      keyTakeaways: [
        'Living Fort: Over 4,000 residents live inside the ramparts',
        'Fort Gates: Free public entry 24/7 through four grand stone gates',
        'Jain Temples: Seven 12th–15th century temples open 8:00 AM to 12:00 PM',
        'Best Timing: Early morning (8:00 AM) or sunset from cannon points',
      ],
    },
    faqs: [
      {
        question: 'Is Jaisalmer Fort free to visit?',
        answer: 'Yes, walking through the gates, alleys, residential streets, and public viewpoints of Jaisalmer Fort is completely free. Only the Fort Palace Museum (Raja Mahal) and the Jain temples require admission tickets.',
      },
      {
        question: 'How much time is needed for Jaisalmer Fort?',
        answer: 'Allocate 2.5 to 3.5 hours to walk the four fortified gates, tour the Raja Mahal museum, visit the carved Jain temples, and take in the panoramic rooftop view across the Golden City.',
      },
      {
        question: 'Can cars or taxis drive inside Jaisalmer Fort?',
        answer: 'No. The narrow stone lanes cannot accommodate cars. Taxis drop passengers at Gopa Chowk near the first gate (Akhai Pol). From there, you explore on foot or hire an auto-rickshaw up to the main square.',
      },
    ],
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
    quickAnswer: {
      question: 'What happens on a Jaisalmer desert safari?',
      answer: 'A standard Thar Desert safari begins with an afternoon drive (40–45 km) from Jaisalmer to the dunes, followed by a sunset camel ride or 4x4 dune trail. Evening brings welcoming masala chai, Kalbelia folk dance, and Manganiyar desert music around a bonfire, concluded by a traditional Rajasthani dinner and an overnight stay in an ensuite Swiss tent.',
      keyTakeaways: [
        'Location: Sam Sand Dunes (classic) or Khuri / private mobile dunes (quiet)',
        'Timing: Afternoon departure (2:30–3:30 PM), returning next morning (9:00 AM)',
        'Tents: Modern Swiss tents include private ensuite bathrooms with running water',
        'Night Temps: Winter drops to 7°C–12°C; warm jackets and woollens are essential',
      ],
    },
    faqs: [
      {
        question: 'What is the difference between Sam Sand Dunes and Khuri?',
        answer: 'Sam Dunes is larger and more famous, featuring numerous luxury camps and lively cultural programs. Khuri Dunes is quieter, less commercialized, and better suited for travellers seeking peace and darker skies for stargazing.',
      },
      {
        question: 'Are desert tents safe and comfortable for families?',
        answer: 'Yes. Verified FolkMiles partner camps provide weather-proof Swiss canvas tents with locked wooden doors, solid beds, electric lighting, and clean attached western bathrooms with hot water.',
      },
      {
        question: 'Can you do a desert safari without staying overnight?',
        answer: 'Yes. Sunset desert day trips allow you to enjoy the camel trek, sunset on the dunes, and the evening cultural folk performance, followed by a private transfer back to your city hotel by 9:30 PM.',
      },
    ],
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
    quickAnswer: {
      question: 'What is special about Jaisalmer food?',
      answer: 'Jaisalmer food is defined by arid desert ingenuity. Because fresh vegetables were traditionally scarce, cooking relies on sun-dried berries (Ker), wild desert beans (Sangri), chickpea flour (Besan), buttermilk, and clarified butter (ghee). Iconic dishes include Dal Baati Churma, Ker Sangri, Gatte ki Sabzi, Bajra Roti with white butter, and Ghotua Ladoo.',
      keyTakeaways: [
        'Dal Baati Churma: The quintessential celebratory Rajasthani meal',
        'Ker Sangri: Tangy wild desert beans and capers cooked in mustard oil',
        'Ghotua Ladoo: Jaisalmer’s famous sweet from Dhanraj Ranmal Bhatia',
        'Dietary Note: Jaisalmer has exceptional vegetarian and Jain food options',
      ],
    },
    faqs: [
      {
        question: 'Is vegetarian food easy to find in Jaisalmer?',
        answer: 'Yes, Jaisalmer has a rich vegetarian food culture deeply rooted in Jain and Marwari traditions. Pure vegetarian restaurants and haveli dining halls are widespread.',
      },
      {
        question: 'Where can you buy authentic Ghotua Ladoo?',
        answer: 'Dhanraj Ranmal Bhatia, located near the fort entrance, has crafted authentic Ghotua Ladoo since the 19th century using roasted gram flour, mawa, and cardamom.',
      },
      {
        question: 'Is drinking water safe in Jaisalmer restaurants?',
        answer: 'Travellers should drink sealed bottled or reverse-osmosis (RO) filtered water. FolkMiles private vehicles provide complimentary filtered water bottles during tours.',
      },
    ],
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

