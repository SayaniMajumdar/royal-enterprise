import React from 'react';
import { Link } from 'react-router-dom';
import { FOUNDER_NOTE } from '../../data/mockData';
import { ArrowRight } from 'lucide-react';

const FounderNote = () => {
  return (
    <section className="py-10 sm:py-16 bg-[#FAF6F0] dark:bg-[#191316] border-b border-[#E8DFD3] dark:border-[#3F3238] transition-colors">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left: Authentic Working Photo with Editorial Framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden bg-white dark:bg-[#231B1F] shadow-lg border border-[#E8DFD3] dark:border-[#3F3238]">
              <img
                src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=80"
                alt="Behind the scenes in the Royal Enterprise kitchen in Kolkata"
                className="w-full h-80 sm:h-[440px] object-cover"
              />
              <div className="p-5 bg-white/95 dark:bg-[#231B1F]/95 backdrop-blur-sm border-t border-[#E8DFD3] dark:border-[#3F3238]">
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#D65B43] dark:text-[#E2CCA1] block font-sans">
                  On-ground in Kolkata
                </span>
                <p className="text-xs text-[#665C5C] dark:text-[#D4CCC2] mt-1 font-light leading-relaxed font-sans">
                  Our own cooks at the stove and our own floor managers with your family until the last guest is warmly fed.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Personal First-Person Founder's Note */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-[#401D2C] dark:text-[#E2CCA1] block">
              A personal note from our team
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#292323] dark:text-[#F6F0E7] font-normal tracking-tight leading-[1.12]">
              {FOUNDER_NOTE.headline}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#665C5C] dark:text-[#D4CCC2] leading-relaxed font-light font-sans">
              <p>
                Weddings and celebrations in Kolkata are built on two things that never change: <strong className="font-semibold text-[#292323] dark:text-[#F6F0E7]">genuine family warmth and unforgettable food</strong>.
              </p>
              <p>
                Years ago, I saw so many families stressed on their daughter’s or son’s wedding day because the event planner was merely a broker—hiring outside sound guys who arrived late, and outside caterers who didn’t care whether the fish fry was hot or the mutton was tender.
              </p>
              <p>
                I started Royal Enterprise with one simple promise: <strong className="font-semibold text-[#292323] dark:text-[#F6F0E7]">when you trust us with your family’s biggest celebration, our own team is on the floor and our own cooks are in the kitchen</strong>. From your first cup of tea with us to the final plate served at your Boubhat, you have our personal word that your guests will be treated like royalty.
              </p>
            </div>

            <div className="pt-5 border-t border-[#E8DFD3] dark:border-[#3F3238] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-sans">
              <div>
                <span className="font-display text-xl text-[#292323] dark:text-[#F6F0E7] block">
                  The Royal Enterprise Family
                </span>
                <span className="text-xs text-[#8C8282] dark:text-[#9E9488]">
                  {FOUNDER_NOTE.signatureRole} • {FOUNDER_NOTE.location}
                </span>
              </div>
              <Link
                to="/about"
                className="text-xs font-semibold uppercase tracking-wider text-[#401D2C] dark:text-[#E2CCA1] hover:underline inline-flex items-center space-x-1 self-start sm:self-auto"
              >
                <span>Read our full story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default FounderNote;