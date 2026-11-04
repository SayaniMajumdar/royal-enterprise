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
} from 'lucide-react';

const WeddingPlanner = () => {
  const [packageType, setPackageType] = useState('Gold: Complete Planning');
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);

  // 1. What We Take Care Of For Your Wedding (Human, Relatable Copy)
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

  // 2. Step-by-Step Wedding Timeline (Warm, Practical Copy)
  const timelineChecklist = [
    {
      period: '6–9 Months Before',
      title: 'Budget, Prime Venues & The Big Vision',
      tag: 'First steps',
      items: [
        'Sit down with family to finalize the guest list and overall spending comfort.',
        'Visit and reserve your favorite rajbaris, banquets, or lawns for pre-wedding and wedding days.',
        'Book high-demand single-client specialists early: your lead photographer and bridal makeup artist.',
      ],
    },
    {
      period: '3–5 Months Before',
      title: 'Decor Themes, Menu Tastings & Invitations',
      tag: 'Creative details',
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
      tag: 'Family prep',
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
      tag: 'Final checks',
      items: [
        'Share a clear minute-by-minute schedule with family heads and vendors so everyone is aligned.',
        'Assemble welcome vanity bags, room hampers, and guest luggage tags.',
        'Review auspicious lagna timings and ritual items with the family priest.',
      ],
    },
    {
      period: 'The Wedding Days',
      title: 'On-Ground Care & Family Shadow Support',
      tag: 'The big day',
      items: [
        'Our team arrives 8 hours prior to guest arrivals to inspect flowers, sound, and dining stations.',
        'A dedicated personal shadow stays by the bride and groom for refreshments, wardrobe adjustments, and cues.',
        'We guide guests smoothly between greeting lounges, the main mandap, and hot buffet dining.',
      ],
    },
  ];

  // 3. Clear Planning Options
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

  // 4. Multi-Day Event Blueprint
  const eventBlueprint = [
    {
      day: 'Day 1: Morning',
      title: 'Haldi & Phoolon Ki Holi',
      description: 'Bright marigold floral setup, live dhol beats, organic herbal haldi, and joyful candid photo-ops.',
      accent: 'border-amber-400 bg-amber-500/10 text-amber-900 dark:text-amber-300',
    },
    {
      day: 'Day 1: Evening',
      title: 'Sangeet & Cocktail Night',
      description: 'Glamorous club lighting, elevated mocktail bar, high-energy DJ music, and choreographed family dances.',
      accent: 'border-purple-400 bg-purple-500/10 text-purple-900 dark:text-purple-300',
    },
    {
      day: 'Day 2: Morning',
      title: 'Traditional Aai Buro Bhaat & Chuda',
      description: 'Intimate rituals with brass lamps, auspicious alpana art, and a beloved traditional family feast.',
      accent: 'border-rose-400 bg-rose-500/10 text-rose-900 dark:text-rose-300',
    },
    {
      day: 'Day 2: Evening',
      title: 'The Royal Wedding Ceremony',
      description: 'Grand Barat entry, fresh flower mandap, sacred Vedic chants, and a grand banquet feast for all guests.',
      accent: 'border-amber-500 bg-amber-500/15 text-amber-900 dark:text-amber-200',
    },
    {
      day: 'Day 3: Evening',
      title: 'Boubhat & Grand Reception',
      description: 'Sleek modern decor, live acoustic sufi or jazz music, family photo lounge, and an imperial multi-cuisine feast.',
      accent: 'border-sky-400 bg-sky-500/10 text-sky-900 dark:text-sky-300',
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
    <div className="bg-[#FAF8F5] dark:bg-[#141210] min-h-screen text-[#2B2625] dark:text-[#FAF8F5]">
      {/* ========================================================================= */}
      {/* HERO BANNER */}
      {/* ========================================================================= */}
      <section className="bg-[#2B2625] text-[#FAF8F5] relative py-24 sm:py-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1920&q=80"
            alt="Royal Enterprise Wedding Planner Hero"
            className="w-full h-full object-cover filter brightness-[0.38] contrast-[1.08] scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2B2625] via-[#2B2625]/75 to-[#2B2625]/85" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center">
          <div className="inline-flex items-center space-x-2.5 mb-5">
            <span className="w-5 h-px bg-[#E0CFA6]/60" />
            <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] text-[#E0CFA6] font-semibold">
              Kolkata • Rajbaris • Destination
            </span>
            <span className="w-5 h-px bg-[#E0CFA6]/60" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#FAF8F5] tracking-tight mb-4">
            Your wedding, truly taken care of
          </h1>
          <p className="font-serif text-lg sm:text-2xl text-[#E0CFA6] font-normal mb-6">
            From heritage rajbaris to Vedic flower mandaps and feasts cooked fresh by our own bawarchis.
          </p>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/90 font-normal leading-relaxed mb-9">
            We handle venue reservations, stage decor, ritual timings, photography, and hospitality with one devoted local team. Your family celebrates without running around after suppliers.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="primary"
              size="md"
              onClick={() => {
                const el = document.getElementById('wedding-packages-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore planning options
            </Button>
            <Button
              variant="outline"
              size="md"
              onClick={() => setIsProposalModalOpen(true)}
              icon={FileText}
              iconPosition="left"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white"
            >
              View sample proposal & agreement
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 py-20 space-y-28">
        {/* ========================================================================= */}
        {/* 1. SCOPE OF PLANNING SERVICES */}
        {/* ========================================================================= */}
        <section id="scope-of-services">
          <SectionHeader
            badge="Complete wedding care"
            title="What we take care of for your wedding"
            subtitle="From booking historic courtyards to personal shadow managers on the big day, we stay by your side so you can enjoy every moment."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {scopeServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#1C1917] border border-[#E8E0D5] dark:border-[#38312B] rounded-2xl p-7 hover:border-[#6B1D2F]/40 dark:hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:-translate-y-1 hover:shadow-md"
                >
                  <div>
                    <div className="w-10 h-10 rounded-full bg-[#FAF8F5] dark:bg-[#141210] border border-[#E8E0D5] dark:border-[#38312B] flex items-center justify-center mb-5 text-[#6B1D2F] dark:text-[#E0CFA6] group-hover:border-[#6B1D2F]/40 transition-colors">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#2B2625] dark:text-[#FAF8F5] mb-2.5 group-hover:text-[#6B1D2F] dark:group-hover:text-[#E0CFA6] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#5A524E] dark:text-[#D4CCC2] leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-[#E8E0D5]/60 dark:border-[#38312B] flex items-center text-[11px] text-[#6B1D2F] dark:text-[#E0CFA6] font-medium">
                    <span>Royal Enterprise personal care</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. MASTER WEDDING TIMELINE & CHECKLIST */}
        {/* ========================================================================= */}
        <section id="wedding-timeline" className="bg-white dark:bg-[#1C1917] border border-[#E8E0D5] dark:border-[#38312B] rounded-2xl p-8 sm:p-12 shadow-sm">
          <SectionHeader
            badge="Step-by-step checklist"
            title="Your wedding planning timeline"
            subtitle="A clear countdown from our first conversation to the morning of Boubhat so you always know what comes next."
          />

          <div className="space-y-5">
            {timelineChecklist.map((phase, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F5] dark:bg-[#141210] border border-[#E8E0D5] dark:border-[#38312B] rounded-xl p-6 hover:border-[#6B1D2F]/30 dark:hover:border-[#D4AF37]/30 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-[#E8E0D5] dark:border-[#38312B] pb-3">
                  <div className="flex items-center space-x-3">
                    <span className="font-serif text-lg sm:text-xl font-bold text-[#6B1D2F] dark:text-[#E0CFA6] tracking-wide">
                      {phase.period}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-[#2B2625] dark:text-[#FAF8F5]">
                      • {phase.title}
                    </span>
                  </div>
                  <span className="inline-block text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#6B1D2F]/10 dark:bg-[#6B1D2F]/20 border border-[#6B1D2F]/20 dark:border-[#6B1D2F]/30 text-[#6B1D2F] dark:text-[#E0CFA6] w-fit">
                    {phase.tag}
                  </span>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-[13px] text-[#5A524E] dark:text-[#D4CCC2] font-normal">
                  {phase.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start">
                      <div className="w-4 h-4 rounded-full bg-[#6B1D2F]/10 dark:bg-[#D4AF37]/20 text-[#6B1D2F] dark:text-[#D4AF37] flex items-center justify-center shrink-0 mr-2.5 mt-0.5">
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
        {/* 3. WEDDING PLANNING PACKAGES */}
        {/* ========================================================================= */}
        <section id="wedding-packages-section">
          <SectionHeader
            badge="Planning options"
            title="Options tailored to your celebration"
            subtitle="Honest options tailored to whether you need a dedicated hand on the day of the wedding or full guidance from day one."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {weddingPackages.map((pkg, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  pkg.highlight
                    ? 'bg-white dark:bg-[#1C1917] border-2 border-[#6B1D2F] dark:border-[#D4AF37] shadow-md'
                    : 'bg-white dark:bg-[#1C1917] border border-[#E8E0D5] dark:border-[#38312B] hover:border-[#6B1D2F]/40 dark:hover:border-[#D4AF37]/50 shadow-sm'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#6B1D2F] text-white font-medium text-[11px] px-3.5 py-1 rounded-full shadow-sm flex items-center">
                    <Crown className="w-3 h-3 mr-1" />
                    {pkg.badge}
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <h3 className="font-serif text-2xl font-bold text-[#1F1D1A] dark:text-[#FAF7F2] mb-1">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-[#6E1423] dark:text-[#F59E0B] font-medium mb-3">
                      {pkg.subtitle}
                    </p>
                    <div className="p-3 bg-[#FAF8F4] dark:bg-[#141210] border border-[#E8E1D5] dark:border-[#38312B] rounded text-xs text-[#554F47] dark:text-[#A8A29E] space-y-1 font-light">
                      <p><span className="text-[#6B645C] dark:text-[#8C827A]">Planning Period:</span> <strong className="text-[#1F1D1A] dark:text-[#FAF7F2] font-medium">{pkg.engagement}</strong></p>
                      <p><span className="text-[#6B645C] dark:text-[#8C827A]">On-Site Team:</span> <strong className="text-maroon dark:text-gold-light font-medium">{pkg.teamSize}</strong></p>
                    </div>
                  </div>

                  <h5 className="text-xs font-semibold text-gold-dark dark:text-gold-light mb-4 border-b border-[#E8E1D5] dark:border-[#38312B] pb-2">
                    What is included:
                  </h5>

                  <ul className="space-y-3 mb-8 text-xs sm:text-[13px] text-[#4A433A] dark:text-[#D5CCC0] font-light">
                    <li className="flex items-start">
                      <strong className="text-gold-dark dark:text-gold-light w-28 shrink-0 text-xs font-semibold">Decor & Flowers:</strong>
                      <span>{pkg.decor}</span>
                    </li>
                    <li className="flex items-start">
                      <strong className="text-gold-dark dark:text-gold-light w-28 shrink-0 text-xs font-semibold">Feast Sync:</strong>
                      <span>{pkg.catering}</span>
                    </li>
                    <li className="flex items-start">
                      <strong className="text-gold-dark dark:text-gold-light w-28 shrink-0 text-xs font-semibold">Entertainment:</strong>
                      <span>{pkg.entertainment}</span>
                    </li>
                    <li className="flex items-start">
                      <strong className="text-gold-dark dark:text-gold-light w-28 shrink-0 text-xs font-semibold">Guest Care:</strong>
                      <span>{pkg.hospitality}</span>
                    </li>
                  </ul>
                </div>

                <Button
                  variant={pkg.highlight ? 'maroon' : 'outline'}
                  size="md"
                  onClick={() => handleSelectPackage(pkg.name)}
                  className="w-full"
                >
                  Choose {pkg.name.split(':')[0]}
                </Button>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-[#6B645C] dark:text-[#A8A29E] italic mt-6 font-light">
            (Note: Planning fees cover management, design, and manpower; production, vendor bookings, and catering costs are billed transparently at actuals).
          </p>
        </section>

        {/* ========================================================================= */}
        {/* 4. MULTI-DAY EVENT BLUEPRINT */}
        {/* ========================================================================= */}
        <section id="multi-day-blueprint">
          <SectionHeader
            badge="The celebrations"
            title="A 3-day wedding journey in Kolkata"
            subtitle="How we guide your family through each traditional Bengali and Indian ceremony with joy and zero rush."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {eventBlueprint.map((event, idx) => (
              <div
                key={idx}
                className="bg-[#FFFDF9] dark:bg-[#1C1917] border border-[#E8E1D5] dark:border-[#38312B] rounded-xl p-5 hover:border-gold-base/50 dark:hover:border-gold-light/50 transition-all flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className={`p-2 rounded text-[11px] font-semibold mb-3 text-center ${event.accent}`}>
                    {event.day}
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#1F1D1A] dark:text-[#FAF7F2] mb-2">
                    {event.title}
                  </h4>
                  <p className="text-xs text-[#554F47] dark:text-[#A8A29E] leading-relaxed font-light">
                    {event.description}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-[#E8E1D5]/60 dark:border-[#38312B] text-[10.5px] text-gold-dark dark:text-gold-light font-medium">
                  Dedicated team assigned
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. INQUIRY FORM */}
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
