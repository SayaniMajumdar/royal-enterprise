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

  // 1. Culinary Styles & Formats Offered
  const culinaryStyles = [
    {
      title: 'Traditional Bengali Wedding Feasts (Biye Bari & Boubhat)',
      subtitle: 'Heritage sequencing & authentic Kolkata recipes',
      description:
        'Authentic sequencing from Gondhoraj drinks to pure Bhetki fry, Basanti pulao, slow-simmered mutton kosha, and seasonal artisanal mishti.',
      badge: 'Heritage Bengal',
      icon: Utensils,
    },
    {
      title: 'North Indian, Mughlai & Awadhi Banquets',
      subtitle: 'Royal clay-oven kebabs & fragrant dum biryanis',
      description:
        'Charcoal tandoori grills, dum biryanis sealed with dough, slow-cooked royal kormas, and rich velvety cashew gravies.',
      badge: 'Awadhi Royalty',
      icon: Flame,
    },
    {
      title: 'Marwari & Pure Vegetarian Feasts',
      subtitle: 'Dedicated separate-kitchen setups & sattvic purity',
      description:
        'Dedicated separate-kitchen setups with Jodhpuri Dal Baati Churma, Ker Sangri, Shahi Paneer, and live sweet kesariya jalebi counters.',
      badge: 'Pure Vegetarian',
      icon: Leaf,
    },
    {
      title: 'Live Global Counters',
      subtitle: 'Interactive live culinary theatres',
      description:
        'Wood-fired artisanal pizzas, toss-to-order Italian pasta bars, wok-tossed Pan-Asian noodles/dim sums, and street-style live chaat setups.',
      badge: 'World Cuisine',
      icon: ChefHat,
    },
    {
      title: 'Corporate Executive Buffets',
      subtitle: 'Pristine hygiene & executive health menus',
      description:
        'Balanced, hygienic, and calorie-conscious boxed and buffet meals for summits, seminars, board meetings, and corporate galas.',
      badge: 'Corporate Standard',
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
    <div className="bg-navy-950 min-h-screen text-slate-100 selection:bg-gold-500 selection:text-navy-950">
      {/* ========================================================================= */}
      {/* HERO BANNER */}
      {/* ========================================================================= */}
      <section className="relative py-24 sm:py-32 overflow-hidden border-b border-gold-500/15">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1920&q=80"
            alt="Royal Enterprise Gourmet Catering Hero"
            className="w-full h-full object-cover filter brightness-[0.32] contrast-[1.05] scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/75 to-navy-950/85" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2.5 bg-[#090E1B]/85 border border-gold-400/30 px-4 py-1.5 rounded-[2px] mb-7 shadow-sm">
            <Crown className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-gold-300 font-semibold">
              Division II • Gourmet Heritage Catering
            </span>
            <Sparkles className="w-3.5 h-3.5 text-gold-400/80" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-slate-100 tracking-tight mb-4">
            Catering Services
          </h1>
          <p className="font-editorial italic text-gold-300/90 text-xl sm:text-2xl md:text-3xl font-normal mb-6">
            "Exceptional Food, Unforgettable Experiences."
          </p>
          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-slate-300 font-light leading-relaxed mb-9">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-28">
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
                  className="bg-[#090E1B]/80 border border-slate-800/80 rounded-[3px] p-7 hover:border-gold-500/35 transition-all duration-300 flex flex-col justify-between group shadow-md hover:-translate-y-0.5"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-[2px] bg-navy-950 border border-gold-400/30 flex items-center justify-center text-gold-400 group-hover:border-gold-300 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[9.5px] uppercase tracking-[0.16em] font-semibold px-2.5 py-1 rounded-[2px] bg-navy-950 border border-slate-800 text-gold-300">
                        {style.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-slate-100 mb-1.5 group-hover:text-gold-300 transition-colors tracking-wide">
                      {style.title}
                    </h3>
                    <p className="text-xs text-gold-400/90 font-medium mb-3">
                      {style.subtitle}
                    </p>
                    <p className="text-xs sm:text-[13px] text-slate-300/90 leading-relaxed font-light">
                      {style.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center text-[10.5px] uppercase tracking-wider text-slate-400 font-light">
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
                className={`relative rounded-[3px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-[#0B1020] border-2 border-gold-400/80 shadow-[0_12px_40px_rgba(0,0,0,0.7)]'
                    : 'bg-[#090E1B]/80 border border-slate-800/80 hover:border-gold-500/35 shadow-md'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-navy-950 font-bold text-[9.5px] uppercase tracking-[0.2em] px-4 py-1 rounded-[2px] shadow-md flex items-center">
                    <Crown className="w-3 h-3 mr-1" />
                    {pkg.badge}
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold-400 block mb-1">
                      {pkg.code}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-100 mb-2 tracking-wide">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-slate-300 bg-navy-950/80 p-2.5 rounded-[2px] border border-slate-800 font-light">
                      <strong className="text-gold-300 font-semibold">Best for:</strong> {pkg.bestFor}
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {pkg.sections.map((sec, secIdx) => (
                      <div key={secIdx} className="border-b border-slate-800/80 pb-3 last:border-b-0">
                        <h5 className="text-[11px] uppercase tracking-[0.14em] font-bold text-gold-400/90 mb-2">
                          {sec.heading}:
                        </h5>
                        <ul className="space-y-1.5 text-xs text-slate-300 font-light">
                          {sec.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-gold-400/80 mr-2 mt-1.5 shrink-0 rotate-45" />
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
                  Select & Request Quote
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. INTERACTIVE DISH EXPLORER (Category Wise with Veg / Non-Veg Toggle) */}
        {/* ========================================================================= */}
        <section id="menu-explorer" className="bg-[#080C16] border border-slate-800/80 rounded-[3px] p-8 sm:p-12 shadow-sm">
          <SectionHeader
            badge="Culinary Repertoire"
            title="Interactive Dish Explorer"
            subtitle="Browse our comprehensive menu repertoire across appetizers, master chef curries, artisanal sweets, and craft coolers."
          />
          <CateringMenuSection />
        </section>

        {/* ========================================================================= */}
        {/* 4. CATERING PRICING GUIDE (Market Benchmarks) */}
        {/* ========================================================================= */}
        <section id="pricing-guide" className="bg-[#080C16] border border-slate-800/80 rounded-[3px] p-8 sm:p-12 shadow-sm">
          <SectionHeader
            badge="Budget Benchmarks"
            title="Catering Pricing Guide"
            subtitle="Estimated market benchmarks for classic feasts and luxury multi-counter formats."
          />

          <div className="overflow-x-auto rounded-[2px] border border-slate-800/80 bg-[#090E1B]">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead className="bg-[#050811] text-gold-300 uppercase tracking-[0.14em] font-semibold border-b border-slate-800">
                <tr>
                  <th className="p-4 border-r border-slate-800 text-[11px]">Package Category</th>
                  <th className="p-4 border-r border-slate-800 text-[11px]">Typical Menu Highlights</th>
                  <th className="p-4 border-r border-slate-800 text-[11px]">Target Guest Scale</th>
                  <th className="p-4 text-[11px]">Service Format</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                {pricingGuide.map((row, idx) => (
                  <tr key={idx} className="hover:bg-navy-900/60 transition-colors">
                    <td className="p-4 font-bold text-slate-100 border-r border-slate-800">{row.category}</td>
                    <td className="p-4 border-r border-slate-800 font-light">{row.highlights}</td>
                    <td className="p-4 border-r border-slate-800 font-semibold text-gold-300">{row.guestTier}</td>
                    <td className="p-4 font-light">{row.serviceType}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-xs text-slate-400 italic mt-6 font-light">
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
                  className="p-6 bg-[#090E1B]/80 border border-slate-800/80 rounded-[3px] hover:border-gold-500/35 transition-colors flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="w-10 h-10 rounded-[2px] bg-navy-950 border border-gold-400/30 flex items-center justify-center mb-4 text-gold-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif font-bold text-base text-slate-100 mb-2 tracking-wide">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-3 mt-4 border-t border-slate-800/80 text-[10px] text-gold-400 font-semibold uppercase tracking-[0.14em]">
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
