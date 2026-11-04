import React from 'react';
import { TESTIMONIALS, REAL_WEDDINGS } from '../../data/mockData';
import { MapPin, Star, Heart, Camera } from 'lucide-react';

const ClientReviews = () => {
  return (
    <section className="py-20 sm:py-24 bg-white dark:bg-[#1C1917] border-b border-[#E8E0D5] dark:border-[#38312B] transition-colors">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header: Warm, personal, human */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs uppercase font-semibold tracking-wider text-[#6B1D2F] dark:text-[#E0CFA6] block mb-2">
            Stories from Kolkata families
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2625] dark:text-[#FAF8F5] font-bold tracking-tight">
            What families say after the last plate is cleared
          </h2>
          <p className="text-sm sm:text-base text-[#5A524E] dark:text-[#D4CCC2] mt-2 font-normal leading-relaxed">
            Real weddings and celebrations we had the honor of planning and cooking for across Kolkata.
          </p>
        </div>

        {/* 3 Prominent Authentic Client Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8F5] dark:bg-[#231F1C] rounded-2xl border border-[#E8E0D5] dark:border-[#38312B] p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:border-[#6B1D2F]/40 dark:hover:border-[#D4AF37]/50 transition-all hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-1 text-[#C5A059] dark:text-[#D4AF37]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-[#827771] dark:text-[#9E9488]">
                    {t.guests}
                  </span>
                </div>

                <p className="text-sm sm:text-[14.5px] text-[#2B2625] dark:text-[#FAF8F5] italic leading-relaxed font-serif">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-[#E8E0D5] dark:border-[#38312B]">
                <h4 className="font-bold text-sm text-[#2B2625] dark:text-[#FAF8F5]">
                  {t.name}
                </h4>
                <div className="flex items-center space-x-1.5 text-xs text-[#6B1D2F] dark:text-[#E0CFA6] font-medium mt-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>{t.venue}</span>
                </div>
                <span className="text-[11px] text-[#827771] dark:text-[#9E9488] block mt-0.5">
                  {t.event}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Real Weddings Multi-Photo Gallery (Directly modeled on WedMeGood Real Weddings cards) */}
        <div className="pt-8 border-t border-[#E8E0D5] dark:border-[#38312B]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
            <div>
              <span className="text-xs uppercase font-semibold tracking-wider text-[#6B1D2F] dark:text-[#E0CFA6] block mb-1">
                Real Celebrations
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#2B2625] dark:text-[#FAF8F5]">
                Real Weddings & Events by Royal Enterprise
              </h3>
            </div>
            <span className="text-xs text-[#827771] dark:text-[#9E9488]">
              Real celebrations across Kolkata rajbaris, heritage lawns & hotel ballrooms
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REAL_WEDDINGS.map((w, idx) => (
              <div
                key={idx}
                className="group rounded-2xl overflow-hidden bg-white dark:bg-[#231F1C] border border-[#E8E0D5] dark:border-[#38312B] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Main Hero Photo with Heart Button */}
                  <div className="relative h-52 sm:h-56 overflow-hidden bg-stone-200 dark:bg-stone-800">
                    <img
                      src={w.mainImage}
                      alt={`${w.couple} at ${w.location}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <button
                      type="button"
                      aria-label="Save wedding"
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white/90 hover:text-white flex items-center justify-center transition-colors hover:bg-black/60"
                    >
                      <Heart className="w-4 h-4" />
                    </button>
                    <div className="absolute bottom-2.5 left-3 bg-[#6B1D2F]/90 text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-md">
                      {w.category}
                    </div>
                  </div>

                  {/* 2 Side-by-Side Thumbnail Photos (WedMeGood style) */}
                  <div className="grid grid-cols-2 gap-1 p-1 bg-[#F5EFE6] dark:bg-[#1E1B18]">
                    <div className="h-24 overflow-hidden rounded-md">
                      <img
                        src={w.thumb1}
                        alt={`${w.couple} moment`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="relative h-24 overflow-hidden rounded-md">
                      <img
                        src={w.thumb2}
                        alt={`${w.couple} celebration`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px] flex flex-col items-center justify-center text-white text-xs font-semibold">
                        <span className="text-[13px] font-bold">+{w.photoCount.split(' ')[0]}</span>
                        <span className="text-[10px] font-normal tracking-wide">Photos</span>
                      </div>
                    </div>
                  </div>

                  {/* Details: Couple Name & Location */}
                  <div className="p-4 sm:p-5">
                    <h4 className="font-serif text-lg font-bold text-[#2B2625] dark:text-[#FAF8F5] tracking-tight">
                      {w.couple}
                    </h4>
                    <div className="flex items-center space-x-1.5 text-xs text-[#6B1D2F] dark:text-[#E0CFA6] font-medium mt-1">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{w.location}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[#E8E0D5] dark:border-[#38312B]">
                      {w.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10.5px] bg-[#FAF8F5] dark:bg-[#1C1917] border border-[#E8E0D5] dark:border-[#38312B] px-2.5 py-0.5 rounded-md text-[#5A524E] dark:text-[#D4CCC2]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ClientReviews;
