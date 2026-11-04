import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Utensils, HeartHandshake, ArrowRight, Check, Sparkles } from 'lucide-react';

const DivisionOverview = ({ onOpenQuote }) => {
  return (
    <section id="services-overview" className="py-24 sm:py-32 bg-[#FAF8F5] dark:bg-[#141210] border-b border-[#E8E0D5] dark:border-[#38312B] transition-colors overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        
        {/* Section Header: Editorial & High-End */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-28 space-y-4">
          <div className="inline-flex items-center space-x-2">
            <span className="w-6 h-px bg-[#C5A059]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#6B1D2F] dark:text-[#E0CFA6]">
              Core Disciplines
            </span>
            <span className="w-6 h-px bg-[#C5A059]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2B2625] dark:text-[#FAF8F5] font-normal tracking-tight leading-[1.12]">
            Three Specialized Pillars. <br />
            <span className="italic font-serif text-[#6B1D2F] dark:text-[#E0CFA6]">One In-House Standard.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#5A524E] dark:text-[#D4CCC2] font-light leading-relaxed">
            Most event companies act as third-party brokers. We maintain our own central commercial kitchens, technical stage crews, and on-ground managers right here in Kolkata.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* PILLAR 01: EVENT MANAGEMENT (Image Left, Text Right) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28 sm:mb-36">
          {/* Visual Column */}
          <div className="lg:col-span-7 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-[#E8E0D5] dark:border-[#38312B] bg-white dark:bg-[#1C1917] shadow-xl aspect-[16/10]">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80"
                alt="Royal Enterprise Corporate Event Management and 3D Stage Design in Kolkata"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.95]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#E0CFA6]">
                  Stagecraft & Corporate Production
                </span>
                <span className="text-[11px] bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  100 – 3,000 Attendees
                </span>
              </div>
            </div>
            {/* Subtle decorative gold frame accent */}
            <div className="absolute -bottom-3 -right-3 w-28 h-28 border-b-2 border-r-2 border-[#C5A059]/40 rounded-br-2xl pointer-events-none hidden sm:block" />
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#6B1D2F] dark:text-[#E0CFA6] flex items-center space-x-2">
                <Building2 className="w-4 h-4" />
                <span>Pillar 01 • Event Management</span>
              </span>
              <span className="font-serif text-5xl sm:text-6xl font-light text-[#C5A059]/25 select-none">
                01
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-4xl text-[#2B2625] dark:text-[#FAF8F5] font-bold tracking-tight leading-tight">
              Corporate Summits, Media Launches & Stage Production.
            </h3>

            <p className="text-sm sm:text-base text-[#5A524E] dark:text-[#D4CCC2] font-light leading-relaxed">
              We engineer concert-grade acoustic sound, build custom 3D LED stages, and run seamless delegate logistics across Kolkata’s premier convention centers and hotel ballrooms. Direct technical crew under one transparent invoice.
            </p>

            {/* Explicit Core Services as specified in prompt */}
            <div className="space-y-2.5 pt-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#2B2625] dark:text-[#FAF8F5] block">
                Comprehensive Capabilities:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#2B2625] dark:text-[#D4CCC2]">
                <div className="flex items-center space-x-2 p-2 rounded-lg bg-white dark:bg-[#1C1917] border border-[#E8E0D5] dark:border-[#38312B]">
                  <Check className="w-3.5 h-3.5 text-[#6B1D2F] dark:text-[#C5A059] shrink-0" />
                  <span>Corporate Events & Galas</span>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded-lg bg-white dark:bg-[#1C1917] border border-[#E8E0D5] dark:border-[#38312B]">
                  <Check className="w-3.5 h-3.5 text-[#6B1D2F] dark:text-[#C5A059] shrink-0" />
                  <span>Media Events & Press Meets</span>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded-lg bg-white dark:bg-[#1C1917] border border-[#E8E0D5] dark:border-[#38312B]">
                  <Check className="w-3.5 h-3.5 text-[#6B1D2F] dark:text-[#C5A059] shrink-0" />
                  <span>Any Type of Program / Festivals</span>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded-lg bg-white dark:bg-[#1C1917] border border-[#E8E0D5] dark:border-[#38312B]">
                  <Check className="w-3.5 h-3.5 text-[#6B1D2F] dark:text-[#C5A059] shrink-0" />
                  <span>Custom Set & Truss Design</span>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded-lg bg-white dark:bg-[#1C1917] border border-[#E8E0D5] dark:border-[#38312B] sm:col-span-2">
                  <Check className="w-3.5 h-3.5 text-[#6B1D2F] dark:text-[#C5A059] shrink-0" />
                  <span>3D Stage Design, LED Walls & Live Sound</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Link
                to="/events"
                className="btn-maroon px-6 py-3 text-xs font-semibold inline-flex items-center space-x-2 shadow-sm"
              >
                <span>Explore Event Management</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                type="button"
                onClick={onOpenQuote}
                className="btn-outline px-5 py-3 text-xs font-semibold"
              >
                Request Stage Proposal
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PILLAR 02: IN-HOUSE CATERING (Text Left, Image Right) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28 sm:mb-36">
          {/* Editorial Content Column (Order 2 on mobile, 1 on LG) */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#6B1D2F] dark:text-[#E0CFA6] flex items-center space-x-2">
                <Utensils className="w-4 h-4" />
                <span>Pillar 02 • In-House Catering</span>
              </span>
              <span className="font-serif text-5xl sm:text-6xl font-light text-[#C5A059]/25 select-none">
                02
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-4xl text-[#2B2625] dark:text-[#FAF8F5] font-bold tracking-tight leading-tight">
              Authentic Live Feasts Cooked In-House. Never Outsourced.
            </h3>

            <p className="text-sm sm:text-base text-[#5A524E] dark:text-[#D4CCC2] font-light leading-relaxed">
              Food is the beating heart of an Indian celebration. Our veteran Kolkata bawarchis, halwais, and captains prepare every single course fresh on site—from traditional mustard-oil Bhetki Paturi to slow-simmered Kosha Mangsho and royal Awadhi dum biryani.
            </p>

            {/* Explicit Core Services */}
            <div className="space-y-2.5 pt-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#2B2625] dark:text-[#FAF8F5] block">
                Catering Specialties:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#2B2625] dark:text-[#D4CCC2]">
                <div className="flex items-center space-x-2 p-2 rounded-lg bg-white dark:bg-[#1C1917] border border-[#E8E0D5] dark:border-[#38312B]">
                  <Check className="w-3.5 h-3.5 text-[#6B1D2F] dark:text-[#C5A059] shrink-0" />
                  <span>Grand Wedding Catering & Biye Bari</span>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded-lg bg-white dark:bg-[#1C1917] border border-[#E8E0D5] dark:border-[#38312B]">
                  <Check className="w-3.5 h-3.5 text-[#6B1D2F] dark:text-[#C5A059] shrink-0" />
                  <span>Birthday Party & Milestone Catering</span>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded-lg bg-white dark:bg-[#1C1917] border border-[#E8E0D5] dark:border-[#38312B]">
                  <Check className="w-3.5 h-3.5 text-[#6B1D2F] dark:text-[#C5A059] shrink-0" />
                  <span>Dedicated Pure Veg & Jain Kitchens</span>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded-lg bg-white dark:bg-[#1C1917] border border-[#E8E0D5] dark:border-[#38312B]">
                  <Check className="w-3.5 h-3.5 text-[#6B1D2F] dark:text-[#C5A059] shrink-0" />
                  <span>Live Charcoal Kebabs & Chaat Counters</span>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded-lg bg-white dark:bg-[#1C1917] border border-[#E8E0D5] dark:border-[#38312B] sm:col-span-2">
                  <Check className="w-3.5 h-3.5 text-[#6B1D2F] dark:text-[#C5A059] shrink-0" />
                  <span>Slow-cooked Mutton Kosha & Handi Dum Biryani</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Link
                to="/catering"
                className="btn-maroon px-6 py-3 text-xs font-semibold inline-flex items-center space-x-2 shadow-sm"
              >
                <span>View Catering Menus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                type="button"
                onClick={onOpenQuote}
                className="btn-outline px-5 py-3 text-xs font-semibold"
              >
                Book a Food Tasting
              </button>
            </div>
          </div>

          {/* Visual Column (Order 1 on mobile, 2 on LG) */}
          <div className="lg:col-span-7 relative group order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden border border-[#E8E0D5] dark:border-[#38312B] bg-white dark:bg-[#1C1917] shadow-xl aspect-[16/10]">
              <img
                src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80"
                alt="Royal Enterprise In-House Banquet Catering and Gourmet Service in Kolkata"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.95]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#E0CFA6]">
                  Central Commercial Kitchens
                </span>
                <span className="text-[11px] bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  Strictly 100% In-House Food
                </span>
              </div>
            </div>
            {/* Subtle decorative gold frame accent */}
            <div className="absolute -top-3 -left-3 w-28 h-28 border-t-2 border-l-2 border-[#C5A059]/40 rounded-tl-2xl pointer-events-none hidden sm:block" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PILLAR 03: WEDDING PLANNER (Image Left, Text Right) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-7 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-[#E8E0D5] dark:border-[#38312B] bg-white dark:bg-[#1C1917] shadow-xl aspect-[16/10]">
              <img
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80"
                alt="Royal Enterprise Bespoke Wedding Planning and Heritage Rajbari Biye Bari in Kolkata"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.95]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#E0CFA6]">
                  Heritage Rajbaris & Bespoke Mandaps
                </span>
                <span className="text-[11px] bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  Full End-to-End Care
                </span>
              </div>
            </div>
            {/* Subtle decorative gold frame accent */}
            <div className="absolute -bottom-3 -right-3 w-28 h-28 border-b-2 border-r-2 border-[#C5A059]/40 rounded-br-2xl pointer-events-none hidden sm:block" />
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#6B1D2F] dark:text-[#E0CFA6] flex items-center space-x-2">
                <HeartHandshake className="w-4 h-4" />
                <span>Pillar 03 • Wedding Planner</span>
              </span>
              <span className="font-serif text-5xl sm:text-6xl font-light text-[#C5A059]/25 select-none">
                03
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-4xl text-[#2B2625] dark:text-[#FAF8F5] font-bold tracking-tight leading-tight">
              Bespoke Kolkata Weddings & Destination Celebrations.
            </h3>

            <p className="text-sm sm:text-base text-[#5A524E] dark:text-[#D4CCC2] font-light leading-relaxed">
              We manage heritage rajbari venues, sacred Vedic floral mandaps, bridal aesthetics, jewellery curation, and handloom sarees. A dedicated floor manager stays beside you throughout the wedding rituals so your family can celebrate without anxiety.
            </p>

            {/* Explicit Core Services as specified in prompt */}
            <div className="space-y-2.5 pt-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#2B2625] dark:text-[#FAF8F5] block">
                Bespoke Wedding Offerings:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#2B2625] dark:text-[#D4CCC2]">
                <div className="flex items-center space-x-2 p-2 rounded-lg bg-white dark:bg-[#1C1917] border border-[#E8E0D5] dark:border-[#38312B]">
                  <Check className="w-3.5 h-3.5 text-[#6B1D2F] dark:text-[#C5A059] shrink-0" />
                  <span>Heritage Venue Selection</span>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded-lg bg-white dark:bg-[#1C1917] border border-[#E8E0D5] dark:border-[#38312B]">
                  <Check className="w-3.5 h-3.5 text-[#6B1D2F] dark:text-[#C5A059] shrink-0" />
                  <span>Bridal & Family Makeup</span>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded-lg bg-white dark:bg-[#1C1917] border border-[#E8E0D5] dark:border-[#38312B]">
                  <Check className="w-3.5 h-3.5 text-[#6B1D2F] dark:text-[#C5A059] shrink-0" />
                  <span>Heritage Jewellery Curation</span>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded-lg bg-white dark:bg-[#1C1917] border border-[#E8E0D5] dark:border-[#38312B]">
                  <Check className="w-3.5 h-3.5 text-[#6B1D2F] dark:text-[#C5A059] shrink-0" />
                  <span>Handloom Benarasi Sarees</span>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded-lg bg-white dark:bg-[#1C1917] border border-[#E8E0D5] dark:border-[#38312B] sm:col-span-2">
                  <Check className="w-3.5 h-3.5 text-[#6B1D2F] dark:text-[#C5A059] shrink-0" />
                  <span>Complete Wedding Packages (End-to-End Responsibility)</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Link
                to="/wedding-planner"
                className="btn-maroon px-6 py-3 text-xs font-semibold inline-flex items-center space-x-2 shadow-sm"
              >
                <span>Explore Wedding Planning</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                type="button"
                onClick={onOpenQuote}
                className="btn-outline px-5 py-3 text-xs font-semibold"
              >
                Plan Your Wedding
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DivisionOverview;