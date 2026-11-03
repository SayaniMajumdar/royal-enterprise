import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, Sparkles, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import Button from '../common/Button';

const HeroSection = ({ onOpenQuote }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-16 pb-24">
      {/* Background Image with Deep Luxury Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85"
          alt="Royal Enterprise Grand Celebration"
          className="w-full h-full object-cover object-center scale-[1.02] filter brightness-[0.42] contrast-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060A13] via-[#060A13]/70 to-[#060A13]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#060A13_80%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Royal Crest / Badge */}
        <div className="inline-flex items-center space-x-2.5 bg-[#090E1B]/85 border border-gold-400/35 px-4 py-1.5 rounded-[2px] mb-8 shadow-sm">
          <Crown className="w-3.5 h-3.5 text-gold-400" />
          <span className="text-[10px] sm:text-[10.5px] uppercase tracking-[0.25em] text-gold-300 font-semibold">
            Royal Enterprise • The Sovereign of Grandeur
          </span>
          <Sparkles className="w-3.5 h-3.5 text-gold-400/80" />
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold text-slate-100 tracking-tight leading-[1.12] mb-6">
          Architects of <span className="font-editorial italic font-normal text-gold-300">Extraordinary</span> Memories & Imperial Celebrations
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-300/90 font-light leading-relaxed mb-10">
          Uniting premier <span className="text-gold-300 font-medium">Event Management</span>, artisanal <span className="text-gold-300 font-medium">Gourmet Catering</span>, and breathtaking <span className="text-gold-300 font-medium">Bespoke Wedding Planning</span> under one royal canopy.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-16">
          <Button
            variant="primary"
            size="lg"
            onClick={onOpenQuote}
            className="w-full sm:w-auto px-8 py-3.5 shadow-md"
          >
            Plan Your Event
          </Button>
          <Link to="/wedding-planner" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-8 py-3.5"
              icon={ArrowRight}
              iconPosition="right"
            >
              Get a Wedding Plan
            </Button>
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-8 border-t border-gold-500/15 text-left">
          <div className="flex items-center space-x-3 p-3 bg-navy-950/60 rounded-[2px] border border-slate-800/80 hover:border-gold-500/30 transition-colors">
            <Award className="w-5 h-5 text-gold-400 shrink-0" />
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-200">Turnkey Precision</p>
              <p className="text-[10.5px] text-slate-400">Concept to curtain-close</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-navy-950/60 rounded-[2px] border border-slate-800/80 hover:border-gold-500/30 transition-colors">
            <Crown className="w-5 h-5 text-gold-400 shrink-0" />
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-200">Royal Heritage</p>
              <p className="text-[10.5px] text-slate-400">Regal grandeur & dignity</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-navy-950/60 rounded-[2px] border border-slate-800/80 hover:border-gold-500/30 transition-colors">
            <Sparkles className="w-5 h-5 text-gold-400 shrink-0" />
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-200">Master Culinary</p>
              <p className="text-[10.5px] text-slate-400">Authentic royal recipes</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-navy-950/60 rounded-[2px] border border-slate-800/80 hover:border-gold-500/30 transition-colors">
            <ShieldCheck className="w-5 h-5 text-gold-400 shrink-0" />
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-200">Flawless Delivery</p>
              <p className="text-[10.5px] text-slate-400">100% on-time execution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
