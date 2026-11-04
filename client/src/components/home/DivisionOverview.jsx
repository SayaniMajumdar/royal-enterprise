import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const DivisionOverview = ({ onOpenQuote }) => {
  return (
    <section id="services-overview" className="py-10 sm:py-16 bg-[#F6F0E7] dark:bg-[#191316] text-[#292323] dark:text-[#F6F0E7] transition-colors overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12 sm:space-y-16">
        
        {/* ========================================================================= */}
        {/* SECTION 03: COMPANY INTRODUCTION (EDITORIAL SPLIT COMPOSITION) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end pb-8 border-b border-[#E8DFD3] dark:border-[#3F3238]">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-[#401D2C] dark:text-[#E2CCA1] block">
              Core Disciplines
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#292323] dark:text-[#F6F0E7] leading-[1.08]">
              Three Specialized Pillars. <br />
              <span className="italic font-display text-[#401D2C] dark:text-[#E2CCA1]">One In-House Standard.</span>
            </h2>
          </div>
          
          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base text-[#665C5C] dark:text-[#D4CCC2] font-light leading-relaxed font-sans">
              Most event companies act as third-party brokers. We maintain our own central commercial kitchens, technical stage crews, and on-ground managers right here in Kolkata.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PILLAR 01: WEDDING PLANNING (ASYMMETRIC PORTRAIT COMPOSITION) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Visual Column: Vertical Portrait Framing */}
          <div className="lg:col-span-6 relative group">
            <div className="relative rounded-xl overflow-hidden bg-white dark:bg-[#231B1F] shadow-lg aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] max-h-[580px]">
              <img
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80"
                alt="Royal Enterprise Bespoke Wedding Planning and Heritage Rajbari Biye Bari in Kolkata"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.96]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white font-sans">
                <span className="text-xs uppercase tracking-[0.18em] font-medium text-[#E2CCA1]">
                  Heritage Rajbaris & Bespoke Mandaps
                </span>
                <span className="text-[11px] bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  Full End-to-End Care
                </span>
              </div>
            </div>
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-baseline justify-between border-b border-[#E8DFD3] dark:border-[#3F3238] pb-3">
              <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#401D2C] dark:text-[#E2CCA1]">
                Pillar 01 • Wedding Planner
              </span>
              <span className="font-display text-4xl sm:text-5xl font-light text-[#C49A53]/30 select-none">
                01
              </span>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#292323] dark:text-[#F6F0E7] font-normal tracking-tight leading-tight">
              Bespoke Kolkata Weddings & Destination Celebrations.
            </h3>

            <p className="text-sm sm:text-base text-[#665C5C] dark:text-[#D4CCC2] font-light leading-relaxed font-sans">
              We manage heritage rajbari venues, sacred Vedic floral mandaps, bridal aesthetics, jewellery curation, and handloom sarees. A dedicated floor manager stays beside you throughout the wedding rituals so your family can celebrate without anxiety.
            </p>

            {/* Offerings list with editorial typographic styling */}
            <div className="space-y-3 pt-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#292323] dark:text-[#F6F0E7] block font-sans">
                Bespoke Wedding Offerings:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#292323] dark:text-[#D4CCC2] font-sans">
                <div className="flex items-center space-x-2.5 py-1.5 px-3 rounded-lg bg-white/70 dark:bg-[#231B1F] border border-[#E8DFD3] dark:border-[#3F3238]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D65B43] shrink-0" />
                  <span>Heritage Venue Selection</span>
                </div>
                <div className="flex items-center space-x-2.5 py-1.5 px-3 rounded-lg bg-white/70 dark:bg-[#231B1F] border border-[#E8DFD3] dark:border-[#3F3238]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D65B43] shrink-0" />
                  <span>Bridal & Family Makeup</span>
                </div>
                <div className="flex items-center space-x-2.5 py-1.5 px-3 rounded-lg bg-white/70 dark:bg-[#231B1F] border border-[#E8DFD3] dark:border-[#3F3238]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D65B43] shrink-0" />
                  <span>Heritage Jewellery Curation</span>
                </div>
                <div className="flex items-center space-x-2.5 py-1.5 px-3 rounded-lg bg-white/70 dark:bg-[#231B1F] border border-[#E8DFD3] dark:border-[#3F3238]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D65B43] shrink-0" />
                  <span>Handloom Benarasi Sarees</span>
                </div>
                <div className="flex items-center space-x-2.5 py-1.5 px-3 rounded-lg bg-white/70 dark:bg-[#231B1F] border border-[#E8DFD3] dark:border-[#3F3238] sm:col-span-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D65B43] shrink-0" />
                  <span>Complete Wedding Packages (End-to-End Responsibility)</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <Link
                to="/wedding-planner"
                className="px-6 py-3 text-xs uppercase tracking-wider font-semibold rounded-lg bg-[#401D2C] hover:bg-[#2A101C] text-[#F6F0E7] shadow-sm inline-flex items-center space-x-2 transition-colors"
              >
                <span>Explore Wedding Planning</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E2CCA1]" />
              </Link>
              <button
                type="button"
                onClick={onOpenQuote}
                className="px-5 py-3 text-xs uppercase tracking-wider font-semibold rounded-lg border border-[#C8BCAF] dark:border-[#5A4E45] text-[#292323] dark:text-[#F6F0E7] hover:bg-white dark:hover:bg-[#231B1F] transition-colors"
              >
                Plan Your Wedding
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PILLAR 02: IN-HOUSE CATERING (WARM CELEBRATORY FULL SPREAD COMPOSITION) */}
        {/* ========================================================================= */}
        <div className="bg-[#FAF6F0] dark:bg-[#231B1F] rounded-2xl p-6 sm:p-10 lg:p-14 border border-[#E8DFD3] dark:border-[#3F3238]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Editorial Content (Left Column) */}
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <div className="flex items-baseline justify-between border-b border-[#E8DFD3] dark:border-[#3F3238] pb-3">
                <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#D65B43] dark:text-[#E2CCA1]">
                  Pillar 02 • In-House Catering
                </span>
                <span className="font-display text-4xl sm:text-5xl font-light text-[#C49A53]/30 select-none">
                  02
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#292323] dark:text-[#F6F0E7] font-normal tracking-tight leading-tight">
                Authentic Live Feasts Cooked In-House. Never Outsourced.
              </h3>

              <p className="text-sm sm:text-base text-[#665C5C] dark:text-[#D4CCC2] font-light leading-relaxed font-sans">
                Food is the beating heart of an Indian celebration. Our veteran Kolkata bawarchis, halwais, and captains prepare every single course fresh on site—from traditional mustard-oil Bhetki Paturi to slow-simmered Kosha Mangsho and royal Awadhi dum biryani.
              </p>

              {/* Specialties */}
              <div className="space-y-3 pt-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#292323] dark:text-[#F6F0E7] block font-sans">
                  Catering Specialties:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#292323] dark:text-[#D4CCC2] font-sans">
                  <div className="flex items-center space-x-2.5 py-1.5 px-3 rounded-lg bg-white/80 dark:bg-[#191316] border border-[#E8DFD3] dark:border-[#3F3238]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#526C55] shrink-0" />
                    <span>Grand Wedding Catering & Biye Bari</span>
                  </div>
                  <div className="flex items-center space-x-2.5 py-1.5 px-3 rounded-lg bg-white/80 dark:bg-[#191316] border border-[#E8DFD3] dark:border-[#3F3238]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#526C55] shrink-0" />
                    <span>Birthday Party & Milestone Catering</span>
                  </div>
                  <div className="flex items-center space-x-2.5 py-1.5 px-3 rounded-lg bg-white/80 dark:bg-[#191316] border border-[#E8DFD3] dark:border-[#3F3238]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#526C55] shrink-0" />
                    <span>Dedicated Pure Veg & Jain Kitchens</span>
                  </div>
                  <div className="flex items-center space-x-2.5 py-1.5 px-3 rounded-lg bg-white/80 dark:bg-[#191316] border border-[#E8DFD3] dark:border-[#3F3238]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#526C55] shrink-0" />
                    <span>Live Charcoal Kebabs & Chaat Counters</span>
                  </div>
                  <div className="flex items-center space-x-2.5 py-1.5 px-3 rounded-lg bg-white/80 dark:bg-[#191316] border border-[#E8DFD3] dark:border-[#3F3238] sm:col-span-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#526C55] shrink-0" />
                    <span>Slow-cooked Mutton Kosha & Handi Dum Biryani</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-3 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/catering"
                  className="px-6 py-3 text-xs uppercase tracking-wider font-semibold rounded-lg bg-[#D65B43] hover:bg-[#B84630] text-white shadow-sm inline-flex items-center space-x-2 transition-colors"
                >
                  <span>View Catering Menus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="px-5 py-3 text-xs uppercase tracking-wider font-semibold rounded-lg border border-[#C8BCAF] dark:border-[#5A4E45] text-[#292323] dark:text-[#F6F0E7] hover:bg-white dark:hover:bg-[#191316] transition-colors"
                >
                  Book a Food Tasting
                </button>
              </div>
            </div>

            {/* Visual Column (Right Column) */}
            <div className="lg:col-span-6 relative group order-1 lg:order-2">
              <div className="relative rounded-xl overflow-hidden bg-white dark:bg-[#191316] shadow-lg aspect-[16/11]">
                <img
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80"
                  alt="Royal Enterprise In-House Banquet Catering and Gourmet Service in Kolkata"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.96]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white font-sans">
                  <span className="text-xs uppercase tracking-[0.18em] font-medium text-[#E2CCA1]">
                    Central Commercial Kitchens
                  </span>
                  <span className="text-[11px] bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    Strictly 100% In-House Food
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* PILLAR 03: EVENT MANAGEMENT (ARCHITECTURAL PANORAMIC COMPOSITION) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-6 relative group">
            <div className="relative rounded-xl overflow-hidden bg-white dark:bg-[#231B1F] shadow-lg aspect-[16/11]">
              <img
                src="/images/gala-stage-lighting.jpg"
                alt="Royal Enterprise Corporate Event Management and 3D Stage Design in Kolkata"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.96]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white font-sans">
                <span className="text-xs uppercase tracking-[0.18em] font-medium text-[#E2CCA1]">
                  Stagecraft & Corporate Production
                </span>
                <span className="text-[11px] bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  100 – 3,000 Attendees
                </span>
              </div>
            </div>
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-baseline justify-between border-b border-[#E8DFD3] dark:border-[#3F3238] pb-3">
              <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#401D2C] dark:text-[#E2CCA1]">
                Pillar 03 • Event Management
              </span>
              <span className="font-display text-4xl sm:text-5xl font-light text-[#C49A53]/30 select-none">
                03
              </span>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#292323] dark:text-[#F6F0E7] font-normal tracking-tight leading-tight">
              Corporate Summits, Media Launches & Stage Production.
            </h3>

            <p className="text-sm sm:text-base text-[#665C5C] dark:text-[#D4CCC2] font-light leading-relaxed font-sans">
              We engineer concert-grade acoustic sound, build custom 3D LED stages, and run seamless delegate logistics across Kolkata’s premier convention centers and hotel ballrooms. Direct technical crew under one transparent invoice.
            </p>

            {/* Capabilities */}
            <div className="space-y-3 pt-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#292323] dark:text-[#F6F0E7] block font-sans">
                Comprehensive Capabilities:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#292323] dark:text-[#D4CCC2] font-sans">
                <div className="flex items-center space-x-2.5 py-1.5 px-3 rounded-lg bg-white/70 dark:bg-[#231B1F] border border-[#E8DFD3] dark:border-[#3F3238]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C49A53] shrink-0" />
                  <span>Corporate Events & Galas</span>
                </div>
                <div className="flex items-center space-x-2.5 py-1.5 px-3 rounded-lg bg-white/70 dark:bg-[#231B1F] border border-[#E8DFD3] dark:border-[#3F3238]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C49A53] shrink-0" />
                  <span>Media Events & Press Meets</span>
                </div>
                <div className="flex items-center space-x-2.5 py-1.5 px-3 rounded-lg bg-white/70 dark:bg-[#231B1F] border border-[#E8DFD3] dark:border-[#3F3238]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C49A53] shrink-0" />
                  <span>Any Type of Program / Festivals</span>
                </div>
                <div className="flex items-center space-x-2.5 py-1.5 px-3 rounded-lg bg-white/70 dark:bg-[#231B1F] border border-[#E8DFD3] dark:border-[#3F3238]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C49A53] shrink-0" />
                  <span>Custom Set & Truss Design</span>
                </div>
                <div className="flex items-center space-x-2.5 py-1.5 px-3 rounded-lg bg-white/70 dark:bg-[#231B1F] border border-[#E8DFD3] dark:border-[#3F3238] sm:col-span-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C49A53] shrink-0" />
                  <span>3D Stage Design, LED Walls & Live Sound</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <Link
                to="/events"
                className="px-6 py-3 text-xs uppercase tracking-wider font-semibold rounded-lg bg-[#401D2C] hover:bg-[#2A101C] text-[#F6F0E7] shadow-sm inline-flex items-center space-x-2 transition-colors"
              >
                <span>Explore Event Management</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E2CCA1]" />
              </Link>
              <button
                type="button"
                onClick={onOpenQuote}
                className="px-5 py-3 text-xs uppercase tracking-wider font-semibold rounded-lg border border-[#C8BCAF] dark:border-[#5A4E45] text-[#292323] dark:text-[#F6F0E7] hover:bg-white dark:hover:bg-[#231B1F] transition-colors"
              >
                Request Stage Proposal
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default DivisionOverview;