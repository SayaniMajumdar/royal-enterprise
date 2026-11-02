import React from 'react';
import { STATS, TESTIMONIALS } from '../../data/mockData';
import { Quote } from 'lucide-react';

const ExperienceStats = () => {
  return (
    <section className="py-20 bg-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Statistics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-gold-500/25 rounded-sm shadow-xl mb-20">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center px-4 py-2 border-r last:border-r-0 border-slate-800">
              <span className="block font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-gold-gradient mb-2">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-widest text-slate-300 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-2 block">
            Patron Reflections
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100">
            Trusted by Connoisseurs of Grandeur
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-sm bg-navy-900/40 border border-slate-800 flex flex-col justify-between hover:border-gold-500/40 transition-colors"
            >
              <div>
                <Quote className="w-8 h-8 text-gold-400/40 mb-4" />
                <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80">
                <h5 className="font-serif font-bold text-sm text-slate-100">{t.name}</h5>
                <p className="text-xs text-gold-400 mt-0.5">{t.role}</p>
                <span className="inline-block mt-2 text-[10px] uppercase tracking-wider text-slate-400 bg-navy-950 px-2 py-0.5 rounded-sm border border-slate-800">
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
