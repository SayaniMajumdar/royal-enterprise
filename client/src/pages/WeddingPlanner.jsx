import React, { useState } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import WeddingEnquiryForm from '../components/wedding/WeddingEnquiryForm';
import WeddingProposalModal from '../components/wedding/WeddingProposalModal';
import Button from '../components/common/Button';
import {
  HeartHandshake,
  Check,
  FileText,
  Building,
  Palette,
  Users,
  Gift,
  Flame,
  Crown,
  Sparkles,
  ArrowRight,
  Gem,
  Shirt,
  Calendar,
  MessageSquare,
  ShieldCheck,
  Clock,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

const WeddingPlanner = () => {
  const [packageType, setPackageType] = useState('Gold: Complete Planning');
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);

  // =========================================================================
  // 1. THE FIVE MANDATORY BESPOKE PILLARS (EDITORIAL SHOWCASE)
  // =========================================================================
  const bespokePillars = [
    {
      id: 'venue',
      title: 'Heritage Venue Selection',
      tag: 'Palaces & Lawns',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
      description:
        'Reserving historic Kolkata rajbaris, Five-Star luxury hotel ballrooms, and tranquil riverside lawns at honest, contracted family rates.',
      highlights: ['Rajbari courtyards', 'Five-star ballrooms', 'Open riverside lawns'],
    },
    {
      id: 'makeup',
      title: 'Bridal Makeup & Styling',
      tag: 'Aesthetic Artistry',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80',
      description:
        'HD and airbrush makeup artists, floral hair adornment, and drape specialists to ensure the bride and family look flawless from morning rituals to reception.',
      highlights: ['Airbrush & HD makeup', 'Floral tresses', 'Family vanity coordination'],
    },
    {
      id: 'jewellery',
      title: 'Heritage Jewellery Curation',
      tag: 'Heirloom Elegance',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80',
      description:
        'Expert guidance pairing traditional gold, Jadau, Kundan, and Polki ornaments with ceremony necklines and saree borders for a timeless royal look.',
      highlights: ['Traditional Bengali gold', 'Kundan & Polki styling', 'Secure on-site lockers'],
    },
    {
      id: 'saree',
      title: 'Handloom Benarasi Sarees',
      tag: 'Royal Weaves',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80',
      description:
        'Direct sourcing of authentic pure silk Benarasi drapes, zardozi odhnis, and hand-embroidered groom sherwanis crafted by master weavers.',
      highlights: ['Pure silk Benarasi drapes', 'Zardozi odhnis', 'Bespoke groom sherwanis'],
    },
    {
      id: 'packages',
      title: 'Complete Wedding Packages',
      tag: 'End-to-End Care',
      image: '/images/hero-stage.png',
      description:
        'Single-point accountability encompassing Vedic mandap decor, guest logistics, authentic in-house catering, and personal bride/groom shadow managers.',
      highlights: ['100% In-house catering', '3D Mandap fabrication', 'Dedicated floor director'],
    },
  ];

  // =========================================================================
  // 2. SCOPE OF PLANNING SERVICES (WHAT WE TAKE CARE OF)
  // =========================================================================
  const scopeServices = [
    {
      icon: Building,
      title: 'Finding the Perfect Venue',
      description:
        'Whether you dream of a heritage rajbari with historic courtyards, a five-star ballroom, or a riverside lawn across Kolkata, we help you pick the right space and lock in honest rates.',
    },
    {
      icon: Palette,
      title: 'Mandap Styling & Flower Decor',
      description:
        'From traditional marigold mandaps and fresh tuberose canopies to photogenic entrance gates, we design warm, welcoming settings that look even more magical in person.',
    },
    {
      icon: Users,
      title: 'Working with Trusted Vendors',
      description:
        'We coordinate with the city’s finest candid photographers, makeup artists, choreographers, shehnai players, and priests so you don’t spend weeks chasing phone calls.',
    },
    {
      icon: HeartHandshake,
      title: 'Taking Care of Your Guests',
      description:
        'Airport pickups, welcoming hotel desks, luggage handling, and friendly coordinators so your outstation relatives and elders feel genuinely cared for from the moment they arrive.',
    },
    {
      icon: Gift,
      title: 'Gifting & Tattwa Packaging',
      description:
        'Beautifully arranged tattwa trays, custom wedding invitation hampers, and thoughtful return favors that express your family’s love with elegance and traditional grace.',
    },
    {
      icon: Flame,
      title: 'Traditional Rituals & Timings',
      description:
        'We make sure the puja samagri, sacred fire, brass thalis, and priest requirements are prepared well ahead of time, ensuring subho drishti and saat phere happen with peaceful dignity.',
    },
  ];

  // =========================================================================
  // 3. STEP-BY-STEP WEDDING COUNTDOWN TIMELINE
  // =========================================================================
  const timelineChecklist = [
    {
      period: '6–9 Months Before',
      title: 'Budget, Prime Venues & The Big Vision',
      tag: 'Phase 01',
      items: [
        'Sit down with family to finalize the guest list and overall spending comfort.',
        'Visit and reserve your favorite rajbaris, banquets, or lawns for pre-wedding and wedding days.',
        'Book high-demand single-client specialists early: your lead photographer and bridal makeup artist.',
      ],
    },
    {
      period: '3–5 Months Before',
      title: 'Decor Themes, Menu Tastings & Invitations',
      tag: 'Phase 02',
      items: [
        'Finalize flower and decor themes for Haldi, Mehendi, Sangeet, Mandap, and Boubhat.',
        'Join our kitchen team for live food tastings and handpick your favorite per-plate recipes.',
        'Order traditional printed cards, bespoke gift boxes, and digital video invites.',
        'Confirm family Sangeet choreographers, live musicians, and DJ setups.',
      ],
    },
    {
      period: '1–2 Months Before',
      title: 'Outfits, Guest Stays & Local Permissions',
      tag: 'Phase 03',
      items: [
        'Complete final bridal and groom outfit fittings; finalize Benarasi drapes, jewellery, and footwear.',
        'Confirm outstation family train/flight timings and block hotel room wings.',
        'Wrap wedding favors and design ceremonial tattwa trays.',
        'Secure any required outdoor ground or music sound permissions.',
      ],
    },
    {
      period: '1–2 Weeks Before',
      title: 'Run-of-Show Schedules & Final Walkthrough',
      tag: 'Phase 04',
      items: [
        'Share a clear minute-by-minute schedule with family heads and vendors so everyone is aligned.',
        'Assemble welcome vanity bags, room hampers, and guest luggage tags.',
        'Review auspicious lagna timings and ritual items with the family priest.',
      ],
    },
    {
      period: 'The Wedding Days',
      title: 'On-Ground Care & Family Shadow Support',
      tag: 'Celebration Day',
      items: [
        'Our team arrives 8 hours prior to guest arrivals to inspect flowers, sound, and dining stations.',
        'A dedicated personal shadow stays by the bride and groom for refreshments, wardrobe adjustments, and cues.',
        'We guide guests smoothly between greeting lounges, the main mandap, and hot buffet dining.',
      ],
    },
  ];

  // =========================================================================
  // 4. WEDDING PLANNING PACKAGES
  // =========================================================================
  const weddingPackages = [
    {
      name: 'Silver: Day-of Management',
      subtitle: 'For couples who booked vendors but want to relax on the big day',
      engagement: 'Starts 4 weeks before event',
      decor: 'Coordinate and supervise client-booked decor team',
      catering: 'Sync food timings, plate counts, and live counters',
      entertainment: 'Sound and music timing management',
      hospitality: 'Warm guest guidance and reception flow',
      teamSize: '3–4 Coordinators',
      highlight: false,
      badge: 'Essentials',
    },
    {
      name: 'Gold: Complete Planning',
      subtitle: 'Best for city weddings with 300 to 600 guests',
      engagement: '6–8 months of dedicated planning',
      decor: 'Custom 3D design, fresh flower setups & production',
      catering: 'Full menu curation, kitchen tastings & quality audits',
      entertainment: 'Professional emcee, DJ console & folk/dance artists',
      hospitality: 'Airport transfers, hotel check-in desk & hamper delivery',
      teamSize: '6–8 Specialists + 1 Event Director',
      highlight: true,
      badge: 'Most Popular',
    },
    {
      name: 'Imperial: Royal All-Inclusive',
      subtitle: 'For grand palatial and destination celebrations (500+ guests)',
      engagement: '9–12 months of comprehensive care',
      decor: 'Architectural rajbari builds, exotic florals & LED stagecraft',
      catering: 'Royal multi-course banquets, chef tables & dessert counters',
      entertainment: 'Celebrity singers, headline bands & Sufi night setups',
      hospitality: 'Luxury car fleet, 24/7 hospitality lounge & luggage desk',
      teamSize: '12+ Full Crew + Bride & Groom Shadow Managers',
      highlight: false,
      badge: 'Royal Flagship',
    },
  ];

  // =========================================================================
  // 5. 3-DAY WEDDING JOURNEY BLUEPRINT
  // =========================================================================
  const eventBlueprint = [
    {
      day: 'Day 1 • Morning',
      title: 'Haldi & Phoolon Ki Holi',
      description: 'Bright marigold floral setup, live dhol beats, organic herbal haldi, and joyful candid photo-ops.',
      accent: 'border-[#C5A059] bg-[#C5A059]/10 text-[#6B1D2F] dark:text-[#E0CFA6]',
    },
    {
      day: 'Day 1 • Evening',
      title: 'Sangeet & Cocktail Night',
      description: 'Glamorous club lighting, elevated mocktail bar, high-energy DJ music, and choreographed family dances.',
      accent: 'border-[#6B1D2F] bg-[#6B1D2F]/10 text-[#6B1D2F] dark:text-[#E0CFA6]',
    },
    {
      day: 'Day 2 • Morning',
      title: 'Traditional Aai Buro Bhaat',
      description: 'Intimate rituals with brass lamps, auspicious alpana art, and a beloved traditional Bengali feast.',
      accent: 'border-[#C5A059] bg-[#C5A059]/10 text-[#6B1D2F] dark:text-[#E0CFA6]',
    },
    {
      day: 'Day 2 • Evening',
      title: 'The Royal Wedding Ceremony',
      description: 'Grand Barat entry, fresh flower mandap, sacred Vedic chants, and a grand banquet feast for all guests.',
      accent: 'border-[#6B1D2F] bg-[#6B1D2F]/15 text-[#6B1D2F] dark:text-[#E0CFA6]',
    },
    {
      day: 'Day 3 • Evening',
      title: 'Boubhat & Grand Reception',
      description: 'Sleek modern decor, live acoustic sufi or jazz music, family photo lounge, and an imperial feast.',
      accent: 'border-[#C5A059] bg-[#C5A059]/10 text-[#6B1D2F] dark:text-[#E0CFA6]',
    },
  ];

  const handleSelectPackage = (pkgName) => {
    setPackageType(pkgName);
    const formElement = document.getElementById('wedding-enquiry-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FAF8F5] dark:bg-[#141210] min-h-screen text-[#2B2625] dark:text-[#FAF8F5] transition-colors">
      
      {/* ========================================================================= */}
      {/* 1. FULL-SCREEN CINEMATIC WEDDING HERO */}
      {/* ========================================================================= */}
      <section className="relative min-h-[90vh] lg:min-h-[92vh] flex flex-col justify-between bg-[#141210] text-white overflow-hidden">
        {/* Background Event Photography */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1920&q=80"
            alt="Royal Enterprise Bespoke Wedding Planning and Heritage Rajbari Biye Bari in Kolkata"
            className="w-full h-full object-cover filter brightness-[0.38] contrast-[1.1] scale-105 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-black/50 to-black/80" />
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
                Kolkata • Heritage Rajbaris • Destination
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-tight leading-[1.08]">
              Every Sacred Vow, <br />
              <span className="italic font-serif text-[#E0CFA6]">Crafted with Royal Poise.</span>
            </h1>

            <p className="font-serif text-lg sm:text-2xl text-[#E0CFA6] font-light max-w-2xl mx-auto">
              From historic rajbari courtyards and Vedic floral mandaps to feasts cooked live by our bawarchis.
            </p>

            <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/85 font-light leading-relaxed">
              We handle venue reservations, mandap artistry, bridal styling, ritual timings, and guest hospitality with one devoted team. Your family celebrates without stress.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  const el = document.getElementById('wedding-packages-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-maroon px-8 py-3.5 text-xs uppercase tracking-wider font-semibold shadow-lg"
              >
                Explore Planning Packages
              </Button>

              <Button
                variant="outline"
                size="md"
                onClick={() => setIsProposalModalOpen(true)}
                icon={FileText}
                iconPosition="left"
                className="px-6 py-3.5 text-xs uppercase tracking-wider font-semibold border-white/30 text-white hover:bg-white/15 backdrop-blur-sm"
              >
                View Sample Proposal
              </Button>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Royal%20Enterprise,%20I%20would%20like%20to%20discuss%20our%20upcoming%20wedding.`}
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
              <span>Dedicated single floor manager for the entire day</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-4 h-4 text-[#C5A059]" />
              <span>Punctual ritual timings & auspicious subho drishti</span>
            </div>
            <div className="flex items-center space-x-3">
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              <span>Fresh live cooking with zero outsourced brokers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16 sm:space-y-20">

        {/* ========================================================================= */}
        {/* 2. THE FIVE BESPOKE DISCIPLINES (EDITORIAL SHOWCASE) */}
        {/* ========================================================================= */}
        <section id="bespoke-disciplines">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2">
              <span className="w-6 h-px bg-[#C5A059]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#6B1D2F] dark:text-[#E0CFA6]">
                The Five Disciplines
              </span>
              <span className="w-6 h-px bg-[#C5A059]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#2B2625] dark:text-[#FAF8F5] font-normal tracking-tight leading-[1.12]">
              Every Detail of Your Biye Bari, <br />
              <span className="italic font-serif text-[#6B1D2F] dark:text-[#E0CFA6]">Looked After Under One Roof.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#5A524E] dark:text-[#D4CCC2] font-light leading-relaxed">
              We look after palatial courtyards, bridal styling, heirloom jewellery, handloom silks, and full wedding execution so you never have to coordinate between separate suppliers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bespokePillars.map((pillar, idx) => (
              <div
                key={pillar.id}
                className={`bg-white dark:bg-[#1C1917] rounded-2xl border border-[#E8E0D5] dark:border-[#38312B] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col justify-between ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-100 dark:bg-stone-900">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-3 left-3 bg-[#6B1D2F] text-white text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full shadow-sm">
                      {pillar.tag}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-3">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B2625] dark:text-[#FAF8F5] group-hover:text-[#6B1D2F] dark:group-hover:text-[#E0CFA6] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-[13.5px] text-[#5A524E] dark:text-[#D4CCC2] font-light leading-relaxed">
                      {pillar.description}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-2">
                      {pillar.highlights.map((h, hIdx) => (
                        <span
                          key={hIdx}
                          className="inline-flex items-center space-x-1.5 text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#FAF8F5] dark:bg-[#141210] border border-[#E8E0D5] dark:border-[#38312B] text-[#2B2625] dark:text-[#FAF8F5]"
                        >
                          <Check className="w-3 h-3 text-[#6B1D2F] dark:text-[#C5A059]" />
                          <span>{h}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#E8E0D5]/60 dark:border-[#38312B] mt-4">
                  <button
                    type="button"
                    onClick={() => handleSelectPackage('Gold: Complete Planning')}
                    className="text-xs font-semibold text-[#6B1D2F] dark:text-[#E0CFA6] hover:underline inline-flex items-center space-x-1"
                  >
                    <span>Inquire for {pillar.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. SCOPE OF PLANNING SERVICES */}
        {/* ========================================================================= */}
        <section id="scope-of-services">
          <SectionHeader
            badge="Comprehensive Care"
            title="What We Take Care Of For Your Wedding"
            subtitle="From booking historic courtyards to personal shadow managers on the big day, we stay by your side so you can enjoy every moment."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {scopeServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#1C1917] border border-[#E8E0D5] dark:border-[#38312B] rounded-2xl p-8 hover:border-[#6B1D2F]/40 dark:hover:border-[#C5A059]/50 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:-translate-y-1 hover:shadow-xl"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] dark:bg-[#141210] border border-[#E8E0D5] dark:border-[#38312B] flex items-center justify-center mb-6 text-[#6B1D2F] dark:text-[#C5A059] group-hover:border-[#6B1D2F]/40 transition-colors">
                      <Icon className="w-6 h-6 stroke-[1.6]" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#2B2625] dark:text-[#FAF8F5] mb-3 group-hover:text-[#6B1D2F] dark:group-hover:text-[#E0CFA6] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-[13.5px] text-[#5A524E] dark:text-[#D4CCC2] leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                  <div className="pt-5 mt-5 border-t border-[#E8E0D5]/70 dark:border-[#38312B] flex items-center justify-between text-[11px] text-[#6B1D2F] dark:text-[#E0CFA6] font-semibold">
                    <span>Royal Enterprise personal care</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. MASTER WEDDING TIMELINE COUNTDOWN */}
        {/* ========================================================================= */}
        <section id="wedding-timeline" className="bg-white dark:bg-[#1C1917] border border-[#E8E0D5] dark:border-[#38312B] rounded-2xl p-8 sm:p-14 shadow-sm">
          <SectionHeader
            badge="Step-by-step checklist"
            title="Your Wedding Planning Countdown"
            subtitle="A clear milestone schedule from our first cup of tea to the morning of Boubhat so you always know what comes next."
          />

          <div className="space-y-6">
            {timelineChecklist.map((phase, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F5] dark:bg-[#141210] border border-[#E8E0D5] dark:border-[#38312B] rounded-2xl p-6 sm:p-8 hover:border-[#6B1D2F]/40 dark:hover:border-[#C5A059]/40 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 border-b border-[#E8E0D5] dark:border-[#38312B] pb-4">
                  <div className="flex items-center space-x-3">
                    <span className="font-serif text-xl sm:text-2xl font-bold text-[#6B1D2F] dark:text-[#E0CFA6] tracking-wide">
                      {phase.period}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#2B2625] dark:text-[#FAF8F5]">
                      • {phase.title}
                    </span>
                  </div>
                  <span className="inline-block text-[11px] font-semibold px-3 py-1 rounded-full bg-[#6B1D2F]/10 dark:bg-[#C5A059]/20 border border-[#6B1D2F]/20 dark:border-[#C5A059]/30 text-[#6B1D2F] dark:text-[#E0CFA6] w-fit">
                    {phase.tag}
                  </span>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-[13px] text-[#5A524E] dark:text-[#D4CCC2] font-light">
                  {phase.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start">
                      <div className="w-4 h-4 rounded-full bg-[#6B1D2F]/10 dark:bg-[#C5A059]/20 text-[#6B1D2F] dark:text-[#C5A059] flex items-center justify-center shrink-0 mr-2.5 mt-0.5">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. WEDDING PLANNING PACKAGES */}
        {/* ========================================================================= */}
        <section id="wedding-packages-section">
          <SectionHeader
            badge="Transparent Packages"
            title="Planning Tiers Tailored to Your Vision"
            subtitle="Honest options tailored to whether you need a dedicated hand on the day of the wedding or comprehensive guidance from day one."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {weddingPackages.map((pkg, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                  pkg.highlight
                    ? 'bg-white dark:bg-[#1C1917] border-2 border-[#6B1D2F] dark:border-[#C5A059] shadow-xl'
                    : 'bg-white dark:bg-[#1C1917] border border-[#E8E0D5] dark:border-[#38312B] hover:border-[#6B1D2F]/40 dark:hover:border-[#C5A059]/50 shadow-sm'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#6B1D2F] text-white font-semibold text-xs px-4 py-1 rounded-full shadow-md flex items-center">
                    <Crown className="w-3.5 h-3.5 mr-1 text-[#E0CFA6]" />
                    {pkg.badge}
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <h3 className="font-serif text-2xl font-bold text-[#2B2625] dark:text-[#FAF8F5] mb-1">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-[#6B1D2F] dark:text-[#E0CFA6] font-semibold mb-4">
                      {pkg.subtitle}
                    </p>
                    <div className="p-3.5 bg-[#FAF8F5] dark:bg-[#141210] border border-[#E8E0D5] dark:border-[#38312B] rounded-xl text-xs text-[#5A524E] dark:text-[#D4CCC2] space-y-1.5 font-light">
                      <p><span className="text-[#827771] dark:text-[#A8A29E]">Planning Period:</span> <strong className="text-[#2B2625] dark:text-[#FAF8F5] font-semibold">{pkg.engagement}</strong></p>
                      <p><span className="text-[#827771] dark:text-[#A8A29E]">On-Site Crew:</span> <strong className="text-[#6B1D2F] dark:text-[#E0CFA6] font-semibold">{pkg.teamSize}</strong></p>
                    </div>
                  </div>

                  <h5 className="text-xs font-semibold text-[#2B2625] dark:text-[#FAF8F5] mb-4 border-b border-[#E8E0D5] dark:border-[#38312B] pb-2">
                    Key Deliverables:
                  </h5>

                  <ul className="space-y-3 mb-8 text-xs sm:text-[13px] text-[#5A524E] dark:text-[#D4CCC2] font-light">
                    <li className="flex items-start">
                      <strong className="text-[#2B2625] dark:text-[#FAF8F5] w-28 shrink-0 text-xs font-semibold">Decor & Sets:</strong>
                      <span>{pkg.decor}</span>
                    </li>
                    <li className="flex items-start">
                      <strong className="text-[#2B2625] dark:text-[#FAF8F5] w-28 shrink-0 text-xs font-semibold">Feast Sync:</strong>
                      <span>{pkg.catering}</span>
                    </li>
                    <li className="flex items-start">
                      <strong className="text-[#2B2625] dark:text-[#FAF8F5] w-28 shrink-0 text-xs font-semibold">Music & Sound:</strong>
                      <span>{pkg.entertainment}</span>
                    </li>
                    <li className="flex items-start">
                      <strong className="text-[#2B2625] dark:text-[#FAF8F5] w-28 shrink-0 text-xs font-semibold">Guest Care:</strong>
                      <span>{pkg.hospitality}</span>
                    </li>
                  </ul>
                </div>

                <Button
                  variant={pkg.highlight ? 'primary' : 'outline'}
                  size="md"
                  onClick={() => handleSelectPackage(pkg.name)}
                  className="w-full"
                >
                  Select {pkg.name.split(':')[0]}
                </Button>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-[#827771] dark:text-[#A8A29E] italic mt-6 font-light">
            (Note: Planning packages cover professional direction, design mockups, and on-ground manpower; production, venue bookings, and catering are billed transparently at actuals).
          </p>
        </section>

        {/* ========================================================================= */}
        {/* 6. MULTI-DAY EVENT BLUEPRINT */}
        {/* ========================================================================= */}
        <section id="multi-day-blueprint">
          <SectionHeader
            badge="The Celebrations"
            title="A 3-Day Wedding Journey in Kolkata"
            subtitle="How we guide your family through each traditional ceremony with peaceful elegance and zero rush."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {eventBlueprint.map((event, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#1C1917] border border-[#E8E0D5] dark:border-[#38312B] rounded-2xl p-5 hover:border-[#6B1D2F]/50 dark:hover:border-[#C5A059]/50 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div>
                  <div className={`p-2 rounded-lg text-[11px] font-semibold mb-3 text-center border ${event.accent}`}>
                    {event.day}
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#2B2625] dark:text-[#FAF8F5] mb-2 leading-snug">
                    {event.title}
                  </h4>
                  <p className="text-xs text-[#5A524E] dark:text-[#D4CCC2] leading-relaxed font-light">
                    {event.description}
                  </p>
                </div>
                <div className="pt-3 mt-4 border-t border-[#E8E0D5]/70 dark:border-[#38312B] text-[10.5px] text-[#6B1D2F] dark:text-[#E0CFA6] font-semibold flex items-center justify-between">
                  <span>Assigned Team</span>
                  <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. INQUIRY FORM */}
        {/* ========================================================================= */}
        <section id="wedding-enquiry-form" className="pt-8">
          <WeddingEnquiryForm initialPackageType={packageType} />
        </section>

      </div>

      {/* Proposal & Contract Modal */}
      <WeddingProposalModal
        isOpen={isProposalModalOpen}
        onClose={() => setIsProposalModalOpen(false)}
      />
    </div>
  );
};

export default WeddingPlanner;