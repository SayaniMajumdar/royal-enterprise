export const COMPANY_INFO = {
  name: 'Royal Enterprise',
  tagline: 'The Pinnacle of Luxury Events, Artisanal Catering & Bespoke Weddings',
  phone: '+91 98765 43210',
  secondaryPhone: '+91 80123 45678',
  email: 'concierge@royalenterprise.com',
  bookingEmail: 'bookings@royalenterprise.com',
  address: 'Royal Enterprise Executive Suite, Level 5, Heritage Boulevard, City Center',
  officeHours: 'Monday – Sunday: 9:00 AM – 9:00 PM IST',
  socials: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
    youtube: 'https://youtube.com',
  },
};

export const DIVISIONS = [
  {
    id: 'events',
    title: 'Event Management',
    subtitle: 'We Make Every Event Memorable.',
    description: 'Masterfully planned and flawlessly executed corporate conferences, high-profile media launches, grand galas, and bespoke social celebrations.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    link: '/events',
    highlights: ['Corporate Conferences', 'Media Launches', 'Stage & Set Design', 'Award Ceremonies'],
    badge: 'Flawless Execution',
  },
  {
    id: 'catering',
    title: 'Catering Services',
    subtitle: 'Exceptional Food, Unforgettable Experiences.',
    description: 'Exquisite culinary journeys curated by master chefs. From traditional royal feasts to contemporary global gastronomy, plated with unmatched elegance.',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
    link: '/catering',
    highlights: ['Customized Menus', 'Veg & Non-Veg Banquets', 'Live Gourmet Counters', 'Fine Dining Service'],
    badge: 'Artisanal Gastronomy',
  },
  {
    id: 'wedding',
    title: 'Wedding Planner',
    subtitle: 'Your Dream Wedding, Our Complete Responsibility.',
    description: 'An end-to-end luxury wedding management service transforming fairy-tale visions into reality with breathtaking venues, mandaps, couture, and memories.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    link: '/wedding-planner',
    highlights: ['Royal Venues & Mandap', 'Bride & Groom Styling', 'Cinematic Photography', 'Complete Wedding Package'],
    badge: 'Bespoke Fairytales',
  },
];

export const EVENT_SERVICES = [
  {
    id: 'corporate',
    category: 'Corporate Events',
    description: 'Refined corporate event architecture designed to elevate company prestige, inspire stakeholders, and align with executive standards.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80',
    items: [
      'Corporate meetings & executive retreats',
      'Business conferences & summits',
      'High-impact product launches',
      'Annual award ceremonies & galas',
      'Annual company celebrations',
      'Dealer meets & partner symposiums',
    ],
  },
  {
    id: 'media',
    category: 'Media Events',
    description: 'High-visibility activations engineered for maximum press coverage, viral brand resonance, and seamless media relations.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80',
    items: [
      'National & regional press conferences',
      'VIP media launches & previews',
      'Promotional tours & brand activations',
      'Influencer summits & PR galas',
      'Broadcast & media stage productions',
      'Brand reveal experiences',
    ],
  },
  {
    id: 'other',
    category: 'Other Events and Programs',
    description: 'Cherished milestones and vibrant social gatherings crafted with personalized warmth, joyous atmospheres, and immaculate hospitality.',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=80',
    items: [
      'Milestone birthday celebrations',
      'Vibrant cultural programs & festivals',
      'Exclusive private parties & anniversaries',
      'College festivals & institutional events',
      'Family reunions & social gatherings',
      'Theme-based festive celebrations',
    ],
  },
  {
    id: 'stage',
    category: 'Stage and Set Design',
    description: 'State-of-the-art structural aesthetics, intelligent lighting engineering, acoustic sound design, and bespoke theatrical sets.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=900&q=80',
    items: [
      'Custom 3D stage and backdrop design',
      'Exhibition booth & pavilion setups',
      'Intelligent LED lighting arrangements',
      'Concert-grade acoustic sound systems',
      'Thematic floral & structural decoration',
      'Turnkey event production & technical crew',
      'AV projections & dynamic LED walls',
    ],
  },
];

export const CATERING_PACKAGES = [
  {
    id: 'silver',
    name: 'Royal Silver Banquet',
    tagline: 'Ideal for intimate celebrations and corporate luncheons',
    price: 'Custom quote based on menu',
    guestRange: '50 - 250 Guests',
    features: [
      '3 Appetizers (Veg / Non-Veg options)',
      '2 Signature Curries & Dal preparation',
      'Artisanal Bread basket & Fragrant Rice',
      '2 Traditional Desserts & Mocktails',
      'Standard buffet setup & uniform servers',
      'Eco-friendly premium cutlery',
    ],
    popular: false,
  },
  {
    id: 'gold',
    name: 'Imperial Gold Experience',
    tagline: 'Our most requested package for grand receptions & weddings',
    price: 'Custom quote based on menu',
    guestRange: '150 - 800 Guests',
    features: [
      '5 Gourmet Appetizers + 2 Live Chaat/Tandoor counters',
      '4 Master Chef Main Courses (Veg & Non-Veg)',
      'Dum Biryani, Pulao & Exotic Bread assortment',
      '4 Artisanal Desserts including live hot dessert station',
      'Welcome drinks, smoothies & specialty coffee bar',
      'Royal brass or bone china chinaware presentation',
      'Dedicated floor manager & butler service',
    ],
    popular: true,
  },
  {
    id: 'diamond',
    name: 'Monarch Diamond Gala',
    tagline: 'The ultimate royal culinary showcase for destination & luxury weddings',
    price: 'Custom quote based on menu',
    guestRange: '200 - 3000+ Guests',
    features: [
      '8 Hors d’oeuvres with 4 interactive live culinary theatres',
      'Multi-cuisine spreads: Royal Indian, Pan-Asian, Mediterranean & Italian',
      'Artisan cheese display, gourmet salad bars & dips',
      '6 Signature Desserts & Molecular gastronomy station',
      'Full mixology mocktail bar with flare bartenders',
      'Opulent silver-accented chafing dishes and table scape',
      'Executive Chef presence and dedicated VIP stewards',
    ],
    popular: false,
  },
];

export const CATERING_MENU_ITEMS = {
  starters: [
    { name: 'Zafrani Paneer Tikka', type: 'veg', description: 'Cottage cheese marinated with saffron, hung curd, and aromatic spices.' },
    { name: 'Galouti Kebab on Ulte Tawa Paratha', type: 'non-veg', description: 'Melt-in-mouth smoked lamb patties infused with 32 secret spices.' },
    { name: 'Crispy Lotus Stem in Sweet Chili', type: 'veg', description: 'Wok-tossed honey glazed lotus roots with toasted sesame.' },
    { name: 'Tandoori Murgh Angara', type: 'non-veg', description: 'Charcoal-grilled tender chicken skewers in Kashmiri red chili marinade.' },
    { name: 'Dahi Ke Kebab with Mint Coulis', type: 'veg', description: 'Velvety hung curd patties with a golden cardamom crust.' },
    { name: 'Amritsari Fish Fingers with Tartar', type: 'non-veg', description: 'Carom seed-crusted flaky river fish served piping hot.' },
  ],
  mains: [
    { name: 'Paneer Lababdar', type: 'veg', description: 'Handcrafted paneer cubes tossed in a rich onion-tomato-cashew gravy.' },
    { name: 'Royal Awadhi Dum Murgh Biryani', type: 'non-veg', description: 'Slow-cooked fragrant basmati rice with spring chicken sealed with dough.' },
    { name: 'Dal Bukhara Royale', type: 'veg', description: 'Black lentils simmered overnight over slow charcoal with white butter.' },
    { name: 'Kashmiri Rogan Josh', type: 'non-veg', description: 'Tender baby mutton simmered in ratanjot infused Kashmiri chili gravy.' },
    { name: 'Subz Meloni Korma', type: 'veg', description: 'Seasonal garden greens simmered in a mildly spiced pistachio-cream reduction.' },
    { name: 'Smoked Butter Chicken Imperial', type: 'non-veg', description: 'Classic char-grilled chicken morsels in velvet satin tomato gravy.' },
  ],
  desserts: [
    { name: 'Shahi Kesar Rasmalai', type: 'veg', description: 'Soft cottage cheese dumplings poached in thickened saffron milk and pistachio slivers.' },
    { name: 'Moong Dal Halwa with Gold Leaf', type: 'veg', description: 'Traditional slow-roasted split green gram halwa enriched with pure desi ghee.' },
    { name: 'Live Jalebi with Rabdi Theatre', type: 'veg', description: 'Crisp hot saffron jalebis swirled directly onto creamy chilled malai rabdi.' },
    { name: 'Baked Gulab Jamun Cheesecake', type: 'veg', description: 'Contemporary fusion dessert balancing rich cream cheese and aromatic syrup.' },
  ],
  beverages: [
    { name: 'Royal Rose Sherbet & Sabja', type: 'veg', description: 'Traditional organic rose distillate scented with green cardamom and basil seeds.' },
    { name: 'Smoked Masala Chaas', type: 'veg', description: 'Churned buttermilk seasoned with rock salt, cumin, and infused with charcoal smoke.' },
    { name: 'Blue Lagoon Citrus Fizz', type: 'veg', description: 'Curacao-tinted bubbly lemonade infused with fresh mint and kaffir lime.' },
    { name: 'Artisanal Filter Coffee & Masala Chai Bar', type: 'veg', description: 'Freshly brewed aromatic spices and single-origin South Indian chicory blend.' },
  ],
};

export const WEDDING_SERVICES = [
  {
    id: 'venue',
    title: 'A. Venue Selection & Booking',
    description: 'Securing the most regal settings tailored to your guest count, architectural preference, and wedding scale.',
    items: [
      'Historic Palaces & Heritage Castles',
      'Luxury 5-Star Hotel Banquet Halls',
      'Scenic Waterfront & Hill Resorts',
      'Exotic Destination Wedding Venues',
      'Lush Outdoor Lawns & Farmhouses',
    ],
  },
  {
    id: 'decor',
    title: 'B. Decoration, Mandap & Theme',
    description: 'Transformative visual storytelling through floral artistry, architectural mandaps, and ambient illumination.',
    items: [
      'Opulent Wedding Stage & Backdrop Decor',
      'Vedic Mandap with Fresh Floral Canopies',
      'Grand Royal Welcome Entrances & Walkways',
      'Dynamic Architectural & Fairy Lighting',
      'Theme-Based Mehendi & Sangeet Sets',
    ],
  },
  {
    id: 'bride',
    title: 'C. Bride Services & Styling',
    description: 'Head-to-toe couture styling, bridal aesthetics, and heritage jewellery coordination for the queen of the day.',
    items: [
      'Celebrity Bridal Makeup & Airbrushing',
      'Bespoke Hairstyling & Floral Tresses',
      'Bridal Lehengas & Saree Draping',
      'Kundan, Polki & Gold Jewellery Styling',
      'Bridal Mehendi with Organic Henna',
      'Bridal Accessories & Trousseau Curation',
    ],
  },
  {
    id: 'groom',
    title: 'D. Groom Services & Styling',
    description: 'Impeccable royal tailoring, styling, and traditional procession accessories for the groom.',
    items: [
      'Groom Makeup, Grooming & Hair Styling',
      'Handcrafted Designer Sherwanis & Suits',
      'Safa (Turban) Tying & Brooch Curation',
      'Royal Sword, Mojaris & Accessories',
      'Baraat Procession, Vintage Cars & Brass Band',
    ],
  },
  {
    id: 'photography',
    title: 'E. Photography & Cinematography',
    description: 'Capturing timeless emotional memories through cinematic visuals, candid stills, and heirloom wedding albums.',
    items: [
      'Cinematic Wedding Film & Teaser Trailers',
      'Pre-Wedding & Post-Wedding Photoshoots',
      'Candid & Traditional Photography',
      'Drone Aerial Cinematography (4K)',
      'Handcrafted Luxury Leather Photo Albums',
      'Same-Day Edit Highlights for Receptions',
    ],
  },
  {
    id: 'catering',
    title: 'F. Wedding Catering & Hospitality',
    description: 'Legendary multi-course wedding feasts with dedicated guest management and warm Indian hospitality.',
    items: [
      'Customized Grand Wedding Menus',
      'Separate Pure Vegetarian & Jain Banquet Sections',
      'Interactive Live Cooking Theatres & Chaat Streets',
      'Atithi Devo Bhava Guest Management & Welcoming',
      'Midnight Snack Stations & After-Party Spreads',
    ],
  },
];

export const STATS = [
  { value: '750+', label: 'Grand Events Delivered' },
  { value: '350+', label: 'Dream Weddings Realized' },
  { value: '250K+', label: 'Gourmet Meals Catered' },
  { value: '99.8%', label: 'Client Delight Rating' },
];

export const TESTIMONIALS = [
  {
    quote: 'Royal Enterprise transformed our corporate conference into a magnificent global spectacle. The audiovisuals, stage fabrication, and hospitality were world-class.',
    name: 'Vikramaditya Singhania',
    role: 'Managing Director, Apex Technologies',
    division: 'Corporate Events',
  },
  {
    quote: 'The complete wedding package was the greatest decision we made. From the mandap flowers to my bridal makeup and the feast, everything felt like a royal palace fairytale.',
    name: 'Ananya & Rohan Mehra',
    role: 'Destination Wedding, Udaipur',
    division: 'Wedding Planner',
  },
  {
    quote: 'Our 600 wedding guests are still talking about the catering. The Zafrani Paneer, live jalebis, and the seamless service were beyond exceptional.',
    name: 'Sunita & Arvind Kapoor',
    role: 'Grand Wedding Reception',
    division: 'Catering Services',
  },
];
