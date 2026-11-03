import React from 'react';
import { STATS, TESTIMONIALS } from '../../data/mockData';
import { Quote } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const ExperienceStats = () => {
  return (
    <section className="py-24 sm:py-28 bg-[#FAF7F2] text-[#1B1713] relative border-b border-[#E6DCBF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Statistics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-10 bg-white border border-[#E6DCBF] rounded-[3px] shadow-[0_10px_35px_rgba(40,30,10,0.06)] mb-24">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center px-4 py-2 border-r last:border-r-0 border-[#EAE2D0]">
              <span className="block font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gold-700 mb-2 tracking-tight">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-[10.5px] uppercase tracking-[0.22em] text-[#5A544A] font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonials Header */}
        <SectionHeader
          theme="light"
          badge="Patron Reflections"
          title="Trusted by Connoisseurs of Grandeur"
          subtitle="Honored words from clients whose landmark celebrations we had the privilege of orchestrating."
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-[3px] bg-white border border-[#E6DCBF] flex flex-col justify-between hover:border-gold-500 transition-all shadow-[0_8px_30px_rgba(40,30,10,0.05)] hover:-translate-y-0.5"
            >
              <div>
                <Quote className="w-6 h-6 text-gold-600/60 mb-4" />
                <p className="font-editorial italic text-[#26221C] text-base sm:text-[17px] leading-relaxed mb-6 font-normal">
                  "{t.quote}"
                </p>
              </div>
              <div className="pt-4 border-t border-[#EAE2D0]">
                <h5 className="font-serif font-bold text-sm text-[#1B1713] tracking-wide">{t.name}</h5>
                <p className="text-xs text-gold-800 font-medium mt-0.5">{t.role}</p>
                <span className="inline-block mt-2.5 text-[9.5px] uppercase tracking-[0.18em] text-[#5A544A] bg-[#F8F5EE] px-2.5 py-1 rounded-[2px] border border-[#E0D7C2] font-semibold">
                  {t.division}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceStats;
