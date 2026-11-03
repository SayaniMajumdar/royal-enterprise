import React from 'react';
import { Star } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#F6F3EE] text-[#141414] relative overflow-hidden border-b border-[#E8E1D5]">
      {/* Subtle Background Watermark Letter "R" */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[#E8E1D5]/40 font-serif text-[280px] lg:text-[380px] select-none pointer-events-none leading-none">
        R
      </div>

      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Signature (Exactly like Theevexa Image 3) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 text-gold-dark text-[11px] font-semibold uppercase tracking-[0.26em]">
              <span className="w-5 h-px bg-gold-dark/60" />
              <span>About Royal Enterprise</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[3.4rem] font-normal text-[#141414] leading-[1.12] tracking-tight">
              A celebration as <span className="font-editorial italic font-normal text-maroon">unique</span> as your story
            </h2>

            <p className="font-editorial italic text-gold-dark text-xl sm:text-2xl pt-2">
              — Royal Enterprise
            </p>
          </div>

          {/* Right Column: Editorial Paragraphs and 4 Core Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-base sm:text-[17px] text-[#3A352F] font-light leading-relaxed">
              For over a decade, Royal Enterprise has been the trusted name behind Kolkata and Eastern India's most extraordinary celebrations. We are architects, master chefs, and meticulous orchestrators — turning your most cherished milestone into a flawless symphony of beauty, culinary majesty, and joy.
            </p>

            <p className="text-sm sm:text-base text-[#6B645C] font-light leading-relaxed">
              From the regal courtyards of Kolkata rajbaris to intimate banquets and scenic destinations, our atelier curates every detail with the precision of a master craftsman and the warmth of family.
            </p>

            {/* 4 Brand Feature Chips with Star Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E8E1D5]">
              <div className="flex items-center space-x-3">
                <Star className="w-4 h-4 text-gold-dark fill-current shrink-0 stroke-[1.5]" />
                <span className="text-sm font-medium text-[#141414] tracking-wide">
                  Bespoke Design Studio
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="w-4 h-4 text-gold-dark fill-current shrink-0 stroke-[1.5]" />
                <span className="text-sm font-medium text-[#141414] tracking-wide">
                  Hand-picked Master Chefs
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="w-4 h-4 text-gold-dark fill-current shrink-0 stroke-[1.5]" />
                <span className="text-sm font-medium text-[#141414] tracking-wide">
                  Transparent Budgeting
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="w-4 h-4 text-gold-dark fill-current shrink-0 stroke-[1.5]" />
                <span className="text-sm font-medium text-[#141414] tracking-wide">
                  Pan-India & Destination Reach
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
