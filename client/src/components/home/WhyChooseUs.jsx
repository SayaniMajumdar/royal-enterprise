import React from 'react';
import { Calendar, Users, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { RECENT_EVENTS } from '../../data/mockData';

const WhyChooseUs = ({ onOpenQuote }) => {
  const steps = [
    {
      num: '1',
      title: 'You call or WhatsApp us.',
      detail: 'We ask who is coming, what you eat, and what you can comfortably spend. No sales pitch, just honest options.',
    },
    {
      num: '2',
      title: 'We meet you with actual sample menus and a floor plan.',
      detail: 'You taste the food prepared by our chefs before you pay an advance. We confirm the portions, spices, and service style.',
    },
    {
      num: '3',
      title: 'We lock the vendors, time-slots, and kitchen logistics.',
      detail: 'Itemized written estimate with no hidden add-ons, extra per-plate surprises, or unexpected midnight bills.',
    },
    {
      num: '4',
      title: 'On the day, a floor manager stays with you from the first guest to the last plate.',
      detail: 'Our floor lead coordinates the halwais, servers, sound, and rituals while your family attends to your guests.',
    },
  ];

  return (
    <div className="bg-[#FAF7F2] border-b border-[#E5DED3]">
      
      {/* ========================================================================= */}
      {/* 1. LEFT-ALIGNED VERTICAL EDITORIAL TIMELINE */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Intro */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase font-bold tracking-wider text-[#6E1423] block">
              How we work with you
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1D1A] tracking-tight leading-tight">
              A straightforward process without corporate jargon.
            </h2>
            <p className="text-sm sm:text-base text-[#524C44] leading-relaxed">
              Planning a wedding or major event shouldn't feel like wrestling with a contract. Here is how we take you from the first conversation to a completed celebration.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenQuote}
                className="btn-maroon px-6 py-2.5 text-xs font-semibold"
              >
                Start with a conversation
              </button>
            </div>
          </div>

          {/* Right Vertical Timeline Steps */}
          <div className="lg:col-span-7 space-y-8 relative pl-4 border-l-2 border-[#E5DED3]">
            {steps.map((step) => (
              <div key={step.num} className="relative pl-6">
                {/* Step Marker Badge */}
                <span className="absolute -left-[27px] top-0 w-8 h-8 rounded-full bg-[#6E1423] text-white flex items-center justify-center font-serif text-sm font-bold border-4 border-[#FAF7F2]">
                  {step.num}
                </span>

                <div className="space-y-1">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1F1D1A]">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#524C44] leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. RECENT EVENTS LOG (Human Details Requirement) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-t border-[#E5DED3]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-3">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#6E1423] block mb-1">
                Field log
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1D1A] tracking-tight">
                Recent events handled across Kolkata
              </h2>
            </div>
            <span className="text-xs text-[#7D756A] font-mono">
              Real venues • Real dates • Real guest counts
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RECENT_EVENTS.map((event, idx) => (
              <div
                key={idx}
                className="bg-[#FAF7F2] border border-[#E5DED3] rounded-lg p-5 sm:p-6 space-y-3 hover:border-[#6E1423]/40 transition-colors"
              >
                <div className="flex items-center justify-between text-xs text-[#7D756A]">
                  <div className="flex items-center space-x-1.5 font-semibold text-[#6E1423]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{event.venue}</span>
                  </div>
                  <div className="flex items-center space-x-3 font-mono">
                    <span>{event.date}</span>
                    <span>•</span>
                    <span>{event.guests}</span>
                  </div>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#1F1D1A]">
                  {event.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#524C44] leading-relaxed">
                  {event.handled}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default WhyChooseUs;
