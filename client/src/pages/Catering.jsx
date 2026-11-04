import React, { useState, useEffect } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import CateringMenuSection from '../components/catering/CateringMenuSection';
import CateringEnquiryForm from '../components/catering/CateringEnquiryForm';
import Button from '../components/common/Button';
import {
  Utensils,
  Award,
  ChefHat,
  Sparkles,
  ShieldCheck,
  GlassWater,
  Flame,
  Check,
  ArrowRight,
  Crown,
  Leaf,
  Drumstick,
  Heart,
  Plus,
  X,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Clock,
  Wine,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

const Catering = () => {
  const [selectedPackage, setSelectedPackage] = useState(
    'Package B: The Grand Imperial Royal Spread (Premium Non-Veg)'
  );
  const [galleryCategory, setGalleryCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // =========================================================================
  // 1. CATERING SERVICES & CULINARY DISCIPLINES (ALTERNATING EDITORIAL LAYOUT)
  // =========================================================================
  const cateringDisciplines = [
    {
      id: 'wedding-catering',
      num: '01',
      title: 'Grand Wedding Catering & Biye Bari Feasts',
      subtitle: 'Traditional Bengali & North Indian Ceremonial Banquets',
      description:
        'From authentic Gondhoraj coolers and crunchy Kolkata pure Bhetki fry to slow-simmered Kosha Mangsho and hot baked rosogollas, our veteran bawarchis curate an unforgettable course-by-course culinary journey.',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
      badge: 'Wedding Banquets',
      highlights: [
        'Pure Kolkata Bhetki fry with fresh kasundi',
        'Slow-cooked mutton kosha & Basanti pulao',
        'Traditional Mishti Doi in earthen handis',
        'Hot baked rosogollas & malpua counters',
      ],
    },
    {
      id: 'pure-veg',
      num: '02',
      title: 'Dedicated Pure Vegetarian & Jain Banquets',
      subtitle: 'Strictly Segregated Cookware, Kitchens & Specialized Chefs',
      description:
        'Complete peace of mind for sacred ceremonies, Marwari and Jain celebrations. We maintain separate cooking utensils, dedicated raw-material supply, and specialized chefs for authentic Dal Baati Churma, Shahi Paneer, and Sattvic spreads.',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
      badge: '100% Pure Veg & Jain',
      highlights: [
        'Jodhpuri Dal Baati Churma with pure desi ghee',
        'Shahi Paneer Pasanda in rich cashew cream',
        'No-onion, no-garlic Sattvic menus upon request',
        'Live kesariya jalebi & rabri sweet lounge',
      ],
    },
    {
      id: 'milestone-events',
      num: '03',
      title: 'Milestone Birthdays, Anniversaries & Socials',
      subtitle: 'Annaprashan, Golden Jubilees & Pre-Wedding Gatherings',
      description:
        'Relaxed yet refined hospitality where multi-generational families gather. We coordinate live interactive street chaat counters, artisanal skewers, and comforting family main courses.',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
      badge: 'Social & Family Feasts',
      highlights: [
        'Live Phuchka and Palak Patta Chaat bars',
        'Clay-oven chicken reshmi & dahi ke kebabs',
        'Comforting Bengali Sunday mutton curries',
        'Artisanal dessert towers & fruit counters',
      ],
    },
    {
      id: 'live-theatres',
      num: '04',
      title: 'Live Interactive Food Stations',
      subtitle: 'Charcoal Tandoor, Italian Pasta & Turkish Sand Coffee',
      description:
        'Transform dining into engaging entertainment. Sizzling charcoal tandoori grills, toss-to-order artisanal pastas, wood-fired pizzas, and brewed Turkish sand coffee that keep your guests mingling.',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
      badge: 'Live Experience',
      highlights: [
        'Live Charcoal Tandoori Kebab Station',
        'Wood-fired artisanal pizzas & toss-to-order pasta',
        'Interactive Banarasi Paan & Fire Paan bar',
        'Turkish sand coffee & signature mocktails',
      ],
    },
    {
      id: 'corporate-buffets',
      num: '05',
      title: 'Corporate Executive Buffets & Galas',
      subtitle: 'Pristine Hygiene, Punctual Setup & Boardroom Standards',
      description:
        'Balanced, temperature-controlled, and calorie-conscious dining for leadership summits, shareholder meetings, and corporate award evenings across Kolkata hotel convention centers.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
      badge: 'Corporate Standard',
      highlights: [
        'Strictly punctual session buffet synchronization',
        'Calorie-conscious & international options',
        'Polite, uniformed bilingual serving captains',
        'Rapid setup and discreet breakdown',
      ],
    },
  ];

  // =========================================================================
  // 2. LUXURY FOOD SHOWCASE HIGHLIGHTS
  // =========================================================================
  const foodHighlights = [
    {
      title: 'Pure Kolkata Bhetki Paturi',
      subtitle: 'Steamed in fresh banana leaf with mustard & green chilli',
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
      tag: 'Heritage Signature',
      aspect: 'col-span-1 md:col-span-2 aspect-[16/10]',
    },
    {
      title: 'Royal Handi Dum Biryani',
      subtitle: 'Slow-cooked with saffron, rose water, tender meat & potato',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
      tag: 'Awadhi Royalty',
      aspect: 'col-span-1 aspect-[4/5]',
    },
    {
      title: 'Charcoal Reshmi Kebabs',
      subtitle: 'Melt-in-mouth chicken skewers from the live clay tandoor',
      image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
      tag: 'Live Tandoor',
      aspect: 'col-span-1 aspect-[4/5]',
    },
    {
      title: 'Hot Malpua with Creamy Rabri',
      subtitle: 'Crisp golden malpuas simmered in saffron syrup',
      image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
      tag: 'Artisanal Mishti',
      aspect: 'col-span-1 md:col-span-2 aspect-[16/10]',
    },
  ];

  // =========================================================================
  // 3. EDITORIAL MASONRY CATERING GALLERY
  // =========================================================================
  const galleryItems = [
    {
      id: 1,
      title: 'Grand Wedding Feast Service & Polished Copper Warmers',
      category: 'Wedding Feasts',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
      location: 'Grand Ballroom Buffet',
      aspect: 'col-span-1 md:col-span-2 row-span-2 aspect-[16/10] md:aspect-auto',
    },
    {
      id: 2,
      title: 'Live Sizzling Tandoor Skewers',
      category: 'Live Counters',
      image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
      location: 'Live Clay Oven Station',
      aspect: 'col-span-1 aspect-[4/5]',
    },
    {
      id: 3,
      title: 'Royal Awadhi Dum Biryani in Clay Handi',
      category: 'All Dishes',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
      location: 'Handi Dum Station',
      aspect: 'col-span-1 aspect-[4/5]',
    },
    {
      id: 4,
      title: 'Fine Dining Table Scape & Crystal Glassware',
      category: 'Wedding Feasts',
      image: '/images/hero-stage.png',
      location: 'VIP Table Arrangement',
      aspect: 'col-span-1 aspect-[16/10]',
    },
    {
      id: 5,
      title: 'Artisanal Bengali Sweets & Dessert Lounge',
      category: 'Desserts & Sweets',
      image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
      location: 'Live Sweet Counter',
      aspect: 'col-span-1 aspect-[16/10]',
    },
    {
      id: 6,
      title: 'Outdoor Garden Buffet & Evening Canopy',
      category: 'Wedding Feasts',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
      location: 'Lawn Pavilion Dining',
      aspect: 'col-span-1 md:col-span-2 aspect-[16/9]',
    },
  ];

  const galleryCategories = ['All', 'Wedding Feasts', 'Live Counters', 'Desserts & Sweets'];
  const filteredGallery = galleryCategory === 'All'
    ? galleryItems
    : galleryItems.filter((i) => i.category === galleryCategory || (galleryCategory === 'All Dishes' && i.category === 'All Dishes'));

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % filteredGallery.length);
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + filteredGallery.length) % filteredGallery.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredGallery.length]);

  // =========================================================================
  // 4. SIGNATURE FEAST PACKAGES (PRESERVED DATA)
  // =========================================================================
  const signaturePackages = [
    {
      id: 'package-a',
      code: 'Package A',
      fullName: 'Package A: Classic Heritage Feast (Standard Non-Veg)',
      name: 'Classic Heritage Feast (Standard Non-Veg)',
      bestFor: 'Reception (Boubhat), Annaprashan, Ring Ceremonies',
      badge: 'Classic Heritage',
      sections: [
        {
          heading: 'Welcome Drinks',
          items: ['Gondhoraj Lemonade / Aam Panna', 'Signature Mocktail Bar'],
        },
        {
          heading: 'Starters (Passed Around)',
          items: [
            'Kolkata Pure Bhetki Fish Fry (Kasundi dip)',
            'Crispy Mochar Chop',
            'Paneer Malai Tikka',
          ],
        },
        {
          heading: 'Breads & Traditional Starters',
          items: ['Koraishutir Kochuri / Radhaballavi with Hing-Aloordum'],
        },
        {
          heading: 'Salad & Accompaniments',
          items: [
            'Green Garden Salad with Kasundi Mustard Dressing',
            'Plastic (Raw Papaya) Chutney / Pineapple Chutney & Crispy Papad',
          ],
        },
        {
          heading: 'Mains (Fish, Poultry & Veg)',
          items: [
            'Steamed Gobindobhog Basanti Pulao',
            'Katla Kalia / Rui Macher Jhol',
            'Royal Chicken Chaap or Chicken Kosha',
            'Chhanar Dalna / Veg Navratan Korma (Vegetarian guests)',
          ],
        },
        {
          heading: 'Desserts & Sweets',
          items: [
            'Traditional Baked Rosogolla',
            'Mishti Doi (in traditional clay pots)',
            'Vanilla Ice Cream with Hot Chocolate sauce',
          ],
        },
      ],
    },
    {
      id: 'package-b',
      code: 'Package B',
      fullName: 'Package B: The Grand Imperial Royal Spread (Premium Non-Veg)',
      name: 'The Grand Imperial Royal Spread (Premium Non-Veg)',
      bestFor: 'Grand Weddings & Premium Receptions',
      badge: 'Most Requested Imperial',
      popular: true,
      sections: [
        {
          heading: 'Welcome Drinks & Brews',
          items: [
            'Blue Lagoon Citrus Cooler',
            'Fresh Tender Coconut Water',
            'Live Turkish Sand Coffee Counter',
          ],
        },
        {
          heading: 'Live Starter Theatres',
          items: [
            'Kolkata Style Phuchka & Papri Chaat Bar (3 flavors of spiced water)',
            'Live Tandoor: Chicken Reshmi Kebab, Murgh Malai Tikka, Tandoori Fish Tikka',
            'Veg Starters: Crispy Baby Corn, Dahi ke Kebab, Paneer Shashlik',
          ],
        },
        {
          heading: 'Breads, Rice & Biryani',
          items: [
            'Assorted Naan (Butter, Garlic) & Laccha Paratha',
            'Kolkata Dum Mutton Biryani (with soft egg & melt-in-mouth aloo)',
            'Shahi Kaju-Kishmish Pulao',
          ],
        },
        {
          heading: 'Royal Seafood & Meat Mains',
          items: [
            'Kolkata Bhetki Paturi (steamed in banana leaf) OR Daab Chingri (Jumbo prawn in coconut)',
            'Signature Slow-Cooked Mutton Kosha (tender meat in rich gravy)',
            'Paneer Lababdar & Dal Bukhara (Vegetarian alternatives)',
          ],
        },
        {
          heading: 'Desserts & Confectionery',
          items: [
            'Live Malpua with Rabri / Live Jilebi Counter',
            'Nolen Gur Sandesh / Kesar Rasmalai',
            'Matka Kulfi with Faluda',
            'Sweet Pan Counter (Banarasi / Fire Pan)',
          ],
        },
      ],
    },
    {
      id: 'package-c',
      code: 'Package C',
      fullName: 'Package C: Pure Vegetarian Shubh Vivah Spread',
      name: 'Pure Vegetarian Shubh Vivah Spread',
      bestFor: 'Sangeet, Pooja, Haldi, Marwari / Jain Celebrations',
      badge: 'Sattvic Grandeur',
      sections: [
        {
          heading: 'Welcome Drinks',
          items: ['Kesariya Thandai', 'Royal Rose Sherbet & Sabja', 'Fresh Fruit Coolers'],
        },
        {
          heading: 'Artisanal Starters',
          items: [
            'Dahi Puchka & Palak Patta Chaat Bar',
            'Paneer Tikka Angara with Mint Coulis',
            'Hara Bhara Kebab with Spiced Cashew',
          ],
        },
        {
          heading: 'Royal Vegetarian Mains',
          items: [
            'Jodhpuri Dal Baati Churma with Pure Desi Ghee',
            'Paneer Pasanda / Shahi Paneer in Cashew Cream',
            'Gatte Ki Sabzi / Kashmiri Dum Aloo',
            'Panchmel Dal & Fragrant Kesar Jeera Rice',
          ],
        },
        {
          heading: 'Breads',
          items: ['Missi Roti', 'Butter Naan', 'Tandoori Kulcha'],
        },
        {
          heading: 'Traditional Sweets',
          items: [
            'Warm Moong Dal Halwa with Gold Leaf',
            'Kesari Jalebi with Creamy Rabri',
            'Traditional Rajasthani Ghewar',
          ],
        },
      ],
    },
  ];

  // =========================================================================
  // 5. CATERING PRICING GUIDE (BENCHMARKS)
  // =========================================================================
  const pricingGuide = [
    {
      category: 'Standard Vegetarian',
      highlights: '2 Starters + Pulao/Breads + 2 Mains + Chutney + 2 Sweets',
    },
    {
      category: 'Classic Non-Vegetarian',
      highlights: 'Fish Starter + Chicken Main + Fish/Katla + Pulao + Sweets',
    },
    {
      category: 'Royal Multi-Cuisine',
      highlights: '4 Starters + Live Chaat + Bhetki + Mutton Kosha + Sweets',
    },
    {
      category: 'Luxury Imperial Banquet',
      highlights: 'Bhetki Paturi + Chingri Malai Curry + Mutton Biryani + Live Counters',
    },
  ];

  const handleSelectPackage = (pkgFullName) => {
    setSelectedPackage(pkgFullName);
    const formElement = document.getElementById('catering-enquiry-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FAF8F5] dark:bg-[#141210] min-h-screen text-[#2B2625] dark:text-[#FAF8F5] transition-colors">
      
      {/* ========================================================================= */}
      {/* 1. PREMIUM CATERING HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative min-h-[90vh] lg:min-h-[92vh] flex flex-col justify-between bg-[#141210] text-white overflow-hidden">
        {/* Background Food Photography with Cinematic Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1920&q=80"
            alt="Royal Enterprise Gourmet Wedding Catering and Banquet Setup in Kolkata"
            className="w-full h-full object-cover filter brightness-[0.4] contrast-[1.12] scale-105 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-black/55 to-black/80" />
          <div className="absolute inset-0 bg-radial from-transparent via-black/30 to-black/75" />
        </div>

        {/* Top Spacer for Fixed Nav */}
        <div className="pt-32 sm:pt-40" />

        {/* Center Content */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 text-center my-auto py-12">
          <div className="max-w-4xl mx-auto space-y-6">
            
            <div className="inline-flex items-center space-x-2.5 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 text-[#E0CFA6]">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold">
                Kolkata & Eastern India • In-House Gourmet Feasts
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-tight leading-[1.08]">
              Gourmet Feasts Fit For <br />
              <span className="italic font-serif text-[#E0CFA6]">Royal Celebrations.</span>
            </h1>

            <p className="font-serif text-lg sm:text-2xl text-[#E0CFA6] font-light max-w-2xl mx-auto">
              "We cook the food ourselves. Nothing is outsourced to a stranger’s kitchen."
            </p>

            <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/85 font-light leading-relaxed">
              From crispy Kolkata Bhetki fry and slow-simmered Mutton Kosha to fragrant Awadhi dum biryanis and dedicated pure-veg Marwari kitchens — cooked fresh on site by our veteran bawarchis.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  const el = document.getElementById('signature-menus');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-maroon px-8 py-3.5 text-xs uppercase tracking-wider font-semibold shadow-lg"
              >
                Explore Signature Menus
              </Button>

              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  const el = document.getElementById('menu-explorer');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 text-xs uppercase tracking-wider font-semibold border-white/30 text-white hover:bg-white/15 backdrop-blur-sm"
              >
                Browse All Dishes
              </Button>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Royal%20Enterprise,%20I%20would%20like%20to%20discuss%20our%20catering%20menu.`}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp px-6 py-3.5 text-xs uppercase tracking-wider font-semibold inline-flex items-center space-x-2 shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>
        </div>

        {/* Bottom Banner Indicators */}
        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-4 sm:px-6 pb-8 pt-4">
          <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-white/80">
            <div className="flex items-center space-x-3">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>100% In-house preparation. Never outsourced.</span>
            </div>
            <div className="flex items-center space-x-3">
              <Leaf className="w-4 h-4 text-[#C5A059]" />
              <span>Dedicated separate kitchens for pure-veg banquets</span>
            </div>
            <div className="flex items-center space-x-3">
              <Utensils className="w-4 h-4 text-[#C5A059]" />
              <span>Complimentary pre-wedding live menu tastings</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Flow */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-24 sm:py-32 space-y-28 sm:space-y-36">

        {/* ========================================================================= */}
        {/* 2. LUXURY FOOD SHOWCASE SECTION */}
        {/* ========================================================================= */}
        <section id="food-showcase">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2">
              <span className="w-6 h-px bg-[#C5A059]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#6B1D2F] dark:text-[#E0CFA6]">
                Culinary Artistry
              </span>
              <span className="w-6 h-px bg-[#C5A059]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#2B2625] dark:text-[#FAF8F5] font-normal tracking-tight leading-[1.12]">
              Honest Ingredients. <br />
              <span className="italic font-serif text-[#6B1D2F] dark:text-[#E0CFA6]">Unforgettable Flavours.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#5A524E] dark:text-[#D4CCC2] font-light leading-relaxed">
              Every dish is freshly prepared at your venue by our veteran bawarchis using pure mustard oil, morning-fresh Kolkata fish, and traditional slow-cooked spices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {foodHighlights.map((item, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl overflow-hidden border border-[#E8E0D5] dark:border-[#38312B] bg-white dark:bg-[#1C1917] shadow-sm hover:shadow-xl transition-all duration-500 group ${item.aspect}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[10px] uppercase tracking-wider font-semibold text-[#E0CFA6]">
                  {item.tag}
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/80 font-light">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. CATERING DISCIPLINES (ALTERNATING EDITORIAL SHOWCASE) */}
        {/* ========================================================================= */}
        <section id="catering-disciplines">
          <SectionHeader
            badge="Catering Disciplines"
            title="Traditions and Formats We Specialize In"
            subtitle="From legendary Bengali Biye Bari courses to clay-oven grills, live theatres, and dedicated vegetarian kitchens."
          />

          <div className="space-y-20 sm:space-y-28 pt-8">
            {cateringDisciplines.map((item, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={item.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
                >
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-7 relative group ${
                      isEven ? 'order-1 lg:order-2' : 'order-1'
                    }`}
                  >
                    <div className="relative rounded-2xl overflow-hidden border border-[#E8E0D5] dark:border-[#38312B] bg-white dark:bg-[#1C1917] shadow-xl aspect-[16/10]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.96]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#E0CFA6]">
                          {item.badge}
                        </span>
                        <span className="text-[11px] bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                          Fresh On-Site Preparation
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Text Column */}
                  <div
                    className={`lg:col-span-5 space-y-5 ${
                      isEven ? 'order-2 lg:order-1' : 'order-2'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#6B1D2F] dark:text-[#E0CFA6] flex items-center space-x-2">
                        <Utensils className="w-4 h-4" />
                        <span>Pillar {item.num} • {item.badge}</span>
                      </span>
                      <span className="font-serif text-5xl font-light text-[#C5A059]/25 select-none">
                        {item.num}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2625] dark:text-[#FAF8F5] leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#C5A059] font-semibold">
                      {item.subtitle}
                    </p>

                    <p className="text-xs sm:text-[13.5px] text-[#5A524E] dark:text-[#D4CCC2] font-light leading-relaxed">
                      {item.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      {item.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-center space-x-2 text-xs text-[#2B2625] dark:text-[#D4CCC2]">
                          <Check className="w-3.5 h-3.5 text-[#6B1D2F] dark:text-[#C5A059] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={() => handleSelectPackage('Package B: The Grand Imperial Royal Spread (Premium Non-Veg)')}
                        className="btn-outline px-5 py-2.5 text-xs font-semibold inline-flex items-center space-x-1.5"
                      >
                        <span>Inquire For This Menu</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. PREMIUM DINING EXPERIENCE (SPLIT-SCREEN SECTION) */}
        {/* ========================================================================= */}
        <section id="dining-experience" className="bg-white dark:bg-[#1C1917] rounded-3xl border border-[#E8E0D5] dark:border-[#38312B] overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Side: Large Luxury Dining Photography */}
            <div className="lg:col-span-6 relative min-h-[420px] lg:min-h-[580px]">
              <img
                src="/images/hero-stage.png"
                alt="Royal Enterprise Luxurious Dining Setup & Banquet Table Arrangement"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 text-white">
                <span className="text-xs font-serif italic text-[#E0CFA6] block">The Dining Standard</span>
                <span className="text-[11px] font-semibold text-white">Fine Bone China & Polished Serviceware</span>
              </div>
            </div>

            {/* Right Side: Editorial Content */}
            <div className="lg:col-span-6 p-8 sm:p-14 lg:p-16 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2">
                  <span className="w-6 h-px bg-[#C5A059]" />
                  <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#6B1D2F] dark:text-[#E0CFA6]">
                    Hospitality & Tablecraft
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#2B2625] dark:text-[#FAF8F5] leading-tight">
                  The Art of Refined <br />
                  <span className="italic font-serif text-[#6B1D2F] dark:text-[#E0CFA6]">Banquet Hospitality.</span>
                </h2>

                <p className="text-xs sm:text-sm text-[#5A524E] dark:text-[#D4CCC2] font-light leading-relaxed">
                  Great catering is not merely what is on the plate—it is the grace with which your guests are received, the warmth of the serving captains, and the immaculate presentation of the dining floor.
                </p>
              </div>

              {/* 4 Pillars of Tablecraft */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-[#2B2625] dark:text-[#D4CCC2]">
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-2 text-[#6B1D2F] dark:text-[#C5A059] font-bold">
                    <Award className="w-4 h-4" />
                    <span>Fine Serviceware</span>
                  </div>
                  <p className="text-[#5A524E] dark:text-[#A8A29E] font-light leading-relaxed">
                    Fine bone china, polished copper buffet warmers, and hammered brass handis.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center space-x-2 text-[#6B1D2F] dark:text-[#C5A059] font-bold">
                    <ChefHat className="w-4 h-4" />
                    <span>Trained Stewards</span>
                  </div>
                  <p className="text-[#5A524E] dark:text-[#A8A29E] font-light leading-relaxed">
                    Polite, uniformed bilingual serving captains and swift clearing staff.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center space-x-2 text-[#6B1D2F] dark:text-[#C5A059] font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Sanitized Holding</span>
                  </div>
                  <p className="text-[#5A524E] dark:text-[#A8A29E] font-light leading-relaxed">
                    Temperature-monitored holding units and strict kitchen cleanliness.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center space-x-2 text-[#6B1D2F] dark:text-[#C5A059] font-bold">
                    <GlassWater className="w-4 h-4" />
                    <span>Beverage Care</span>
                  </div>
                  <p className="text-[#5A524E] dark:text-[#A8A29E] font-light leading-relaxed">
                    Branded packaged water dispensers and imported glassware for mocktails.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8E0D5] dark:border-[#38312B]">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    const el = document.getElementById('catering-enquiry-form');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-maroon px-7 py-3 text-xs uppercase tracking-wider font-semibold"
                >
                  Reserve Your Event Date
                </Button>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. SIGNATURE MENUS (PRESERVED DATA & LOGIC) */}
        {/* ========================================================================= */}
        <section id="signature-menus">
          <SectionHeader
            badge="Signature Feasts"
            title="Our Most Requested Banquet Spreads"
            subtitle="Curated menu sequences featuring authentic Kolkata Bhetki, slow-cooked Mutton Kosha, and hot artisanal mishti."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {signaturePackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-white dark:bg-[#1C1917] border-2 border-[#6B1D2F] dark:border-[#C5A059] shadow-xl'
                    : 'bg-white dark:bg-[#1C1917] border border-[#E8E0D5] dark:border-[#38312B] hover:border-[#6B1D2F]/40 dark:hover:border-[#C5A059]/50 shadow-sm'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#6B1D2F] text-white font-semibold text-xs px-4 py-1 rounded-full shadow-md flex items-center">
                    <Crown className="w-3.5 h-3.5 mr-1 text-[#E0CFA6]" />
                    {pkg.badge}
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <span className="text-xs font-semibold text-[#6B1D2F] dark:text-[#E0CFA6] block mb-1">
                      {pkg.code}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#2B2625] dark:text-[#FAF8F5] mb-2 leading-snug">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-[#5A524E] dark:text-[#D4CCC2] bg-[#FAF8F5] dark:bg-[#141210] p-3 rounded-xl border border-[#E8E0D5] dark:border-[#38312B] font-light">
                      <strong className="text-[#2B2625] dark:text-[#FAF8F5] font-semibold">Best for:</strong> {pkg.bestFor}
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {pkg.sections.map((sec, secIdx) => (
                      <div key={secIdx} className="border-b border-[#E8E0D5] dark:border-[#38312B] pb-3 last:border-b-0">
                        <h5 className="text-xs font-semibold text-[#6B1D2F] dark:text-[#E0CFA6] mb-2">
                          {sec.heading}:
                        </h5>
                        <ul className="space-y-1.5 text-xs text-[#5A524E] dark:text-[#D4CCC2] font-light">
                          {sec.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-[#C5A059] mr-2 mt-1.5 shrink-0 rotate-45" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  variant={pkg.popular ? 'primary' : 'outline'}
                  size="md"
                  onClick={() => handleSelectPackage(pkg.fullName)}
                  className="w-full"
                >
                  Choose Menu & Request Tasting
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. EDITORIAL CATERING PHOTOGRAPHY GALLERY WITH LIGHTBOX */}
        {/* ========================================================================= */}
        <section id="catering-gallery">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center space-x-2">
                <span className="w-6 h-px bg-[#C5A059]" />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#6B1D2F] dark:text-[#E0CFA6]">
                  Culinary Portfolio
                </span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#2B2625] dark:text-[#FAF8F5] font-normal">
                Feast Presentation & Tablecraft
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setGalleryCategory(cat)}
                  className={`text-xs uppercase tracking-wider font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                    galleryCategory === cat
                      ? 'bg-[#6B1D2F] text-white shadow-sm'
                      : 'bg-white dark:bg-[#1C1917] text-[#5A524E] dark:text-[#D4CCC2] border border-[#E8E0D5] dark:border-[#38312B] hover:border-[#6B1D2F]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[260px] sm:auto-rows-[280px]">
            {filteredGallery.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className={`group relative rounded-2xl overflow-hidden border border-[#E8E0D5] dark:border-[#38312B] bg-white dark:bg-[#1C1917] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer ${item.aspect}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md text-[#E0CFA6] border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <Plus className="w-4 h-4 stroke-[2]" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#E0CFA6] block mb-1">
                    {item.category} • {item.location}
                  </span>
                  <h4 className="font-serif text-lg font-bold leading-snug">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. INTERACTIVE DISH EXPLORER */}
        {/* ========================================================================= */}
        <section id="menu-explorer" className="bg-white dark:bg-[#1C1917] border border-[#E8E0D5] dark:border-[#38312B] rounded-2xl p-8 sm:p-14 shadow-sm">
          <SectionHeader
            badge="Full Culinary Repertoire"
            title="Browse Our Dish Library"
            subtitle="Explore our traditional Bengali fish courses, royal dum biryanis, clay-oven kebabs, and artisanal sweets."
          />
          <CateringMenuSection />
        </section>

        {/* ========================================================================= */}
        {/* 8. CATERING PRICING GUIDE */}
        {/* ========================================================================= */}
        <section id="pricing-guide" className="bg-white dark:bg-[#1C1917] border border-[#E8E0D5] dark:border-[#38312B] rounded-2xl p-8 sm:p-14 shadow-sm">
          <SectionHeader
            badge="Menu Benchmarks"
            title="Catering Menu Guide"
            subtitle="Standard course breakdowns to help plan your wedding or milestone banquet."
          />

          <div className="overflow-x-auto rounded-xl border border-[#E8E0D5] dark:border-[#38312B] bg-[#FAF8F5] dark:bg-[#141210]">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead className="bg-[#FAF8F5] dark:bg-[#1C1917] text-[#6B1D2F] dark:text-[#E0CFA6] uppercase tracking-[0.16em] font-semibold border-b border-[#E8E0D5] dark:border-[#38312B]">
                <tr>
                  <th className="p-4 border-r border-[#E8E0D5] dark:border-[#38312B] text-[11px] w-1/3">Package Category</th>
                  <th className="p-4 text-[11px]">Typical Menu Highlights</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E0D5] dark:divide-[#38312B] text-[#2B2625] dark:text-[#D4CCC2]">
                {pricingGuide.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/60 dark:hover:bg-[#1C1917]/60 transition-colors">
                    <td className="p-4 font-semibold text-[#2B2625] dark:text-[#FAF8F5] border-r border-[#E8E0D5] dark:border-[#38312B]">{row.category}</td>
                    <td className="p-4 font-light text-[#5A524E] dark:text-[#D4CCC2] leading-relaxed">{row.highlights}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-xs text-[#827771] dark:text-[#A8A29E] italic mt-6 font-light">
            (Note: Pricing adjusts based on guest count, fish selection such as Vetki vs. Katla, and live counter additions).
          </p>
        </section>

        {/* ========================================================================= */}
        {/* 9. DEDICATED CATERING ENQUIRY FORM */}
        {/* ========================================================================= */}
        <section id="catering-enquiry-form" className="max-w-4xl mx-auto pt-6">
          <SectionHeader
            badge="Menu Consultation"
            title="Reserve Your Catering Date"
            subtitle="Submit your menu preferences and guest count. Our master culinary director will prepare an exquisite, itemized menu tasting proposal."
          />
          <CateringEnquiryForm initialPackage={selectedPackage} />
        </section>

      </div>

      {/* Full-Screen Lightbox for Catering Gallery */}
      {lightboxIndex !== null && filteredGallery[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="flex items-center justify-between text-white/80 max-w-[1280px] w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-xs uppercase tracking-[0.2em] text-[#E0CFA6] font-mono">
              0{lightboxIndex + 1} / 0{filteredGallery.length}
            </div>
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div
            className="relative flex items-center justify-center my-auto max-w-5xl mx-auto w-full h-[70vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredGallery[lightboxIndex].image}
              alt={filteredGallery[lightboxIndex].title}
              className="max-h-full max-w-full object-contain rounded-lg shadow-2xl animate-fade-in"
            />
            <button
              type="button"
              onClick={() =>
                setLightboxIndex(
                  (lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length
                )
              }
              className="absolute left-2 sm:-left-16 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={() =>
                setLightboxIndex((lightboxIndex + 1) % filteredGallery.length)
              }
              className="absolute right-2 sm:-right-16 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div
            className="text-center text-white max-w-xl mx-auto pb-4"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-[#E0CFA6] font-semibold block mb-1">
              {filteredGallery[lightboxIndex].category} • {filteredGallery[lightboxIndex].location}
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-normal text-white">
              {filteredGallery[lightboxIndex].title}
            </h4>
          </div>
        </div>
      )}

    </div>
  );
};

export default Catering;