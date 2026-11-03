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
    <section className="py-24 bg-[#080C16] border-y border-gold-500/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="p-7 sm:p-8 rounded-[2px] bg-[#0A0F1D]/80 border border-slate-800/90 hover:border-gold-500/35 transition-all duration-300 group hover:-translate-y-0.5 shadow-sm relative overflow-hidden"
              >
                {/* Subtle top indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-[2px] bg-navy-950 border border-gold-400/30 flex items-center justify-center text-gold-400 group-hover:border-gold-300 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-serif text-xs font-semibold tracking-[0.2em] text-gold-400/50">
                    {numberFormatted}
                  </span>
                </div>

                <h4 className="font-serif text-base sm:text-lg font-bold text-slate-100 mb-2.5 group-hover:text-gold-300 transition-colors tracking-wide">
                  {feature.title}
                </h4>
                <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed font-light">
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
