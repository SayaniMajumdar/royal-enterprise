import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles, Utensils, CalendarDays, HeartHandshake } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';

const DivisionOverview = ({ onOpenQuote }) => {
  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Distinguished Portfolio"
          title="Three Pillars of Royal Enterprise"
          subtitle="Discover our dedicated divisions crafted to orchestrate every milestone with unrivaled sophistication and mastery."
        />

        <div className="space-y-24">
          {/* ========================================================================= */}
          {/* SECTION 1: EVENT MANAGEMENT */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-navy-900/40 border border-slate-800 rounded-sm p-6 sm:p-10 lg:p-12 hover:border-gold-500/40 transition-all duration-300">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-sm border border-gold-500/30 group">
                <img
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80"
                  alt="Royal Enterprise Event Management"
                  className="w-full h-[360px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4 bg-navy-950/90 border border-gold-400/60 px-3.5 py-1.5 rounded-sm backdrop-blur-md">
                  <span className="text-xs uppercase tracking-widest text-gold-300 font-semibold flex items-center">
                    <CalendarDays className="w-3.5 h-3.5 mr-2 text-gold-400" />
                    Division I
                  </span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center space-x-2 text-gold-400 text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Premier Production & Coordination</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100">
                Event Management
              </h3>
              <p className="font-serif italic text-gold-300 text-lg">
                "We Make Every Event Memorable."
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                From high-stakes international business conferences and high-profile media press events to intimate milestone gatherings and state-of-the-art stage engineering, we deliver flawless turnkey production.
              </p>

              {/* Four Sub-offerings */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-3 bg-navy-950/70 border border-slate-800 rounded-sm">
                  <h5 className="text-xs font-bold uppercase text-gold-300 tracking-wider">A. Corporate Events</h5>
                  <p className="text-[11px] text-slate-400 mt-1">Conferences, product launches & award galas.</p>
                </div>
                <div className="p-3 bg-navy-950/70 border border-slate-800 rounded-sm">
                  <h5 className="text-xs font-bold uppercase text-gold-300 tracking-wider">B. Media Events</h5>
                  <p className="text-[11px] text-slate-400 mt-1">Press meets, brand activations & media shows.</p>
                </div>
                <div className="p-3 bg-navy-950/70 border border-slate-800 rounded-sm">
                  <h5 className="text-xs font-bold uppercase text-gold-300 tracking-wider">C. Other Events</h5>
                  <p className="text-[11px] text-slate-400 mt-1">Birthdays, cultural programs & social galas.</p>
                </div>
                <div className="p-3 bg-navy-950/70 border border-slate-800 rounded-sm">
                  <h5 className="text-xs font-bold uppercase text-gold-300 tracking-wider">D. Stage & Set Design</h5>
                  <p className="text-[11px] text-slate-400 mt-1">3D custom sets, intelligent sound & lights.</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/events">
                  <Button variant="primary" size="md" icon={ArrowRight} iconPosition="right">
                    Learn More
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="md"
                  onClick={onOpenQuote}
                >
                  Enquiry Now
                </Button>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* SECTION 2: CATERING SERVICES */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-navy-900/40 border border-slate-800 rounded-sm p-6 sm:p-10 lg:p-12 hover:border-gold-500/40 transition-all duration-300">
            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-gold-400 text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Artisanal Imperial Banquets</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100">
                Catering Services
              </h3>
              <p className="font-serif italic text-gold-300 text-lg">
                "Exceptional Food, Unforgettable Experiences."
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Elevating culinary hospitality with traditional master recipes and modern gastronomy. We cater for wedding ceremonies, corporate dinners, birthday parties, anniversary galas, and private receptions with customized vegetarian and non-vegetarian packages.
              </p>

              {/* Key Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300 pt-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Vegetarian & Non-Vegetarian Menus</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Starters, Mains, Desserts & Drinks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Customizable Packages for Any Guest Count</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Royal Presentation & Butler Service</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/catering">
                  <Button variant="primary" size="md" icon={ArrowRight} iconPosition="right">
                    Learn More
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="md"
                  onClick={onOpenQuote}
                >
                  Enquiry Now
                </Button>
              </div>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative overflow-hidden rounded-sm border border-gold-500/30 group">
                <img
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80"
                  alt="Royal Enterprise Catering Presentation"
                  className="w-full h-[360px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4 bg-navy-950/90 border border-gold-400/60 px-3.5 py-1.5 rounded-sm backdrop-blur-md">
                  <span className="text-xs uppercase tracking-widest text-gold-300 font-semibold flex items-center">
                    <Utensils className="w-3.5 h-3.5 mr-2 text-gold-400" />
                    Division II
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* SECTION 3: WEDDING PLANNER */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-navy-900/40 border border-slate-800 rounded-sm p-6 sm:p-10 lg:p-12 hover:border-gold-500/40 transition-all duration-300">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-sm border border-gold-500/30 group">
                <img
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80"
                  alt="Royal Enterprise Luxury Wedding Mandap"
                  className="w-full h-[360px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4 bg-navy-950/90 border border-gold-400/60 px-3.5 py-1.5 rounded-sm backdrop-blur-md">
                  <span className="text-xs uppercase tracking-widest text-gold-300 font-semibold flex items-center">
                    <HeartHandshake className="w-3.5 h-3.5 mr-2 text-gold-400" />
                    Division III
                  </span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center space-x-2 text-gold-400 text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Bespoke Fairytales & Royalty</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100">
                Wedding Planner
              </h3>
              <p className="font-serif italic text-gold-300 text-lg">
                "Your Dream Wedding, Our Complete Responsibility."
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                A 360-degree turnkey wedding management service. From heritage palace venues, floral mandaps, and designer bridal couture to groom styling, cinematic film production, and royal wedding feasts—we orchestrate every sacred ritual to perfection.
              </p>

              {/* Highlight callout box for Complete Wedding Package */}
              <div className="p-4 bg-gold-500/10 border border-gold-400/40 rounded-sm">
                <h5 className="text-xs uppercase tracking-wider font-bold text-gold-300 mb-1">
                  Get Your Complete Wedding Package
                </h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Want everything seamlessly handled under one roof? Enjoy end-to-end wedding planning including venue, mandap, bride & groom styling, photography, and banquet.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/wedding-planner">
                  <Button variant="primary" size="md" icon={ArrowRight} iconPosition="right">
                    Get a Wedding Plan
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="md"
                  onClick={onOpenQuote}
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
