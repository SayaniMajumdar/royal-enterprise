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
      placeholder: 'e.g. Reliance Industries / Mr. Aditya Birla',
      required: true,
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'tel',
      placeholder: '+91 98765 43210',
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
    <div className="bg-navy-950 min-h-screen text-slate-100 selection:bg-gold-500 selection:text-navy-950">
      {/* ========================================================================= */}
      {/* HERO BANNER */}
      {/* ========================================================================= */}
      <section className="relative py-24 sm:py-32 overflow-hidden border-b border-gold-500/15">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1920&q=80"
            alt="Royal Enterprise Event Management Hero"
            className="w-full h-full object-cover filter brightness-[0.32] contrast-[1.05] scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/75 to-navy-950/85" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2.5 bg-[#090E1B]/85 border border-gold-400/30 px-4 py-1.5 rounded-[2px] mb-7 shadow-sm">
            <Crown className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-gold-300 font-semibold">
              Division I • Turnkey Event Production & Management
            </span>
            <Sparkles className="w-3.5 h-3.5 text-gold-400/80" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-slate-100 tracking-tight leading-tight mb-4">
            Event Management
          </h1>
          <p className="font-editorial italic text-gold-300/90 text-xl sm:text-2xl md:text-3xl font-normal mb-6">
            "We Make Every Event Memorable."
          </p>
          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-slate-300 font-light leading-relaxed mb-9">
            From Fortune 500 corporate summits and luxury product activations to cherished family milestone celebrations and megascale public festivals, Royal Enterprise provides comprehensive turnkey production with master craftsmanship.
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-28">
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
                className="bg-[#090E1B]/80 border border-slate-800/80 rounded-[3px] overflow-hidden hover:border-gold-500/35 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:-translate-y-0.5"
              >
                <div>
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060A13] via-navy-950/40 to-transparent" />
                    <div className="absolute top-4 left-4 bg-navy-950/90 border border-gold-400/40 px-3 py-1 rounded-[2px] text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-300">
                      {cat.badge}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-100 mb-1 group-hover:text-gold-300 transition-colors tracking-wide">
                      {cat.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wider font-semibold text-gold-400/90 mb-4">
                      {cat.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-6 font-light">
                      {cat.description}
                    </p>

                    <h4 className="text-[10.5px] uppercase tracking-[0.16em] font-bold text-slate-400 mb-3 border-b border-slate-800 pb-2">
                      Sub-Disciplines & Inclusions:
                    </h4>

                    <div className="space-y-3.5 mb-6">
                      {cat.subServices.map((sub, idx) => (
                        <div key={idx} className="text-xs">
                          <p className="font-semibold text-gold-300 flex items-start">
                            <span className="w-1.5 h-1.5 bg-gold-400/80 mr-2 mt-1.5 shrink-0 rotate-45" />
                            <span>{sub.name}</span>
                          </p>
                          <p className="text-slate-400 ml-3.5 mt-0.5 leading-relaxed text-[11px] font-light">
                            {sub.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-800/80">
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
        {/* 2. COMPREHENSIVE SERVICE MODULES TABLE / CARDS */}
        {/* ========================================================================= */}
        <section id="service-modules">
          <SectionHeader
            badge="Turnkey Capabilities"
            title="Comprehensive Service Modules"
            subtitle="Explore exact operational deliverables provided by Royal Enterprise across seven foundational disciplines."
          />

          <div className="bg-[#090E1B]/80 border border-slate-800/80 rounded-[3px] overflow-hidden shadow-xl mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead className="bg-[#050811] text-gold-300 uppercase tracking-[0.14em] font-semibold border-b border-slate-800">
                  <tr>
                    <th className="p-4 sm:p-5 w-1/3 border-r border-slate-800 text-[11px]">Service Module</th>
                    <th className="p-4 sm:p-5 text-[11px]">What Royal Enterprise Delivers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 text-slate-300">
                  {serviceModules.map((mod, idx) => {
                    const Icon = mod.icon;
                    return (
                      <tr key={idx} className="hover:bg-navy-900/60 transition-colors">
                        <td className="p-4 sm:p-5 font-bold text-slate-100 border-r border-slate-800 flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-[2px] bg-navy-950 border border-gold-400/30 flex items-center justify-center text-gold-400 shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span>{mod.name}</span>
                        </td>
                        <td className="p-4 sm:p-5 leading-relaxed text-slate-300 font-light">
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
        <section id="our-process" className="bg-[#080C16] border border-slate-800/80 rounded-[3px] p-8 sm:p-12 shadow-sm">
          <SectionHeader
            badge="Methodology & Precision"
            title="How We Work (Our 4-Step Process)"
            subtitle="[1. Discovery & Briefing] ➔ [2. Concept & 3D Design] ➔ [3. Production & Vendor Sync] ➔ [4. On-Ground Execution]"
          />

          <div className="relative">
            {/* Connecting Horizontal Line for Desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent -translate-y-12 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-[#090E1B] border border-slate-800/80 rounded-[2px] p-6 hover:border-gold-400/40 transition-all duration-300 flex flex-col justify-between group shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-300">
                        0{step.step}
                      </span>
                      <span className="text-[9.5px] uppercase tracking-[0.16em] bg-gold-500/10 text-gold-300 border border-gold-500/30 px-2 py-0.5 rounded-[2px] font-semibold">
                        {step.tag}
                      </span>
                    </div>

                    <h4 className="font-serif font-bold text-base sm:text-lg text-slate-100 mb-2 group-hover:text-gold-300 transition-colors tracking-wide">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center text-[10.5px] uppercase tracking-wider text-gold-400/90 group-hover:text-gold-300 transition-colors">
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
                className={`relative rounded-[3px] p-8 flex flex-col justify-between transition-all duration-300 ${
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
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-100 tracking-wide">
                        {pkg.name}
                      </h3>
                      {!pkg.popular && (
                        <span className="text-[9.5px] uppercase tracking-[0.14em] text-gold-400 bg-gold-500/10 border border-gold-500/30 px-2 py-0.5 rounded-[2px] font-semibold">
                          {pkg.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-semibold text-gold-300 mt-1">
                      {pkg.targetGuests}
                    </p>
                    <p className="text-[11px] text-slate-400 italic mt-0.5 font-light">
                      ({pkg.idealEvents})
                    </p>
                  </div>

                  <h5 className="text-[11px] uppercase tracking-[0.14em] font-semibold text-slate-300 mb-4 border-b border-slate-800 pb-2">
                    Package Inclusions:
                  </h5>

                  <ul className="space-y-3 mb-8">
                    {pkg.inclusions.map((inc, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-[13px] text-slate-300 font-light">
                        <div className="w-4 h-4 rounded-[2px] bg-gold-500/15 text-gold-400 flex items-center justify-center shrink-0 mr-2.5 mt-0.5">
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
