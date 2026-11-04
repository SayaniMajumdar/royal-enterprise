import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight, CheckCircle2, ShieldCheck, Utensils } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';

const HeroSection = ({ onOpenQuote }) => {
  return (
    <section className="relative bg-[#FAF8F5] dark:bg-[#141210] pt-32 sm:pt-40 pb-16 sm:pb-24 border-b border-[#E8E0D5] dark:border-[#38312B] overflow-hidden transition-colors">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Bold, Asymmetric Headline & Direct Local Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Small stamp label */}
            <div className="inline-flex items-center space-x-2">
              <span className="stamp-tag">
                Kolkata & Eastern India
              </span>
              <span className="text-xs text-[#827771] dark:text-[#9E9488] font-medium hidden sm:inline">
                Our own kitchen, our own team, your peace of mind
              </span>
            </div>

            {/* Main Headline: Confident, specific, human */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2B2625] dark:text-[#FAF8F5] font-bold tracking-tight leading-[1.12]">
              Weddings and events in Kolkata, cooked and run by one team.
            </h1>

            {/* Sub-line: Direct and concrete */}
            <p className="text-lg sm:text-xl text-[#5A524E] dark:text-[#D4CCC2] font-normal leading-relaxed max-w-2xl">
              From a 100-guest Biye Bari to a 1,000-guest reception, we plan it, decorate it, and feed everyone.
            </p>

            {/* Action Buttons: Honest labels */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onOpenQuote}
                className="btn-maroon px-7 py-3 text-sm font-semibold tracking-wide shadow-sm"
              >
                Plan Your Event
              </button>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Royal%20Enterprise,%20I%20would%20like%20to%20discuss%20an%20event.`}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp px-6 py-3 text-sm font-semibold inline-flex items-center space-x-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp us</span>
              </a>
              <Link
                to="/catering"
                className="btn-outline px-6 py-3 text-sm font-semibold inline-flex items-center space-x-1.5"
              >
                <span>See our menus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Real concrete proofs (not generic buzzwords) */}
            <div className="pt-6 border-t border-[#E8E0D5] dark:border-[#38312B] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#5A524E] dark:text-[#D4CCC2]">
              <div className="flex items-start space-x-2">
                <Utensils className="w-4 h-4 text-[#6B1D2F] dark:text-[#E0CFA6] shrink-0 mt-0.5" />
                <span>We cook our own food. Never outsourced.</span>
              </div>
              <div className="flex items-start space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#6B1D2F] dark:text-[#E0CFA6] shrink-0 mt-0.5" />
                <span>Dedicated separate kitchen for pure-veg banquets.</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#6B1D2F] dark:text-[#E0CFA6] shrink-0 mt-0.5" />
                <span>One floor manager with you from first guest to last plate.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Large Authentic Photograph */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#E8E0D5] dark:border-[#38312B] bg-white dark:bg-[#1C1917] shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80"
                alt="Traditional Kolkata Indian wedding ceremony and mandap"
                className="w-full h-[420px] sm:h-[480px] object-cover"
              />
            </div>

            {/* Small floating assurance sticker breaking the corner */}
            <div className="absolute -bottom-4 -left-4 bg-[#6B1D2F] dark:bg-[#9B2C42] text-white p-3.5 rounded-xl shadow-md hidden sm:block border border-[#541423] dark:border-[#C4435F]">
              <span className="block font-serif text-xl font-bold leading-tight">Complete</span>
              <span className="text-[10px] text-[#E0CFA6] uppercase tracking-wider block font-semibold">In-House Care</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
