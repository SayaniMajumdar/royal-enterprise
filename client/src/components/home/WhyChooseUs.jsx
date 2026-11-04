import React from 'react';
import { ArrowRight } from 'lucide-react';

const WhyChooseUs = ({ onOpenQuote }) => {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Briefing',
      detail: 'We understand your event purpose, expected guest count, venue preferences, and comfortable budget without pushy upselling.',
      tag: 'First Conversation',
    },
    {
      num: '02',
      title: '3D Concept & Line-Item Pricing',
      detail: 'We draft a customized 3D stage preview, run-of-show schedule, and itemized cost breakdown with zero surprise additions.',
      tag: 'Transparent Estimates',
    },
    {
      num: '03',
      title: 'Tastings & Pre-Production',
      detail: 'Live catering menu tastings, acoustic sound checks, lighting cues, stage dry-runs, and municipal fire safety clearances.',
      tag: 'Dry Runs & Tastings',
    },
    {
      num: '04',
      title: 'Calm Day-Of Management',
      detail: 'Our experienced floor managers stay active on site from the morning setup until the very last guest departs.',
      tag: 'On-Ground Care',
    },
  ];

  return (
    <section className="py-10 sm:py-16 bg-[#F6F0E7] dark:bg-[#191316] border-b border-[#E8DFD3] dark:border-[#3F3238] transition-colors">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12 sm:space-y-16">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-[#401D2C] dark:text-[#E2CCA1] block">
            The Client Experience
          </span>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#292323] dark:text-[#F6F0E7] font-normal tracking-tight leading-[1.08]">
            How We Bring Calm To <br />
            <span className="italic font-display text-[#D65B43] dark:text-[#E2CCA1]">High-Stakes Celebrations.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#665C5C] dark:text-[#D4CCC2] font-light leading-relaxed font-sans">
            Planning a milestone event should feel inspiring, not stressful. Here is our proven four-step operational workflow from your first call to the final applause.
          </p>
        </div>

        {/* 4-Step Process: Refined Horizontal Editorial Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="relative p-6 sm:p-7 rounded-xl bg-white/70 dark:bg-[#231B1F] border border-[#E8DFD3] dark:border-[#3F3238] flex flex-col justify-between hover:border-[#401D2C]/40 dark:hover:border-[#E2CCA1]/40 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-baseline justify-between border-b border-[#E8DFD3] dark:border-[#3F3238] pb-3">
                  <span className="font-display text-4xl sm:text-5xl font-light text-[#C49A53]/35 group-hover:text-[#401D2C] dark:group-hover:text-[#E2CCA1] transition-colors select-none">
                    {step.num}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#D65B43] dark:text-[#E2CCA1] font-sans">
                    {step.tag}
                  </span>
                </div>

                <h3 className="font-display text-2xl text-[#292323] dark:text-[#F6F0E7] font-normal leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-[#665C5C] dark:text-[#D4CCC2] font-light leading-relaxed font-sans">
                  {step.detail}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#E8DFD3]/70 dark:border-[#3F3238] flex items-center justify-between text-xs text-[#8C8282] dark:text-[#9E9488] font-sans">
                <span>Phase {step.num}</span>
                <span className="text-[#C49A53] font-mono text-[11px]">0{idx + 1}/04</span>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Callout Banner: Deep Wine Architectural Contrast */}
        <div className="rounded-xl p-8 sm:p-10 bg-[#401D2C] text-[#F6F0E7] border border-[#5C283F] flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#E2CCA1] block">
              Direct Desk • Kolkata
            </span>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight">
              One local team with you from morning setup to the final plate.
            </h3>
            <p className="text-xs sm:text-sm text-[#F6F0E7]/80 font-light max-w-xl font-sans">
              Zero finger-pointing between separate caterers and decorators. We assume single-point accountability for your entire event.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenQuote}
            className="px-7 py-3.5 text-xs uppercase tracking-wider font-semibold whitespace-nowrap rounded-lg bg-[#C49A53] hover:bg-[#A8813D] text-[#191316] shadow-md shrink-0 inline-flex items-center space-x-2 transition-all"
          >
            <span>Plan Your Event</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;