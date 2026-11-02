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
    <section className="py-20 bg-navy-900/50 border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Excellence Redefined"
          title="Why Choose Royal Enterprise"
          subtitle="Our unyielding dedication to perfection transforms complex visions into effortless, timeless celebrations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-sm bg-navy-950/70 border border-slate-800/80 hover:border-gold-400/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
              >
                <div className="w-12 h-12 rounded-sm bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                  <Icon className="w-6 h-6 text-gold-400 group-hover:text-navy-950 transition-colors" />
                </div>
                <h4 className="font-serif text-lg font-bold text-slate-100 mb-3 group-hover:text-gold-300 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
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
