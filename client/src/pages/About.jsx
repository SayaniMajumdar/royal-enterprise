import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../data/mockData';
import { Check, ArrowRight, MessageSquare, ShieldCheck, HeartHandshake, Utensils, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-[#FAF7F2] dark:bg-[#141210] min-h-screen text-[#1F1D1A] dark:text-[#F5EFE6] transition-colors">
      
      {/* Header Banner */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 border-b border-[#E5DED3] dark:border-[#38312B] bg-white dark:bg-[#1C1917] transition-colors">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <span className="stamp-tag">
              Our Philosophy • Kolkata & Eastern India
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1F1D1A] dark:text-[#FAF7F2] leading-[1.15]">
              Turnkey event management and in-house catering with one clear rule.
            </h1>
            <p className="text-base sm:text-lg text-[#524C44] dark:text-[#A89F91] leading-relaxed">
              If our name is on the event, our own team oversees the execution from first briefing to final guest farewell.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative & Philosophy */}
      <section className="py-20 sm:py-24 max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Official Shield & Credentials Card (Contact info placeholders preserved) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-lg overflow-hidden border border-[#E5DED3] dark:border-[#38312B] bg-white dark:bg-[#1C1917] p-6 shadow-paper-md dark:shadow-dark-card transition-colors text-center">
              <img
                src="/logo-crest.png"
                alt="Royal Enterprise Official Crest"
                className="w-28 h-28 object-contain mx-auto filter drop-shadow-md mb-4"
              />
              <span className="font-serif text-2xl font-bold text-[#1F1D1A] dark:text-[#FAF7F2] block uppercase tracking-wider">
                Royal Enterprise
              </span>
              <span className="text-xs text-[#6E1423] dark:text-[#F59E0B] font-semibold block mt-1 uppercase tracking-widest">
                Turnkey Wedding Planning | Gourmet Catering | Event Production
              </span>
              <p className="text-xs text-[#524C44] dark:text-[#A89F91] mt-4 leading-relaxed font-light">
                Delivering authentic heritage banquets, bespoke 3D stagecraft, and comprehensive guest hospitality under a single accountable standard.
              </p>
            </div>

            {/* Official Credentials Box (Contact Info Preserved) */}
            <div className="p-6 bg-white dark:bg-[#1C1917] border border-[#E5DED3] dark:border-[#38312B] rounded text-xs space-y-3 transition-colors shadow-paper-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#6E1423] dark:text-[#F59E0B] pb-2 border-b border-[#E5DED3] dark:border-[#38312B]">
                Official Contact & Registered Details
              </h4>
              <div className="flex justify-between py-1 border-b border-[#E5DED3] dark:border-[#38312B]">
                <span className="text-[#7D756A] dark:text-[#8C8477]">Office Address:</span>
                <span className="font-semibold text-right text-[#1F1D1A] dark:text-[#FAF7F2] max-w-[200px]">{COMPANY_INFO.address}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#E5DED3] dark:border-[#38312B]">
                <span className="text-[#7D756A] dark:text-[#8C8477]">Official Phone:</span>
                <span className="font-semibold text-[#1F1D1A] dark:text-[#FAF7F2]">{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#E5DED3] dark:border-[#38312B]">
                <span className="text-[#7D756A] dark:text-[#8C8477]">Official Email:</span>
                <span className="font-semibold text-[#1F1D1A] dark:text-[#FAF7F2]">{COMPANY_INFO.email}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#7D756A] dark:text-[#8C8477]">Official Website:</span>
                <span className="font-semibold text-[#1F1D1A] dark:text-[#FAF7F2]">{COMPANY_INFO.website}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Operational Mandate & 4 Commitments */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase font-bold tracking-wider text-[#6E1423] dark:text-[#F59E0B] block">
              The Turnkey Standard
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1D1A] dark:text-[#FAF7F2] leading-tight">
              One integrated team. Zero operational stress for your family or organization.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#524C44] dark:text-[#A89F91] leading-relaxed">
              <p>
                Royal Enterprise operates as a turnkey wedding management, corporate event, and in-house catering partner. We take complete ownership of budget optimization, 3D design preview, vendor orchestration, aesthetic styling, guest logistics, and ritual execution—ensuring hosts can celebrate without operational burden.
              </p>
              <p>
                When organizing a wedding or corporate summit, clients frequently face the friction of managing disconnected contractors—where stage builders, caterers, sound technicians, and decorators have no unified coordination.
              </p>
              <p>
                We resolve this through end-to-end integration: our own in-house culinary staff prepare authentic heritage banquets on-site, our stagecraft crew handle AV and LED structures, and our dedicated floor managers remain active on the ground until the last guest departs.
              </p>
            </div>

            {/* Our 4 Commitments */}
            <div className="pt-6 border-t border-[#E5DED3] dark:border-[#38312B] space-y-3">
              <h3 className="font-serif text-lg font-bold text-[#1F1D1A] dark:text-[#FAF7F2]">
                Our 4 Operational Commitments
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#3B3630] dark:text-[#D5CCC0]">
                <div className="p-3 bg-white dark:bg-[#1C1917] rounded border border-[#E5DED3] dark:border-[#38312B] flex items-start space-x-2">
                  <Check className="w-4 h-4 text-[#6E1423] dark:text-[#F59E0B] shrink-0 mt-0.5" />
                  <span><strong>1. Strict Hygiene & In-House Preparation:</strong> Sanitized cookware, fresh sourcing, and live on-site preparation.</span>
                </div>
                <div className="p-3 bg-white dark:bg-[#1C1917] rounded border border-[#E5DED3] dark:border-[#38312B] flex items-start space-x-2">
                  <Check className="w-4 h-4 text-[#6E1423] dark:text-[#F59E0B] shrink-0 mt-0.5" />
                  <span><strong>2. Dedicated Veg Kitchens:</strong> Separate cookware and dedicated staff for pure-vegetarian celebrations.</span>
                </div>
                <div className="p-3 bg-white dark:bg-[#1C1917] rounded border border-[#E5DED3] dark:border-[#38312B] flex items-start space-x-2">
                  <Check className="w-4 h-4 text-[#6E1423] dark:text-[#F59E0B] shrink-0 mt-0.5" />
                  <span><strong>3. Transparent Estimates:</strong> Clear line-item budgeting with no unapproved surprise expenses.</span>
                </div>
                <div className="p-3 bg-white dark:bg-[#1C1917] rounded border border-[#E5DED3] dark:border-[#38312B] flex items-start space-x-2">
                  <Check className="w-4 h-4 text-[#6E1423] dark:text-[#F59E0B] shrink-0 mt-0.5" />
                  <span><strong>4. Floor Presence:</strong> Designated on-ground operations heads stay active from beginning to end.</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Bottom Consultation Banner (Contact Actions Preserved) */}
      <section className="pb-20 max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="p-8 bg-[#540D1A] dark:bg-[#3E0812] text-white rounded-lg flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#3E0812] dark:border-[#540D1A]">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif text-2xl font-bold text-white">
              Planning an upcoming celebration or corporate meet?
            </h3>
            <p className="text-xs sm:text-sm text-white/80 dark:text-[#D5CCC0]">
              Speak directly with our team to check dates and discuss customized arrangements.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Royal%20Enterprise,%20I%20would%20like%20to%20discuss%20an%20event.`}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp px-5 py-2.5 text-xs font-semibold inline-flex items-center space-x-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp us</span>
            </a>
            <Link
              to="/contact"
              className="btn-marigold px-5 py-2.5 text-xs font-semibold inline-flex items-center space-x-1.5"
            >
              <span>Get in touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
