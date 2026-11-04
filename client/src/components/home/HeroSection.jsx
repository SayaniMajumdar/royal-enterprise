import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight, ChevronDown, Utensils, Building2, HeartHandshake } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';

const HeroSection = ({ onOpenQuote }) => {
  const scrollToServices = () => {
    const el = document.getElementById('services-overview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[95vh] lg:min-h-screen flex flex-col justify-between bg-[#141210] text-white overflow-hidden">
      {/* Background Cinematic Event Photography with Subtle Parallax/Zoom */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-stage.png"
          alt="Royal Enterprise Luxury Event Management & Stage Production in Kolkata"
          className="w-full h-full object-cover object-center scale-105 animate-fade-in filter brightness-[0.45] contrast-[1.12]"
        />
        {/* Layered Cinematic Vignette & Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-black/50 to-black/75" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/30 to-black/80" />
      </div>

      {/* Spacer for Fixed Transparent Nav */}
      <div className="pt-28 sm:pt-36" />

      {/* Hero Center Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 text-center my-auto py-12">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          
          {/* Subtle Editorial Pre-Heading */}
          <div className="inline-flex items-center space-x-3 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 text-[#E0CFA6]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold">
              Kolkata & Eastern India • Established 2014
            </span>
          </div>

          {/* Large Editorial Headline (Inspired by Twist Events & IDO Events) */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-normal tracking-tight leading-[1.08]">
            Event Services Fit For <br className="hidden sm:inline" />
            <span className="italic font-serif text-[#E0CFA6] font-normal">Royalty.</span>
          </h1>

          {/* Short, Professional Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-white/85 font-light leading-relaxed max-w-2xl mx-auto">
            From heritage rajbari weddings to high-impact corporate galas, our own kitchen and on-ground crew run your entire celebration with calm precision.
          </p>

          {/* Premium CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={onOpenQuote}
              className="btn-maroon px-8 py-3.5 text-xs uppercase tracking-wider font-semibold shadow-lg hover:shadow-[#6B1D2F]/40"
            >
              Plan Your Event
            </button>

            <button
              type="button"
              onClick={scrollToServices}
              className="px-7 py-3.5 text-xs uppercase tracking-wider font-semibold rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-sm transition-all duration-200 inline-flex items-center space-x-2"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E0CFA6]" />
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

      {/* Bottom Proof Strip & Scroll Indicator */}
      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-4 sm:px-6 pb-8 pt-4">
        <div className="pt-6 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/80">
          
          {/* Three Direct Capability Anchors */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left w-full md:w-auto">
            <div className="flex items-start space-x-3">
              <Building2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block">Event Management</span>
                <span className="text-[11px] text-white/60">Corporate galas, media summits & stages</span>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Utensils className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block">In-House Catering</span>
                <span className="text-[11px] text-white/60">Authentic live feasts, pure veg & Bengali</span>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <HeartHandshake className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block">Wedding Planning</span>
                <span className="text-[11px] text-white/60">Rajbaris, styling, mandaps & decor</span>
              </div>
            </div>
          </div>

          {/* Animated Scroll Indicator */}
          <button
            type="button"
            onClick={scrollToServices}
            className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] text-[#E0CFA6] hover:text-white transition-colors cursor-pointer group"
          >
            <span>Scroll to explore</span>
            <div className="w-4 h-7 rounded-full border border-white/30 flex items-start justify-center p-1">
              <span className="w-1 h-1.5 rounded-full bg-[#C5A059] animate-bounce" />
            </div>
          </button>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;