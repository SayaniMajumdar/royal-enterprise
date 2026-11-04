import React, { useState, useEffect } from 'react';
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
  Plus,
  X,
  ChevronLeft,
  Clock,
  Radio,
  FileText,
  MessageSquare,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

const EventManagement = () => {
  const [selectedCategory, setSelectedCategory] = useState('Corporate Events & Conferences');
  const [selectedPackage, setSelectedPackage] = useState('Gold Package (Signature)');
  const [galleryCategory, setGalleryCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

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
      image: '/images/gala-stage-lighting.jpg',
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
      image: '/images/luxury-ballroom-venue.jpg',
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
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80',
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
  // 2. WHAT WE MANAGE FOR YOU (TRANSFORMED FROM TABLE INTO VISUAL SHOWCASE)
  // =========================================================================
  const serviceModules = [
    {
      num: '01',
      icon: Building2,
      name: 'Finding the Right Venue',
      category: 'Venue & Logistics',
      image: '/images/luxury-ballroom-venue.jpg',
      deliverable:
        'Scouting heritage rajbaris, open lawns, banquet halls, and hotel ballrooms; negotiating fair corporate and family rates.',
      highlights: ['Heritage Rajbaris & Ballrooms', 'Contract negotiations', 'Site capacity planning'],
    },
    {
      num: '02',
      icon: Palette,
      name: 'Stage Design & Visuals',
      category: 'Stagecraft & Set Design',
      image: '/images/hero-stage.png',
      deliverable:
        'Clear 3D stage mockups, entry arches, fresh floral decor, red carpet walkways, and comfortable VIP seating.',
      highlights: ['Custom 3D stage previews', 'VIP lounge seating', 'Thematic entry arches'],
    },
    {
      num: '03',
      icon: Volume2,
      name: 'Sound, Lights & LED Walls',
      category: 'Audiovisuals & Engineering',
      image: '/images/gala-stage-lighting.jpg',
      deliverable:
        'Crisp speech sound systems, ambient mood lighting, high-definition LED screens, and heavy-duty power generator backups.',
      highlights: ['Acoustic line-array sound', 'High-res LED video walls', 'Heavy-duty power backups'],
    },
    {
      num: '04',
      icon: Music,
      name: 'Live Music & Emcees',
      category: 'Entertainment & Flow',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80',
      deliverable:
        'Engaging event hosts, live Bengali and Bollywood musicians, cultural performers, and professional DJs.',
      highlights: ['Professional bilingual emcees', 'Live musicians & bands', 'DJ consoles & dance floors'],
    },
    {
      num: '05',
      icon: Camera,
      name: 'Photo & Video Teams',
      category: 'Media & Archiving',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
      deliverable:
        'Candid ceremony photography, cinematic highlight reels, drone videography, and live screen feeds.',
      highlights: ['Cinematic 4K highlight reels', 'Live video display feeds', 'Drone aerial coverage'],
    },
    {
      num: '06',
      icon: Users,
      name: 'Guest Hospitality & Transport',
      category: 'Guest Experience',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80',
      deliverable:
        'Airport and Howrah/Sealdah station pickups, hotel check-in assistance, welcome kits, and valet parking coordination.',
      highlights: ['Airport/Station arrivals', 'Hotel welcome desks', 'Valet parking management'],
    },
    {
      num: '07',
      icon: ShieldCheck,
      name: 'Safety & Crowd Care',
      category: 'Compliance & Security',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80',
      deliverable:
        'Trained event marshals, female security staff, fire safety equipment, and on-ground medical first-aid.',
      highlights: ['Municipal safety clearances', 'Trained event marshals', 'Medical first-aid readiness'],
    },
  ];

  // =========================================================================
  // 3. EDITORIAL EVENT PHOTOGRAPHY GALLERY (MASONRY & LIGHTBOX)
  // =========================================================================
  const galleryItems = [
    {
      id: 1,
      title: 'Grand Annual Corporate Gala & Laser Light Rig',
      category: 'Corporate Galas',
      image: '/images/gala-stage-lighting.jpg',
      location: 'Kolkata Hotel Convention Ballroom',
      aspect: 'col-span-1 md:col-span-2 row-span-2 aspect-[16/10] md:aspect-auto',
    },
    {
      id: 2,
      title: 'Luxury Sunlit Ballroom Setup & Crystal Chandeliers',
      category: 'Luxury Venues',
      image: '/images/luxury-ballroom-venue.jpg',
      location: 'Five-Star Banquet Hall',
      aspect: 'col-span-1 aspect-[4/5]',
    },
    {
      id: 3,
      title: 'Custom 3D Stage & Illuminated Runway Architecture',
      category: 'Stagecraft & Sets',
      image: '/images/hero-stage.png',
      location: 'Gala Pavilion',
      aspect: 'col-span-1 aspect-[4/5]',
    },
    {
      id: 4,
      title: 'High-Definition LED Wall Installation & Summit Seating',
      category: 'Audiovisuals',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
      location: 'Leadership Convention, Kolkata',
      aspect: 'col-span-1 aspect-[16/10]',
    },
    {
      id: 5,
      title: 'Concert Line-Array Acoustic Sound & Truss Lighting',
      category: 'Audiovisuals',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
      location: 'Exhibition Grounds',
      aspect: 'col-span-1 aspect-[16/10]',
    },
    {
      id: 6,
      title: 'Black-Tie Banquet Table Scape & Elegant Glassware',
      category: 'Corporate Galas',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
      location: 'Award Night Dining',
      aspect: 'col-span-1 md:col-span-2 aspect-[16/9]',
    },
  ];

  const galleryCategories = ['All', 'Corporate Galas', 'Stagecraft & Sets', 'Luxury Venues', 'Audiovisuals'];
  const filteredGallery = galleryCategory === 'All'
    ? galleryItems
    : galleryItems.filter((i) => i.category === galleryCategory);

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
  // 4. HOW WE WORK TOGETHER (4-STEP PRODUCTION WORKFLOW)
  // =========================================================================
  const processSteps = [
    {
      step: '01',
      title: 'A Warm Chat & Your Brief',
      description:
        'We listen to your event ideas, estimated guest count, preferred venue type, and comfortable budget.',
      tag: 'First Conversation',
      icon: Users,
    },
    {
      step: '02',
      title: 'Floor Plan & Transparent Pricing',
      description:
        'We share a 3D stage preview, run-of-show schedule, and itemized cost breakdown with zero hidden additions.',
      tag: 'Clear Estimates',
      icon: FileText,
    },
    {
      step: '03',
      title: 'Rehearsals & Menu Tastings',
      description:
        'Technical sound checks, lighting cues, stage dry-runs, and catering menu tastings before the celebration.',
      tag: 'Dry Runs & Tastings',
      icon: Sparkles,
    },
    {
      step: '04',
      title: 'Calm On-Ground Management',
      description:
        'Our experienced floor managers and technical leads stay on site from morning setup until the last guest leaves.',
      tag: 'On-Ground Care',
      icon: Clock,
    },
  ];

  // =========================================================================
  // 5. STANDARD EVENT MANAGEMENT PACKAGES
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
  // 6. ENQUIRY FORM FIELDS (100% PRESERVED)
  // =========================================================================
  const formFields = [
    {
      name: 'name',
      label: 'Your Name / Organization',
      type: 'text',
      placeholder: 'e.g. Rahul Sen / Tata Consultancy',
      required: true,
    },
    {
      name: 'phone',
      label: 'Direct Phone / WhatsApp Number',
      type: 'tel',
      placeholder: 'e.g. +91 98300 12345',
      required: true,
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'e.g. rahul@company.com',
      required: true,
    },
    {
      name: 'eventCategory',
      label: 'Primary Event Category',
      type: 'select',
      options: [
        'Corporate Events & Conferences',
        'Social Celebrations & Family Milestones',
        'Cultural Festivals & Community Events',
        'Stage Fabrication & Trussing Only',
        'Other / Bespoke Production',
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
    <div className="bg-[#FAF8F5] dark:bg-[#141210] min-h-screen text-[#2B2625] dark:text-[#FAF8F5] transition-colors">
      
      {/* ========================================================================= */}
      {/* 1. CINEMATIC EVENT MANAGEMENT HERO */}
      {/* ========================================================================= */}
      <section className="relative min-h-[90vh] lg:min-h-[92vh] flex flex-col justify-between bg-[#141210] text-white overflow-hidden">
        {/* Full-Width Luxury Corporate Gala Photography */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/gala-stage-lighting.jpg"
            alt="Royal Enterprise Corporate Gala and Stage Production in Kolkata"
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
                Kolkata & Eastern India • Corporate Summits & Stagecraft
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-tight leading-[1.08]">
              Event Management & <br />
              <span className="italic font-serif text-[#E0CFA6]">Grand Stagecraft.</span>
            </h1>

            <p className="font-serif text-lg sm:text-2xl text-[#E0CFA6] font-light max-w-2xl mx-auto">
              Conferences, leadership summits, dealer meets, and stage fabrication for 100 to 3,000 attendees.
            </p>

            <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/85 font-light leading-relaxed">
              We build custom 3D LED stages, engineer concert acoustic sound, and run delegate logistics across Kolkata’s top hotel convention centers and public exhibition grounds. Direct technical crew under one transparent invoice.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  const el = document.getElementById('standard-packages');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-maroon px-8 py-3.5 text-xs uppercase tracking-wider font-semibold shadow-lg"
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
                className="px-6 py-3.5 text-xs uppercase tracking-wider font-semibold border-white/30 text-white hover:bg-white/15 backdrop-blur-sm"
              >
                Request Custom Proposal
              </Button>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Royal%20Enterprise,%20I%20would%20like%20to%20discuss%20an%20upcoming%20corporate%20event.`}
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

        {/* Bottom Proof Strip */}
        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-4 sm:px-6 pb-8 pt-4">
          <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-white/80">
            <div className="flex items-center space-x-3">
              <Building2 className="w-4 h-4 text-[#C5A059]" />
              <span>Full venue scouting & negotiated luxury hotel rates</span>
            </div>
            <div className="flex items-center space-x-3">
              <Volume2 className="w-4 h-4 text-[#C5A059]" />
              <span>In-house acoustic sound, lighting & LED wall rigging</span>
            </div>
            <div className="flex items-center space-x-3">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>Municipal, police & fire compliance managed end-to-end</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16 sm:space-y-20">

        {/* ========================================================================= */}
        {/* 2. CORE EVENT CATEGORIES WE HANDLE */}
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
                className="bg-white dark:bg-[#1C1917] border border-[#E8E0D5] dark:border-[#38312B] rounded-2xl overflow-hidden hover:border-[#6B1D2F]/40 dark:hover:border-[#C5A059]/50 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-200 dark:bg-stone-800">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 dark:bg-[#1C1917]/95 backdrop-blur-sm border border-[#E8E0D5] dark:border-[#38312B] px-3 py-1 rounded-full text-[10px] font-semibold text-[#6B1D2F] dark:text-[#C5A059]">
                      {cat.badge}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-3">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B2625] dark:text-[#FAF8F5] group-hover:text-[#6B1D2F] dark:group-hover:text-[#C5A059] transition-colors leading-snug">
                      {cat.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#6B1D2F] dark:text-[#C5A059]">
                      {cat.subtitle}
                    </p>
                    <p className="text-xs sm:text-[13.5px] text-[#5A524E] dark:text-[#A8A29E] leading-relaxed font-light">
                      {cat.description}
                    </p>

                    <h4 className="text-xs font-semibold text-[#2B2625] dark:text-[#FAF8F5] pt-2 border-b border-[#E8E0D5] dark:border-[#38312B] pb-2">
                      What we take care of:
                    </h4>

                    <div className="space-y-3 pt-1">
                      {cat.subServices.map((sub, idx) => (
                        <div key={idx} className="text-xs">
                          <p className="font-medium text-[#2B2625] dark:text-[#FAF8F5] flex items-start">
                            <span className="w-1.5 h-1.5 bg-[#6B1D2F] dark:bg-[#C5A059] mr-2 mt-1.5 shrink-0 rounded-full" />
                            <span>{sub.name}</span>
                          </p>
                          <p className="text-[#5A524E] dark:text-[#A8A29E] ml-3.5 mt-0.5 leading-relaxed text-[11.5px] font-light">
                            {sub.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#E8E0D5]/60 dark:border-[#38312B] mt-4">
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
        {/* 3. WHAT WE MANAGE FOR YOU (REPLACING OLD TABLE WITH VISUAL SHOWCASE) */}
        {/* ========================================================================= */}
        <section id="service-modules">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2">
              <span className="w-6 h-px bg-[#C5A059]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#6B1D2F] dark:text-[#E0CFA6]">
                Production & Execution
              </span>
              <span className="w-6 h-px bg-[#C5A059]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#2B2625] dark:text-[#FAF8F5] font-normal tracking-tight leading-[1.12]">
              What We Manage For You. <br />
              <span className="italic font-serif text-[#6B1D2F] dark:text-[#E0CFA6]">Every Operational Discipline.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#5A524E] dark:text-[#D4CCC2] font-light leading-relaxed">
              Every detail handled directly by our dedicated crew so you don't have to chase disconnected contractors or suppliers.
            </p>
          </div>

          {/* Alternating Image-and-Text Visual Showcase (Replaces Old Table Layout) */}
          <div className="space-y-10 sm:space-y-14">
            {serviceModules.map((item, idx) => {
              const isEven = idx % 2 === 1;
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
                >
                  {/* Visual Image Column */}
                  <div
                    className={`lg:col-span-6 relative group ${
                      isEven ? 'order-1 lg:order-2' : 'order-1'
                    }`}
                  >
                    <div className="relative rounded-2xl overflow-hidden border border-[#E8E0D5] dark:border-[#38312B] bg-white dark:bg-[#1C1917] shadow-xl aspect-[16/10]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.96]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#E0CFA6]">
                          {item.category}
                        </span>
                        <span className="text-[11px] bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                          Direct Crew Delivery
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Text Column */}
                  <div
                    className={`lg:col-span-6 space-y-5 ${
                      isEven ? 'order-2 lg:order-1' : 'order-2'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#6B1D2F] dark:text-[#E0CFA6]">
                        <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] dark:bg-[#141210] border border-[#E8E0D5] dark:border-[#38312B] flex items-center justify-center text-[#6B1D2F] dark:text-[#C5A059] shrink-0">
                          <Icon className="w-4 h-4 stroke-[1.8]" />
                        </div>
                        <span>Service Module {item.num}</span>
                      </div>
                      <span className="font-serif text-5xl font-light text-[#C5A059]/30 select-none">
                        {item.num}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2625] dark:text-[#FAF8F5] leading-snug">
                      {item.name}
                    </h3>

                    <p className="text-sm sm:text-base text-[#5A524E] dark:text-[#A8A29E] font-light leading-relaxed">
                      {item.deliverable}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {item.highlights.map((h, hIdx) => (
                        <span
                          key={hIdx}
                          className="inline-flex items-center space-x-1.5 text-xs font-medium px-3 py-1 rounded-md bg-white dark:bg-[#1C1917] border border-[#E8E0D5] dark:border-[#38312B] text-[#2B2625] dark:text-[#FAF8F5]"
                        >
                          <Check className="w-3.5 h-3.5 text-[#6B1D2F] dark:text-[#C5A059]" />
                          <span>{h}</span>
                        </span>
                      ))}
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => handleSelectCategory(item.name)}
                        className="text-xs font-semibold text-[#6B1D2F] dark:text-[#E0CFA6] hover:underline inline-flex items-center space-x-1.5 group"
                      >
                        <span>Include in event proposal</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. IMMERSIVE EVENT PHOTOGRAPHY GALLERY (MASONRY & LIGHTBOX) */}
        {/* ========================================================================= */}
        <section id="event-gallery">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center space-x-2">
                <span className="w-6 h-px bg-[#C5A059]" />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#6B1D2F] dark:text-[#E0CFA6]">
                  Production Portfolio
                </span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#2B2625] dark:text-[#FAF8F5] font-normal">
                Stagecraft, Sound & Event Galas
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
        {/* 5. HOW WE WORK TOGETHER (4-STEP PRODUCTION WORKFLOW) */}
        {/* ========================================================================= */}
        <section id="our-process" className="bg-white dark:bg-[#1C1917] border border-[#E8E0D5] dark:border-[#38312B] rounded-2xl p-8 sm:p-14 shadow-sm">
          <SectionHeader
            badge="Simple Steps"
            title="How We Bring Calm to Major Events"
            subtitle="From your first phone call to the final guest farewell, here is our proven four-step operational workflow."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="bg-[#FAF8F5] dark:bg-[#141210] border border-[#E8E0D5] dark:border-[#38312B] rounded-2xl p-7 hover:border-[#6B1D2F]/40 dark:hover:border-[#C5A059]/40 transition-all duration-300 flex flex-col justify-between group shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-serif text-3xl sm:text-4xl font-bold text-[#6B1D2F] dark:text-[#C5A059]">
                        {step.step}
                      </span>
                      <span className="text-[10px] font-semibold bg-[#6B1D2F]/10 dark:bg-[#C5A059]/20 text-[#6B1D2F] dark:text-[#C5A059] border border-[#6B1D2F]/20 dark:border-[#C5A059]/30 px-2.5 py-0.5 rounded-full">
                        {step.tag}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2 mb-2 text-[#2B2625] dark:text-[#FAF8F5]">
                      <Icon className="w-4 h-4 text-[#C5A059]" />
                      <h4 className="font-serif font-bold text-lg leading-snug">
                        {step.title}
                      </h4>
                    </div>

                    <p className="text-xs text-[#5A524E] dark:text-[#A8A29E] leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-5 border-t border-[#E8E0D5] dark:border-[#38312B] flex items-center justify-between text-xs font-semibold text-[#6B1D2F] dark:text-[#C5A059]">
                    <span>Step {step.step} Ready</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. STANDARD EVENT MANAGEMENT PACKAGES */}
        {/* ========================================================================= */}
        <section id="standard-packages">
          <SectionHeader
            badge="Transparent Packages"
            title="Standard Event Management Packages"
            subtitle="Choose a package tier that suits your guest count, or let us create a custom estimate for your vision."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
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
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B2625] dark:text-[#FAF8F5]">
                        {pkg.name}
                      </h3>
                      {!pkg.popular && (
                        <span className="text-[10px] font-semibold text-[#6B1D2F] dark:text-[#C5A059] bg-[#FAF8F5] dark:bg-[#141210] border border-[#E8E0D5] dark:border-[#38312B] px-2.5 py-0.5 rounded-full">
                          {pkg.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-semibold text-[#6B1D2F] dark:text-[#C5A059] mt-1">
                      {pkg.targetGuests}
                    </p>
                    <p className="text-xs text-[#5A524E] dark:text-[#A8A29E] italic mt-0.5 font-light">
                      ({pkg.idealEvents})
                    </p>
                  </div>

                  <h5 className="text-xs font-semibold text-[#2B2625] dark:text-[#FAF8F5] mb-4 border-b border-[#E8E0D5] dark:border-[#38312B] pb-2">
                    Package Inclusions:
                  </h5>

                  <ul className="space-y-3 mb-8">
                    {pkg.inclusions.map((inc, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-[13px] text-[#2B2625] dark:text-[#FAF8F5] font-light">
                        <div className="w-4 h-4 rounded-full bg-[#6B1D2F]/10 dark:bg-[#C5A059]/20 text-[#6B1D2F] dark:text-[#C5A059] flex items-center justify-center shrink-0 mr-2.5 mt-0.5">
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
        {/* 7. DEDICATED EVENT ENQUIRY FORM */}
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

      {/* Full-Screen Lightbox for Event Gallery */}
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

export default EventManagement;