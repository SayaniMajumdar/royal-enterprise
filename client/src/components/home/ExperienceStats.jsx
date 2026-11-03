import React, { useState } from 'react';
import { STATS, TESTIMONIALS } from '../../data/mockData';
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

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
    <div className="bg-white border-b border-slate-200">
      {/* 1. Verified Stats Counter Strip */}
      <section className="py-12 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-roseBrand tracking-tight block">
                  {stat.value}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[#4B5563] font-semibold">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. WedMeGood Verified Client Reviews Section */}
      <section className="py-20 max-w-[900px] mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center space-x-1.5 text-roseBrand text-[11px] font-bold uppercase tracking-[0.2em] mb-2">
          <span>Real Client Stories</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937] tracking-tight mb-10">
          Loved by Celebrants Across Kolkata & India
        </h2>

        {/* Review Card */}
        <div className="bg-white border border-slate-200 p-8 sm:p-12 rounded-2xl shadow-sm relative text-left sm:text-center">
          {/* 5 Stars + Verified Badge */}
          <div className="flex items-center justify-start sm:justify-center space-x-2 mb-6">
            <div className="flex items-center space-x-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="inline-flex items-center space-x-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              <CheckCircle2 className="w-3 h-3" />
              <span>Verified Patron</span>
            </span>
          </div>

          <p className="font-serif text-xl sm:text-2xl text-[#1F2937] font-normal leading-relaxed mb-8 italic">
            "{current.quote}"
          </p>

          <div className="pt-6 border-t border-slate-100 max-w-sm mx-auto sm:text-center">
            <h4 className="font-bold text-base text-[#1F2937]">
              {current.name}
            </h4>
            <p className="text-xs text-roseBrand font-medium mt-0.5">
              {current.role}
            </p>
            <span className="inline-block mt-2 text-[10px] uppercase font-bold tracking-wider text-[#6B7280] bg-slate-100 px-3 py-1 rounded-full">
              {current.division}
            </span>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              type="button"
              onClick={prevTestimonial}
              className="w-9 h-9 rounded-full border border-slate-300 hover:border-roseBrand text-[#4B5563] hover:text-roseBrand flex items-center justify-center transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs text-[#6B7280] font-mono">
              {activeIdx + 1} / {TESTIMONIALS.length}
            </span>
            <button
              type="button"
              onClick={nextTestimonial}
              className="w-9 h-9 rounded-full border border-slate-300 hover:border-roseBrand text-[#4B5563] hover:text-roseBrand flex items-center justify-center transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperienceStats;