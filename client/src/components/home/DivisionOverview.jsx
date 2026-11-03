import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles, Utensils, CalendarDays, HeartHandshake } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';

const DivisionOverview = ({ onOpenQuote }) => {
  return (
    <section className="py-24 sm:py-28 bg-[#FAF7F2] text-[#1B1713] relative overflow-hidden border-b border-[#E6DCBF]">
      {/* Background Subtle Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(197,160,89,0.06)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          theme="light"
          badge="Distinguished Portfolio"
          title="Three Pillars of Royal Enterprise"
          subtitle="Discover our dedicated divisions crafted to orchestrate every milestone with unrivaled sophistication and mastery."
        />

        <div className="space-y-20 lg:space-y-24">
          {/* ========================================================================= */}
          {/* SECTION 1: EVENT MANAGEMENT */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-white border border-[#E6DCBF] rounded-[3px] p-6 sm:p-10 lg:p-12 hover:border-gold-500 transition-all duration-300 shadow-[0_12px_40px_rgba(40,30,10,0.06)]">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-[2px] border border-[#C5A059]/40 group shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80"
                  alt="Royal Enterprise Event Management"
                  className="w-full h-[360px] sm:h-[440px] object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4 bg-white/95 border border-gold-500/50 px-3 py-1 rounded-[2px] shadow-sm">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold-800 font-bold flex items-center">
                    <CalendarDays className="w-3 h-3 mr-1.5 text-gold-600" />
                    Division I
                  </span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center space-x-2 text-gold-700 text-[11px] font-semibold uppercase tracking-[0.2em]">
                <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                <span>Premier Production & Coordination</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B1713] tracking-tight">
                Event Management
              </h3>
              <p className="font-editorial italic text-gold-800 text-lg sm:text-xl font-medium">
                "We Make Every Event Memorable."
              </p>
              <p className="text-[#4F4A42] text-sm sm:text-base leading-relaxed font-light">
                From high-stakes international business conferences and high-profile media press events to intimate milestone gatherings and state-of-the-art stage engineering, we deliver flawless turnkey production.
              </p>

              {/* Four Sub-offerings */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-[#F8F5EE] border border-[#EAE2D0] rounded-[2px]">
                  <h5 className="text-[11px] font-bold uppercase text-gold-800 tracking-wider">A. Corporate Events</h5>
                  <p className="text-[11px] text-[#5C564C] mt-1">Conferences, product launches & award galas.</p>
                </div>
                <div className="p-3 bg-[#F8F5EE] border border-[#EAE2D0] rounded-[2px]">
                  <h5 className="text-[11px] font-bold uppercase text-gold-800 tracking-wider">B. Media Events</h5>
                  <p className="text-[11px] text-[#5C564C] mt-1">Press meets, brand activations & media shows.</p>
                </div>
                <div className="p-3 bg-[#F8F5EE] border border-[#EAE2D0] rounded-[2px]">
                  <h5 className="text-[11px] font-bold uppercase text-gold-800 tracking-wider">C. Other Events</h5>
                  <p className="text-[11px] text-[#5C564C] mt-1">Birthdays, cultural programs & social galas.</p>
                </div>
                <div className="p-3 bg-[#F8F5EE] border border-[#EAE2D0] rounded-[2px]">
                  <h5 className="text-[11px] font-bold uppercase text-gold-800 tracking-wider">D. Stage & Set Design</h5>
                  <p className="text-[11px] text-[#5C564C] mt-1">3D custom sets, intelligent sound & lights.</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-3">
                <Link to="/events">
                  <Button variant="primary" size="md" icon={ArrowRight} iconPosition="right">
                    Learn More
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="md"
                  onClick={onOpenQuote}
                  className="!border-gold-600/70 !text-gold-800 hover:!bg-gold-500/10"
                >
                  Enquiry Now
                </Button>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* SECTION 2: CATERING SERVICES */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-white border border-[#E6DCBF] rounded-[3px] p-6 sm:p-10 lg:p-12 hover:border-gold-500 transition-all duration-300 shadow-[0_12px_40px_rgba(40,30,10,0.06)]">
            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-gold-700 text-[11px] font-semibold uppercase tracking-[0.2em]">
                <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                <span>Artisanal Imperial Banquets</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B1713] tracking-tight">
                Catering Services
              </h3>
              <p className="font-editorial italic text-gold-800 text-lg sm:text-xl font-medium">
                "Exceptional Food, Unforgettable Experiences."
              </p>
              <p className="text-[#4F4A42] text-sm sm:text-base leading-relaxed font-light">
                Elevating culinary hospitality with traditional master recipes and modern gastronomy. We cater for wedding ceremonies, corporate dinners, birthday parties, anniversary galas, and private receptions with customized vegetarian and non-vegetarian packages.
              </p>

              {/* Key Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#3D3830] pt-2">
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Vegetarian & Non-Vegetarian Menus</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Starters, Mains, Desserts & Drinks</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Customizable Packages for Any Guest Count</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Royal Presentation & Butler Service</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-3">
                <Link to="/catering">
                  <Button variant="primary" size="md" icon={ArrowRight} iconPosition="right">
                    Learn More
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="md"
                  onClick={onOpenQuote}
                  className="!border-gold-600/70 !text-gold-800 hover:!bg-gold-500/10"
                >
                  Enquiry Now
                </Button>
              </div>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative overflow-hidden rounded-[2px] border border-[#C5A059]/40 group shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80"
                  alt="Royal Enterprise Catering Presentation"
                  className="w-full h-[360px] sm:h-[440px] object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4 bg-white/95 border border-gold-500/50 px-3 py-1 rounded-[2px] shadow-sm">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold-800 font-bold flex items-center">
                    <Utensils className="w-3 h-3 mr-1.5 text-gold-600" />
                    Division II
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* SECTION 3: WEDDING PLANNER */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-white border border-[#E6DCBF] rounded-[3px] p-6 sm:p-10 lg:p-12 hover:border-gold-500 transition-all duration-300 shadow-[0_12px_40px_rgba(40,30,10,0.06)]">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-[2px] border border-[#C5A059]/40 group shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80"
                  alt="Royal Enterprise Luxury Wedding Mandap"
                  className="w-full h-[360px] sm:h-[440px] object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4 bg-white/95 border border-gold-500/50 px-3 py-1 rounded-[2px] shadow-sm">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold-800 font-bold flex items-center">
                    <HeartHandshake className="w-3 h-3 mr-1.5 text-gold-600" />
                    Division III
                  </span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center space-x-2 text-gold-700 text-[11px] font-semibold uppercase tracking-[0.2em]">
                <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                <span>Bespoke Fairytales & Royalty</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B1713] tracking-tight">
                Wedding Planner
              </h3>
              <p className="font-editorial italic text-gold-800 text-lg sm:text-xl font-medium">
                "Your Dream Wedding, Our Complete Responsibility."
              </p>
              <p className="text-[#4F4A42] text-sm sm:text-base leading-relaxed font-light">
                A 360-degree turnkey wedding management service. From heritage palace venues, floral mandaps, and designer bridal couture to groom styling, cinematic film production, and royal wedding feasts—we orchestrate every sacred ritual to perfection.
              </p>

              {/* Highlight callout box for Complete Wedding Package */}
              <div className="p-4 bg-[#F8F5EE] border border-gold-500/40 rounded-[2px] relative overflow-hidden">
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-gold-600" />
                <h5 className="text-[11px] uppercase tracking-wider font-bold text-gold-800 mb-1 pl-1">
                  Get Your Complete Wedding Package
                </h5>
                <p className="text-xs text-[#4F4A42] leading-relaxed pl-1 font-light">
                  Want everything seamlessly handled under one roof? Enjoy end-to-end wedding planning including venue, mandap, bride & groom styling, photography, and banquet.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-3">
                <Link to="/wedding-planner">
                  <Button variant="primary" size="md" icon={ArrowRight} iconPosition="right">
                    Get a Wedding Plan
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="md"
                  onClick={onOpenQuote}
                  className="!border-gold-600/70 !text-gold-800 hover:!bg-gold-500/10"
                >
                  Enquiry Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DivisionOverview;
