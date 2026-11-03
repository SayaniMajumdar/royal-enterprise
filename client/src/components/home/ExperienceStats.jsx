import React from 'react';
import { TESTIMONIALS, STATS } from '../../data/mockData';
import { MessageSquare, MapPin, CheckCircle2 } from 'lucide-react';

const ExperienceStats = () => {
  return (
    <div className="bg-[#FAF7F2] border-b border-[#E5DED3]">
      
      {/* 1. Real Numbers Strip */}
      <section className="py-12 bg-white border-b border-[#E5DED3]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#6E1423] block">
                  {stat.value}
                </span>
                <span className="text-xs text-[#524C44] font-medium block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Three Real Client Testimonials (Ballygunge, Salt Lake, New Town) */}
      <section className="py-20 sm:py-24 max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-[#6E1423] block mb-1">
            Word from families and clients
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1D1A] tracking-tight">
            What clients say after the guests leave.
          </h2>
          <p className="text-sm text-[#524C44] mt-2 leading-relaxed">
            Unedited feedback from Kolkata hosts we have served over the past seasons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-[#E5DED3] p-6 sm:p-7 flex flex-col justify-between shadow-paper-sm hover:border-[#6E1423]/40 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#7D756A]">
                  <span className="font-mono">{t.guests}</span>
                  <span className="inline-flex items-center text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px] font-semibold border border-emerald-200">
                    Verified Host
                  </span>
                </div>

                <p className="font-serif text-base sm:text-lg text-[#1F1D1A] italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-[#E5DED3]">
                <h4 className="font-bold text-sm text-[#1F1D1A]">
                  {t.name}
                </h4>
                <div className="flex items-center space-x-1 text-xs text-[#6E1423] mt-0.5">
                  <MapPin className="w-3 h-3" />
                  <span>{t.area}</span>
                </div>
                <span className="text-[11px] text-[#7D756A] block mt-1">
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
