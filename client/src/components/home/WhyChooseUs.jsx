import React from 'react';
import { Crown, Sparkles, UtensilsCrossed, ShieldCheck, HeartHandshake, Layers } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const features = [
  {
    icon: Crown,
    title: 'The Royal Standard',
    description:
      'We bring royal poise, meticulous protocol, and unmatched aesthetic grandeur to every corporate gala, wedding mandap, and milestone banquet.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Culinary Maestros',
    description:
      'Our kitchens are commanded by veteran executive chefs specialized in authentic Awadhi, Mughlai, Continental, Pan-Asian, and Jain delicacies.',
  },
  {
    icon: Layers,
    title: 'Turnkey Event Architecture',
    description:
      'From 3D set fabrication and acoustic design to guest protocol, VIP security, and artist management—we manage all logistics seamlessly.',
  },
  {
    icon: ShieldCheck,
    title: 'Unwavering Reliability',
    description:
      'Precision timelines, strict hygiene protocols, transparent pricing, and zero surprises. What we promise in our blueprint is what we deliver.',
  },
  {
    icon: Sparkles,
    title: 'Bespoke Customization',
    description:
      'No pre-packaged monotony. Every floral arrangement, stage lighting sequence, and menu course is tailored to your unique taste and vision.',
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Royal Concierge',
    description:
      'A personal event director and 24/7 coordinator assigned to oversee every micro-detail before, during, and after your celebration.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 sm:py-28 bg-[#180408] border-y border-gold-500/20 relative overflow-hidden">
      {/* Subtle wine atmospheric glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,160,89,0.05)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Excellence Redefined"
          title="Why Choose Royal Enterprise"
          subtitle="Our unyielding dedication to perfection transforms complex visions into effortless, timeless celebrations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const numberFormatted = `0${idx + 1}`;
            return (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-[2px] bg-[#22070D]/80 border border-gold-500/20 hover:border-gold-400/50 transition-all duration-300 group hover:-translate-y-0.5 shadow-sm relative overflow-hidden"
              >
                {/* Subtle top indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-[2px] bg-[#120205] border border-gold-400/40 flex items-center justify-center text-gold-400 group-hover:border-gold-300 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-serif text-xs font-semibold tracking-[0.25em] text-gold-400/70">
                    {numberFormatted}
                  </span>
                </div>

                <h4 className="font-serif text-base sm:text-lg font-bold text-slate-100 mb-2.5 group-hover:text-gold-300 transition-colors tracking-wide">
                  {feature.title}
                </h4>
                <p className="text-xs sm:text-[13px] text-slate-300/85 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
