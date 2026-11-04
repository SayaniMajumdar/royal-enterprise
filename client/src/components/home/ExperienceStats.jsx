import React from 'react';
import { TESTIMONIALS, STATS } from '../../data/mockData';
import { MapPin } from 'lucide-react';

const ExperienceStats = () => {
  return (
    <div className="bg-[#FAF7F2] dark:bg-[#141210] border-b border-[#E5DED3] dark:border-[#38312B] transition-colors">
      
      {/* 1. Real Numbers Strip */}
      <section className="py-12 bg-white dark:bg-[#1C1917] border-b border-[#E5DED3] dark:border-[#38312B] transition-colors">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#6E1423] dark:text-[#F59E0B] block">
                  {stat.value}
                </span>
                <span className="text-xs text-[#524C44] dark:text-[#A89F91] font-medium block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Three Real Client Testimonials (Ballygunge, Salt Lake, New Town) */}
      <section className="py-12 sm:py-16 max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-[#6E1423] dark:text-[#F59E0B] block mb-1">
            Word from families and clients
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1D1A] dark:text-[#FAF7F2] tracking-tight">
            What clients say after the guests leave.
          </h2>
          <p className="text-sm text-[#524C44] dark:text-[#A89F91] mt-2 leading-relaxed">
            Unedited feedback from Kolkata hosts we have served over the past seasons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#1C1917] rounded-lg border border-[#E5DED3] dark:border-[#38312B] p-6 sm:p-7 flex flex-col justify-between shadow-paper-sm dark:shadow-dark-card hover:border-[#6E1423]/40 dark:hover:border-[#F59E0B]/50 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#7D756A] dark:text-[#8C8477]">
                  <span className="font-mono">{t.guests}</span>
                  <span className="inline-flex items-center text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded text-[11px] font-semibold border border-emerald-200 dark:border-emerald-800/80">
                    Verified Host
                  </span>
                </div>

                <p className="font-serif text-base sm:text-lg text-[#1F1D1A] dark:text-[#FAF7F2] italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-[#E5DED3] dark:border-[#38312B]">
                <h4 className="font-bold text-sm text-[#1F1D1A] dark:text-[#FAF7F2]">
                  {t.name}
                </h4>
                <div className="flex items-center space-x-1 text-xs text-[#6E1423] dark:text-[#F59E0B] mt-0.5">
                  <MapPin className="w-3 h-3" />
                  <span>{t.area}</span>
                </div>
                <span className="text-[11px] text-[#7D756A] dark:text-[#8C8477] block mt-1">
                  {t.event}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ExperienceStats;
