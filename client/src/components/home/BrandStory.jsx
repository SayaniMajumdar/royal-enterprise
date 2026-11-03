import React from 'react';
import { ShieldCheck, Utensils, Sparkles, MapPin, HeartHandshake, CheckCircle2 } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="py-20 sm:py-24 bg-white text-[#1F2937] border-b border-slate-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading & Subtitle (WedMeGood Screenshot 4 Editorial Style) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-roseBrand block">
              The Royal Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937] tracking-tight leading-snug">
              Royal Enterprise — Your Personal Event & Wedding Atelier
            </h2>
            <p className="text-sm font-semibold text-roseBrand">
              Planning seamless celebrations across Kolkata & Eastern India since 2014
            </p>
            <div className="pt-2">
              <p className="text-sm sm:text-base text-[#4B5563] font-light leading-relaxed">
                Royal Enterprise is an integrated luxury atelier where you find premier event architects, award-winning culinary maestros, and complete turnkey wedding planners under single-point accountability.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Trust Badges & Editorial Detail */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-sm sm:text-base text-[#4B5563] font-light leading-relaxed">
              Whether you are planning a corporate leadership summit at a 5-star banquet, a grand multi-day wedding across Kolkata's heritage rajbaris, or an artisanal Awadhi banquet, our directors manage every detail with military precision and family warmth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-roseBrand-light text-roseBrand flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1F2937]">Guaranteed Transparency</h4>
                  <p className="text-xs text-[#6B7280] font-light mt-0.5">Itemized quotes, zero hidden charges</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-roseBrand-light text-roseBrand flex items-center justify-center shrink-0">
                  <Utensils className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1F2937]">Master Chef Tastings</h4>
                  <p className="text-xs text-[#6B7280] font-light mt-0.5">Personalized food tasting sessions</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-roseBrand-light text-roseBrand flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1F2937]">Turnkey Production</h4>
                  <p className="text-xs text-[#6B7280] font-light mt-0.5">3D stage design, mandap & sound</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-roseBrand-light text-roseBrand flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1F2937]">Dedicated Concierge</h4>
                  <p className="text-xs text-[#6B7280] font-light mt-0.5">24/7 on-ground event floor directors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;