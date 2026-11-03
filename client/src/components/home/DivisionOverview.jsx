import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, HeartHandshake, Building2, ArrowRight, Check } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';

const DivisionOverview = ({ onOpenQuote }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF7F2] dark:bg-[#141210] border-b border-[#E5DED3] dark:border-[#38312B] transition-colors">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Heading: Direct, Human, not Buzzwords */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs uppercase font-bold tracking-wider text-[#6E1423] dark:text-[#F59E0B] block mb-2">
            What we do
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1F1D1A] dark:text-[#FAF7F2] font-bold tracking-tight">
            Three services under one roof. No middlemen.
          </h2>
          <p className="text-sm sm:text-base text-[#524C44] dark:text-[#A89F91] mt-2 leading-relaxed">
            Most event companies take your booking and hire outside caterers or decorators. We run our own commercial kitchens and stage production crew directly in Kolkata.
          </p>
        </div>

        {/* Asymmetrical Layout: Catering as the Anchor Feature beside Two Stacked Services */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* ========================================================================= */}
          {/* 1. ANCHOR FEATURE (7 Columns): IN-HOUSE CATERING */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 bg-white dark:bg-[#1C1917] rounded-lg border border-[#E5DED3] dark:border-[#38312B] p-6 sm:p-9 flex flex-col justify-between shadow-paper-sm dark:shadow-dark-card transition-colors">
            <div>
              {/* Photo Banner with Real Caption */}
              <div className="relative rounded overflow-hidden border border-[#E5DED3] dark:border-[#38312B] mb-6">
                <img
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80"
                  alt="In-house catering and traditional Kolkata banquet feast"
                  className="w-full h-64 sm:h-72 object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#6E1423] text-white text-[11px] font-semibold px-2.5 py-1 rounded shadow-sm">
                  Core In-House Strength
                </div>
              </div>

              {/* Tag & Heading */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-xs font-semibold text-[#6E1423] dark:text-[#F59E0B]">
                  <Utensils className="w-4 h-4" />
                  <span>In-House Catering & Banquets</span>
                </div>

                {/* The Opinionated Line */}
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1D1A] dark:text-[#FAF7F2] leading-snug">
                  "We cook the biryani ourselves. Nothing is outsourced to a stranger’s kitchen."
                </h3>

                <p className="text-sm text-[#524C44] dark:text-[#A89F91] leading-relaxed">
                  While most event planners act as brokers, our veteran Kolkata bawarchis, halwais, and captains handle every course. From authentic Bengali Biye Bari feasts with pure Bhetki and slow-simmered Kosha Mangsho to Awadhi dum biryani sealed with dough and dedicated pure-veg Marwari kitchens.
                </p>

                {/* Specific Dish Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 text-xs text-[#3B3630] dark:text-[#D5CCC0]">
                  <div className="flex items-start space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#6E1423] dark:text-[#F59E0B] shrink-0 mt-0.5" />
                    <span>Pure Kolkata Bhetki fry with fresh kasundi</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#6E1423] dark:text-[#F59E0B] shrink-0 mt-0.5" />
                    <span>Slow-cooked mutton kosha & Basanti pulao</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#6E1423] dark:text-[#F59E0B] shrink-0 mt-0.5" />
                    <span>Dedicated pure-veg kitchen (Jodhpuri Dal Baati)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#6E1423] dark:text-[#F59E0B] shrink-0 mt-0.5" />
                    <span>Live hot kesariya jalebi & rabdi counters</span>
                  </div>
                </div>

                {/* Chef Attribution */}
                <div className="mt-4 pt-4 border-t border-[#E5DED3] dark:border-[#38312B] text-xs text-[#7D756A] dark:text-[#8C8477]">
                  <span className="font-semibold text-[#1F1D1A] dark:text-[#FAF7F2]">{COMPANY_INFO.headChef}</span>
                  <span className="block">{COMPANY_INFO.headChefTitle}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 mt-6 border-t border-[#E5DED3] dark:border-[#38312B] flex flex-wrap items-center gap-3">
              <Link
                to="/catering"
                className="btn-maroon px-5 py-2.5 text-xs font-semibold inline-flex items-center space-x-1.5"
              >
                <span>See our menus & prices</span>
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
            
            {/* Card A: Turnkey Wedding Planning */}
            <div className="bg-white dark:bg-[#1C1917] rounded-lg border border-[#E5DED3] dark:border-[#38312B] p-6 flex-1 flex flex-col justify-between shadow-paper-sm dark:shadow-dark-card transition-colors">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-[#6E1423] dark:text-[#F59E0B]">
                    <HeartHandshake className="w-4 h-4" />
                    <span>Wedding Planning</span>
                  </div>
                  <span className="text-[11px] text-[#7D756A] dark:text-[#8C8477] font-mono">[Package Price]</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F1D1A] dark:text-[#FAF7F2]">
                  Full-package Kolkata weddings
                </h3>

                <p className="text-xs sm:text-sm text-[#524C44] dark:text-[#A89F91] leading-relaxed">
                  We look after heritage rajbaris, Vedic marigold mandap decor, bridal styling, jewellery curation, Benarasi sarees, and photo/film coordination. One accountable team so your family can enjoy the ceremony.
                </p>

                <ul className="text-xs text-[#3B3630] dark:text-[#D5CCC0] space-y-1.5 pt-1">
                  <li className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6E1423] dark:bg-[#F59E0B]" />
                    <span>Rajbaris, banquets & destination venues</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6E1423] dark:bg-[#F59E0B]" />
                    <span>Single on-site floor manager for the entire day</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E5DED3] dark:border-[#38312B]">
                <Link
                  to="/wedding-planner"
                  className="text-xs font-semibold text-[#6E1423] dark:text-[#F59E0B] hover:underline inline-flex items-center space-x-1"
                >
                  <span>Explore wedding planning packages</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card B: Corporate & Stage Management */}
            <div className="bg-white dark:bg-[#1C1917] rounded-lg border border-[#E5DED3] dark:border-[#38312B] p-6 flex-1 flex flex-col justify-between shadow-paper-sm dark:shadow-dark-card transition-colors">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-[#6E1423] dark:text-[#F59E0B]">
                    <Building2 className="w-4 h-4" />
                    <span>Event Management</span>
                  </div>
                  <span className="text-[11px] text-[#7D756A] dark:text-[#8C8477] font-mono">Up to 500+ Attendees</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F1D1A] dark:text-[#FAF7F2]">
                  Corporate summits, stages & launches
                </h3>

                <p className="text-xs sm:text-sm text-[#524C44] dark:text-[#A89F91] leading-relaxed">
                  3D LED stage fabrication, concert-grade acoustic sound, lighting engineering, and delegate logistics for annual meets, dealer symposiums, and public programs across Kolkata hotels and centers.
                </p>

                <ul className="text-xs text-[#3B3630] dark:text-[#D5CCC0] space-y-1.5 pt-1">
                  <li className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6E1423] dark:bg-[#F59E0B]" />
                    <span>AV, sound & 3D stage fabrication crew</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6E1423] dark:bg-[#F59E0B]" />
                    <span>Single turnkey invoice with zero hidden add-ons</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E5DED3] dark:border-[#38312B]">
                <Link
                  to="/events"
                  className="text-xs font-semibold text-[#6E1423] dark:text-[#F59E0B] hover:underline inline-flex items-center space-x-1"
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
