import React from 'react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';

const CallToAction = ({ onOpenQuote }) => {
  return (
    <section className="py-24 sm:py-32 bg-[#F6E4E1] text-[#141414] relative overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6">
        <div className="bg-[#FFFDF9] border border-[#ECD6D2] rounded-[4px] p-8 sm:p-14 lg:p-16 shadow-theevexa grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading and Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-gold-dark text-[11px] font-semibold uppercase tracking-[0.24em]">
              <span className="w-5 h-px bg-gold-dark/60" />
              <span>Begin Your Journey</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#141414] tracking-tight leading-[1.12]">
              Let us craft your <span className="font-editorial italic font-normal text-maroon">dream celebration</span>
            </h2>

            <p className="text-sm sm:text-base text-[#554F47] font-light leading-relaxed max-w-lg">
              Whether you are planning a royal wedding across Kolkata's grandest lawns, an artisanal gourmet feast, or a high-impact corporate gala, our atelier directors are at your service.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenQuote}
                className="btn-gold px-8 py-3.5 text-xs tracking-[0.18em]"
              >
                Plan An Event
              </button>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full border border-[#D5CCC0] text-xs uppercase tracking-[0.16em] font-medium text-[#141414] hover:border-maroon hover:text-maroon transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold-dark" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Reassuring Atelier Guarantee & Image */}
          <div className="lg:col-span-5 relative">
            <div className="theevexa-img overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-slate-200 border border-[#E8E1D5] shadow-md">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80"
                alt="Royal Enterprise Consultation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 sm:left-4 bg-[#F6F3EE] border border-gold-base/50 p-4 rounded-[3px] shadow-sm max-w-xs">
              <p className="text-xs font-serif text-[#141414] italic">
                "Every celebration we orchestrate is guarded with absolute devotion to perfection."
              </p>
              <span className="block text-[10px] uppercase tracking-wider text-gold-dark font-medium mt-1">
                — Director of Hospitality
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
