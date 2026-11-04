import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Clock, Users } from 'lucide-react';

const WhyChooseUs = ({ onOpenQuote }) => {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Briefing',
      detail: 'We understand your event purpose, expected guest count, venue preferences, and comfortable budget without pushy upselling.',
      tag: 'First Conversation',
      icon: Users,
    },
    {
      num: '02',
      title: '3D Concept & Line-Item Pricing',
      detail: 'We draft a customized 3D stage preview, run-of-show schedule, and itemized cost breakdown with zero surprise additions.',
      tag: 'Transparent Estimates',
      icon: Sparkles,
    },
    {
      num: '03',
      title: 'Tastings & Pre-Production',
      detail: 'Live catering menu tastings, acoustic sound checks, lighting cues, stage dry-runs, and municipal fire safety clearances.',
      tag: 'Dry Runs & Tastings',
      icon: ShieldCheck,
    },
    {
      num: '04',
      title: 'Calm Day-Of Management',
      detail: 'Our experienced floor managers stay active on site from the morning setup until the very last guest departs.',
      tag: 'On-Ground Care',
      icon: Clock,
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#FAF8F5] dark:bg-[#141210] border-b border-[#E8E0D5] dark:border-[#38312B] transition-colors">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2">
            <span className="w-6 h-px bg-[#C5A059]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#6B1D2F] dark:text-[#E0CFA6]">
              The Client Experience
            </span>
            <span className="w-6 h-px bg-[#C5A059]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#2B2625] dark:text-[#FAF8F5] font-normal tracking-tight leading-[1.12]">
            How We Bring Calm To <br />
            <span className="italic font-serif text-[#6B1D2F] dark:text-[#E0CFA6]">High-Stakes Celebrations.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#5A524E] dark:text-[#D4CCC2] font-light leading-relaxed">
            Planning a milestone event should feel inspiring, not stressful. Here is our proven four-step operational workflow from your first call to the final applause.
          </p>
        </div>

        {/* 4-Step Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white dark:bg-[#1C1917] rounded-2xl border border-[#E8E0D5] dark:border-[#38312B] p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#6B1D2F]/40 dark:hover:border-[#C5A059]/40 transition-all duration-300 group"
              >
                <div>
                  {/* Top Bar: Numeral & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-4xl sm:text-5xl font-light text-[#C5A059]/40 group-hover:text-[#6B1D2F] dark:group-hover:text-[#E0CFA6] transition-colors">
                      {step.num}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider font-semibold bg-[#FAF8F5] dark:bg-[#141210] border border-[#E8E0D5] dark:border-[#38312B] text-[#6B1D2F] dark:text-[#E0CFA6] px-3 py-1 rounded-full">
                      {step.tag}
                    </span>
                  </div>

                  {/* Icon & Heading */}
                  <div className="flex items-center space-x-2.5 mb-3 text-[#2B2625] dark:text-[#FAF8F5]">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] dark:bg-[#141210] border border-[#E8E0D5] dark:border-[#38312B] flex items-center justify-center text-[#6B1D2F] dark:text-[#C5A059] shrink-0">
                      <Icon className="w-4 h-4 stroke-[1.8]" />
                    </div>
                    <h3 className="font-serif text-xl font-bold leading-snug">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-[#5A524E] dark:text-[#D4CCC2] font-light leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="pt-6 mt-6 border-t border-[#E8E0D5]/70 dark:border-[#38312B] flex items-center justify-between text-xs font-semibold text-[#6B1D2F] dark:text-[#E0CFA6]">
                  <span>Step {step.num}</span>
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Experience Callout Banner */}
        <div className="rounded-2xl p-8 sm:p-10 bg-gradient-to-r from-[#4A101D] to-[#2B0A11] dark:from-[#24080E] dark:to-[#170509] text-white border border-[#3E0C17] flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#E0CFA6] block">
              Direct Desk • Kolkata
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              One local team with you from morning setup to the final plate.
            </h3>
            <p className="text-xs sm:text-sm text-white/85 font-light max-w-xl">
              Zero finger-pointing between separate caterers and decorators. We assume single-point accountability for your entire event.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenQuote}
            className="btn-gold px-8 py-3.5 text-xs uppercase tracking-wider font-semibold whitespace-nowrap shadow-lg shrink-0 inline-flex items-center space-x-2"
          >
            <span>Plan Your Event</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;