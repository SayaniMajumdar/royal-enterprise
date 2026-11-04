import React from 'react';
import { TESTIMONIALS, REAL_WEDDINGS } from '../../data/mockData';
import { MapPin } from 'lucide-react';

const ClientReviews = () => {
  return (
    <section className="py-10 sm:py-16 bg-[#F6F0E7] dark:bg-[#191316] border-b border-[#E8DFD3] dark:border-[#3F3238] transition-colors">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12 sm:space-y-16">
        
        {/* Editorial Section Header */}
        <div className="max-w-2xl space-y-3">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-[#401D2C] dark:text-[#E2CCA1] block">
            Stories from Kolkata families
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#292323] dark:text-[#F6F0E7] font-normal tracking-tight leading-[1.08]">
            What families say after the last plate is cleared.
          </h2>
          <p className="text-sm sm:text-base text-[#665C5C] dark:text-[#D4CCC2] font-light leading-relaxed font-sans">
            Real weddings and celebrations we had the honor of planning and cooking for across Kolkata.
          </p>
        </div>

        {/* Typography-Led Editorial Quotes (No generic AI star icons) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="relative p-7 sm:p-8 rounded-xl bg-white/70 dark:bg-[#231B1F] border border-[#E8DFD3] dark:border-[#3F3238] flex flex-col justify-between hover:border-[#401D2C]/40 dark:hover:border-[#E2CCA1]/40 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <span className="font-display text-5xl text-[#C49A53]/35 leading-none select-none block -mb-2">
                  “
                </span>

                <p className="font-display text-xl sm:text-2xl text-[#292323] dark:text-[#F6F0E7] font-normal italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E8DFD3] dark:border-[#3F3238] space-y-1 font-sans">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-sm text-[#292323] dark:text-[#F6F0E7]">
                    {t.name}
                  </h4>
                  <span className="text-[11px] font-medium text-[#D65B43] dark:text-[#E2CCA1]">
                    {t.guests}
                  </span>
                </div>
                <div className="flex items-center space-x-1.5 text-xs text-[#665C5C] dark:text-[#D4CCC2]">
                  <MapPin className="w-3.5 h-3.5 text-[#C49A53] shrink-0" />
                  <span>{t.venue}</span>
                </div>
                <span className="text-[11px] text-[#8C8282] dark:text-[#9E9488] block">
                  {t.event}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Real Celebrations Multi-Photo Gallery */}
        <div className="pt-10 border-t border-[#E8DFD3] dark:border-[#3F3238]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
            <div>
              <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#401D2C] dark:text-[#E2CCA1] block mb-1">
                Real Celebrations
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-normal text-[#292323] dark:text-[#F6F0E7]">
                Real Weddings & Events by Royal Enterprise
              </h3>
            </div>
            <span className="text-xs text-[#8C8282] dark:text-[#9E9488] font-sans">
              Real celebrations across Kolkata rajbaris, heritage lawns & hotel ballrooms
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {REAL_WEDDINGS.map((w, idx) => (
              <div
                key={idx}
                className="group rounded-xl overflow-hidden bg-white/70 dark:bg-[#231B1F] border border-[#E8DFD3] dark:border-[#3F3238] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Main Hero Photo */}
                  <div className="relative h-56 sm:h-60 overflow-hidden bg-stone-200 dark:bg-stone-800">
                    <img
                      src={w.mainImage}
                      alt={`${w.couple} at ${w.location}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute bottom-3 left-3 bg-[#401D2C]/90 text-[#F6F0E7] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md backdrop-blur-sm">
                      {w.category}
                    </div>
                  </div>

                  {/* 2 Side-by-Side Thumbnail Photos */}
                  <div className="grid grid-cols-2 gap-1 p-1 bg-[#EFE7DA] dark:bg-[#191316]">
                    <div className="h-24 overflow-hidden rounded">
                      <img
                        src={w.thumb1}
                        alt={`${w.couple} moment`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                    <div className="relative h-24 overflow-hidden rounded">
                      <img
                        src={w.thumb2}
                        alt={`${w.couple} celebration`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] flex flex-col items-center justify-center text-white text-xs font-semibold">
                        <span className="text-[13px] font-bold">+{w.photoCount.split(' ')[0]}</span>
                        <span className="text-[10px] font-normal tracking-wide">Photos</span>
                      </div>
                    </div>
                  </div>

                  {/* Details: Couple Name & Location */}
                  <div className="p-5 font-sans">
                    <h4 className="font-display text-2xl text-[#292323] dark:text-[#F6F0E7]">
                      {w.couple}
                    </h4>
                    <div className="flex items-center space-x-1.5 text-xs text-[#401D2C] dark:text-[#E2CCA1] font-medium mt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#C49A53] shrink-0" />
                      <span>{w.location}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[#E8DFD3] dark:border-[#3F3238]">
                      {w.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10.5px] bg-[#FAF6F0] dark:bg-[#191316] border border-[#E8DFD3] dark:border-[#3F3238] px-2.5 py-0.5 rounded text-[#665C5C] dark:text-[#D4CCC2]"
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