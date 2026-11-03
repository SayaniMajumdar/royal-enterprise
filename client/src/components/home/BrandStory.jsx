import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';

const BrandStory = () => {
  return (
    <section className="py-20 sm:py-24 bg-white border-b border-[#E5DED3]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Founder Photo & Credibility Card */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-lg overflow-hidden border border-[#E5DED3] bg-[#FAF7F2] p-2 shadow-paper-md">
              <img
                src="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=80"
                alt={`${COMPANY_INFO.founder}, Founder of Royal Enterprise`}
                className="w-full h-80 sm:h-96 object-cover rounded"
              />
              <div className="p-3 text-left">
                <span className="font-serif text-base font-bold text-[#1F1D1A] block">
                  {COMPANY_INFO.founder}
                </span>
                <span className="text-xs text-[#6E1423] font-medium block">
                  {COMPANY_INFO.founderTitle}
                </span>
                <span className="text-[11px] text-[#7D756A] block mt-0.5">
                  Started Royal Enterprise in {COMPANY_INFO.foundedYear} in North Kolkata
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: The Honest Story (No AI generic copy) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase font-bold tracking-wider text-[#6E1423] block">
              Behind Royal Enterprise
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1D1A] tracking-tight leading-tight">
              Started with two tandoor ovens and a family kitchen in 2014.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#524C44] leading-relaxed">
              <p>
                {COMPANY_INFO.founder} started Royal Enterprise in {COMPANY_INFO.foundedYear} catering neighborhood family weddings in North Kolkata. He believed that the single biggest fear families have when hosting an event is inconsistent food and irresponsible third-party contractors.
              </p>
              <p>
                Today there are {COMPANY_INFO.teamSize}, and we have delivered over {COMPANY_INFO.eventsCount} events at venues like The Rajbari Bawali, ITC Royal Bengal, and PC Chandra Garden.
              </p>
              <p className="font-medium text-[#1F1D1A]">
                We have never used third-party food contractors. The same cooks who prepare the food in our central prep kitchen supervise the service on your wedding floor.
              </p>
            </div>

            {/* Facts Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E5DED3]">
              <div>
                <span className="font-serif text-2xl font-bold text-[#6E1423] block">750+</span>
                <span className="text-xs text-[#524C44]">Events run</span>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-[#6E1423] block">2,500</span>
                <span className="text-xs text-[#524C44]">Largest single banquet</span>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-[#6E1423] block">28</span>
                <span className="text-xs text-[#524C44]">Full-time staff</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="text-xs font-semibold text-[#6E1423] hover:underline inline-flex items-center space-x-1.5"
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
