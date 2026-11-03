import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';

const BrandStory = () => {
  return (
    <section className="py-20 sm:py-24 bg-white dark:bg-[#1C1917] border-b border-[#E5DED3] dark:border-[#38312B] transition-colors">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Founder Photo & Credibility Card */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-lg overflow-hidden border border-[#E5DED3] dark:border-[#38312B] bg-[#FAF7F2] dark:bg-[#24201D] p-2 shadow-paper-md dark:shadow-dark-card transition-colors">
              <img
                src="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=80"
                alt={`${COMPANY_INFO.founder}, Director of Royal Enterprise`}
                className="w-full h-80 sm:h-96 object-cover rounded"
              />
              <div className="p-3 text-left">
                <span className="font-serif text-base font-bold text-[#1F1D1A] dark:text-[#FAF7F2] block">
                  {COMPANY_INFO.founder}
                </span>
                <span className="text-xs text-[#6E1423] dark:text-[#F59E0B] font-medium block">
                  {COMPANY_INFO.founderTitle}
                </span>
                <span className="text-[11px] text-[#7D756A] dark:text-[#8C8477] block mt-0.5">
                  Established Royal Enterprise in {COMPANY_INFO.foundedYear}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: The Honest Story (No AI generic copy) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase font-bold tracking-wider text-[#6E1423] dark:text-[#F59E0B] block">
              Behind Royal Enterprise
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1D1A] dark:text-[#FAF7F2] tracking-tight leading-tight">
              Integrated event production, wedding styling, and in-house catering.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#524C44] dark:text-[#A89F91] leading-relaxed">
              <p className="bg-[#FAF7F2] dark:bg-[#24201D] p-3.5 rounded border border-[#E5DED3] dark:border-[#38312B] text-xs font-mono text-[#6E1423] dark:text-[#F59E0B]">
                [Company Founder Story: Insert story of {COMPANY_INFO.founder}, how Royal Enterprise started in {COMPANY_INFO.foundedYear}, and the core mission of providing integrated turnkey event management and in-house catering here.]
              </p>
              <p>
                We believe that the single biggest challenge families and corporate organizers face is dealing with fragmented contractors who fail to coordinate on the day of the event.
              </p>
              <p>
                With {COMPANY_INFO.teamSize}, Royal Enterprise takes complete ownership of venue scouting, 3D stagecraft, guest hospitality, ritual sequencing, and live banquet cooking under one single point of accountability.
              </p>
              <p className="font-medium text-[#1F1D1A] dark:text-[#FAF7F2]">
                Our dedicated floor managers and culinary leads supervise every transition on the ground until the final guest is served.
              </p>
            </div>

            {/* Facts Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E5DED3] dark:border-[#38312B]">
              <div>
                <span className="font-serif text-2xl font-bold text-[#6E1423] dark:text-[#F59E0B] block">{COMPANY_INFO.eventsCount}</span>
                <span className="text-xs text-[#524C44] dark:text-[#A89F91]">Events managed</span>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-[#6E1423] dark:text-[#F59E0B] block">{COMPANY_INFO.foundedYear}</span>
                <span className="text-xs text-[#524C44] dark:text-[#A89F91]">Established</span>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-[#6E1423] dark:text-[#F59E0B] block">100%</span>
                <span className="text-xs text-[#524C44] dark:text-[#A89F91]">In-house supervision</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="text-xs font-semibold text-[#6E1423] dark:text-[#F59E0B] hover:underline inline-flex items-center space-x-1.5"
              >
                <span>Read our full story and meet the team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default BrandStory;
