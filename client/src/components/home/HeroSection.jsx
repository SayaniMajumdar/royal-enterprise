import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';

const HeroSection = ({ onOpenQuote }) => {
  const scrollToServices = () => {
    const el = document.getElementById('services-overview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between bg-[#191316] text-[#F6F0E7] overflow-hidden">
      {/* Background Cinematic Event Photography with Subtle Contrast & Depth */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-stage.png"
          alt="Royal Enterprise Luxury Wedding Planning & Grand Event Production in Kolkata"
          className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-[1.15] scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Layered Editorial Vignette & Warm Charcoal Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#191316] via-black/45 to-black/75" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/25 to-[#191316]/90" />
      </div>

      {/* Top Spacer for Fixed Navigation */}
      <div className="pt-28 sm:pt-36" />

      {/* Hero Center Editorial Content */}
      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-5 sm:px-8 text-center my-auto py-10 sm:py-14">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          
          {/* Refined Architectural Pre-Heading (No floating AI sparkles or emojis) */}
          <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full border border-white/20 bg-black/40 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C49A53]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.24em] font-medium text-[#E2CCA1]">
              Kolkata & Eastern India • Established 2014
            </span>
          </div>

          {/* Large High-Contrast Display Headline (Instrument Serif) */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-normal tracking-tight leading-[1.05]">
            Event Services Fit For <br className="hidden sm:inline" />
            <span className="italic font-display text-[#E2CCA1]">Royalty.</span>
          </h1>

          {/* Authentic, Human Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-[#F6F0E7]/85 font-light leading-relaxed max-w-2xl mx-auto font-sans">
            From heritage rajbari weddings to high-impact corporate galas, our own kitchen and on-ground crew run your entire celebration with calm precision.
          </p>

          {/* Action Triggers: Deliberate Hierarchy */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <button
              type="button"
              onClick={onOpenQuote}
              className="px-8 py-3.5 text-xs uppercase tracking-wider font-semibold rounded-lg bg-[#D65B43] hover:bg-[#B84630] text-white shadow-lg shadow-[#D65B43]/25 transition-all duration-200"
            >
              Plan Your Event
            </button>

            <button
              type="button"
              onClick={scrollToServices}
              className="px-7 py-3.5 text-xs uppercase tracking-wider font-semibold rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-sm transition-all duration-200 inline-flex items-center space-x-2"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E2CCA1]" />
            </button>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Royal%20Enterprise,%20I%20would%20like%20to%20discuss%20an%20event.`}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp px-6 py-3.5 text-xs uppercase tracking-wider font-semibold inline-flex items-center space-x-2 shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Proof Strip & Subtle Scroll Indicator (Editorial Typographic Layout) */}
      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-5 sm:px-8 pb-8 pt-4">
        <div className="pt-6 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/80 font-sans">
          
          {/* Three Direct Capability Anchors */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 text-left w-full md:w-auto">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C49A53] font-semibold block">
                01 / Event Management
              </span>
              <span className="font-medium text-white block text-xs">
                Corporate galas, media summits & stages
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C49A53] font-semibold block">
                02 / In-House Catering
              </span>
              <span className="font-medium text-white block text-xs">
                Authentic live feasts, pure veg & Bengali
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C49A53] font-semibold block">
                03 / Wedding Planning
              </span>
              <span className="font-medium text-white block text-xs">
                Rajbaris, styling, mandaps & decor
              </span>
            </div>
          </div>

          {/* Minimalist Scroll Indicator */}
          <button
            type="button"
            onClick={scrollToServices}
            className="hidden md:flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] text-[#E2CCA1] hover:text-white transition-colors cursor-pointer group shrink-0"
          >
            <span>Scroll to explore</span>
            <div className="w-4 h-7 rounded-full border border-white/30 flex items-start justify-center p-1">
              <span className="w-1 h-1.5 rounded-full bg-[#C49A53] animate-bounce" />
            </div>
          </button>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;