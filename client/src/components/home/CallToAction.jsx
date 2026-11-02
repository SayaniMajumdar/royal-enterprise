import React from 'react';
import { PhoneCall, Sparkles, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';
import Button from '../common/Button';

const CallToAction = ({ onOpenQuote }) => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with luxury gold accents */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 border-t border-gold-500/25" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 text-gold-400 text-xs font-semibold uppercase tracking-widest bg-gold-500/10 border border-gold-500/30 px-3.5 py-1 rounded-full mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Begin Your Bespoke Journey</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-6">
          Ready to Craft an <span className="text-gold-gradient">Unforgettable</span> Celebration?
        </h2>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-10">
          Whether you require turnkey corporate event production, an imperial multi-cuisine banquet, or an end-to-end royal wedding, our directors are at your service.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            onClick={onOpenQuote}
            className="shadow-gold-glow-lg px-8 py-4"
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
              className="w-full sm:w-auto px-8 py-4 border-slate-700 hover:border-gold-400"
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
