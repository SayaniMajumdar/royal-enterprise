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
    <div id="complete-package" className="relative rounded-sm overflow-hidden border-2 border-gold-400 p-8 sm:p-12 bg-gradient-to-br from-navy-900 via-navy-850 to-navy-950 shadow-gold-glow-lg my-16">
      {/* Subtle gold crown watermark */}
      <div className="absolute -right-8 -bottom-8 text-gold-500/5 pointer-events-none">
        <Crown className="w-80 h-80" />
      </div>

      <div className="relative z-10 max-w-4xl">
        <div className="inline-flex items-center space-x-2 bg-gold-500/15 border border-gold-400/50 px-3.5 py-1 rounded-full mb-4">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span className="text-xs uppercase tracking-widest text-gold-300 font-bold">
            All-Inclusive Royal Masterpiece
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 mb-4">
          Get Your Complete Wedding Package
        </h3>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl font-light">
          Experience stress-free royal majesty. From palace venue selection to haute bridal couture, heirloom jewellery, mandap florals, cinematic films, and multi-course royal feasts—our master directors take complete responsibility for your wedding from day one to the farewell doli.
        </p>

        {/* Inclusions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {inclusions.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-2.5 p-2.5 bg-navy-950/80 border border-slate-800 rounded-sm text-xs font-medium text-slate-200"
            >
              <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Button
            variant="primary"
            size="lg"
            onClick={onGetPlan}
            className="shadow-gold-glow px-8 py-4 text-sm uppercase tracking-wider"
            icon={HeartHandshake}
          >
            Get a Wedding Plan
          </Button>
          <span className="text-xs text-slate-400 italic">
            * 100% customized to your family traditions and budget.
          </span>
        </div>
      </div>
    </div>
  );
};

export default CompletePackageBanner;
