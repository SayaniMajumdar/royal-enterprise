import React from 'react';
import { Crown, Sparkles, HeartHandshake, CheckCircle2 } from 'lucide-react';
import Button from '../common/Button';

const CompletePackageBanner = ({ onGetPlan }) => {
  const inclusions = [
    'Regal Venue Booking & Negotiation',
    'Vedic Mandap & Floral Decoration',
    'Bridal Makeup, Hairstyling & Sarees',
    'Designer Groom Sherwanis & Accessories',
    'Cinematic 4K Videography & Albums',
    'Imperial Catering & Dedicated Stewards',
  ];

  return (
    <div id="complete-package" className="relative rounded-[4px] overflow-hidden border border-gold-light/40 p-8 sm:p-14 bg-maroon text-[#FFF8F0] shadow-xl my-16">
      {/* Subtle gold crown watermark */}
      <div className="absolute -right-8 -bottom-8 text-white/[0.04] pointer-events-none">
        <Crown className="w-80 h-80" />
      </div>

      <div className="relative z-10 max-w-4xl">
        <div className="inline-flex items-center space-x-2 bg-white/10 border border-gold-light/40 px-3.5 py-1 rounded-[2px] mb-4">
          <Sparkles className="w-3.5 h-3.5 text-gold-light" />
          <span className="text-[10.5px] uppercase tracking-[0.2em] text-gold-light font-medium">
            All-Inclusive Royal Masterpiece
          </span>
        </div>

        <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FFF8F0] mb-4 tracking-tight">
          Get Your Complete Wedding Package
        </h3>

        <p className="text-white/85 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl font-light">
          Experience stress-free royal majesty. From palace venue selection to haute bridal couture, heirloom jewellery, mandap florals, cinematic films, and multi-course royal feasts—our master directors take complete responsibility for your wedding from day one to the farewell doli.
        </p>

        {/* Inclusions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {inclusions.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-2.5 p-3.5 bg-black/20 border border-white/15 rounded-[2px] text-xs font-medium text-white/95"
            >
              <CheckCircle2 className="w-4 h-4 text-gold-light shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Button
            variant="primary"
            size="lg"
            onClick={onGetPlan}
            className="px-8 py-3.5 text-xs uppercase tracking-[0.16em]"
            icon={HeartHandshake}
          >
            Get a Wedding Plan
          </Button>
          <span className="text-xs text-white/70 italic font-light">
            * 100% customized to your family traditions and budget.
          </span>
        </div>
      </div>
    </div>
  );
};

export default CompletePackageBanner;
