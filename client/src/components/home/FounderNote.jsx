import React from 'react';
import { Link } from 'react-router-dom';
import { FOUNDER_NOTE } from '../../data/mockData';
import { ArrowRight, Heart } from 'lucide-react';

const FounderNote = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#FAF8F5] dark:bg-[#141210] border-b border-[#E8E0D5] dark:border-[#38312B] transition-colors">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Candid Team / Founder Working Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#E8E0D5] dark:border-[#38312B] bg-white dark:bg-[#1C1917] p-2.5 shadow-md transition-colors">
              <img
                src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=80"
                alt="Behind the scenes in the Royal Enterprise kitchen"
                className="w-full h-80 sm:h-96 object-cover rounded-xl"
              />
              <div className="p-4 bg-white dark:bg-[#1C1917] rounded-b-xl">
                <span className="text-xs font-semibold text-[#6B1D2F] dark:text-[#E0CFA6] flex items-center space-x-1.5">
                  <Heart className="w-3.5 h-3.5 fill-current" />
                  <span>On-ground in Kolkata</span>
                </span>
                <p className="text-xs text-[#5A524E] dark:text-[#D4CCC2] mt-1 font-normal">
                  Our own cooks at the stove and our own floor managers with your family until the last guest is warmly fed.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Personal First-Person Founder's Note */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#6B1D2F] dark:text-[#E0CFA6] block">
              A personal note from our team
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2625] dark:text-[#FAF8F5] tracking-tight leading-tight">
              {FOUNDER_NOTE.headline}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#5A524E] dark:text-[#D4CCC2] leading-relaxed font-normal">
              <p>
                Weddings and celebrations in Kolkata are built on two things that never change: <strong className="font-semibold text-[#2B2625] dark:text-[#FAF8F5]">genuine family warmth and unforgettable food</strong>.
              </p>
              <p>
                Years ago, I saw so many families stressed on their daughter’s or son’s wedding day because the event planner was merely a broker—hiring outside sound guys who arrived late, and outside caterers who didn’t care whether the fish fry was hot or the mutton was tender.
              </p>
              <p>
                I started Royal Enterprise with one simple promise: <strong className="font-semibold text-[#2B2625] dark:text-[#FAF8F5]">when you trust us with your family’s biggest celebration, our own team is on the floor and our own cooks are in the kitchen</strong>. From your first cup of tea with us to the final plate served at your Boubhat, you have our personal word that your guests will be treated like royalty.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E8E0D5] dark:border-[#38312B] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="font-serif font-bold text-base text-[#2B2625] dark:text-[#FAF8F5] block">
                  The Royal Enterprise Family
                </span>
                <span className="text-xs text-[#827771] dark:text-[#9E9488]">
                  {FOUNDER_NOTE.signatureRole} • {FOUNDER_NOTE.location}
                </span>
              </div>
              <Link
                to="/about"
                className="text-xs font-semibold text-[#6B1D2F] dark:text-[#E0CFA6] hover:underline inline-flex items-center space-x-1 self-start sm:self-auto"
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
