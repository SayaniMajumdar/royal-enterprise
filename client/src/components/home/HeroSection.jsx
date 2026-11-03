import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, Sparkles } from 'lucide-react';

const HeroSection = ({ onOpenQuote }) => {
  const [selectedService, setSelectedService] = useState('Wedding Planning');
  const [selectedLocation, setSelectedLocation] = useState('Kolkata');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onOpenQuote();
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-16 sm:py-36">
      {/* Background Image: Joyful candid Indian wedding celebration (WedMeGood Reference 1) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2000&q=85"
          alt="Royal Enterprise Joyous Indian Wedding & Event Atelier"
          className="w-full h-full object-cover object-center filter brightness-[0.62] contrast-[1.05]"
        />
        {/* Soft natural gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/30" />
      </div>

      <div className="relative z-10 max-w-[1180px] w-full mx-auto px-4 sm:px-6 text-center text-white">
        {/* Headline (WedMeGood Reference: "Your Wedding, Your Way") */}
        <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 border border-white/25">
          <Sparkles className="w-3.5 h-3.5 text-gold-light" />
          <span>India's Trusted Event, Catering & Wedding Atelier</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4 leading-tight drop-shadow-md">
          Your Celebration, <span className="font-editorial italic font-normal text-gold-light">Your Way</span>
        </h1>

        <p className="text-base sm:text-xl text-white/95 font-normal max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-sm">
          Kolkata's premier luxury atelier — bespoke corporate events, artisanal catering & turnkey royal wedding planning.
        </p>

        {/* WedMeGood Signature Search / Planning Bar (Screenshot 1) */}
        <div className="max-w-3xl mx-auto mb-8 bg-white rounded-xl sm:rounded-full p-2 sm:p-2.5 shadow-2xl border border-white/40">
          <form
            onSubmit={handleSearchSubmit}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 text-left"
          >
            {/* Service Division Dropdown */}
            <div className="flex-1 px-4 py-2 sm:border-r border-slate-200">
              <label className="block text-[10px] uppercase font-bold text-[#6B7280] tracking-wider mb-0.5">
                Service Category
              </label>
              <div className="relative">
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full text-xs sm:text-sm font-semibold text-[#1F2937] bg-transparent focus:outline-none cursor-pointer appearance-none pr-5 py-0.5"
                >
                  <option value="Wedding Planning">Wedding Planning & Decor</option>
                  <option value="Gourmet Catering">Gourmet Catering & Feasts</option>
                  <option value="Event Management">Corporate & Social Events</option>
                  <option value="Complete Package">Complete 360° Package</option>
                </select>
                <ChevronDown className="w-4 h-4 text-[#9CA3AF] absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* City / Location Dropdown */}
            <div className="flex-1 px-4 py-2 sm:border-r border-slate-200">
              <label className="block text-[10px] uppercase font-bold text-[#6B7280] tracking-wider mb-0.5">
                Location / Region
              </label>
              <div className="relative">
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full text-xs sm:text-sm font-semibold text-[#1F2937] bg-transparent focus:outline-none cursor-pointer appearance-none pr-5 py-0.5"
                >
                  <option value="Kolkata">Kolkata (All Zones)</option>
                  <option value="Salt Lake & New Town">Salt Lake & New Town</option>
                  <option value="Heritage Palaces">Heritage Rajbaris & Palaces</option>
                  <option value="Pan India">Pan-India & Destination</option>
                </select>
                <ChevronDown className="w-4 h-4 text-[#9CA3AF] absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Submit / Get Started Button */}
            <button
              type="submit"
              className="btn-brand px-7 py-3.5 sm:py-3 text-sm font-bold uppercase tracking-wider rounded-lg sm:rounded-full shadow-md flex items-center justify-center space-x-2 shrink-0"
            >
              <Search className="w-4 h-4" />
              <span>Get Started</span>
            </button>
          </form>
        </div>

        {/* Popular Searches Link Tags (Screenshot 1) */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-white/90 font-light">
          <span className="font-semibold text-gold-light uppercase tracking-wider text-[11px]">
            Popular:
          </span>
          <Link to="/wedding-planner" className="hover:text-gold-light underline underline-offset-2">
            Heritage Rajbari Weddings
          </Link>
          <span>•</span>
          <Link to="/catering" className="hover:text-gold-light underline underline-offset-2">
            Awadhi & Bengali Banquets
          </Link>
          <span>•</span>
          <Link to="/events" className="hover:text-gold-light underline underline-offset-2">
            3D Stage Architecture
          </Link>
          <span>•</span>
          <Link to="/wedding-planner" className="hover:text-gold-light underline underline-offset-2">
            Complete Bridal Package
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;