import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, Sparkles, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import Button from '../common/Button';

const HeroSection = ({ onOpenQuote }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-12 pb-20">
      {/* Background Image with Deep Luxury Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85"
          alt="Royal Enterprise Grand Celebration"
          className="w-full h-full object-cover object-center scale-105 filter brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-navy-950/90" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Royal Crest / Badge */}
        <div className="inline-flex items-center space-x-2 bg-navy-900/80 border border-gold-400/40 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md shadow-gold-glow animate-in fade-in duration-700">
          <Crown className="w-4 h-4 text-gold-400" />
          <span className="text-xs uppercase tracking-widest text-gold-300 font-medium">
            Royal Enterprise • The Sovereign of Grandeur
          </span>
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-100 tracking-tight leading-[1.15] mb-6">
          Architects of <span className="text-gold-gradient">Extraordinary</span> Memories & Imperial Celebrations
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-10">
          Uniting premier <span className="text-gold-300 font-normal">Event Management</span>, artisanal <span className="text-gold-300 font-normal">Gourmet Catering</span>, and breathtaking <span className="text-gold-300 font-normal">Bespoke Wedding Planning</span> under one royal canopy.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16">
          <Button
            variant="primary"
            size="lg"
            onClick={onOpenQuote}
            className="w-full sm:w-auto shadow-gold-glow-lg text-sm sm:text-base px-8 py-4"
          >
            Plan Your Event
          </Button>
          <Link to="/wedding-planner" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-sm sm:text-base px-8 py-4 border-gold-400/80"
              icon={ArrowRight}
              iconPosition="right"
            >
              Get a Wedding Plan
            </Button>
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-slate-800/80 text-left">
          <div className="flex items-center space-x-3 p-2 bg-navy-900/40 rounded-sm border border-slate-800/60">
            <Award className="w-6 h-6 text-gold-400 shrink-0" />
            <div>
              <p className="text-xs font-bold uppercase text-slate-200">Turnkey Precision</p>
              <p className="text-[11px] text-slate-400">Concept to curtain-close</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-2 bg-navy-900/40 rounded-sm border border-slate-800/60">
            <Crown className="w-6 h-6 text-gold-400 shrink-0" />
            <div>
              <p className="text-xs font-bold uppercase text-slate-200">Royal Heritage</p>
              <p className="text-[11px] text-slate-400">Regal grandeur & dignity</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-2 bg-navy-900/40 rounded-sm border border-slate-800/60">
            <Sparkles className="w-6 h-6 text-gold-400 shrink-0" />
            <div>
              <p className="text-xs font-bold uppercase text-slate-200">Master Culinary</p>
              <p className="text-[11px] text-slate-400">Authentic royal recipes</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-2 bg-navy-900/40 rounded-sm border border-slate-800/60">
            <ShieldCheck className="w-6 h-6 text-gold-400 shrink-0" />
            <div>
              <p className="text-xs font-bold uppercase text-slate-200">Flawless Delivery</p>
              <p className="text-[11px] text-slate-400">100% on-time execution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
