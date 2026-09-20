export interface ItineraryDay {
  day: number;
  title: string;
  morning: string;
  afternoon: string;
  evening?: string;
  attractions: string[];
  context: string;
  practicalNotes: string;
  alternatives?: string;
}

export interface PackageFaq {
  question: string;
  answer: string;
}

export interface AccommodationOption {
  tier: string;
  label: string;
  description: string;
  recommendation?: string;
}

export interface PackageItem {
  id: string;
  slug: string;
  destination: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  duration: string;
  daysCount: number;
  nights: number;
  summary: string;
  description: string;
  heroImage: string;
  cardImage: string;
  heroImageAlt: string;
  highlights: string[];
  bestFor: string[];
  travelStyle: string[];
  categories: ('first-time' | 'family' | 'couple' | 'culture' | 'desert' | 'slow-travel')[];
  quickSummary: {
    duration: string;
    destination: string;
    travelStyle: string;
    bestFor: string;
    customization: string;
    transport: string;
    guide: string;
    desertStatus: string;
    accommodationStatus: string;
  };
  itinerary: ItineraryDay[];
  possibleInclusions: string[];
  possibleExclusions: string[];
  accommodationOptions: AccommodationOption[];
  transportOptions: string[];
  customizationOptions: string[];
  faq: PackageFaq[];
  /* PRICING ARCHITECTURE: Set price to null for 'Price on Request'. Real numbers will be supplied later. */
  price: number | null;
  currency: string;
  priceType: 'on-request' | 'starting-from' | 'fixed';
  featured: boolean;
  seoTitle: string;
  seoDescription: string;
}

export const jaisalmerPackages: PackageItem[] = [
  {
    id: 'jaisalmer-2d1n',
    slug: '2-days-1-night',
    destination: 'Jaisalmer',
    title: '2 Days / 1 Night in Jaisalmer',
    shortTitle: 'The Golden Introduction',
    subtitle: 'A compact introduction to the living fort, old-city havelis, and desert sunset.',
    duration: '2 Days / 1 Night',
    daysCount: 2,
    nights: 1,
    summary: 'Designed for travellers with limited time who want an authentic glimpse of the Golden City and the Thar Desert without rushing.',
    description: 'A thoughtful two-day starting itinerary covering Jaisalmer Fort, ornate sandstone havelis, and an evening in the Thar Desert. Private, customizable, and shaped around your arrival and departure times.',
    heroImage: '/images/jaisalmer/fort-palace.jpg',
    cardImage: '/images/jaisalmer/fort-palace.jpg',
    heroImageAlt: 'Maharaja Mahal palace facade inside Jaisalmer Fort with golden morning sunlight',
    highlights: [
      'Living Fort exploration with local residential lanes',
      'Ornate sandstone carvings at Patwon & Nathmal Ki Haveli',
      'Serene sunset at Gadisar Lake with historic chhatris',
      'Sunset dune excursion in the Thar Desert',
      'Flexible private chauffeured transport throughout',
    ],
    bestFor: ['First-time visitors', 'Weekend travellers', 'Short stopover journeys'],
    travelStyle: ['Cultural', 'Heritage', 'Desert Sunset'],
    categories: ['first-time', 'culture', 'desert', 'couple'],
    quickSummary: {
      duration: '2 Days / 1 Night',
      destination: 'Jaisalmer, Rajasthan',
      travelStyle: 'Private, tailored heritage & desert journey',
      bestFor: 'First-time visitors with limited travel days',
      customization: '100% customizable (hotel tier, pace, inclusions)',
      transport: 'Dedicated private air-conditioned vehicle with local driver',
      guide: 'Licensed local heritage guide available on request',
      desertStatus: 'Sunset dune visit included; camp stay optional',
      accommodationStatus: 'Selected to your preference (city heritage stay or desert camp)',
    },
    itinerary: [
      {
        day: 1,
        title: 'Arrival, Living Fort & Thar Desert Sunset',
        morning: 'Arrive in Jaisalmer. Pre-arranged private station or airport pickup with transfer to your heritage stay. Settle in and enjoy a brief orientation with fresh local refreshments.',
        afternoon: 'Explore Sonar Qila (Jaisalmer Fort)—one of the world’s few inhabited forts. Walk cobblestone alleys past family doorsteps, Jain temples, and the Maharaja Mahal palace museum.',
        evening: 'Drive into the Thar Desert as late afternoon light warms the sands. Enjoy a sunset camel trek or quiet walk along the dune ridges. Choose between returning to town for an unhurried dinner or staying overnight at a verified desert camp.',
        attractions: ['Jaisalmer Fort (Sonar Qila)', 'Jain Temple Complex', 'Maharaja Mahal', 'Thar Desert Dunes'],
        context: 'Unlike museum-style forts, Jaisalmer Fort is a living community of four thousand residents. We explore respectful lanes away from heavy commercial congestion.',
        practicalNotes: 'Wear comfortable walking shoes for cobbled fort inclines. Carry a light jacket or wrap for the evening desert temperature drop.',
        alternatives: 'If arriving later in the afternoon, the fort walk can be moved to Day 2 morning, reserving Day 1 for Gadisar Lake and an evening city stroll.',
      },
      {
        day: 2,
        title: 'Havelis, Gadisar Lake & Departure',
        morning: 'Visit the architectural wonders of the old city: Patwon Ki Haveli, known for its filigreed jali screens, and Nathmal Ki Haveli, with its hand-carved sandstone elephants.',
        afternoon: 'Spend a calm hour along the stone ghats and carved chhatris of Gadisar Lake. Savour an authentic Rajasthani lunch featuring dal baati churma or ker sangri at a recommended local eatery.',
        evening: 'Final browsing through local markets for yellow sandstone craft or handmade textiles before your pre-arranged private drop-off at the airport or railway station.',
        attractions: ['Patwon Ki Haveli', 'Nathmal Ki Haveli', 'Gadisar Lake', 'Local Artisan Markets'],
        context: 'The 19th-century havelis were commissioned by wealthy merchants along the Silk Route trade corridor, demonstrating generations of family stone carving mastery.',
        practicalNotes: 'Timing will be customized around your train or flight schedule so you depart without stress.',
        alternatives: 'Travellers with evening departures may add a visit to the royal cenotaphs at Bada Bagh or Amar Sagar.',
      },
    ],
    possibleInclusions: [
      'Private air-conditioned vehicle for all sightseeing and station/airport transfers',
      'Experienced, courteous local driver familiar with old-city and desert routes',
      'Hand-picked accommodation (heritage hotel in the city or luxury desert camp)',
      'Thar Desert sunset excursion with camel ride or dune walk',
      'Dedicated FolkMiles trip coordinator reachable on WhatsApp and phone throughout your journey',
      'All vehicle parking fees, tolls, and driver allowances',
    ],
    possibleExclusions: [
      'Monument entrance tickets and camera fees (payable directly at counters)',
      'Meals not specified in the written quotation',
      'Flights or train tickets to and from Jaisalmer',
      'Optional jeep safari or adventure activities',
      'Personal expenses, tips, and travel insurance',
    ],
    accommodationOptions: [
      {
        tier: 'Comfort Heritage',
        label: 'Comfort Heritage Haveli',
        description: 'Charming, clean sandstone stays inside or near the old city with traditional Rajasthani character and modern ensuite amenities.',
        recommendation: 'Ideal for value-conscious travellers who want authentic local charm.',
      },
      {
        tier: 'Boutique Heritage',
        label: 'Boutique Heritage Property',
        description: 'Restored merchant havelis and boutique heritage hotels offering refined courtyard dining, rooftop fort views, and attentive service.',
        recommendation: 'Our most popular choice for couples and culture lovers.',
      },
      {
        tier: 'Desert Camp Night',
        label: 'Luxury Swiss Desert Camp',
        description: 'Spacious Swiss tents pitched in quieter dune regions featuring four-poster beds, private attached bathrooms, evening folk music, and fireside dining.',
        recommendation: 'Recommended if you want to experience the quiet night sky of the Thar.',
      },
    ],
    transportOptions: [
      'Private air-conditioned sedan (Swift Dzire / Toyota Etios) for 1–2 travellers',
      'Spacious SUV (Toyota Innova / Crysta) for families and groups of 3–5 travellers',
      'Luxury Tempo Traveller for small groups of 6–10 travellers',
    ],
    customizationOptions: [
      'Adjust duration to add extra time in Jaisalmer or connect onward to Jodhpur',
      'Switch between a city-only stay or an overnight desert camp',
      'Add a dedicated licensed language guide for fort and haveli tours',
      'Include a traditional home-cooked meal experience with a local family',
      'Modify departure timings to match night trains or afternoon flights',
    ],
    faq: [
      {
        question: 'Can I customize this 2-day itinerary?',
        answer: 'Yes, completely. This is a private starting itinerary. We adjust pacing, sightseeing, hotel categories, and activities around your exact arrival and departure times.',
      },
      {
        question: 'Is the desert camp stay compulsory?',
        answer: 'No. You can choose to spend the night in the desert at a luxury camp, or enjoy a sunset excursion in the dunes and return to sleep in your city hotel.',
      },
      {
        question: 'Is this a private trip or a group tour?',
        answer: 'Every FolkMiles journey is strictly private. You have your own dedicated vehicle, driver, and personalized schedule—never a crowded tour bus.',
      },
      {
        question: 'How do I receive the price and quotation?',
        answer: 'Because costs depend on your travel dates, group size, and hotel preference, we provide a clear, itemized written quotation with no hidden fees after you submit your enquiry.',
      },
      {
        question: 'Can station or airport pickup be included?',
        answer: 'Yes. Door-to-door private transfers from Jaisalmer Airport (JSA) or Jaisalmer Railway Station (JSM) are included in the quotation.',
      },
    ],
    price: null,
    currency: 'INR',
    priceType: 'on-request',
    featured: true,
    seoTitle: '2 Days / 1 Night Jaisalmer Tour Package | FolkMiles',
    seoDescription: 'Private 2 Days 1 Night Jaisalmer itinerary covering the living fort, carved havelis, Gadisar Lake, and Thar Desert sunset. Customizable with local drivers.',
  },
  {
    id: 'jaisalmer-3d2n',
    slug: '3-days-2-nights',
    destination: 'Jaisalmer',
    title: '3 Days / 2 Nights in Jaisalmer',
    shortTitle: 'The Balanced Escape',
    subtitle: 'Our recommended balance of living heritage, desert dunes, and starlit camp night.',
    duration: '3 Days / 2 Nights',
    daysCount: 3,
    nights: 2,
    summary: 'Our most popular and complete Jaisalmer experience: one night in the historic city, one night under the desert stars, with generous room to pause.',
    description: 'The definitive FolkMiles Jaisalmer journey. Unfolds across the golden sandstone citadels, 500-year-old havelis, quiet lake pavilions, and a peaceful desert camp in the Thar dunes. Thoughtfully paced for couples, families, and cultural explorers.',
    heroImage: '/images/jaisalmer/real-camel-dunes.jpg',
    cardImage: '/images/jaisalmer/real-camel-dunes.jpg',
    heroImageAlt: 'Travellers on camels crossing wind-sculpted sand dunes in the Thar Desert at golden hour',
    highlights: [
      'Living Fort exploration with local residential stories and hidden viewpoints',
      'The grand carved facades of Patwon, Nathmal, and Salim Singh Havelis',
      'Quiet afternoon at Bada Bagh royal cenotaphs and Amar Sagar lake',
      'Sunset camel trek across private sand dunes away from crowds',
      'Overnight in a luxury Swiss tent with fireside folk music and starry skies',
      'Traditional Rajasthani culinary introductions and artisan interactions',
    ],
    bestFor: ['Couples', 'Families', 'Culture enthusiasts', 'First-time Rajasthan visitors'],
    travelStyle: ['Balanced', 'Heritage', 'Desert Camp', 'Cultural Immersion'],
    categories: ['first-time', 'couple', 'family', 'culture', 'desert'],
    quickSummary: {
      duration: '3 Days / 2 Nights',
      destination: 'Jaisalmer & Thar Desert, Rajasthan',
      travelStyle: 'Balanced private exploration with city and desert overnight',
      bestFor: 'Couples, families, and travellers wanting the complete experience',
      customization: 'Fully tailored around your pace, dates, and preferences',
      transport: 'Private dedicated AC car with verified local driver',
      guide: 'Licensed local heritage guide included for fort & haveli walk',
      desertStatus: 'Overnight luxury desert camp stay included (or city hotel on request)',
      accommodationStatus: '1 Night Boutique Heritage City Stay + 1 Night Luxury Desert Camp',
    },
    itinerary: [
      {
        day: 1,
        title: 'Arrive, Settle In & Discover the Living Fort',
        morning: 'Warm arrival welcome at Jaisalmer station or airport with private transfer to your boutique heritage haveli. Freshen up and enjoy a welcoming pot of spiced masala chai overlooking the golden rooftops.',
        afternoon: 'Explore Sonar Qila (Jaisalmer Fort) with a knowledgeable local guide. Walk ancient stone ramparts, discover 12th-century Jain temples with intricate marble tirthankara carvings, and visit the Maharaja Mahal palace museum.',
        evening: 'Stroll down into the lively bazaars below the fort. Watch hereditary silversmiths, leatherworkers, and textile weavers at work. Unhurried rooftop dinner with panoramic views of the illuminated fortress.',
        attractions: ['Jaisalmer Fort (Sonar Qila)', 'Jain Temple Complex', 'Maharaja Mahal Palace', 'Old City Markets'],
        context: 'Built from yellow Jurassic sandstone that turns amber as the sun sets, the fort earned Jaisalmer its moniker "The Golden City". Walking with a local reveals stories that guidebooks omit.',
        practicalNotes: 'Moderate walking over cobblestones and gentle stairs. Dress respectfully for temple entry (cover shoulders and knees; leather items must be left at the entrance).',
        alternatives: 'For travellers who prefer less walking, an electric rickshaw or closer vehicle drop can be arranged to the fort entrance.',
      },
      {
        day: 2,
        title: 'Historic Havelis, Royal Cenotaphs & Thar Desert Camp',
        morning: 'Explore the architectural triumvirate of Jaisalmer havelis: Patwon Ki Haveli, Nathmal Ki Haveli, and Salim Singh Ki Haveli with its distinctive peacock-shaped roofline.',
        afternoon: 'Drive out to Bada Bagh, the royal cenotaphs perched on a desert ridge where past Maharawals are commemorated with carved sandstone chhatris. Continue past Amar Sagar lake before heading deep into the Thar Desert.',
        evening: 'Check into your luxury Swiss desert camp. Set out on a sunset camel safari or jeep excursion across soft sand dunes. As dusk settles, gather around the camp hearth for Kalbelia folk dance, Manganiyar music, and a traditional Rajasthani dinner under an unpolluted sky of stars.',
        attractions: ['Patwon Ki Haveli', 'Nathmal Ki Haveli', 'Bada Bagh Cenotaphs', 'Amar Sagar', 'Thar Sand Dunes', 'Desert Camp'],
        context: 'The Thar Desert’s cultural heritage is deeply musical. The Manganiyar and Langa folk musicians have sung for centuries in royal courts and desert gatherings.',
        practicalNotes: 'Desert nights are noticeably cooler than city days. Pack warm clothing for the evening (October to February).',
        alternatives: 'If an overnight desert camp is not preferred, we can organize the desert sunset and dinner excursion and bring you back to sleep in your city hotel.',
      },
      {
        day: 3,
        title: 'Desert Sunrise, Gadisar Lake & Farewell',
        morning: 'Wake early for a quiet desert sunrise over the dunes. Enjoy a warm breakfast at camp before a scenic morning drive back toward the city.',
        afternoon: 'Visit the peaceful stone ghats of Gadisar Lake. Take an optional rowboat ride across the waters, surrounded by historic carved shrines and water pavilions built by Maharawal Gadsi Singh.',
        evening: 'Final flexible time for souvenir shopping or a relaxing cafe visit before your private transfer to the railway station or airport for onward travel.',
        attractions: ['Thar Desert Sunrise', 'Gadisar Lake & Ghats', 'Tilon Ki Pol Gateway', 'Local Handicrafts'],
        context: 'Gadisar Lake was once the primary rainwater reservoir supplying Jaisalmer for centuries, revered as a sacred lifegiving sanctuary.',
        practicalNotes: 'Luggage will remain securely in your private vehicle throughout the day.',
        alternatives: 'For afternoon departures, we can arrange an early departure directly from camp to the station/airport with a takeaway breakfast.',
      },
    ],
    possibleInclusions: [
      '2 nights hand-picked accommodation (1 night heritage city stay + 1 night luxury desert camp)',
      'Daily breakfast and traditional Rajasthani dinner at the desert camp',
      'Private air-conditioned vehicle (Sedan or SUV) for all 3 days with private chauffeur',
      'Pickup and drop-off at Jaisalmer Airport (JSA) or Railway Station (JSM)',
      'Sunset camel trek or dune walk with local desert handlers',
      'Evening desert cultural program: Kalbelia dance, Manganiyar folk music, and campfire',
      'Local heritage walking guide for Jaisalmer Fort and old-city havelis',
      'FolkMiles personal trip coordinator available on WhatsApp and phone',
      'All driver allowances, tolls, state taxes, and parking fees',
    ],
    possibleExclusions: [
      'Monument and museum entrance fees (allows flexibility to choose on the ground)',
      'Lunches in the city and optional cafe stops',
      'Train or flight tickets to and from Jaisalmer',
      'Optional dune-bashing 4x4 jeep safari or quad biking',
      'Personal expenses, laundry, tips, and personal insurance',
    ],
    accommodationOptions: [
      {
        tier: 'Boutique Heritage + Luxury Camp',
        label: 'Boutique Heritage & Luxury Swiss Camp (Recommended)',
        description: 'Atmospheric restored heritage stay in the city followed by an authentic luxury Swiss tent with comfortable beds, ensuite modern washrooms, and veranda.',
        recommendation: 'The quintessential FolkMiles experience balance.',
      },
      {
        tier: 'City Stays Only',
        label: 'Two Nights in City Heritage Stay',
        description: 'Stay both nights in the city at a boutique sandstone haveli, with an afternoon and evening trip out to the dunes for sunset and dinner.',
        recommendation: 'Best for travellers who prefer the conveniences and continuous comfort of a hotel room.',
      },
      {
        tier: 'Premium Luxury Suite',
        label: 'Royal Fort Suite & Glamping Tent',
        description: 'Upgraded heritage suite with historic jharokha balconies and private glamping tent in an exclusive, quieter desert section.',
        recommendation: 'Exceptional for honeymoons, anniversaries, and special milestone journeys.',
      },
    ],
    transportOptions: [
      'Private air-conditioned sedan (Toyota Etios / Swift Dzire) for 1–2 travellers',
      'Dedicated SUV (Toyota Innova Crysta) for families of 3–5 travellers',
      'AC Tempo Traveller with pushback seating for family groups of 6–12 travellers',
    ],
    customizationOptions: [
      'Add a day excursion to Kuldhara abandoned village and Desert National Park',
      'Upgrade to a private dining setup in secluded dunes away from the main camp',
      'Add a hands-on Rajasthani cooking session with a local family',
      'Include an astronomical stargazing session with local night-sky context',
      'Seamlessly connect with an onward road transfer to Jodhpur or Bikaner',
    ],
    faq: [
      {
        question: 'Why is 3 Days / 2 Nights our most recommended duration?',
        answer: 'It provides the ideal rhythm: one full day to immerse in the living fort and heritage havelis without rushing, one full evening and overnight under the desert sky, and a relaxed final morning.',
      },
      {
        question: 'What facilities are available at the desert camp?',
        answer: 'Our verified desert camps feature spacious weather-proof Swiss tents with comfortable beds, fresh linen, attached tiled bathrooms with running hot water, charging points, and 24/7 on-site staff.',
      },
      {
        question: 'Can we change the desert camp to a city hotel?',
        answer: 'Yes. If you prefer not to stay overnight in a tent, you can stay both nights at your city hotel. We take you to the desert for the afternoon sunset, camel trek, and dinner, then drive you back to town.',
      },
      {
        question: 'Are meals included?',
        answer: 'Breakfast is included at both stays, along with a comprehensive traditional buffet dinner during your desert camp night. City lunches are kept flexible so you can sample local street food and rooftop cafes.',
      },
      {
        question: 'How do I receive a customized quote?',
        answer: 'Click "Get My Quote" or message us on WhatsApp with your planned dates, number of travellers, and preferred hotel category. We reply within a few hours with an itemized, transparent quotation.',
      },
    ],
    price: null,
    currency: 'INR',
    priceType: 'on-request',
    featured: true,
    seoTitle: '3 Days / 2 Nights Jaisalmer Tour Package | FolkMiles',
    seoDescription: 'The balanced 3 Days 2 Nights Jaisalmer itinerary. Living fort, merchant havelis, Bada Bagh cenotaphs, and luxury Thar desert camp with folk music.',
  },
  {
    id: 'jaisalmer-4d3n',
    slug: '4-days-3-nights',
    destination: 'Jaisalmer',
    title: '4 Days / 3 Nights in Jaisalmer',
    shortTitle: 'The Slow Discovery',
    subtitle: 'A deeper, unhurried journey with time for artisan villages, lake sunsets, and remote desert landscapes.',
    duration: '4 Days / 3 Nights',
    daysCount: 4,
    nights: 3,
    summary: 'For travellers who prefer space between the sights. Delves into living craft traditions, forgotten desert villages, and quiet corners of the Thar.',
    description: 'A slow, richly textured exploration of Jaisalmer and its wider desert ecosystem. Beyond the famous citadel and dunes, this journey uncovers abandoned village folklore, ancient Jain shrines, artisan stone workshops, and the untouched silence of the Thar.',
    heroImage: '/images/jaisalmer/amar-sagar.jpg',
    cardImage: '/images/jaisalmer/amar-sagar.jpg',
    heroImageAlt: 'Carved sandstone pavilions and tranquil waters at Amar Sagar lake near Jaisalmer',
    highlights: [
      'Unhurried exploration of Jaisalmer Fort and hidden residential alleys',
      'Deep architectural visits to Patwon, Nathmal, and Salim Singh Havelis',
      'The eerie legend of Kuldhara abandoned village and Khaba Fort',
      'Serene afternoons at Bada Bagh cenotaphs and Amar Sagar Jain temple',
      'Two nights in boutique heritage havelis + one night in a luxury desert camp',
      'Wildlife spotting and arid ecology in Desert National Park',
      'Authentic village craft visits and traditional home dining',
    ],
    bestFor: ['Slow travellers', 'Photographers', 'Families wanting an easy pace', 'Repeat Rajasthan travellers'],
    travelStyle: ['Slow Travel', 'In-Depth Heritage', 'Ecology & Villages', 'Desert Immersion'],
    categories: ['slow-travel', 'culture', 'desert', 'family'],
    quickSummary: {
      duration: '4 Days / 3 Nights',
      destination: 'Jaisalmer, Thar Desert & Surrounding Villages',
      travelStyle: 'In-depth, slow-paced exploration with generous free time',
      bestFor: 'Travellers wanting to see both major landmarks and quiet desert life',
      customization: 'Completely bespoke to your personal curiosity and pace',
      transport: 'Full-time dedicated private air-conditioned vehicle & driver',
      guide: 'Dedicated local storyteller guide for heritage and village visits',
      desertStatus: 'Overnight desert camp included + Desert National Park exploration',
      accommodationStatus: '2 Nights Boutique Heritage Stay + 1 Night Luxury Desert Camp',
    },
    itinerary: [
      {
        day: 1,
        title: 'Arrival, Gentle Orientation & Sunset at Gadisar',
        morning: 'Arrive in Jaisalmer. Private chauffeur welcome at the station or airport with transfer to your heritage hotel. Settle into the rhythmic pace of the desert city.',
        afternoon: 'Begin with an easy stroll through the lower old city markets. Observe the distinctive golden stone buildings that maintain architectural harmony across centuries.',
        evening: 'Spend sunset at Gadisar Lake as the evening arti bells echo from lakeside temples. Watch migratory birds and enjoy the gentle reflection of carved chhatri pavilions in the water.',
        attractions: ['Gadisar Lake', 'Tilon Ki Pol Gateway', 'Old City Markets'],
        context: 'Arriving without immediate rush allows travellers to acclimatize to the desert dryness and soak in the old city atmosphere.',
        practicalNotes: 'Keep the first afternoon light and relaxed, especially after long train or flight journeys.',
        alternatives: 'If arriving in the morning, an afternoon visit to the local folklore museum can be easily included.',
      },
      {
        day: 2,
        title: 'Sonar Qila, Haveli Architecture & Heritage Walk',
        morning: 'Dedicate the morning to Jaisalmer Fort (Sonar Qila) when the morning light hits the golden sandstone. Explore the Raja and Rani palaces, seven historic Jain temples, and quiet resident quarters.',
        afternoon: 'Discover the extraordinary craftsmanship of Patwon Ki Haveli, Nathmal Ki Haveli, and Salim Singh Ki Haveli with a local architectural storyteller.',
        evening: 'Climb to a quiet western bastion of the fort for a panoramic sunset view over the sprawling golden city and the open desert horizon. Dinner at an authentic local restaurant.',
        attractions: ['Jaisalmer Fort Ramparts', 'Jain Temples', 'Patwon Ki Haveli', 'Nathmal Ki Haveli', 'Salim Singh Ki Haveli', 'Fort Sunset Bastions'],
        context: 'Jaisalmer’s jali screens are masterpieces of climate-responsive architecture, creating natural venturi breezes while shielding living spaces from direct sun.',
        practicalNotes: 'Wear modest clothing and comfortable shoes for exploring old city stairs and cobblestones.',
        alternatives: 'Photography enthusiasts can arrange an early dawn photo walk inside the fort before shop shutters open.',
      },
      {
        day: 3,
        title: 'Desert Legends, Bada Bagh, Kuldhara & Dunes Camp',
        morning: 'Visit the royal cenotaphs at Bada Bagh and the historic oasis at Amar Sagar. Learn how ancient rulers engineered rainwater catchment to sustain desert agriculture.',
        afternoon: 'Journey toward the desert, stopping at the legendary abandoned village of Kuldhara and Khaba Fort. Hear the intriguing 19th-century history of the Paliwal Brahmins who vanished overnight.',
        evening: 'Arrive at your luxury desert camp in the Thar dunes. Venture out for a sunset camel trek or quiet dune walk. Enjoy fireside folk music, authentic dinner, and starry desert skies.',
        attractions: ['Bada Bagh Cenotaphs', 'Amar Sagar', 'Kuldhara Abandoned Village', 'Khaba Fort', 'Thar Sand Dunes', 'Desert Camp'],
        context: 'Kuldhara was once an affluent cluster of 84 villages. The sudden abandonment in 1825 remains one of Rajasthan’s most fascinating historical mysteries.',
        practicalNotes: 'Bring sunglasses, sun hat, and evening layers for the desert.',
        alternatives: 'Wildlife enthusiasts can substitute or augment Kuldhara with an excursion into Desert National Park to spot the endangered Great Indian Bustard and desert foxes.',
      },
      {
        day: 4,
        title: 'Desert Sunrise, Artisan Village & Departure',
        morning: 'Experience the stillness of a desert sunrise followed by breakfast at camp. Visit a nearby rural artisan community to observe traditional weaving or pottery.',
        afternoon: 'Return to Jaisalmer city for a leisurely lunch and last-minute textile or stone craft shopping.',
        evening: 'Private transfer to Jaisalmer Railway Station or Airport with assistance with luggage for your onward journey.',
        attractions: ['Thar Desert Sunrise', 'Rural Artisan Community', 'Jaisalmer City Farewell'],
        context: 'Local village crafts have been sustained for centuries through direct patron relationships. FolkMiles ensures village visits are respectful and non-intrusive.',
        practicalNotes: 'Your driver and vehicle remain with you until final boarding.',
        alternatives: 'An onward road transfer to Jodhpur (approx. 4.5 hours) can be seamlessly arranged directly from the desert camp.',
      },
    ],
    possibleInclusions: [
      '3 nights hand-picked accommodation (2 nights boutique city haveli + 1 night luxury desert camp)',
      'Daily breakfast at all stays and dinner at the desert camp',
      'Dedicated private air-conditioned vehicle and chauffeur for all 4 days',
      'All station/airport pickups and drop-offs',
      'Guided heritage walk of Jaisalmer Fort and old-city havelis',
      'Excursions to Bada Bagh, Amar Sagar, Kuldhara, and Khaba Fort',
      'Sunset camel trek or dune walk with local handlers',
      'Evening desert cultural folk performance and campfire',
      'FolkMiles trip coordination support on WhatsApp and phone',
      'All toll taxes, parking fees, and driver allowances',
    ],
    possibleExclusions: [
      'Monument admission tickets and museum entry fees',
      'Lunches and incidental dining in the city',
      'Long-distance train or air travel to and from Jaisalmer',
      'Optional desert adventure activities (quad bikes, jeep dune bashing)',
      'Personal expenses, gratuities, and travel insurance',
    ],
    accommodationOptions: [
      {
        tier: 'Boutique Heritage + Luxury Camp',
        label: 'Boutique Heritage Haveli (2N) + Luxury Camp (1N)',
        description: 'Atmospheric heritage stay in the old city paired with a comfortable luxury Swiss tent under the desert stars.',
        recommendation: 'Our recommended combination for the complete experience.',
      },
      {
        tier: 'All City Stays',
        label: '3 Nights Boutique Heritage Haveli',
        description: 'Stay all 3 nights in the comfort of a boutique city property, visiting the desert for sunset excursions and dinner.',
        recommendation: 'Ideal for travellers with mobility considerations or small children.',
      },
      {
        tier: 'Extended Desert Experience',
        label: '1 Night City + 2 Nights Desert Camp',
        description: 'One night in the city followed by two nights in the desert, allowing a deeper disconnect and night-sky appreciation.',
        recommendation: 'Perfect for artists, writers, and those seeking true quietude.',
      },
    ],
    transportOptions: [
      'Private air-conditioned sedan (Toyota Etios / Swift Dzire) for 1–2 travellers',
      'Dedicated SUV (Toyota Innova Crysta) for families of 3–5 travellers',
      'AC Tempo Traveller with pushback seating for family groups of 6–12 travellers',
    ],
    customizationOptions: [
      'Include a morning birdwatching and wildlife excursion in Desert National Park',
      'Organize an authentic home cooking masterclass with a local Jaisalmer family',
      'Arrange an astronomical night-sky stargazing session with local desert perspective',
      'Seamlessly connect with an onward private road transfer to Jodhpur or Bikaner',
    ],
    faq: [
      {
        question: 'Who is the 4-day itinerary best suited for?',
        answer: 'It is ideal for travellers who dislike rushed sightseeing. With 4 days, you explore the fort, havelis, Bada Bagh, Kuldhara, and the Thar Desert with ample time to rest and absorb local life.',
      },
      {
        question: 'Can we visit Desert National Park on this trip?',
        answer: 'Yes. Desert National Park is home to the critically endangered Great Indian Bustard (Godawan), chinkara gazelles, and desert foxes. We can easily include a guided park safari on Day 3 or Day 4.',
      },
      {
        question: 'Can this itinerary be extended to Jodhpur or Udaipur?',
        answer: 'Yes. We frequently connect Jaisalmer itineraries with private road journeys to Jodhpur (4.5 hours), Osian, or onward across Rajasthan.',
      },
      {
        question: 'How do you ensure village visits are respectful?',
        answer: 'We work only with community members who welcome visitors. We visit as invited guests, never turning local life into a tourist photo spectacle, and ensure hosts are fairly compensated.',
      },
      {
        question: 'How do I get a price quote for my travel dates?',
        answer: 'Click "Get My Quote" or message FolkMiles on WhatsApp. Share your preferred dates, group size, and accommodation preference, and we will send an itemized quotation.',
      },
    ],
    price: null,
    currency: 'INR',
    priceType: 'on-request',
    featured: true,
    seoTitle: '4 Days / 3 Nights Jaisalmer Tour Package | FolkMiles',
    seoDescription: 'Slow-travel 4 Days 3 Nights Jaisalmer itinerary. Living fort, havelis, Bada Bagh, Kuldhara abandoned village, and luxury Thar desert camp stay.',
  },
];

export function getPackageBySlug(slug: string): PackageItem | undefined {
  return jaisalmerPackages.find((pkg) => pkg.slug === slug);
}
