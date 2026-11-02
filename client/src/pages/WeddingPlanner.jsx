import React, { useState } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import WeddingEnquiryForm from '../components/wedding/WeddingEnquiryForm';
import WeddingProposalModal from '../components/wedding/WeddingProposalModal';
import Button from '../components/common/Button';
import {
  HeartHandshake,
  Sparkles,
  Crown,
  Calendar,
  Clock,
  Check,
  FileText,
  Building,
  Palette,
  Users,
  Gift,
  Flame,
  Music,
  Printer,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

const WeddingPlanner = () => {
  const [packageType, setPackageType] = useState('Imperial: Turnkey Luxury');
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);

  // 1. Scope of Planning Services
  const scopeServices = [
    {
      icon: Building,
      title: 'Venue Scouting & Negotiations',
      description:
        'Heritage rajbaris, 5-star banquet lawns, beach resorts, and luxury convention centres across Kolkata, Rajasthan, and destination wedding hubs. We negotiate guaranteed corporate & bulk booking rates.',
    },
    {
      icon: Palette,
      title: 'Thematic Decor & Styling',
      description:
        'Photorealistic 3D mandate visualization, custom floral installations, photobooths, fairy-light canopies, and grand designer bride-groom entries tailored to your royal aesthetic.',
    },
    {
      icon: Users,
      title: 'Vendor Orchestration',
      description:
        'Vetting, contract negotiation, and liaison with candid photographers, bridal makeup artists (MUA), choreographers, priests/pandits, DJs, and live musical bands.',
    },
    {
      icon: HeartHandshake,
      title: 'Hospitality & RSVP Management',
      description:
        'Airport/railway welcome desks, room hampering, digital RSVP tracking, luggage handling, and dedicated personal family shadow managers for zero operational stress.',
    },
    {
      icon: Gift,
      title: 'Trousseau & Gifting',
      description:
        'Curated wedding invitation boxes, bespoke packaging for tattwa (ceremonial gifting trays), wedding favors, and personalized bridal/groom entourage hampers.',
    },
    {
      icon: Flame,
      title: 'Ritual Coordination',
      description:
        'Flawless sequencing ensuring puja samagri, brass utensils, sacred fire (homa/yajna) setups, and ceremonial items are staged on time for sacred traditional rituals.',
    },
  ];

  // 2. Master Wedding Timeline & Checklist
  const timelineChecklist = [
    {
      period: '6–9 Months Before',
      title: 'Budget, Venue & Core Theme',
      tag: 'Strategic Foundation',
      items: [
        'Finalize estimated guest list and overall wedding expenditure ceiling.',
        'Select and lock prime venues for pre-wedding rituals, main wedding, and reception.',
        'Contract key high-demand single-client vendors: Lead Photographer/Cinematographer and Bridal Makeup Artist.',
      ],
    },
    {
      period: '3–5 Months Before',
      title: 'Design Concepts & Catering Curation',
      tag: 'Creative Curation',
      items: [
        'Finalize 3D decor themes for Haldi, Mehendi, Sangeet, Wedding Mandap, and Reception.',
        'Conduct catering menu food tastings with the kitchen team and finalize per-plate menus.',
        'Select and order printed stationery, digital e-invites, and bespoke gift boxes.',
        'Book entertainment: DJ, live acoustic singer/sufi troupe, emcee, and Sangeet choreographer.',
      ],
    },
    {
      period: '1–2 Months Before',
      title: 'Logistics, Wardrobe & Wardrobe Styling',
      tag: 'Precision Planning',
      items: [
        'Complete final bridal and groom wear fittings; finalize jewellery and accessories.',
        'Coordinate outstation guest flight/train schedules and confirm hotel room block allocations.',
        'Finalize tattwa decoration styles and wrap wedding favors.',
        'Secure municipal, noise, and fire safety licenses (if hosting at private outdoor grounds).',
      ],
    },
    {
      period: '1–2 Weeks Before',
      title: 'Final Rehearsals & Vendor Briefings',
      tag: 'Rehearsal Run',
      items: [
        'Distribute minute-by-minute run-of-show schedules to family heads and technical vendors.',
        'Pack room welcome kits, vanity bags, and guest identity access tags.',
        'Finalize ritual timings (subho drishti, lagna, saat phere) with the lead priest.',
      ],
    },
    {
      period: 'The Wedding Days',
      title: 'Day-of Execution & Shadow Support',
      tag: 'Flawless Execution',
      items: [
        'Mobilize on-ground production team 8 hours prior to guest arrival.',
        'Assign dedicated personal shadows to the bride and groom for wardrobe adjustments, refreshments, and stage transitions.',
        'Direct crowd flow between greeting lounge, main mandap, and buffet dining areas.',
      ],
    },
  ];

  // 3. Wedding Planning Packages Comparison
  const weddingPackages = [
    {
      name: 'Silver: Coordination',
      subtitle: 'Best Suited For Couples Who Booked Vendors But Need Day-Of Execution',
      engagement: '4 Weeks prior to event',
      decor: 'Oversee client-selected decor team',
      catering: 'Menu timeline sync & plate counts',
      entertainment: 'Basic DJ & mic coordination',
      hospitality: 'Day-of guest direction',
      teamSize: '3–4 Coordinators',
      highlight: false,
    },
    {
      name: 'Gold: Complete Planning',
      subtitle: 'Mid-to-Grand Scale City Weddings (300–600 Guests)',
      engagement: '6–8 Months prior to event',
      decor: 'Bespoke 3D decor theme, floral design & execution',
      catering: 'Full menu curation, tasting runs, quality audits',
      entertainment: 'Emcee, professional DJ console, dance troupe',
      hospitality: 'Airport pickups, hotel desk, luggage management',
      teamSize: '6–8 Specialists + 1 Event Director',
      highlight: true,
      badge: 'Most Popular Choice',
    },
    {
      name: 'Imperial: Turnkey Luxury',
      subtitle: 'Destination & Luxury Multi-Day Weddings (500+ Guests)',
      engagement: '9–12 Months prior to event',
      decor: 'Architectural set builds, exotic florals, LED walls',
      catering: 'Royal multi-counter curation, chef tables, live bars',
      entertainment: 'Celebrity artists, live bands, Sufi night setups',
      hospitality: 'Fleet of luxury cars, dedicated concierge, 24/7 lounge',
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
      description: 'Yellow/Marigold Boho floral setup, dhol beats, organic herbal haldi, and vibrant photo-ops.',
      accent: 'border-amber-400 bg-amber-500/10 text-amber-300',
    },
    {
      day: 'Day 1: Evening',
      title: 'Sangeet & Cocktail Night',
      description: 'Glamorous club lighting, elevated bar, high-power DJ console, choreographed family dance routines.',
      accent: 'border-purple-400 bg-purple-500/10 text-purple-300',
    },
    {
      day: 'Day 2: Morning',
      title: 'Traditional Chokh Daan / Aai Buro Bhaat / Chuda Ceremony',
      description: 'Intimate Vedic rituals with brass lamps, auspicious alpana floor art, and heritage family feasts.',
      accent: 'border-rose-400 bg-rose-500/10 text-rose-300',
    },
    {
      day: 'Day 2: Evening',
      title: 'The Royal Wedding',
      description: 'Grand Barat entry with vintage chariot/cars, floating mandap with fresh florals, and imperial multi-course banquet.',
      accent: 'border-gold-400 bg-gold-500/15 text-gold-300',
    },
    {
      day: 'Day 3: Evening',
      title: 'Reception / Boubhat',
      description: 'Sleek modern decor, live acoustic sufi/jazz band, formal photo lounge, and grand multi-cuisine feast.',
      accent: 'border-sky-400 bg-sky-500/10 text-sky-300',
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
    <div className="bg-navy-950 min-h-screen text-slate-100 selection:bg-gold-500 selection:text-navy-950">
      {/* ========================================================================= */}
      {/* HERO BANNER */}
      {/* ========================================================================= */}
      <section className="relative py-24 sm:py-32 overflow-hidden border-b border-gold-500/20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80"
            alt="Royal Enterprise Wedding Planner Hero"
            className="w-full h-full object-cover filter brightness-35 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-navy-900/90 border border-gold-400/40 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md shadow-gold-glow">
            <Crown className="w-4 h-4 text-gold-400" />
            <span className="text-xs uppercase tracking-widest text-gold-300 font-semibold">
              Division III • Turnkey Royal Wedding Planning
            </span>
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-100 tracking-tight mb-4">
            Wedding Planning Services
          </h1>
          <p className="font-serif italic text-gold-300 text-xl sm:text-2xl md:text-3xl font-normal mb-6">
            "Your Dream Wedding, Our Complete Responsibility."
          </p>
          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-slate-300 font-light leading-relaxed mb-8">
            Royal Enterprise operates as your turnkey wedding management partner. We take complete ownership of budget optimization, vendor orchestration, aesthetic styling, guest logistics, and ritual execution—ensuring families celebrate without operational stress.
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
              Explore Wedding Packages
            </Button>
            <Button
              variant="outline"
              size="md"
              onClick={() => setIsProposalModalOpen(true)}
              icon={FileText}
              iconPosition="left"
            >
              View Printable Contract & Proposal
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-28">
        {/* ========================================================================= */}
        {/* 1. SCOPE OF PLANNING SERVICES */}
        {/* ========================================================================= */}
        <section id="scope-of-services">
          <SectionHeader
            badge="Turnkey Management"
            title="Scope of Planning Services"
            subtitle="From heritage rajbaris and 3D floral mandaps to VIP shadow managers, our end-to-end scope leaves nothing to chance."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {scopeServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-navy-900/60 border border-slate-800 rounded-sm p-7 hover:border-gold-400/50 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:-translate-y-1"
                >
                  <div>
                    <div className="w-12 h-12 rounded-sm bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mb-5 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                      <Icon className="w-6 h-6 text-gold-400 group-hover:text-navy-950 transition-colors" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-slate-100 mb-2.5 group-hover:text-gold-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center text-[11px] text-gold-400 font-medium">
                    <span>Full Royal Management</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. MASTER WEDDING TIMELINE & CHECKLIST */}
        {/* ========================================================================= */}
        <section id="wedding-timeline" className="bg-navy-900/40 border border-slate-800 rounded-sm p-8 sm:p-12">
          <SectionHeader
            badge="Structured Execution"
            title="Master Wedding Timeline & Checklist"
            subtitle="A transparent, milestone-driven countdown ensuring serene planning from budget lock to the final reception."
          />

          <div className="space-y-6">
            {timelineChecklist.map((phase, idx) => (
              <div
                key={idx}
                className="bg-navy-950/80 border border-slate-800/90 rounded-sm p-6 hover:border-gold-400/40 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-slate-800 pb-3">
                  <div className="flex items-center space-x-3">
                    <span className="font-serif text-xl sm:text-2xl font-bold text-gold-gradient">
                      {phase.period}
                    </span>
                    <span className="text-sm font-semibold text-slate-200">
                      • {phase.title}
                    </span>
                  </div>
                  <span className="inline-block text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-sm bg-gold-500/10 border border-gold-500/30 text-gold-300 w-fit">
                    {phase.tag}
                  </span>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
                  {phase.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start">
                      <div className="w-4 h-4 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0 mr-2.5 mt-0.5">
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
        {/* 3. WEDDING PLANNING PACKAGES (Comparison Table) */}
        {/* ========================================================================= */}
        <section id="wedding-packages-section">
          <SectionHeader
            badge="Tiered Engagements"
            title="Wedding Planning Packages"
            subtitle="Transparent service tiers tailored to your engagement period, wedding scale, and crew requirements."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {weddingPackages.map((pkg, idx) => (
              <div
                key={idx}
                className={`relative rounded-sm p-8 flex flex-col justify-between transition-all duration-300 ${
                  pkg.highlight
                    ? 'bg-gradient-to-b from-navy-900 via-navy-850 to-navy-900 border-2 border-gold-400 shadow-gold-glow'
                    : 'bg-navy-900/60 border border-slate-800 hover:border-gold-500/40'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-950 font-bold text-[10px] uppercase tracking-widest px-4 py-1 rounded-full shadow-md flex items-center">
                    <Crown className="w-3 h-3 mr-1" />
                    {pkg.badge}
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <h3 className="font-serif text-2xl font-bold text-slate-100 mb-1">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-gold-400 uppercase tracking-wider font-semibold mb-3">
                      {pkg.subtitle}
                    </p>
                    <div className="p-3 bg-navy-950/80 border border-slate-800 rounded-sm text-xs text-slate-300 space-y-1">
                      <p><span className="text-slate-400">Engagement Period:</span> <strong className="text-slate-100">{pkg.engagement}</strong></p>
                      <p><span className="text-slate-400">On-Site Team:</span> <strong className="text-gold-300">{pkg.teamSize}</strong></p>
                    </div>
                  </div>

                  <h5 className="text-xs uppercase tracking-wider font-semibold text-slate-300 mb-4 border-b border-slate-800 pb-2">
                    Scope & Inclusions:
                  </h5>

                  <ul className="space-y-3 mb-8 text-xs sm:text-sm text-slate-300">
                    <li className="flex items-start">
                      <strong className="text-gold-400 w-28 shrink-0 text-xs">Decor & Design:</strong>
                      <span>{pkg.decor}</span>
                    </li>
                    <li className="flex items-start">
                      <strong className="text-gold-400 w-28 shrink-0 text-xs">Catering Sync:</strong>
                      <span>{pkg.catering}</span>
                    </li>
                    <li className="flex items-start">
                      <strong className="text-gold-400 w-28 shrink-0 text-xs">Entertainment:</strong>
                      <span>{pkg.entertainment}</span>
                    </li>
                    <li className="flex items-start">
                      <strong className="text-gold-400 w-28 shrink-0 text-xs">Hospitality:</strong>
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

          <p className="text-center text-xs text-slate-400 italic mt-6">
            (Note: Planning fees cover management, design, and manpower; production, vendor bookings, and catering costs are billed transparently at actuals).
          </p>
        </section>

        {/* ========================================================================= */}
        {/* 4. MULTI-DAY EVENT BLUEPRINT */}
        {/* ========================================================================= */}
        <section id="multi-day-blueprint">
          <SectionHeader
            badge="The Sacred Journey"
            title="Multi-Day Event Blueprint"
            subtitle="A cinematic narrative sequencing each traditional Bengali and Indian wedding ritual into a seamless royal celebration."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {eventBlueprint.map((event, idx) => (
              <div
                key={idx}
                className="bg-navy-900/60 border border-slate-800 rounded-sm p-5 hover:border-gold-400/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`p-2 rounded-sm border text-[11px] font-bold uppercase tracking-wider mb-3 text-center ${event.accent}`}>
                    {event.day}
                  </div>
                  <h4 className="font-serif font-bold text-base text-slate-100 mb-2">
                    {event.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {event.description}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-800 text-[10px] text-slate-400 uppercase tracking-wider">
                  Royal Protocol Assigned
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PRINTABLE PROPOSAL BANNER */}
        {/* ========================================================================= */}
        <div className="p-8 sm:p-10 bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-gold-500/40 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-bold">
              Official Client Proposal & Agreement
            </span>
            <h3 className="font-serif text-2xl font-bold text-slate-100">
              Need a Formal Printable Proposal & Contract?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Preview our formal client contract document complete with scope of work, milestone payment schedules, and legal terms ready for PDF export or immediate printing.
            </p>
          </div>
          <Button
            variant="primary"
            size="lg"
            onClick={() => setIsProposalModalOpen(true)}
            icon={Printer}
            iconPosition="left"
            className="shrink-0"
          >
            Open Printable Proposal
          </Button>
        </div>

        {/* ========================================================================= */}
        {/* DEDICATED WEDDING ENQUIRY FORM */}
        {/* ========================================================================= */}
        <section id="wedding-enquiry-form" className="max-w-4xl mx-auto pt-6">
          <SectionHeader
            badge="Confidential Consultation"
            title="Design Your Dream Wedding"
            subtitle="Submit your wedding preferences. All details are saved to our master schedule for an executive proposal presentation."
          />
          <WeddingEnquiryForm initialPackageType={packageType} />
        </section>
      </div>

      {/* Global Printable Proposal Modal */}
      <WeddingProposalModal
        isOpen={isProposalModalOpen}
        onClose={() => setIsProposalModalOpen(false)}
      />
    </div>
  );
};

export default WeddingPlanner;
