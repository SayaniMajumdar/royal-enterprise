import React, { useState } from 'react';
import { STATS, TESTIMONIALS } from '../../data/mockData';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const ExperienceStats = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const prevTestimonial = () => {
    setActiveIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[activeIdx];

  return (
    <div>
      {/* 1. Charcoal Stats Strip (Reference A & C: narrow band directly contrasting with ivory) */}
      <section className="py-14 bg-charcoal text-[#FFF8F0] border-y border-white/10">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <span className="font-serif text-3xl sm:text-5xl font-light text-gold-light tracking-tight block">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-white/70 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Testimonials Carousel / Pull Quote Section (Warm Ivory) */}
      <section className="py-24 sm:py-32 bg-[#F6F3EE] text-[#141414] border-b border-[#E8E1D5]">
        <div className="max-w-[900px] mx-auto px-5 sm:px-6 text-center">
          <div className="inline-flex items-center space-x-2 text-gold-dark text-[11px] font-semibold uppercase tracking-[0.24em] mb-4">
            <span className="w-5 h-px bg-gold-dark/60" />
            <span>Patron Reflections</span>
            <span className="w-5 h-px bg-gold-dark/60" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#141414] tracking-tight mb-12">
            Cherished by connoisseurs of <span className="font-editorial italic font-normal text-maroon">grandeur</span>
          </h2>

          {/* Testimonial Quote Card */}
          <div className="bg-[#FFFDF9] border border-[#E8E1D5] p-8 sm:p-14 rounded-[4px] shadow-sm relative">
            <Quote className="w-10 h-10 text-gold-base/30 mx-auto mb-6" />

            {/* 5 Gold Stars */}
            <div className="flex items-center justify-center space-x-1.5 mb-6 text-gold-dark">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current stroke-[1.5]" />
              ))}
            </div>

            <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#141414] font-normal leading-relaxed mb-8 italic">
              "{current.quote}"
            </p>

            <div className="pt-6 border-t border-[#E8E1D5]/60 max-w-sm mx-auto">
              <h4 className="font-serif text-lg font-medium text-[#141414] tracking-wide">
                {current.name}
              </h4>
              <p className="text-xs text-gold-dark font-medium mt-0.5">
                {current.role}
              </p>
              <span className="inline-block mt-2 text-[10px] uppercase tracking-[0.2em] text-[#6B645C] bg-[#F6F3EE] px-3 py-1 rounded-full border border-[#E8E1D5]">
                {current.division}
              </span>
            </div>

            {/* Carousel Navigation Arrows */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <button
                type="button"
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-[#D5CCC0] text-[#141414] hover:border-maroon hover:text-maroon flex items-center justify-center transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs text-[#6B645C] font-mono">
                {activeIdx + 1} / {TESTIMONIALS.length}
              </span>
              <button
                type="button"
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-[#D5CCC0] text-[#141414] hover:border-maroon hover:text-maroon flex items-center justify-center transition-colors"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperienceStats;
