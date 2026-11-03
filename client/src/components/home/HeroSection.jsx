import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';

const HeroSection = ({ onOpenQuote }) => {
  return (
    <section className="relative min-h-[95vh] flex items-end overflow-hidden pb-20 pt-36">
      {/* Background Image: Full Bleed Indian Wedding / Royal Mandap Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2000&q=85"
          alt="Royal Enterprise Bespoke Wedding Atelier"
          className="w-full h-full object-cover object-center filter brightness-[0.52] contrast-[1.08]"
        />
        {/* Subtle cinematic gradient overlay matching Theevexa */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/35" />
      </div>

      <div className="relative z-10 max-w-[1180px] w-full mx-auto px-5 sm:px-6">
        <div className="max-w-2xl text-left">
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-2.5 mb-4">
            <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.26em] text-gold-light font-medium">
              Events • Catering • Weddings
            </span>
          </div>

          {/* Large Serif Title (Title Case, Theevexa Style: Crafting Forever Moments) */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-normal text-white tracking-tight leading-[1.05] mb-6">
            Crafting Forever <span className="font-editorial italic font-normal text-gold-light">Moments</span>
          </h1>

          {/* Subtitle / Story Lead */}
          <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed mb-9 max-w-xl">
            India's premier luxury event atelier — designing bespoke celebrations across heritage palaces, grand banquets, and iconic destinations. From intimate gatherings to thousand-guest spectacles, every detail is yours.
          </p>

          {/* Left-Aligned CTAs matching Theevexa */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
            <button
              type="button"
              onClick={onOpenQuote}
              className="btn-gold px-8 py-3.5 text-xs tracking-[0.18em] shadow-lg text-center"
            >
              Begin Your Journey
            </button>
            <Link
              to="/wedding-planner"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/60 text-white hover:border-gold-light hover:text-gold-light transition-all text-xs uppercase tracking-[0.18em] font-medium backdrop-blur-sm"
            >
              <span>View Our Work</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </Link>
          </div>
        </div>

        {/* Location Tag at Bottom Right (Theevexa / White Tie signature) */}
        <div className="hidden sm:flex items-center justify-end space-x-2 text-[11px] uppercase tracking-[0.24em] text-white/70 pt-4 border-t border-white/15">
          <MapPin className="w-3.5 h-3.5 text-gold-light" />
          <span>Kolkata • Pan India & Destinations</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
