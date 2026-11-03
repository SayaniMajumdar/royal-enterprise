export const COMPANY_INFO = {
  name: 'Royal Enterprise',
  tagline: 'Turnkey Wedding Planning | Gourmet Catering | Event Production',
  phone: '+91 [Insert Contact Number]',
  displayPhone: '+91 [Insert Contact Number]',
  secondaryPhone: '+91 [Secondary Contact Number]',
  whatsapp: '[WhatsApp Number]',
  email: 'contact@royalenterprise.com',
  bookingEmail: 'contact@royalenterprise.com',
  address: '[Insert Business Address, City, State, PIN]',
  officeHours: '[Insert Working Hours]',
  mapUrl: 'https://maps.google.com/?q=Kolkata',
  website: 'www.royalenterprise.com',
  founder: '[Owner Name]',
  founderTitle: 'Director / Lead Planner',
  foundedYear: '[Year Established]',
  teamSize: '[Insert Number, e.g. 6–8 Specialists + 1 Event Director]',
  eventsCount: '[Events Count]',
  largestEvent: '[Insert Largest Event Scale, e.g. 500+ Guests]',
  headChef: '[Culinary Lead / Head Chef Name]',
  headChefTitle: 'Head of Culinary Operations',
  socials: {
    instagram: '[Instagram Link]',
    facebook: '[Facebook Link]',
    linkedin: '[LinkedIn Link]',
    youtube: '[YouTube Link]',
  },
};

export const DIVISIONS = [
  {
    id: 'catering',
    title: 'In-House Catering & Banquets',
    subtitle: 'We cook the biryani ourselves. Nothing is outsourced to a stranger’s kitchen.',
    description: 'Authentic Bengali Biye Bari feasts, Awadhi dum biryani sealed with dough, and Marwari pure-veg banquets cooked in dedicated separate kitchens by our own veteran halwais and chefs.',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
    link: '/catering',
    highlights: ['Pure Kolkata Bhetki Fry & Kasundi', 'Slow-Simmered Kosha Mangsho', 'Dedicated Separate Veg Kitchens', 'Live Hot Kesariya Jalebi Counters'],
    anchor: true,
  },
  {
    id: 'wedding',
    title: 'Turnkey Wedding Planning',
    subtitle: 'From venue booking to the last plate of Boubhat.',
    description: 'We take full responsibility for heritage rajbaris, Vedic mandap decor, bridal styling, Benarasi sarees, jewellery coordination, and candid cinematic photography under one roof.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
    link: '/wedding-planner',
    highlights: ['Heritage Rajbari & Banquet Booking', 'Vedic Floral Mandap Design', 'Bride & Groom Styling Assistance', 'Single Floor Manager on the Day'],
  },
  {
    id: 'events',
    title: 'Event Management & Stagecraft',
    subtitle: 'Conferences, leadership summits, and public programs.',
    description: 'Stage fabrication, acoustic sound engineering, 3D digital LED backdrops, artist coordination, and executive delegate hospitality across Kolkata’s top venues.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    link: '/event-management',
    highlights: ['Annual Corporate Meets & Awards', 'Stage Fabrication & AV Sound', 'Media & Product Launches', 'Delegate Registration & Hospitality'],
  },
];

export const RECENT_EVENTS = [
  {
    venue: '[Venue Name / Location]',
    date: '[Event Date / Month & Year]',
    guests: '[Guest Count]',
    title: '[Event Title / Celebration Type]',
    handled: '[Scope Handled: e.g. Turnkey wedding coordination, Vedic marigold mandap, live shehnai, and traditional feast].',
  },
  {
    venue: '[Venue Name / Location]',
    date: '[Event Date / Month & Year]',
    guests: '[Guest Count]',
    title: '[Event Title / Corporate Summit]',
    handled: '[Scope Handled: e.g. Custom 3D LED stage, acoustic sound engineering, multi-camera broadcast, and banquet dinner].',
  },
  {
    venue: '[Venue Name / Location]',
    date: '[Event Date / Month & Year]',
    guests: '[Guest Count]',
    title: '[Event Title / Sangeet & Reception]',
    handled: '[Scope Handled: e.g. Dedicated separate pure-veg kitchen, live counters, and architectural fairy lighting].',
  },
  {
    venue: '[Venue Name / Location]',
    date: '[Event Date / Month & Year]',
    guests: '[Guest Count]',
    title: '[Event Title / Anniversary Gala]',
    handled: '[Scope Handled: e.g. Acoustic live band setup, floral canopy tablescapes, and curated artisanal hors d’oeuvres].',
  },
];

export const TESTIMONIALS = [
  {
    quote: '[Client Testimonial: Insert verified client feedback here regarding wedding planning, catering service, and on-ground coordination.]',
    name: '[Customer Name]',
    area: '[City / Area]',
    event: '[Event Type: e.g. Bengali Wedding & Reception]',
    guests: '[Guest Count]',
  },
  {
    quote: '[Client Testimonial: Insert verified client feedback here regarding corporate summit execution, stagecraft, and AV management.]',
    name: '[Customer Name]',
    area: '[City / Area]',
    event: '[Event Type: e.g. Marwari Wedding & Sangeet]',
    guests: '[Guest Count]',
  },
  {
    quote: '[Client Testimonial: Insert verified client feedback here regarding gourmet catering quality, live counter presentation, and banquet staff hospitality.]',
    name: '[Customer Name]',
    area: '[City / Area]',
    event: '[Event Type: e.g. Corporate Annual Leadership Summit]',
    guests: '[Guest Count]',
  },
];

export const STATS = [
  { value: '[Events Count]', label: 'Events managed and executed' },
  { value: '[Year Established]', label: 'Serving clients and families since' },
  { value: '[Team Size]', label: 'On-site specialists & coordinators' },
  { value: '100%', label: 'In-house supervision & execution' },
];

export const CATERING_PACKAGES = [
  {
    id: 'package-a',
    name: 'Package A: Classic Heritage Feast (Standard Non-Veg)',
    priceRange: '[Package Price]',
    guestRange: 'Best for: Reception (Boubhat), Annaprashan, Ring Ceremonies',
    summary: 'Sequenced with cold-pressed mustard oil and fresh fish. Traditional Bengali banquet courses.',
    menuHighlights: [
      'Welcome Drinks: Gondhoraj Lemonade / Aam Panna, Mocktail bar',
      'Starters: Kolkata Pure Bhetki Fish Fry (Kasundi dip), Crispy Mochar Chop, Paneer Malai Tikka',
      'Breads: Koraishutir Kochuri / Radhaballavi with Hing-Aloordum',
      'Salad Counter: Green Garden Salad, Spiced Corn Salad, Kasundi Mustard Dressing',
      'Mains: Steamed Gobindobhog Basanti Pulao, Katla Kalia / Rui Macher Jhol, Royal Chicken Chaap or Chicken Kosha, Chhanar Dalna / Veg Navratan Korma',
      'Accompaniments: Plastic (Raw Papaya) Chutney / Pineapple Chutney & Crispy Papad',
      'Desserts: Traditional Baked Rosogolla, Mishti Doi (clay pots), Vanilla Ice Cream with Hot Chocolate sauce',
    ],
    popular: false,
  },
  {
    id: 'package-b',
    name: 'Package B: The Grand Imperial Royal Spread (Premium Non-Veg)',
    priceRange: '[Package Price]',
    guestRange: 'Best for: Grand Weddings & Premium Receptions',
    summary: 'Charcoal clay-oven grills, dum biryanis, slow-cooked kormas, and artisanal sweet counters.',
    menuHighlights: [
      'Welcome Drinks: Blue Lagoon Cooler, Fresh Tender Coconut Water, Turkish Sand Coffee counter',
      'Live Starter Stalls: Kolkata Style Phuchka & Papri Chaat Bar (3 flavors), Live Tandoor (Chicken Reshmi Kebab, Murgh Malai Tikka, Tandoori Fish Tikka), Crispy Baby Corn, Dahi ke Kebab, Paneer Shashlik',
      'Breads & Rice: Assorted Naan (Butter, Garlic), Laccha Paratha, Kolkata Dum Mutton Biryani (with soft egg & melt-in-mouth aloo), Shahi Kaju-Kishmish Pulao',
      'Royal Seafood & Meat Mains: Kolkata Bhetki Paturi (banana leaf) or Daab Chingri (inside tender coconut), Signature Slow-Cooked Mutton Kosha, Paneer Lababdar & Dal Bukhara',
      'Accompaniments: Mango-Prune Chutney, Sabudana/Masala Papad, Mixed Raita',
      'Desserts & Confectionery: Live Malpua with Rabri / Live Jilebi counter, Nolen Gur Sandesh / Kesar Rasmalai, Matka Kulfi with Faluda, Sweet Pan Counter',
    ],
    popular: true,
  },
  {
    id: 'package-c',
    name: 'Package C: Pure Vegetarian Shubh Vivah Spread',
    priceRange: '[Package Price]',
    guestRange: 'Best for: Sangeet, Pooja, Haldi, Marwari / Jain celebrations',
    summary: 'Dedicated separate-kitchen setups with authentic Rajasthani, North Indian, and Satvik delicacies.',
    menuHighlights: [
      'Starters: Dahi Puchka, Palak Patta Chaat, Paneer Tikka Angara, Hara Bhara Kebab',
      'Mains: Jodhpuri Dal Baati Churma with Ghee, Paneer Pasanda / Shahi Paneer, Gatte Ki Sabzi / Kashmiri Dum Aloo, Panchmel Dal & Kesar Jeera Rice',
      'Assorted Rotis: Missi Roti, Butter Naan, Tandoori Kulcha',
      'Desserts: Warm Moong Dal Halwa, Kesari Jalebi with Rabri, Ghewar',
    ],
    popular: false,
  },
];
