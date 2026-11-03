import React from 'react';
import { Crown, UtensilsCrossed, Layers, ShieldCheck, Sparkles, HeartHandshake } from 'lucide-react';

const processSteps = [
  {
    step: '01',
    title: 'Share Your Vision',
    description: 'We listen to your desires, family traditions, event scope, and culinary preferences.',
  },
  {
    step: '02',
    title: 'Bespoke Proposal',
    description: 'A transparent blueprint covering venue layout, customized menus, and 3D mandate decor.',
  },
  {
    step: '03',
    title: 'Design & Tasting',
    description: 'Live food tastings with our master chefs, bridal styling trials, and acoustic run-throughs.',
  },
  {
    step: '04',
    title: 'Flawless Celebration',
    description: 'Our floor directors manage every minute, while you immerse in unconditional joy.',
  },
];

const pillars = [
  {
    icon: Crown,
    title: 'The Royal Standard',
    description: 'Unmatched poise and protocol brought to every wedding mandap, gala stage, and banquet.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Culinary Maestros',
    description: 'Master chefs specializing in authentic Awadhi, Mughlai, Continental, and pure Jain feasts.',
  },
  {
    icon: Layers,
    title: 'Turnkey Architecture',
    description: 'From 3D stage fabrication to VIP security and artist management under single-point care.',
  },
  {
    icon: ShieldCheck,
    title: 'Unwavering Reliability',
    description: 'Precision timelines, strict food safety protocols, transparent pricing, and zero surprises.',
  },
  {
    icon: Sparkles,
    title: 'Bespoke Customization',
    description: 'No template monotony. Every floral canopy, lighting sequence, and course is curated for you.',
  },
  {
    icon: HeartHandshake,
    title: 'Personal Concierge',
    description: 'A dedicated event director and 24/7 coordinator assigned to oversee every micro-detail.',
  },
];

const WhyChooseUs = () => {
  return (
    <div>
      {/* 1. Signature Process Band (Theevexa & White Tie Maroon Band) */}
      <section className="py-20 sm:py-24 bg-maroon text-[#FFF8F0] relative overflow-hidden">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] uppercase tracking-[0.26em] text-gold-light font-medium block mb-3">
              The Sovereign Pathway
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FFF8F0] tracking-tight">
              From First Call to <span className="font-editorial italic font-normal text-gold-light">Last Dance</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {processSteps.map((p, idx) => (
              <div key={p.step} className="relative space-y-3">
                <span className="font-serif text-3xl sm:text-4xl text-gold-light/60 block font-light">
                  {p.step}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#FFF8F0]">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                  {p.description}
                </p>
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 right-0 w-8 h-px bg-gold-light/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Why Couples & Corporate Clients Choose Us (Warm Ivory Section) */}
      <section className="py-24 sm:py-32 bg-[#F6F3EE] text-[#141414] border-b border-[#E8E1D5]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6">
          <div className="max-w-2xl text-left mb-16">
            <div className="inline-flex items-center space-x-2 text-gold-dark text-[11px] font-semibold uppercase tracking-[0.24em] mb-3">
              <span className="w-5 h-px bg-gold-dark/60" />
              <span>Core Values</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#141414] tracking-tight leading-[1.12]">
              Why patrons choose <span className="font-editorial italic font-normal text-maroon">Royal Enterprise</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 bg-[#FFFDF9] rounded-[3px] border border-[#E8E1D5] hover:border-gold-base/50 transition-all duration-300 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full border border-gold-dark/40 flex items-center justify-center text-gold-dark mb-5 bg-[#FAF8F4]">
                    <Icon className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <h4 className="font-serif text-xl font-normal text-[#141414] mb-2.5">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#554F47] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
