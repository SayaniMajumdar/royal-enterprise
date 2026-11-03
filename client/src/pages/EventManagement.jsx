import React, { useState } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import EnquiryForm from '../components/common/EnquiryForm';
import Button from '../components/common/Button';
import {
  Sparkles,
  Building2,
  Palette,
  Volume2,
  Music,
  Camera,
  Users,
  ShieldCheck,
  Check,
  ArrowRight,
  Crown,
  Calendar,
  Layers,
  Award,
  ChevronRight,
} from 'lucide-react';

const EventManagement = () => {
  const [selectedCategory, setSelectedCategory] = useState('Corporate Events & Conferences');
  const [selectedPackage, setSelectedPackage] = useState('Gold Package (Signature)');

  // =========================================================================
  // 1. CORE EVENT CATEGORIES WE HANDLE
  // =========================================================================
  const coreCategories = [
    {
      id: 'corporate',
      title: 'Corporate Events & Conferences',
      subtitle: 'Conferences, leadership summits & award galas',
      description:
        'From leadership summits at luxury hotel ballrooms to annual award nights, our on-ground crew sets up custom stages, high-definition LED screens, acoustic sound, and seating logistics so your leadership team can focus on the event.',
      image:
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80',
      badge: 'Corporate & Summits',
      subServices: [
        {
          name: 'Annual Galas & Award Nights',
          detail: 'Stage design, digital LED backdrops, trophy distribution flow, and emcee coordination.',
        },
        {
          name: 'Product Launches & Press Meets',
          detail: 'Thematic reveal zones, media photo backdrops, press kit tables, and live demo audio.',
        },
        {
          name: 'Conferences & Leadership Summits',
          detail: 'Delegate registration desks, crisp wireless microphones, directional signage, and smooth session timings.',
        },
        {
          name: 'Corporate Team Outings & Offsites',
          detail: 'Venue selection, guest transport, team-building setups, and evening dinners.',
        },
      ],
    },
    {
      id: 'social',
      title: 'Social Celebrations & Family Milestones',
      subtitle: 'Milestone birthdays, golden jubilees & rice ceremonies',
      description:
        'From first birthdays and 50th jubilees to traditional Annaprashan (rice ceremonies) and vibrant Sangeet nights, we create warm, beautifully staged family celebrations where every relative feels looked after.',
      image:
        'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=80',
      badge: 'Family Celebrations',
      subServices: [
        {
          name: 'Anniversaries & Milestone Birthdays',
          detail: 'Warm atmospheric lighting, memorable photo corners, curated music, and dedicated family dining.',
        },
        {
          name: 'Annaprashan & Rice Ceremonies',
          detail: 'Traditional floral seating, aesthetic baby stage, and authentic Bengali feast service.',
        },
        {
          name: 'Pre-Wedding Sangeet & Cocktail Nights',
          detail: 'Dance floor trussing, professional DJ sound, live percussionists, and cocktail snacks.',
        },
        {
          name: 'Baby Showers & Family Gatherings',
          detail: 'Custom floral arches, sweet tables, and relaxed seating for all generations.',
        },
      ],
    },
    {
      id: 'cultural',
      title: 'Cultural Festivals & Community Events',
      subtitle: 'Durga puja infrastructure, community melas & live music shows',
      description:
        'Large-capacity festival grounds, live acoustic concert staging, safety barricading, and municipal fire safety compliance for Kolkata\'s grandest community gatherings.',
      image:
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80',
      badge: 'Cultural & Festivals',
      subServices: [
        {
          name: 'Puja & Festival Ground Infrastructure',
          detail: 'Pandal fabrication, illuminated gates, crowd pathways, VIP seating, and generator power backups.',
        },
        {
          name: 'Live Music Concerts & Shows',
          detail: 'Acoustic line-array sound, artist green rooms, crowd security, and municipal safety approvals.',
        },
      ],
    },
  ];

  // =========================================================================
  // 2. WHAT WE MANAGE FOR YOU (SERVICE MODULES)
  // =========================================================================
  const serviceModules = [
    {
      icon: Building2,
      name: 'Finding the Right Venue',
      deliverable:
        'Scouting heritage rajbaris, open lawns, banquet halls, and hotel ballrooms; negotiating fair corporate and family rates.',
    },
    {
      icon: Palette,
      name: 'Stage Design & Visuals',
      deliverable:
        'Clear 3D stage mockups, entry arches, fresh floral decor, red carpet walkways, and comfortable VIP seating.',
    },
    {
      icon: Volume2,
      name: 'Sound, Lights & LED Walls',
      deliverable:
        'Crisp speech sound systems, ambient mood lighting, high-definition LED screens, and heavy-duty power generator backups.',
    },
    {
      icon: Music,
      name: 'Live Music & Emcees',
      deliverable:
        'Engaging event hosts, live Bengali and Bollywood musicians, cultural performers, and professional DJs.',
    },
    {
      icon: Camera,
      name: 'Photo & Video Teams',
      deliverable:
        'Candid ceremony photography, cinematic highlight reels, drone videography, and live screen feeds.',
    },
    {
      icon: Users,
      name: 'Guest Hospitality & Transport',
      deliverable:
        'Airport and Howrah/Sealdah station pickups, hotel check-in assistance, welcome kits, and valet parking coordination.',
    },
    {
      icon: ShieldCheck,
      name: 'Safety & Crowd Care',
      deliverable:
        'Trained event marshals, female security staff, fire safety equipment, and on-ground medical first-aid.',
    },
  ];

  // =========================================================================
  // 3. HOW WE WORK TOGETHER (OUR 4-STEP PROCESS)
  // =========================================================================
  const processSteps = [
    {
      step: '1',
      title: 'A Warm Chat & Your Brief',
      description:
        'We listen to your event ideas, estimated guest count, preferred venue type, and comfortable budget.',
      tag: 'First Conversation',
    },
    {
      step: '2',
      title: 'Floor Plan & Transparent Pricing',
      description:
        'We share a 3D stage preview, run-of-show schedule, and itemized cost breakdown with zero hidden additions.',
      tag: 'Clear Estimates',
    },
    {
      step: '3',
      title: 'Rehearsals & Menu Tastings',
      description:
        'Technical sound checks, lighting cues, stage dry-runs, and catering menu tastings before the celebration.',
      tag: 'Dry Runs & Tastings',
    },
    {
      step: '4',
      title: 'Calm On-Ground Management',
      description:
        'Our experienced floor managers and technical leads stay on site from morning setup until the last guest leaves.',
      tag: 'On-Ground Care',
    },
  ];

  // =========================================================================
  // 4. STANDARD EVENT MANAGEMENT PACKAGES
  // =========================================================================
  const packages = [
    {
      id: 'silver',
      name: 'Silver Package (Essentials)',
      targetGuests: 'Ideal for up to 150 guests',
      idealEvents: 'Birthdays, Anniversaries, Seminars',
      inclusions: [
        'Standard Stage Setup & Backdrop',
        'Warm Ambient Up-Lighting & Spotlights',
        'Crisp PA Sound System & Cordless Mics',
        'On-Site Coordinator for Timeline Management',
        'Guest Welcoming & Reception Direction',
      ],
      popular: false,
      badge: 'Essentials',
    },
    {
      id: 'gold',
      name: 'Gold Package (Signature)',
      targetGuests: 'Ideal for 200–500 guests',
      idealEvents: 'Award ceremonies, Sangeet/Cocktail nights, Product launches',
      inclusions: [
        'Custom Thematic Stage Design & Decor',
        'High-Resolution LED Backdrop Wall',
        'Intelligent Beam Lighting & Trussing',
        'Professional DJ Console & Sound Setup',
        'Experienced Professional Emcee / Host',
        'Photography & Videography Highlights',
        '3 Dedicated On-Site Event Coordinators',
      ],
      popular: true,
      badge: 'Most Popular',
    },
    {
      id: 'imperial',
      name: 'Imperial Package (Large-Scale & Flagship)',
      targetGuests: 'Ideal for 500+ guests or multi-day corporate/wedding events',
      idealEvents: 'Large-scale summits, royal celebrations, public festivals',
      inclusions: [
        'Custom 3D Thematic Stage & Backdrop Build',
        'Concert Acoustic Sound Towers & Truss Lighting',
        'Celebrity Artist / Live Band Coordination',
        'Full Guest Hospitality & VIP Logistics Team',
        'Cinematic 4K Video Coverage & Drone Shoot',
        'Dedicated Senior Floor Managers on site',
        'Complete Municipal, Police & Fire Safety Clearances',
      ],
      popular: false,
      badge: 'Flagship Scale',
    },
  ];

  // =========================================================================
  // 5. ENQUIRY FORM FIELDS
  // =========================================================================
  const formFields = [
    {
      name: 'customerName',
      label: 'Full Name / Organization',
      type: 'text',
      placeholder: 'e.g. [Organization Name] / [Customer Name]',
      required: true,
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'tel',
      placeholder: '+91 [Insert Contact Number]',
      required: true,
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'events@company.com',
      required: true,
    },
    {
      name: 'eventCategory',
      label: 'Core Event Category',
      type: 'select',
      options: [
        'Corporate Events & Conferences',
        'Social Celebrations & Milestone Events',
        'Cultural, Festivals & Public Events',
      ],
      required: true,
    },
    {
      name: 'packagePreference',
      label: 'Preferred Package',
      type: 'select',
      options: [
        'Silver Package',
        'Gold Package',
        'Imperial Package',
        'Custom / Not Sure',
      ],
      required: true,
    },
    {
      name: 'eventDate',
      label: 'Proposed Event Date',
      type: 'date',
      required: true,
    },
    {
      name: 'eventLocation',
      label: 'Event Location / City',
      type: 'text',
      placeholder: 'e.g. Kolkata, Mumbai, Delhi, Heritage Resort',
      required: true,
    },
    {
      name: 'guestCount',
      label: 'Expected Guest Count',
      type: 'number',
      placeholder: 'e.g. 350',
    },
    {
      name: 'budget',
      label: 'Estimated Event Budget',
      type: 'select',
      options: [
        '₹2,00,000 - ₹5,00,000',
        '₹5,00,000 - ₹15,00,000',
        '₹15,00,000 - ₹30,00,000',
        '₹30,00,000 - ₹50,00,000',
        '₹50,00,000+ (Grand Scale)',
        'Flexible / To be discussed',
      ],
    },
    {
      name: 'servicesRequired',
      label: 'Comprehensive Service Modules Required',
      type: 'multiselect',
      options: [
        'Venue Sourcing & Booking',
        'Concept & Stage Decor',
        'Audiovisual & Technicals',
        'Artist & Entertainment',
        'Photography & Videography',
        'Guest Hospitality & Logistics',
        'Security & Crowd Control',
      ],
    },
    {
      name: 'additionalRequirements',
      label: 'Additional Event Vision & Custom Requirements',
      type: 'textarea',
      placeholder:
        'Share specific requirements regarding 3D layout, artist bookings, dietary preferences, or schedule constraints...',
      rows: 4,
    },
  ];

  const handleSelectCategory = (categoryTitle) => {
    setSelectedCategory(categoryTitle);
    const formElement = document.getElementById('event-enquiry-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (packageName) => {
    setSelectedPackage(packageName);
    const formElement = document.getElementById('event-enquiry-form');
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
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1920&q=80"
            alt="Royal Enterprise Event Management & Stage Production in Kolkata"
            className="w-full h-full object-cover filter brightness-[0.42] contrast-[1.08] scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center">
          <div className="inline-flex items-center space-x-2.5 mb-5">
            <span className="w-5 h-px bg-gold-light/60" />
            <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] text-amber-200 font-semibold">
              Kolkata • Corporate Summits • Stage Fabrication
            </span>
            <span className="w-5 h-px bg-gold-light/60" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#FFF8F0] tracking-tight leading-[1.12] mb-4">
            Event Management & Stagecraft
          </h1>
          <p className="font-serif text-lg sm:text-2xl text-amber-200 font-normal mb-6">
            Conferences, leadership summits, dealer meets, and stage fabrication for 100 to 3,000 attendees.
          </p>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/90 font-light leading-relaxed mb-9">
            We build custom 3D LED stages, engineer concert acoustic sound, and run delegate logistics across Kolkata’s top hotel convention centers and public exhibition grounds. Direct technical crew under one transparent invoice.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="primary"
              size="md"
              onClick={() => {
                const el = document.getElementById('standard-packages');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Standard Packages
            </Button>
            <Button
              variant="outline"
              size="md"
              onClick={() => {
                const el = document.getElementById('event-enquiry-form');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Request Custom Proposal
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 py-20 space-y-24">
        {/* ========================================================================= */}
        {/* 1. CORE EVENT CATEGORIES WE HANDLE */}
        {/* ========================================================================= */}
        <section id="core-categories">
          <SectionHeader
            badge="What We Organize"
            title="Core Event Categories We Handle"
            subtitle="Explore our three event categories tailored for corporate conferences, family milestones, and large community gatherings in Kolkata."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {coreCategories.map((cat) => (
              <div
                key={cat.id}
                className="bg-[#FFFDF9] dark:bg-[#1C1917] border border-[#E8E1D5] dark:border-[#38312B] rounded-xl overflow-hidden hover:border-[#6E1423]/40 dark:hover:border-[#F59E0B]/50 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-200 dark:bg-stone-800">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-[#FFFDF9]/95 dark:bg-[#1C1917]/95 backdrop-blur-sm border border-[#E8E1D5] dark:border-[#38312B] px-2.5 py-0.5 rounded text-[10px] font-semibold text-[#6E1423] dark:text-[#F59E0B]">
                      {cat.badge}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F1D1A] dark:text-[#FAF7F2] mb-1 group-hover:text-[#6E1423] dark:group-hover:text-[#F59E0B] transition-colors leading-snug">
                      {cat.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#6E1423] dark:text-[#F59E0B] mb-3">
                      {cat.subtitle}
                    </p>
                    <p className="text-xs sm:text-[13.5px] text-[#524C44] dark:text-[#A89F91] leading-relaxed mb-6 font-light">
                      {cat.description}
                    </p>

                    <h4 className="text-xs font-semibold text-[#1F1D1A] dark:text-[#FAF7F2] mb-3 border-b border-[#E8E1D5] dark:border-[#38312B] pb-2">
                      What we take care of:
                    </h4>

                    <div className="space-y-3 mb-6">
                      {cat.subServices.map((sub, idx) => (
                        <div key={idx} className="text-xs">
                          <p className="font-medium text-[#1F1D1A] dark:text-[#FAF7F2] flex items-start">
                            <span className="w-1.5 h-1.5 bg-[#6E1423] dark:bg-[#F59E0B] mr-2 mt-1.5 shrink-0 rounded-full" />
                            <span>{sub.name}</span>
                          </p>
                          <p className="text-[#524C44] dark:text-[#A89F91] ml-3.5 mt-0.5 leading-relaxed text-[11.5px] font-light">
                            {sub.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#E8E1D5]/60 dark:border-[#38312B]">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleSelectCategory(cat.title)}
                    className="w-full"
                    icon={ArrowRight}
                    iconPosition="right"
                  >
                    Enquire for {cat.title.split('&')[0].trim()}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. WHAT WE MANAGE FOR YOU TABLE */}
        {/* ========================================================================= */}
        <section id="service-modules">
          <SectionHeader
            badge="In-House Capabilities"
            title="What We Manage For You"
            subtitle="Every operational detail handled by our dedicated crew so you don't have to chase suppliers."
          />

          <div className="bg-[#FFFDF9] dark:bg-[#1C1917] border border-[#E8E1D5] dark:border-[#38312B] rounded-xl overflow-hidden shadow-sm mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead className="bg-[#FAF8F4] dark:bg-[#141210] text-[#6E1423] dark:text-[#F59E0B] font-semibold border-b border-[#E8E1D5] dark:border-[#38312B]">
                  <tr>
                    <th className="p-4 sm:p-5 w-1/3 border-r border-[#E8E1D5] dark:border-[#38312B] text-xs">Service</th>
                    <th className="p-4 sm:p-5 text-xs">What Royal Enterprise Takes Care Of</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E1D5] dark:divide-[#38312B] text-[#3B342C] dark:text-[#D5CCC0]">
                  {serviceModules.map((mod, idx) => {
                    const Icon = mod.icon;
                    return (
                      <tr key={idx} className="hover:bg-[#FAF8F4]/60 dark:hover:bg-[#141210]/60 transition-colors">
                        <td className="p-4 sm:p-5 font-medium text-[#1F1D1A] dark:text-[#FAF7F2] border-r border-[#E8E1D5] dark:border-[#38312B] flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-[#FAF8F4] dark:bg-[#141210] border border-[#E8E1D5] dark:border-[#38312B] flex items-center justify-center text-[#6E1423] dark:text-[#F59E0B] shrink-0">
                            <Icon className="w-4 h-4 stroke-[1.5]" />
                          </div>
                          <span>{mod.name}</span>
                        </td>
                        <td className="p-4 sm:p-5 leading-relaxed text-[#524C44] dark:text-[#A89F91] font-light">
                          {mod.deliverable}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. HOW WE WORK TOGETHER */}
        {/* ========================================================================= */}
        <section id="our-process" className="bg-[#FAF7F2] dark:bg-[#1C1414] border border-[#E5DED3] dark:border-[#3A2222] rounded-xl p-8 sm:p-12 shadow-sm">
          <SectionHeader
            badge="Simple Steps"
            title="How We Work Together"
            subtitle="From your first phone call to the final guest farewell, here is what you can expect."
          />

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#141210] border border-[#E5DED3] dark:border-[#38312B] rounded-xl p-6 hover:border-[#6E1423]/40 dark:hover:border-[#F59E0B]/40 transition-all duration-300 flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-serif text-3xl font-bold text-[#6E1423] dark:text-[#F59E0B]">
                        0{step.step}
                      </span>
                      <span className="text-[10px] font-semibold bg-[#6E1423]/10 dark:bg-[#F59E0B]/20 text-[#6E1423] dark:text-[#F59E0B] border border-[#6E1423]/20 dark:border-[#F59E0B]/30 px-2 py-0.5 rounded">
                        {step.tag}
                      </span>
                    </div>

                    <h4 className="font-serif font-bold text-lg text-[#1F1D1A] dark:text-[#FAF7F2] mb-2 leading-snug">
                      {step.title}
                    </h4>
                    <p className="text-xs text-[#524C44] dark:text-[#A89F91] leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#E5DED3] dark:border-[#38312B] flex items-center text-xs font-semibold text-[#6E1423] dark:text-[#F59E0B]">
                    <span>Step 0{step.step} Ready</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. STANDARD EVENT MANAGEMENT PACKAGES */}
        {/* ========================================================================= */}
        <section id="standard-packages">
          <SectionHeader
            badge="Transparent Options"
            title="Standard Event Management Packages"
            subtitle="Choose a package tier that suits your guest count, or let us create a custom estimate for your vision."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-white dark:bg-[#1C1917] border-2 border-[#6E1423] dark:border-[#F59E0B] shadow-md'
                    : 'bg-white dark:bg-[#1C1917] border border-[#E8E1D5] dark:border-[#38312B] hover:border-[#6E1423]/40 dark:hover:border-[#F59E0B]/50 shadow-sm'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#6E1423] text-white font-semibold text-xs px-4 py-1 rounded-full shadow-sm flex items-center">
                    <Crown className="w-3.5 h-3.5 mr-1" />
                    {pkg.badge}
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F1D1A] dark:text-[#FAF7F2]">
                        {pkg.name}
                      </h3>
                      {!pkg.popular && (
                        <span className="text-[10px] font-semibold text-[#6E1423] dark:text-[#F59E0B] bg-[#FAF8F4] dark:bg-[#141210] border border-[#E8E1D5] dark:border-[#38312B] px-2 py-0.5 rounded">
                          {pkg.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-semibold text-[#6E1423] dark:text-[#F59E0B] mt-1">
                      {pkg.targetGuests}
                    </p>
                    <p className="text-xs text-[#524C44] dark:text-[#A89F91] italic mt-0.5 font-light">
                      ({pkg.idealEvents})
                    </p>
                  </div>

                  <h5 className="text-xs font-semibold text-[#1F1D1A] dark:text-[#FAF7F2] mb-4 border-b border-[#E8E1D5] dark:border-[#38312B] pb-2">
                    Package Inclusions:
                  </h5>

                  <ul className="space-y-3 mb-8">
                    {pkg.inclusions.map((inc, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-[13px] text-[#3B342C] dark:text-[#D5CCC0] font-light">
                        <div className="w-4 h-4 rounded-full bg-[#6E1423]/10 dark:bg-[#F59E0B]/20 text-[#6E1423] dark:text-[#F59E0B] flex items-center justify-center shrink-0 mr-2.5 mt-0.5">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant={pkg.popular ? 'primary' : 'outline'}
                  size="md"
                  onClick={() => handleSelectPackage(pkg.name)}
                  className="w-full"
                >
                  Select {pkg.name.split('(')[0].trim()}
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. DEDICATED EVENT ENQUIRY FORM */}
        {/* ========================================================================= */}
        <section id="event-enquiry-form" className="max-w-4xl mx-auto pt-6">
          <SectionHeader
            badge="Check Dates & Pricing"
            title="Let's Plan Your Upcoming Event"
            subtitle="Tell us a little about your event below. Our team will review your requirements and get in touch with ideas and an honest estimate."
          />

          <EnquiryForm
            formFields={formFields}
            initialValues={{
              eventCategory: selectedCategory,
              packagePreference: selectedPackage,
            }}
            title="Event Planning & Management Enquiry"
            subtitle="Share your event dates, venue ideas, or guest count below. We will get back to you promptly."
            submitButtonText="Send Event Enquiry"
          />
        </section>
      </div>
    </div>
  );
};

export default EventManagement;
