import React from 'react';
import { PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';
import Button from '../common/Button';

const CallToAction = ({ onOpenQuote }) => {
  return (
    <section className="py-24 sm:py-28 relative overflow-hidden bg-[#060A13] border-t border-gold-500/20">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2.5 mb-5">
          <span className="w-5 h-px bg-gold-400/50" />
          <span className="text-[10px] sm:text-[10.5px] font-semibold tracking-[0.26em] uppercase text-gold-400">
            Begin Your Bespoke Journey
          </span>
          <span className="w-5 h-px bg-gold-400/50" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-6 tracking-tight leading-tight">
          Ready to Craft an <span className="font-editorial italic font-normal text-gold-300">Unforgettable</span> Celebration?
        </h2>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300/85 font-light leading-relaxed mb-10">
          Whether you require turnkey corporate event production, an imperial multi-cuisine banquet, or an end-to-end royal wedding, our directors are at your service.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <Button
            variant="primary"
            size="lg"
            onClick={onOpenQuote}
            className="w-full sm:w-auto px-8 py-3.5"
          >
            Request a Consultation
          </Button>

          <a
            href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto"
          >
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-8 py-3.5"
              icon={PhoneCall}
            >
              Direct Call: {COMPANY_INFO.phone}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
