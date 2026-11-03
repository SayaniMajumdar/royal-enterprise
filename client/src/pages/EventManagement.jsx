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
      subtitle: 'Executive Precision & High-Impact Brand Production',
      description:
        'Turnkey execution for leadership summits, annual galas, and global corporate gatherings with automated delegate logistics, high-definition stagecraft, and strict protocol.',
      image:
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80',
      badge: 'Corporate Standard',
      subServices: [
        {
          name: 'Annual Corporate Galas & Award Nights',
          detail: 'Stage design, digital LED backdrops, awards distribution logistics, and keynote scripting.',
        },
        {
          name: 'Product Launches & Brand Activations',
          detail: 'Thematic reveal zones, media walls, press kits, interactive demonstration booths, and PR coordination.',
        },
        {
          name: 'Conferences, Seminars & Summits',
          detail: 'Registration desk automation, AV equipment setup, directional signage, delegate kits, and simultaneous translation support.',
        },
        {
          name: 'Corporate Team Outings & Offsites',
          detail: 'Team-building activities, venue scouting, transport, accommodation, and gala dinners.',
        },
      ],
    },
    {
      id: 'social',
      title: 'Social Celebrations & Milestone Events',
      subtitle: 'Cherished Family Milestones & Opulent Social Soirees',
      description:
        'From milestone birthdays and golden jubilees to traditional rice ceremonies and high-energy Sangeet nights, we create joyous, beautifully staged family celebrations.',
      image:
        'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=80',
      badge: 'Family & Milestones',
      subServices: [
        {
          name: 'Anniversary Celebrations',
          detail: 'Romantic, luxury, or retro-themed settings with customized lighting and curated entertainment.',
        },
        {
          name: 'Milestone Birthdays',
          detail: 'Custom 1st birthdays, sweet sixteens, and 50th/60th grand celebrations with dedicated kid/family engagement areas.',
        },
        {
          name: 'Pre-Wedding Socials',
          detail: 'Haldi, Mehendi, Sangeet night choreography, Sufi nights, and cocktail evenings.',
        },
        {
          name: 'Baby Showers & Rice Ceremonies (Annaprashan)',
          detail: 'Traditional florals, aesthetic stage setups, and family dining arrangements.',
        },
      ],
    },
    {
      id: 'cultural',
      title: 'Cultural, Festivals & Public Events',
      subtitle: 'Megascale Infrastructure & High-Capacity Crowd Production',
      description:
        'End-to-end event infrastructure for large-capacity religious festivals, ticketed live concerts, college symposiums, and civic exhibitions with municipal safety compliance.',
      image:
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80',
      badge: 'Megascale Infrastructure',
      subServices: [
        {
          name: 'Pooja & Festival Event Infrastructure',
          detail: 'Complete pandal fabrication, light gates, crowd control barriers, VIP lounges, and power backups.',
        },
        {
          name: 'Live Music Concerts & Shows',
          detail: 'Acoustic stage construction, artist green rooms, crowd security, ticketing management, and municipal/fire safety permissions.',
        },
      ],
    },
  ];

  // =========================================================================
  // 2. COMPREHENSIVE SERVICE MODULES
  // =========================================================================
  const serviceModules = [
    {
      icon: Building2,
      name: 'Venue Sourcing & Booking',
      deliverable:
        'Scouting banquet halls, luxury resorts, open-air lawns, and farmhouses; negotiating corporate/bulk rates.',
    },
    {
      icon: Palette,
      name: 'Concept & Stage Decor',
      deliverable:
        '3D stage layout rendering, thematic entry arches, bespoke floral installations, red carpets, and lounge setups.',
    },
    {
      icon: Volume2,
      name: 'Audiovisual & Technicals',
      deliverable:
        'Line-array sound systems, moving-head intelligent lighting, LED video walls (P2/P3), laser shows, and heavy genset power backups.',
    },
    {
      icon: Music,
      name: 'Artist & Entertainment',
      deliverable:
        'Emcees/hosts, live Bollywood/Sufi bands, celebrity appearances, DJ setups, folk dance troupes, and stand-up comedians.',
    },
    {
      icon: Camera,
      name: 'Photography & Videography',
      deliverable:
        'Traditional photo/video teams, candid cinematic wedding teasers, drone videography, crane cameras, and live webcasting.',
    },
    {
      icon: Users,
      name: 'Guest Hospitality & Logistics',
      deliverable:
        'Airport/station transfers, luxury fleet rentals, hotel check-in desks, welcome hampers, and valet parking management.',
    },
    {
      icon: ShieldCheck,
      name: 'Security & Crowd Control',
      deliverable:
        'Trained bouncers, female security personnel, metal detector frames, fire safety compliance, and medical first-responder teams.',
    },
  ];

  // =========================================================================
  // 3. HOW WE WORK (OUR 4-STEP PROCESS)
  // =========================================================================
  const processSteps = [
    {
      step: '1',
      title: 'Discovery & Briefing',
      description:
        'We understand your event purpose, expected guest count, venue preferences, and target budget.',
      tag: 'Strategic Alignment',
    },
    {
      step: '2',
      title: 'Concept & Budget Design',
      description:
        'We draft a customized 3D design preview, timeline breakdown, and transparent line-item budget estimate.',
      tag: '3D Preview & Costing',
    },
    {
      step: '3',
      title: 'Pre-Production',
      description:
        'Vendor allocations, technical dry-runs, catering menu tastings, sound/light checks, and legal/safety clearances.',
      tag: 'Rehearsals & Clearances',
    },
    {
      step: '4',
      title: 'On-Ground Execution',
      description:
        'A dedicated floor manager oversees artist timelines, backstage cues, dining transitions, and crowd comfort.',
      tag: 'Live Show Management',
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
        'Ambient Up-Lighting & Spotlights',
        'Basic PA Sound System & Mic Setup',
        'On-Site Event Coordinator for Show Running',
        'Guest Welcoming & Reception Direction',
      ],
      popular: false,
      badge: 'Essentials Tier',
    },
    {
      id: 'gold',
      name: 'Gold Package (Signature)',
      targetGuests: 'Ideal for 200–500 guests',
      idealEvents: 'Award ceremonies, Sangeet/Cocktail nights, Product launches',
      inclusions: [
        'Custom Thematic Stage Design & Decor',
        'High-Resolution LED Backdrop Wall',
        'Intelligent Beam Lighting & DMX Rigging',
        'Professional DJ Console & Sound System',
        'Professional Emcee / Host',
        'Digital Photography & Videography Coverage',
        '3 Dedicated On-Site Event Coordinators',
      ],
      popular: true,
      badge: 'Signature Choice',
    },
    {
      id: 'imperial',
      name: 'Imperial Package (Turnkey Luxury)',
      targetGuests: 'Ideal for 500+ guests or multi-day corporate/wedding events',
      idealEvents: 'Megascale summits, royal weddings, public festivals',
      inclusions: [
        'Comprehensive Turnkey 3D Thematic Fabrication',
        'High-Power Line-Array Sound Towers & Concert Trussing',
        'Celebrity Artist / Headline Performer Booking',
        'Full Hospitality Concierge & VIP Logistics Team',
        'Cinematic 4K Live Broadcast & Drone Coverage',
        'Dedicated Operations Heads & Personal Shadows',
        'Complete Civic, Police & Fire Safety Liaisons',
      ],
      popular: false,
      badge: 'Turnkey Luxury',
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

      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 py-20 space-y-28">
        {/* ========================================================================= */}
        {/* 1. CORE EVENT CATEGORIES WE HANDLE */}
        {/* ========================================================================= */}
        <section id="core-categories">
          <SectionHeader
            badge="Full Spectrum Portfolio"
            title="Core Event Categories We Handle"
            subtitle="Explore our three flagship event categories with detailed sub-disciplines tailored for corporate impact, family heritage, and megascale culture."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {coreCategories.map((cat) => (
              <div
                key={cat.id}
                className="bg-[#FFFDF9] dark:bg-[#1C1917] border border-[#E8E1D5] dark:border-[#38312B] rounded-[4px] overflow-hidden hover:border-gold-base/60 dark:hover:border-gold-light/50 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-200 dark:bg-stone-800">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-[#FFFDF9]/95 dark:bg-[#1C1917]/95 backdrop-blur-sm border border-[#E8E1D5] dark:border-[#38312B] px-2.5 py-0.5 rounded-[2px] text-[9.5px] font-semibold uppercase tracking-[0.16em] text-gold-dark dark:text-gold-light">
                      {cat.badge}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#141414] dark:text-[#FAF7F2] mb-1 group-hover:text-maroon dark:group-hover:text-gold-light transition-colors tracking-wide leading-snug">
                      {cat.title}
                    </h3>
                    <p className="text-[11px] uppercase tracking-wider font-semibold text-gold-dark dark:text-gold-light mb-4">
                      {cat.subtitle}
                    </p>
                    <p className="text-xs sm:text-[13px] text-[#554F47] dark:text-[#A8A29E] leading-relaxed mb-6 font-light">
                      {cat.description}
                    </p>

                    <h4 className="text-[10.5px] uppercase tracking-[0.16em] font-semibold text-gold-dark dark:text-gold-light mb-3 border-b border-[#E8E1D5] dark:border-[#38312B] pb-2">
                      Sub-Disciplines & Inclusions:
                    </h4>

                    <div className="space-y-3 mb-6">
                      {cat.subServices.map((sub, idx) => (
                        <div key={idx} className="text-xs">
                          <p className="font-medium text-[#141414] dark:text-[#FAF7F2] flex items-start">
                            <span className="w-1.5 h-1.5 bg-gold-dark dark:bg-gold-light mr-2 mt-1.5 shrink-0 rotate-45" />
                            <span>{sub.name}</span>
                          </p>
                          <p className="text-[#6B645C] dark:text-[#A8A29E] ml-3.5 mt-0.5 leading-relaxed text-[11px] font-light">
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
        {/* 2. COMPREHENSIVE SERVICE MODULES TABLE */}
        {/* ========================================================================= */}
        <section id="service-modules">
          <SectionHeader
            badge="Turnkey Capabilities"
            title="Comprehensive Service Modules"
            subtitle="Explore exact operational deliverables provided by Royal Enterprise across seven foundational disciplines."
          />

          <div className="bg-[#FFFDF9] dark:bg-[#1C1917] border border-[#E8E1D5] dark:border-[#38312B] rounded-[4px] overflow-hidden shadow-sm mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead className="bg-[#FAF8F4] dark:bg-[#141210] text-gold-dark dark:text-gold-light uppercase tracking-[0.16em] font-semibold border-b border-[#E8E1D5] dark:border-[#38312B]">
                  <tr>
                    <th className="p-4 sm:p-5 w-1/3 border-r border-[#E8E1D5] dark:border-[#38312B] text-[11px]">Service Module</th>
                    <th className="p-4 sm:p-5 text-[11px]">What Royal Enterprise Delivers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E1D5] dark:divide-[#38312B] text-[#3A352F] dark:text-[#D5CCC0]">
                  {serviceModules.map((mod, idx) => {
                    const Icon = mod.icon;
                    return (
                      <tr key={idx} className="hover:bg-[#FAF8F4]/60 dark:hover:bg-[#141210]/60 transition-colors">
                        <td className="p-4 sm:p-5 font-medium text-[#141414] dark:text-[#FAF7F2] border-r border-[#E8E1D5] dark:border-[#38312B] flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-[#FAF8F4] dark:bg-[#141210] border border-gold-dark/30 dark:border-gold-light/30 flex items-center justify-center text-gold-dark dark:text-gold-light shrink-0">
                            <Icon className="w-4 h-4 stroke-[1.5]" />
                          </div>
                          <span>{mod.name}</span>
                        </td>
                        <td className="p-4 sm:p-5 leading-relaxed text-[#554F47] dark:text-[#A8A29E] font-light">
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
        {/* 3. HOW WE WORK (OUR 4-STEP PROCESS) */}
        {/* ========================================================================= */}
        <section id="our-process" className="bg-[#F6E4E1] dark:bg-[#1C1414] border border-[#ECD6D2] dark:border-[#3A2222] rounded-[4px] p-8 sm:p-12 shadow-sm">
          <SectionHeader
            badge="Methodology & Precision"
            title="How We Work (Our 4-Step Process)"
            subtitle="[1. Discovery & Briefing] ➔ [2. Concept & 3D Design] ➔ [3. Production & Vendor Sync] ➔ [4. On-Ground Execution]"
          />

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-[#FFFDF9] dark:bg-[#141210] border border-[#ECD6D2] dark:border-[#38312B] rounded-[3px] p-6 hover:border-gold-base/50 dark:hover:border-gold-light/50 transition-all duration-300 flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-serif text-3xl font-light text-gold-dark dark:text-gold-light">
                        0{step.step}
                      </span>
                      <span className="text-[9.5px] uppercase tracking-[0.16em] bg-maroon/10 dark:bg-maroon/20 text-maroon dark:text-gold-light border border-maroon/20 dark:border-maroon/40 px-2 py-0.5 rounded-[2px] font-semibold">
                        {step.tag}
                      </span>
                    </div>

                    <h4 className="font-serif font-normal text-lg text-[#141414] dark:text-[#FAF7F2] mb-2 tracking-wide">
                      {step.title}
                    </h4>
                    <p className="text-xs text-[#554F47] dark:text-[#A8A29E] leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#ECD6D2]/60 dark:border-[#38312B] flex items-center text-[10.5px] uppercase tracking-wider text-gold-dark dark:text-gold-light font-medium">
                    <span>Phase 0{step.step} Verified</span>
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
            badge="Turnkey Tiers"
            title="Standard Event Management Packages"
            subtitle="Select the ideal scale for intimate milestones, signature corporate galas, or megascale public productions."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-[4px] p-8 flex flex-col justify-between transition-all duration-300 ${
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
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#141414] dark:text-[#FAF7F2] tracking-wide">
                        {pkg.name}
                      </h3>
                      {!pkg.popular && (
                        <span className="text-[9.5px] uppercase tracking-[0.14em] text-gold-dark dark:text-gold-light bg-[#FAF8F4] dark:bg-[#141210] border border-[#E8E1D5] dark:border-[#38312B] px-2 py-0.5 rounded-[2px] font-semibold">
                          {pkg.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-semibold text-maroon dark:text-gold-light mt-1">
                      {pkg.targetGuests}
                    </p>
                    <p className="text-[11px] text-[#6B645C] dark:text-[#A8A29E] italic mt-0.5 font-light">
                      ({pkg.idealEvents})
                    </p>
                  </div>

                  <h5 className="text-[11px] uppercase tracking-[0.14em] font-semibold text-gold-dark dark:text-gold-light mb-4 border-b border-[#E8E1D5] dark:border-[#38312B] pb-2">
                    Package Inclusions:
                  </h5>

                  <ul className="space-y-3 mb-8">
                    {pkg.inclusions.map((inc, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-[13px] text-[#3A352F] dark:text-[#D5CCC0] font-light">
                        <div className="w-4 h-4 rounded-full bg-gold-dark/15 dark:bg-gold-light/20 text-gold-dark dark:text-gold-light flex items-center justify-center shrink-0 mr-2.5 mt-0.5">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant={pkg.popular ? 'maroon' : 'outline'}
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
            badge="Direct Consultation"
            title="Request an Event Production Proposal"
            subtitle="Submit your event specifications directly to our senior directors. Selected packages and service modules are automatically logged into Google Sheets."
          />

          <EnquiryForm
            formFields={formFields}
            initialValues={{
              eventCategory: selectedCategory,
              packagePreference: selectedPackage,
            }}
            title="Event Management Enquiry Form"
            subtitle="Provide your event specifications below. Submissions are synced to our live Google Sheets database for immediate review."
            submitButtonText="Submit Event Proposal Request"
          />
        </section>
      </div>
    </div>
  );
};

export default EventManagement;
