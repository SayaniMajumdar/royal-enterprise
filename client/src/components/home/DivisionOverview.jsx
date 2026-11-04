import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, HeartHandshake, Building2, ArrowRight, Check } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';

const DivisionOverview = ({ onOpenQuote }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5] dark:bg-[#141210] border-b border-[#E8E0D5] dark:border-[#38312B] transition-colors">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Heading: Direct, Human, not Buzzwords */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs uppercase font-semibold tracking-wider text-[#6B1D2F] dark:text-[#E0CFA6] block mb-2">
            What we do
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2625] dark:text-[#FAF8F5] font-bold tracking-tight">
            Three services under one roof. No middlemen.
          </h2>
          <p className="text-sm sm:text-base text-[#5A524E] dark:text-[#D4CCC2] mt-2 leading-relaxed">
            Most event companies take your booking and hire outside caterers or decorators. We run our own commercial kitchens and stage production crew directly in Kolkata.
          </p>
        </div>

        {/* Asymmetrical Layout: Catering as the Anchor Feature beside Two Stacked Services */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* ========================================================================= */}
          {/* 1. ANCHOR FEATURE (7 Columns): IN-HOUSE CATERING */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 bg-white dark:bg-[#1C1917] rounded-2xl border border-[#E8E0D5] dark:border-[#38312B] p-6 sm:p-9 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
            <div>
              {/* Photo Banner with Real Caption */}
              <div className="relative rounded-xl overflow-hidden border border-[#E8E0D5] dark:border-[#38312B] mb-6">
                <img
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80"
                  alt="In-house catering and traditional Kolkata banquet feast"
                  className="w-full h-64 sm:h-72 object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#6B1D2F] text-white text-[11px] font-semibold px-3 py-1 rounded-md shadow-sm">
                  Core In-House Strength
                </div>
              </div>

              {/* Tag & Heading */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-xs font-semibold text-[#6B1D2F] dark:text-[#E0CFA6]">
                  <Utensils className="w-4 h-4" />
                  <span>In-House Catering & Banquets</span>
                </div>

                {/* The Opinionated Line */}
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2625] dark:text-[#FAF8F5] leading-snug">
                  "We cook the biryani ourselves. Nothing is outsourced to a stranger’s kitchen."
                </h3>

                <p className="text-sm text-[#5A524E] dark:text-[#D4CCC2] leading-relaxed">
                  While most event planners act as brokers, our veteran Kolkata bawarchis, halwais, and captains handle every course. From authentic Bengali Biye Bari feasts with pure Bhetki and slow-simmered Kosha Mangsho to Awadhi dum biryani sealed with dough and dedicated pure-veg Marwari kitchens.
                </p>

                {/* Specific Dish Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 text-xs text-[#2B2625] dark:text-[#D4CCC2]">
                  <div className="flex items-start space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#6B1D2F] dark:text-[#E0CFA6] shrink-0 mt-0.5" />
                    <span>Pure Kolkata Bhetki fry with fresh kasundi</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#6B1D2F] dark:text-[#E0CFA6] shrink-0 mt-0.5" />
                    <span>Slow-cooked mutton kosha & Basanti pulao</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#6B1D2F] dark:text-[#E0CFA6] shrink-0 mt-0.5" />
                    <span>Dedicated pure-veg kitchen (Jodhpuri Dal Baati)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#6B1D2F] dark:text-[#E0CFA6] shrink-0 mt-0.5" />
                    <span>Live hot kesariya jalebi & rabdi counters</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 mt-6 border-t border-[#E8E0D5] dark:border-[#38312B] flex flex-wrap items-center gap-3">
              <Link
                to="/catering"
                className="btn-maroon px-5 py-2.5 text-xs font-semibold inline-flex items-center space-x-1.5"
              >
                <span>Explore catering menus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                type="button"
                onClick={onOpenQuote}
                className="btn-outline px-5 py-2.5 text-xs font-semibold"
              >
                Book a food tasting
              </button>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 2. RIGHT STACK (5 Columns): WEDDINGS & EVENT MANAGEMENT */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            {/* Card A: Wedding Planning */}
            <div className="bg-white dark:bg-[#1C1917] rounded-2xl border border-[#E8E0D5] dark:border-[#38312B] p-6 sm:p-7 flex-1 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-[#6B1D2F] dark:text-[#E0CFA6]">
                    <HeartHandshake className="w-4 h-4" />
                    <span>Wedding Planning</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B2625] dark:text-[#FAF8F5]">
                  Full-package Kolkata weddings
                </h3>

                <p className="text-xs sm:text-sm text-[#5A524E] dark:text-[#D4CCC2] leading-relaxed">
                  We look after heritage rajbaris, Vedic marigold mandap decor, bridal styling, jewellery curation, Benarasi sarees, and photo/film coordination. One accountable team so your family can enjoy the ceremony.
                </p>

                <ul className="text-xs text-[#2B2625] dark:text-[#D4CCC2] space-y-1.5 pt-1">
                  <li className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6B1D2F] dark:bg-[#D4AF37]" />
                    <span>Rajbaris, banquets & destination venues</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6B1D2F] dark:bg-[#D4AF37]" />
                    <span>Single on-site floor manager for the entire day</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E8E0D5] dark:border-[#38312B]">
                <Link
                  to="/wedding-planner"
                  className="text-xs font-semibold text-[#6B1D2F] dark:text-[#E0CFA6] hover:underline inline-flex items-center space-x-1"
                >
                  <span>Explore wedding planning packages</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card B: Corporate & Stage Management */}
            <div className="bg-white dark:bg-[#1C1917] rounded-2xl border border-[#E8E0D5] dark:border-[#38312B] p-6 sm:p-7 flex-1 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-[#6B1D2F] dark:text-[#E0CFA6]">
                    <Building2 className="w-4 h-4" />
                    <span>Event Management</span>
                  </div>
                  <span className="text-[11px] text-[#827771] dark:text-[#9E9488] font-mono">Up to 500+ Attendees</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B2625] dark:text-[#FAF8F5]">
                  Corporate summits, stages & launches
                </h3>

                <p className="text-xs sm:text-sm text-[#5A524E] dark:text-[#D4CCC2] leading-relaxed">
                  3D LED stage fabrication, concert-grade acoustic sound, lighting engineering, and delegate logistics for annual meets, dealer symposiums, and public programs across Kolkata hotels and centers.
                </p>

                <ul className="text-xs text-[#2B2625] dark:text-[#D4CCC2] space-y-1.5 pt-1">
                  <li className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6B1D2F] dark:bg-[#D4AF37]" />
                    <span>AV, sound & 3D stage fabrication crew</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6B1D2F] dark:bg-[#D4AF37]" />
                    <span>Clear itemized estimate with zero surprise add-ons</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E8E0D5] dark:border-[#38312B]">
                <Link
                  to="/events"
                  className="text-xs font-semibold text-[#6B1D2F] dark:text-[#E0CFA6] hover:underline inline-flex items-center space-x-1"
                >
                  <span>Explore event management services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default DivisionOverview;
