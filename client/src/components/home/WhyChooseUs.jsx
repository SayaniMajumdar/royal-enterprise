import React from 'react';
import { Crown, UtensilsCrossed, Layers, ShieldCheck, Sparkles, HeartHandshake } from 'lucide-react';

const processSteps = [
  {
    step: '01',
    title: 'Consultation & Discovery',
    description: 'We listen to your vision, guest count, culinary preferences, and family traditions.',
  },
  {
    step: '02',
    title: '3D Concept & Itemized Quote',
    description: 'Transparent blueprint covering 3D stage/mandap design, per-plate menus, and logistics.',
  },
  {
    step: '03',
    title: 'Tasting & Rehearsals',
    description: 'Live food tastings with master chefs, bridal styling coordination, and sound run-throughs.',
  },
  {
    step: '04',
    title: 'Flawless Execution',
    description: 'On-ground floor directors manage every minute, while you enjoy unconditional celebration.',
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
    <div className="bg-[#FAF9F6] border-b border-slate-200">
      {/* 1. Signature Process Band (WedMeGood Process Strip) */}
      <section className="py-20 max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-[0.2em] text-roseBrand font-bold block mb-1">
            Our Proven Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937] tracking-tight">
            From First Call to Last Dance
          </h2>
          <p className="text-xs sm:text-sm text-[#6B7280] font-light mt-2">
            A transparent 4-stage journey that eliminates operational anxiety
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((p, idx) => (
            <div
              key={p.step}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-roseBrand/40 hover:shadow-md transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-bold text-roseBrand/40 block mb-3 font-mono">
                  {p.step}
                </span>
                <h3 className="text-lg font-bold text-[#1F2937] mb-2">
                  {p.title}
                </h3>
                <p className="text-xs text-[#4B5563] font-light leading-relaxed">
                  {p.description}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 text-[10px] uppercase font-bold tracking-wider text-roseBrand">
                Step {idx + 1} of 4
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Core Pillars Grid */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl text-left mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-roseBrand block mb-1">
              Why Patrons Trust Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937] tracking-tight">
              Six Foundations of the Royal Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-slate-50/60 rounded-xl border border-slate-200/80 hover:bg-white hover:border-roseBrand/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-roseBrand-light text-roseBrand flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[#1F2937] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#4B5563] font-light leading-relaxed">
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