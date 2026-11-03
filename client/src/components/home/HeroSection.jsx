import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight, CheckCircle2, ShieldCheck, Utensils } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';

const HeroSection = ({ onOpenQuote }) => {
  return (
    <section className="relative bg-[#FAF7F2] pt-32 sm:pt-40 pb-16 sm:pb-24 border-b border-[#E5DED3] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Bold, Asymmetric Headline & Direct Local Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Small stamp label */}
            <div className="inline-flex items-center space-x-2">
              <span className="stamp-tag">
                Since {COMPANY_INFO.foundedYear} • Kolkata
              </span>
              <span className="text-xs text-[#7D756A] font-medium hidden sm:inline">
                In-house cooking & turnkey event execution
              </span>
            </div>

            {/* Main Headline: Confident, specific, human */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1F1D1A] font-bold tracking-tight leading-[1.12]">
              Weddings and events in Kolkata, cooked and run by one team.
            </h1>

            {/* Sub-line: Direct and concrete */}
            <p className="text-lg sm:text-xl text-[#3B3630] font-normal leading-relaxed max-w-2xl">
              From a 100-guest Biye Bari to a 1,000-guest reception, we plan it, decorate it, and feed everyone.
            </p>

            {/* Action Buttons: Honest labels */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onOpenQuote}
                className="btn-maroon px-7 py-3 text-sm font-semibold tracking-wide shadow-sm"
              >
                Get a quote
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
            <div className="pt-6 border-t border-[#E5DED3] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#524C44]">
              <div className="flex items-start space-x-2">
                <Utensils className="w-4 h-4 text-[#6E1423] shrink-0 mt-0.5" />
                <span>We cook our own food. Never outsourced.</span>
              </div>
              <div className="flex items-start space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#6E1423] shrink-0 mt-0.5" />
                <span>Dedicated separate kitchen for pure-veg banquets.</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#6E1423] shrink-0 mt-0.5" />
                <span>One floor manager with you from first guest to last plate.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Large Offset Authentic Photograph */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border border-[#E5DED3] bg-white shadow-paper-lg">
              <img
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80"
                alt="Traditional Kolkata Indian wedding ceremony and mandap"
                className="w-full h-[420px] sm:h-[480px] object-cover"
              />
              
              {/* Offset Caption with Venue and Month (as requested) */}
              <div className="p-4 bg-white/95 backdrop-blur-sm border-t border-[#E5DED3] text-left">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#1F1D1A]">
                    Sangeet & Wedding at [The Rajbari Bawali]
                  </span>
                  <span className="text-[#7D756A] font-mono">Jan 2026</span>
                </div>
                <p className="text-[11px] text-[#524C44] mt-1">
                  Handled: Turnkey Vedic mandap, marigold architecture, shehnai & 450-guest traditional banquet.
                </p>
              </div>
            </div>

            {/* Small floating counter sticker breaking the corner */}
            <div className="absolute -bottom-4 -left-4 bg-[#6E1423] text-white p-3 rounded shadow-md hidden sm:block border border-[#540D1A]">
              <span className="block font-serif text-2xl font-bold leading-tight">750+</span>
              <span className="text-[10px] text-amber-200 uppercase tracking-wider block">Kolkata Events Done</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
