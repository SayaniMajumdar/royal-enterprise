import React from 'react';
import { STATS, TESTIMONIALS } from '../../data/mockData';
import { Quote } from 'lucide-react';

const ExperienceStats = () => {
  return (
    <section className="py-24 bg-[#060A13] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Statistics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-10 bg-[#090E1B] border border-gold-500/20 rounded-[2px] shadow-[0_10px_35px_rgba(0,0,0,0.6)] mb-24">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center px-4 py-2 border-r last:border-r-0 border-slate-800/80">
              <span className="block font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gold-300 mb-2 tracking-tight">
                {stat.value}
              </span>
              <span className="text-[10.5px] uppercase tracking-[0.2em] text-slate-400 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center space-x-2.5 mb-3">
            <span className="w-4 h-px bg-gold-400/60" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase text-gold-400">
              Patron Reflections
            </span>
            <span className="w-4 h-px bg-gold-400/60" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100 tracking-tight">
            Trusted by Connoisseurs of Grandeur
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-[2px] bg-[#090E1B]/70 border border-slate-800/80 flex flex-col justify-between hover:border-gold-500/35 transition-colors shadow-sm"
            >
              <div>
                <Quote className="w-6 h-6 text-gold-400/50 mb-4" />
                <p className="font-editorial italic text-slate-200 text-base sm:text-[17px] leading-relaxed mb-6 font-normal">
                  "{t.quote}"
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80">
                <h5 className="font-serif font-bold text-sm text-slate-100 tracking-wide">{t.name}</h5>
                <p className="text-xs text-gold-300/90 mt-0.5">{t.role}</p>
                <span className="inline-block mt-2.5 text-[9.5px] uppercase tracking-[0.16em] text-slate-400 bg-navy-950 px-2 py-0.5 rounded-[2px] border border-slate-800">
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
