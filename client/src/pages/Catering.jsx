import React, { useState } from 'react';
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
} from 'lucide-react';

const Catering = () => {
  const [selectedPackage, setSelectedPackage] = useState(
    'Package B: The Grand Imperial Royal Spread (Premium Non-Veg)'
  );

  // 1. Culinary Styles & Formats Offered (No duplicate phrases, honest specifics)
  const culinaryStyles = [
    {
      title: 'Traditional Bengali Wedding Feasts',
      subtitle: 'Biye Bari and Boubhat banquets',
      description:
        'Sequenced with cold-pressed mustard oil and fresh fish. Gondhoraj coolers, pure Kolkata Bhetki fry with kasundi, Basanti pulao, slow-simmered Kosha Mangsho, and hot Nolen gur mishti.',
      badge: 'Heritage Bengal',
      price: '₹1,150 – ₹1,850 / plate',
      icon: Utensils,
    },
    {
      title: 'North Indian & Awadhi Banquets',
      subtitle: 'Clay-oven grills and dum biryanis',
      description:
        'Charcoal tandoori kebabs, fragrant dum biryanis sealed with dough, slow-cooked mutton rogan josh, and overnight charcoal-simmered Dal Bukhara.',
      badge: 'Awadhi Royalty',
      price: '₹1,450 – ₹2,400 / plate',
      icon: Flame,
    },
    {
      title: 'Marwari & Pure Vegetarian Feasts',
      subtitle: 'Dedicated separate-kitchen setups',
      description:
        'Prepared using dedicated vegetarian cookware and staff. Authentic Rajasthani Dal Baati Churma with pure desi ghee, Ker Sangri, Shahi Paneer, and live hot Kesariya jalebis.',
      badge: 'Pure Vegetarian',
      price: '₹850 – ₹1,400 / plate',
      icon: Leaf,
    },
    {
      title: 'Live Chef Counters & Street Food',
      subtitle: 'Freshly cooked to order',
      description:
        'Live Kolkata puchka counters with 4 flavored waters, tossed-to-order Italian pastas, wok-prepared Asian delicacies, and live hot malpua and rabdi stations.',
      badge: 'Interactive Counters',
      price: 'Add-on from ₹180 / plate',
      icon: ChefHat,
    },
    {
      title: 'Corporate Executive Buffets',
      subtitle: 'Pristine hygiene and punctual service',
      description:
        'Nutritionally balanced hot buffet spreads and boxed executive meals for leadership summits, shareholder meetings, and corporate award dinners.',
      badge: 'Corporate Standard',
      price: '₹650 – ₹1,200 / plate',
      icon: ShieldCheck,
    },
  ];

  // 2. Signature Catering Packages & Menus
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
            'Kolkata Bhetki Paturi (steamed in banana leaf) OR Daab Chingri (Jumbo prawn in tender coconut)',
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

  // 3. Catering Pricing Guide (Market Benchmarks)
  const pricingGuide = [
    {
      category: 'Standard Vegetarian',
      highlights: '2 Starters + Pulao/Breads + 2 Mains + Chutney + 2 Sweets',
      guestTier: '100 - 500 Guests',
      serviceType: 'Buffet with Live Tandoor',
    },
    {
      category: 'Classic Non-Vegetarian',
      highlights: 'Fish Starter + Chicken Main + Fish/Katla + Pulao + 3 Sweets',
      guestTier: '150 - 800 Guests',
      serviceType: 'Buffet + Plated Fish Service',
    },
    {
      category: 'Royal Multi-Cuisine',
      highlights: '4 Starters + Live Chaat + Bhetki + Mutton Kosha + 4 Sweets',
      guestTier: '200 - 1500 Guests',
      serviceType: 'Multi-Thematic Counter Service',
    },
    {
      category: 'Luxury Imperial Banquet',
      highlights: 'Bhetki Paturi + Chingri Malai Curry + Mutton Biryani + Live Dessert Counters',
      guestTier: '250 - 3000+ Guests',
      serviceType: 'Imperial Butler & Live Cooking Theatres',
    },
  ];

  // 4. Kitchen Standards & Logistics Included
  const kitchenStandards = [
    {
      icon: ShieldCheck,
      title: 'Strict Hygiene Standards',
      description:
        'Gloves, chef caps, sanitized utensils, regular temperature-monitored holding units, and purified water wash cycles.',
    },
    {
      icon: Award,
      title: 'Premium Royal Crockery',
      description:
        'Fine bone china dinner plates, polished copper buffet warmers, hammered brass handi serving pieces, and heavy silver cutlery.',
    },
    {
      icon: ChefHat,
      title: 'Trained & Uniformed Waitstaff',
      description:
        'Polite, bilingual serving stewards, dedicated floor captains, and swift clearing teams maintaining spotless dining areas.',
    },
    {
      icon: GlassWater,
      title: 'Water & Beverage Management',
      description:
        'Packaged branded drinking water dispensers, specialized ice carving stations, and imported glassware for mocktails and juices.',
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
    <div className="bg-white dark:bg-[#141210] min-h-screen text-[#1F2937] dark:text-[#FAF7F2]">
      {/* ========================================================================= */}
      {/* HERO BANNER */}
      {/* ========================================================================= */}
      <section className="bg-charcoal text-[#FFF8F0] relative py-24 sm:py-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1920&q=80"
            alt="Royal Enterprise Gourmet Catering Hero"
            className="w-full h-full object-cover filter brightness-[0.38] contrast-[1.08] scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center">
          <div className="inline-flex items-center space-x-2.5 mb-5">
            <span className="w-5 h-px bg-gold-light/60" />
            <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.26em] text-gold-light font-medium">
              Division II • Gourmet Heritage Catering
            </span>
            <span className="w-5 h-px bg-gold-light/60" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#FFF8F0] tracking-tight mb-4">
            Catering Services
          </h1>
          <p className="font-editorial italic text-gold-light text-xl sm:text-2xl md:text-3xl font-normal mb-6">
            "Food as Performing Art & Royal Banqueting."
          </p>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/80 font-light leading-relaxed mb-9">
            Royal Enterprise delivers authentic heritage feasts, modern multi-cuisine spreads, and live interactive food stations for weddings, corporate galas, and private celebrations. We emphasize food hygiene, fresh sourcing, live on-site preparation, and uniformed hospitality staff.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="primary"
              size="md"
              onClick={() => {
                const el = document.getElementById('signature-menus');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Signature Packages
            </Button>
            <Button
              variant="outline"
              size="md"
              onClick={() => {
                const el = document.getElementById('menu-explorer');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Interactive Dish Explorer
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 py-20 space-y-28">
        {/* ========================================================================= */}
        {/* 1. CULINARY STYLES & FORMATS OFFERED */}
        {/* ========================================================================= */}
        <section id="culinary-styles">
          <SectionHeader
            badge="Culinary Breadth"
            title="Culinary Styles & Formats Offered"
            subtitle="From legendary Bengali Biye Bari traditions and charcoal Awadhi grills to pure Marwari kitchens and live Pan-Asian stations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {culinaryStyles.map((style, idx) => {
              const Icon = style.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FFFDF9] dark:bg-[#1C1917] border border-[#E8E1D5] dark:border-[#38312B] rounded-[4px] p-7 hover:border-gold-base/50 dark:hover:border-gold-light/50 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:-translate-y-1 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-full bg-[#FAF8F4] dark:bg-[#141210] border border-gold-dark/30 dark:border-gold-light/30 flex items-center justify-center text-gold-dark dark:text-gold-light">
                        <Icon className="w-5 h-5 stroke-[1.5]" />
                      </div>
                      <span className="text-[9.5px] uppercase tracking-[0.16em] font-semibold px-2.5 py-1 rounded-[2px] bg-[#FAF8F4] dark:bg-[#141210] border border-[#E8E1D5] dark:border-[#38312B] text-gold-dark dark:text-gold-light">
                        {style.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-normal text-[#141414] dark:text-[#FAF7F2] mb-1.5 group-hover:text-maroon dark:group-hover:text-gold-light transition-colors tracking-wide">
                      {style.title}
                    </h3>
                    <p className="text-xs text-gold-dark dark:text-gold-light font-medium mb-3">
                      {style.subtitle}
                    </p>
                    <p className="text-xs sm:text-[13px] text-[#554F47] dark:text-[#A8A29E] leading-relaxed font-light">
                      {style.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-[#E8E1D5]/60 dark:border-[#38312B] flex items-center text-[10.5px] uppercase tracking-wider text-[#6B645C] dark:text-[#A8A29E] font-light">
                    <span>Live Chef Station Supported</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. SIGNATURE CATERING PACKAGES & MENUS */}
        {/* ========================================================================= */}
        <section id="signature-menus">
          <SectionHeader
            badge="The Grand Banquets"
            title="Signature Catering Packages & Menus"
            subtitle="Curated menu sequences featuring authentic Kolkata Bhetki, slow-cooked Mutton Kosha, and artisanal sweet theatres."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {signaturePackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-[4px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-[#FFFDF9] dark:bg-[#1C1917] border-2 border-maroon dark:border-gold-light shadow-md'
                    : 'bg-[#FFFDF9] dark:bg-[#1C1917] border border-[#E8E1D5] dark:border-[#38312B] hover:border-gold-base/50 dark:hover:border-gold-light/50 shadow-sm'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-maroon text-[#FFF8F0] font-medium text-[9.5px] uppercase tracking-[0.2em] px-4 py-1 rounded-[2px] shadow-sm flex items-center">
                    <Crown className="w-3 h-3 mr-1" />
                    {pkg.badge}
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gold-dark dark:text-gold-light block mb-1">
                      {pkg.code}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#141414] dark:text-[#FAF7F2] mb-2 tracking-wide">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-[#554F47] dark:text-[#A8A29E] bg-[#FAF8F4] dark:bg-[#141210] p-2.5 rounded-[2px] border border-[#E8E1D5] dark:border-[#38312B] font-light">
                      <strong className="text-gold-dark dark:text-gold-light font-medium">Best for:</strong> {pkg.bestFor}
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {pkg.sections.map((sec, secIdx) => (
                      <div key={secIdx} className="border-b border-[#E8E1D5] dark:border-[#38312B] pb-3 last:border-b-0">
                        <h5 className="text-[11px] uppercase tracking-[0.14em] font-semibold text-gold-dark dark:text-gold-light mb-2">
                          {sec.heading}:
                        </h5>
                        <ul className="space-y-1.5 text-xs text-[#3A352F] dark:text-[#D5CCC0] font-light">
                          {sec.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-gold-dark dark:bg-gold-light mr-2 mt-1.5 shrink-0 rotate-45" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  variant={pkg.popular ? 'maroon' : 'outline'}
                  size="md"
                  onClick={() => handleSelectPackage(pkg.fullName)}
                  className="w-full"
                >
                  Select & Request Quote
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. INTERACTIVE DISH EXPLORER */}
        {/* ========================================================================= */}
        <section id="menu-explorer" className="bg-[#FFFDF9] dark:bg-[#1C1917] border border-[#E8E1D5] dark:border-[#38312B] rounded-[4px] p-8 sm:p-12 shadow-sm">
          <SectionHeader
            badge="Culinary Repertoire"
            title="Interactive Dish Explorer"
            subtitle="Browse our comprehensive menu repertoire across appetizers, master chef curries, artisanal sweets, and craft coolers."
          />
          <CateringMenuSection />
        </section>

        {/* ========================================================================= */}
        {/* 4. CATERING PRICING GUIDE */}
        {/* ========================================================================= */}
        <section id="pricing-guide" className="bg-[#FFFDF9] dark:bg-[#1C1917] border border-[#E8E1D5] dark:border-[#38312B] rounded-[4px] p-8 sm:p-12 shadow-sm">
          <SectionHeader
            badge="Budget Benchmarks"
            title="Catering Pricing Guide"
            subtitle="Estimated market benchmarks for classic feasts and luxury multi-counter formats."
          />

          <div className="overflow-x-auto rounded-[3px] border border-[#E8E1D5] dark:border-[#38312B] bg-[#FFFDF9] dark:bg-[#1C1917]">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead className="bg-[#FAF8F4] dark:bg-[#141210] text-gold-dark dark:text-gold-light uppercase tracking-[0.16em] font-semibold border-b border-[#E8E1D5] dark:border-[#38312B]">
                <tr>
                  <th className="p-4 border-r border-[#E8E1D5] dark:border-[#38312B] text-[11px]">Package Category</th>
                  <th className="p-4 border-r border-[#E8E1D5] dark:border-[#38312B] text-[11px]">Typical Menu Highlights</th>
                  <th className="p-4 border-r border-[#E8E1D5] dark:border-[#38312B] text-[11px]">Target Guest Scale</th>
                  <th className="p-4 text-[11px]">Service Format</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E1D5] dark:divide-[#38312B] text-[#3A352F] dark:text-[#D5CCC0]">
                {pricingGuide.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF8F4]/60 dark:hover:bg-[#141210]/60 transition-colors">
                    <td className="p-4 font-medium text-[#141414] dark:text-[#FAF7F2] border-r border-[#E8E1D5] dark:border-[#38312B]">{row.category}</td>
                    <td className="p-4 border-r border-[#E8E1D5] dark:border-[#38312B] font-light text-[#554F47] dark:text-[#A8A29E]">{row.highlights}</td>
                    <td className="p-4 border-r border-[#E8E1D5] dark:border-[#38312B] font-medium text-maroon dark:text-gold-light">{row.guestTier}</td>
                    <td className="p-4 font-light text-[#554F47] dark:text-[#A8A29E]">{row.serviceType}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-xs text-[#6B645C] dark:text-[#A8A29E] italic mt-6 font-light">
            (Note: Pricing adjusts based on guest count, fish selection like Vetki vs. Katla, and live counter additions).
          </p>
        </section>

        {/* ========================================================================= */}
        {/* 5. KITCHEN STANDARDS & LOGISTICS INCLUDED */}
        {/* ========================================================================= */}
        <section id="kitchen-standards">
          <SectionHeader
            badge="Hospitality Assurance"
            title="Kitchen Standards & Logistics Included"
            subtitle="We maintain exemplary hygiene, bone china chinaware, and polite stewards for every royal banquet."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {kitchenStandards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-[#FFFDF9] dark:bg-[#1C1917] border border-[#E8E1D5] dark:border-[#38312B] rounded-[4px] hover:border-gold-base/50 dark:hover:border-gold-light/50 transition-colors flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="w-10 h-10 rounded-full bg-[#FAF8F4] dark:bg-[#141210] border border-gold-dark/30 dark:border-gold-light/30 flex items-center justify-center mb-4 text-gold-dark dark:text-gold-light">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <h4 className="font-serif font-normal text-lg text-[#141414] dark:text-[#FAF7F2] mb-2 tracking-wide">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#554F47] dark:text-[#A8A29E] leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-3 mt-4 border-t border-[#E8E1D5]/60 dark:border-[#38312B] text-[10px] text-gold-dark dark:text-gold-light font-semibold uppercase tracking-[0.14em]">
                    Standard with All Menus
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. DEDICATED CATERING ENQUIRY FORM */}
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
    </div>
  );
};

export default Catering;
