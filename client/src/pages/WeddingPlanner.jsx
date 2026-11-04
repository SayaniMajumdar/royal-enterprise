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
    <div className="bg-[#F6F0E7] dark:bg-[#191316] min-h-screen text-[#292323] dark:text-[#F6F0E7] transition-colors font-sans">
      
      {/* ========================================================================= */}
      {/* 1. FULL-SCREEN CINEMATIC WEDDING HERO */}
      {/* ========================================================================= */}
      <section className="relative min-h-[90vh] lg:min-h-[92vh] flex flex-col justify-between bg-[#191316] text-white overflow-hidden">
        {/* Background Event Photography */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1920&q=80"
            alt="Royal Enterprise Bespoke Wedding Planning and Heritage Rajbari Biye Bari in Kolkata"
            className="w-full h-full object-cover filter brightness-[0.38] contrast-[1.1] scale-105 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#191316] via-black/50 to-black/80" />
          <div className="absolute inset-0 bg-radial from-transparent via-black/30 to-black/75" />
        </div>

        {/* Top Spacer for Fixed Nav */}
        <div className="pt-32 sm:pt-40" />

        {/* Center Content */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 text-center my-auto py-12">
          <div className="max-w-4xl mx-auto space-y-6">
            
            <div className="inline-flex items-center space-x-2.5 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-[#E2CCA1]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C49A53]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.24em] font-medium font-sans">
                Kolkata • Heritage Rajbaris • Destination
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-tight leading-[1.05]">
              Every Sacred Vow, <br />
              <span className="italic font-display text-[#E2CCA1]">Crafted with Royal Poise.</span>
            </h1>

            <p className="font-display text-lg sm:text-2xl text-[#E2CCA1] font-normal italic max-w-2xl mx-auto">
              From historic rajbari courtyards and Vedic floral mandaps to feasts cooked live by our bawarchis.
            </p>

            <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/85 font-light leading-relaxed font-sans">
              We handle venue reservations, mandap artistry, bridal styling, ritual timings, and guest hospitality with one devoted team. Your family celebrates without stress.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-3 font-sans">
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('wedding-packages-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3.5 text-xs uppercase tracking-wider font-semibold rounded-lg bg-[#D65B43] hover:bg-[#B84630] text-white shadow-lg shadow-[#D65B43]/25 transition-all duration-200"
              >
                Explore Planning Packages
              </button>

              <button
                type="button"
                onClick={() => setIsProposalModalOpen(true)}
                className="px-7 py-3.5 text-xs uppercase tracking-wider font-semibold rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-sm transition-all duration-200 inline-flex items-center space-x-2"
              >
                <FileText className="w-4 h-4 text-[#E2CCA1]" />
                <span>View Sample Proposal</span>
              </button>

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
        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-5 sm:px-8 pb-8 pt-4">
          <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-white/80 font-sans">
            <div className="flex items-center space-x-3">
              <ShieldCheck className="w-4 h-4 text-[#C49A53]" />
              <span>Dedicated single floor manager for the entire day</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-4 h-4 text-[#C49A53]" />
              <span>Punctual ritual timings & auspicious subho drishti</span>
            </div>
            <div className="flex items-center space-x-3">
              <Sparkles className="w-4 h-4 text-[#C49A53]" />
              <span>Fresh live cooking with zero outsourced brokers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-10 sm:py-14 space-y-12 sm:space-y-16">

        {/* ========================================================================= */}
        {/* 2. THE FIVE BESPOKE DISCIPLINES (EDITORIAL SHOWCASE) */}
        {/* ========================================================================= */}
        <section id="bespoke-disciplines">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3 font-sans">
            <div className="inline-flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C49A53]" />
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#401D2C] dark:text-[#E2CCA1]">
                The Five Disciplines
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl text-[#292323] dark:text-[#F6F0E7] font-normal tracking-tight leading-[1.12]">
              Every Detail of Your Biye Bari, <br />
              <span className="italic font-display text-[#401D2C] dark:text-[#E2CCA1]">Looked After Under One Roof.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#665C5C] dark:text-[#D4CCC2] font-light leading-relaxed">
              We look after palatial courtyards, bridal styling, heirloom jewellery, handloom silks, and full wedding execution so you never have to coordinate between separate suppliers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 font-sans">
            {bespokePillars.map((pillar, idx) => (
              <div
                key={pillar.id}
                className={`bg-white dark:bg-[#231B1F] rounded-xl border border-[#E8DFD3] dark:border-[#3F3238] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col justify-between ${
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
                    <div className="absolute top-3 left-3 bg-[#401D2C] text-white text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full shadow-sm">
                      {pillar.tag}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-3">
                    <h3 className="font-display text-xl sm:text-2xl font-normal text-[#292323] dark:text-[#F6F0E7] group-hover:text-[#401D2C] dark:group-hover:text-[#E2CCA1] transition-colors leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-[13.5px] text-[#665C5C] dark:text-[#D4CCC2] font-light leading-relaxed">
                      {pillar.description}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-2">
                      {pillar.highlights.map((h, hIdx) => (
                        <span
                          key={hIdx}
                          className="inline-flex items-center space-x-1.5 text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#F6F0E7] dark:bg-[#191316] border border-[#E8DFD3] dark:border-[#3F3238] text-[#292323] dark:text-[#F6F0E7]"
                        >
                          <Check className="w-3 h-3 text-[#D65B43]" />
                          <span>{h}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#E8DFD3]/60 dark:border-[#3F3238] mt-4">
                  <button
                    type="button"
                    onClick={() => handleSelectPackage('Gold: Complete Planning')}
                    className="text-xs font-semibold text-[#401D2C] dark:text-[#E2CCA1] hover:underline inline-flex items-center space-x-1"
                  >
                    <span>Inquire for {pillar.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C49A53]" />
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 font-sans">
            {scopeServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#231B1F] border border-[#E8DFD3] dark:border-[#3F3238] rounded-xl p-6 sm:p-7 hover:border-[#401D2C]/40 dark:hover:border-[#C49A53]/50 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:-translate-y-1 hover:shadow-xl"
                >
                  <div>
                    <div className="w-11 h-11 rounded-lg bg-[#F6F0E7] dark:bg-[#191316] border border-[#E8DFD3] dark:border-[#3F3238] flex items-center justify-center mb-5 text-[#401D2C] dark:text-[#C49A53] group-hover:border-[#401D2C]/40 transition-colors">
                      <Icon className="w-5 h-5 stroke-[1.6]" />
                    </div>
                    <h3 className="font-display text-xl font-normal text-[#292323] dark:text-[#F6F0E7] mb-2 group-hover:text-[#401D2C] dark:group-hover:text-[#E2CCA1] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-[13.5px] text-[#665C5C] dark:text-[#D4CCC2] leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-[#E8DFD3]/70 dark:border-[#3F3238] flex items-center justify-between text-[11px] text-[#401D2C] dark:text-[#E2CCA1] font-semibold">
                    <span>Royal Enterprise personal care</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C49A53]" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. MASTER WEDDING TIMELINE COUNTDOWN */}
        {/* ========================================================================= */}
        <section id="wedding-timeline" className="bg-white dark:bg-[#231B1F] border border-[#E8DFD3] dark:border-[#3F3238] rounded-xl p-6 sm:p-10 shadow-sm">
          <SectionHeader
            badge="Step-by-step checklist"
            title="Your Wedding Planning Countdown"
            subtitle="A clear milestone schedule from our first cup of tea to the morning of Boubhat so you always know what comes next."
          />

          <div className="space-y-5 font-sans">
            {timelineChecklist.map((phase, idx) => (
              <div
                key={idx}
                className="bg-[#F6F0E7]/50 dark:bg-[#191316] border border-[#E8DFD3] dark:border-[#3F3238] rounded-xl p-5 sm:p-7 hover:border-[#401D2C]/40 dark:hover:border-[#C49A53]/40 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 border-b border-[#E8DFD3] dark:border-[#3F3238] pb-3">
                  <div className="flex items-center space-x-3">
                    <span className="font-display text-xl sm:text-2xl font-normal text-[#401D2C] dark:text-[#E2CCA1] tracking-wide">
                      {phase.period}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#292323] dark:text-[#F6F0E7]">
                      • {phase.title}
                    </span>
                  </div>
                  <span className="inline-block text-[11px] font-semibold px-3 py-0.5 rounded-full bg-[#401D2C]/10 dark:bg-[#C49A53]/20 border border-[#401D2C]/20 dark:border-[#C49A53]/30 text-[#401D2C] dark:text-[#E2CCA1] w-fit">
                    {phase.tag}
                  </span>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs sm:text-[13px] text-[#665C5C] dark:text-[#D4CCC2] font-light">
                  {phase.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start">
                      <div className="w-4 h-4 rounded-full bg-[#401D2C]/10 dark:bg-[#C49A53]/20 text-[#401D2C] dark:text-[#E2CCA1] flex items-center justify-center shrink-0 mr-2 mt-0.5">
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 font-sans">
            {weddingPackages.map((pkg, idx) => (
              <div
                key={idx}
                className={`relative rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  pkg.highlight
                    ? 'bg-white dark:bg-[#231B1F] border-2 border-[#401D2C] dark:border-[#C49A53] shadow-xl'
                    : 'bg-white dark:bg-[#231B1F] border border-[#E8DFD3] dark:border-[#3F3238] hover:border-[#401D2C]/40 dark:hover:border-[#C49A53]/50 shadow-sm'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#401D2C] text-white font-semibold text-xs px-4 py-1 rounded-full shadow-md flex items-center">
                    <Crown className="w-3.5 h-3.5 mr-1 text-[#E2CCA1]" />
                    {pkg.badge}
                  </div>
                )}

                <div>
                  <div className="mb-5">
                    <h3 className="font-display text-2xl font-normal text-[#292323] dark:text-[#F6F0E7] mb-1">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-[#401D2C] dark:text-[#E2CCA1] font-semibold mb-3">
                      {pkg.subtitle}
                    </p>
                    <div className="p-3 bg-[#F6F0E7]/60 dark:bg-[#191316] border border-[#E8DFD3] dark:border-[#3F3238] rounded-lg text-xs text-[#665C5C] dark:text-[#D4CCC2] space-y-1 font-light">
                      <p><span className="text-[#827771] dark:text-[#A8A29E]">Planning Period:</span> <strong className="text-[#292323] dark:text-[#F6F0E7] font-semibold">{pkg.engagement}</strong></p>
                      <p><span className="text-[#827771] dark:text-[#A8A29E]">On-Site Crew:</span> <strong className="text-[#401D2C] dark:text-[#E2CCA1] font-semibold">{pkg.teamSize}</strong></p>
                    </div>
                  </div>

                  <h5 className="text-xs uppercase tracking-wider font-semibold text-[#292323] dark:text-[#F6F0E7] mb-3 border-b border-[#E8DFD3] dark:border-[#3F3238] pb-2">
                    Key Deliverables:
                  </h5>

                  <ul className="space-y-2.5 mb-6 text-xs sm:text-[13px] text-[#665C5C] dark:text-[#D4CCC2] font-light">
                    <li className="flex items-start">
                      <strong className="text-[#292323] dark:text-[#F6F0E7] w-28 shrink-0 text-xs font-semibold">Decor & Sets:</strong>
                      <span>{pkg.decor}</span>
                    </li>
                    <li className="flex items-start">
                      <strong className="text-[#292323] dark:text-[#F6F0E7] w-28 shrink-0 text-xs font-semibold">Feast Sync:</strong>
                      <span>{pkg.catering}</span>
                    </li>
                    <li className="flex items-start">
                      <strong className="text-[#292323] dark:text-[#F6F0E7] w-28 shrink-0 text-xs font-semibold">Music & Sound:</strong>
                      <span>{pkg.entertainment}</span>
                    </li>
                    <li className="flex items-start">
                      <strong className="text-[#292323] dark:text-[#F6F0E7] w-28 shrink-0 text-xs font-semibold">Guest Care:</strong>
                      <span>{pkg.hospitality}</span>
                    </li>
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => handleSelectPackage(pkg.name)}
                  className={`w-full py-3 text-xs uppercase tracking-wider font-semibold rounded-lg transition-colors ${
                    pkg.highlight
                      ? 'bg-[#401D2C] hover:bg-[#2A101C] text-[#F6F0E7] shadow-sm'
                      : 'border border-[#C8BCAF] dark:border-[#5A4E45] text-[#292323] dark:text-[#F6F0E7] hover:bg-[#F6F0E7] dark:hover:bg-[#191316]'
                  }`}
                >
                  Select {pkg.name.split(':')[0]}
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-[#827771] dark:text-[#A8A29E] italic mt-6 font-light font-sans">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 font-sans">
            {eventBlueprint.map((event, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#231B1F] border border-[#E8DFD3] dark:border-[#3F3238] rounded-xl p-5 hover:border-[#401D2C]/50 dark:hover:border-[#C49A53]/50 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div>
                  <div className={`p-2 rounded-lg text-[11px] font-semibold mb-3 text-center border ${event.accent}`}>
                    {event.day}
                  </div>
                  <h4 className="font-display font-normal text-lg text-[#292323] dark:text-[#F6F0E7] mb-2 leading-snug">
                    {event.title}
                  </h4>
                  <p className="text-xs text-[#665C5C] dark:text-[#D4CCC2] leading-relaxed font-light">
                    {event.description}
                  </p>
                </div>
                <div className="pt-3 mt-4 border-t border-[#E8DFD3]/70 dark:border-[#3F3238] text-[10.5px] text-[#401D2C] dark:text-[#E2CCA1] font-semibold flex items-center justify-between">
                  <span>Assigned Team</span>
                  <Check className="w-3.5 h-3.5 text-[#C49A53]" />
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