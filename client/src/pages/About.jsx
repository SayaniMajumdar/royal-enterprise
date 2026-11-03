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
            <span className="text-xs uppercase font-semibold tracking-wider text-[#6E1423] dark:text-[#F59E0B] block">
              Our Story • Kolkata & Eastern India
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1F1D1A] dark:text-[#FAF7F2] leading-[1.15]">
              A Kolkata event and catering company built on trust, honest food, and calm execution.
            </h1>
            <p className="text-base sm:text-lg text-[#524C44] dark:text-[#A89F91] leading-relaxed">
              If our name is on your celebration, our own team cooks the feast, sets up the venue, and stays on the floor until the last guest leaves.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative & Philosophy */}
      <section className="py-20 sm:py-24 max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Official Shield & Credentials Card (Contact info placeholders preserved) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl overflow-hidden border border-[#E5DED3] dark:border-[#38312B] bg-white dark:bg-[#1C1917] p-6 shadow-sm dark:shadow-dark-card transition-colors text-center">
              <img
                src="/logo-crest.png"
                alt="Royal Enterprise Official Crest"
                className="w-28 h-28 object-contain mx-auto filter drop-shadow-md mb-4"
              />
              <span className="font-serif text-2xl font-bold text-[#1F1D1A] dark:text-[#FAF7F2] block uppercase tracking-wider">
                Royal Enterprise
              </span>
              <span className="text-xs text-[#6E1423] dark:text-[#F59E0B] font-semibold block mt-1 uppercase tracking-widest">
                Wedding Planning | In-House Catering | Event Management
              </span>
              <p className="text-xs text-[#524C44] dark:text-[#A89F91] mt-4 leading-relaxed font-light">
                Serving traditional Bengali biye baris, Marwari celebrations, corporate meets, and milestone family anniversaries across Kolkata and Eastern India.
              </p>
            </div>

            {/* Official Credentials Box (Contact Info Preserved) */}
            <div className="p-6 bg-white dark:bg-[#1C1917] border border-[#E5DED3] dark:border-[#38312B] rounded-xl text-xs space-y-3 transition-colors shadow-sm">
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

          {/* Right Column: Operational Philosophy & 4 Promises */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#6E1423] dark:text-[#F59E0B] block">
              Why We Work Differently
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1D1A] dark:text-[#FAF7F2] leading-tight">
              One local team taking full care of your event, so you can actually enjoy it.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#524C44] dark:text-[#A89F91] leading-relaxed">
              <p>
                When organizing a wedding or corporate conference, families and organizers often end up running around chasing disconnected contractors—the decorator blames the sound guy, the caterer arrives late, and you spend your own special evening stressed about logistics.
              </p>
              <p>
                We started Royal Enterprise to fix that. When you work with us, you deal with one accountable team that takes care of everything from start to finish: venue scouting, 3D stage layouts, guest welcomes, ritual timings, and live cooking.
              </p>
              <p>
                Our own in-house kitchen team cooks every meal fresh at the venue, our technical crew sets up the sound and lighting, and our experienced on-ground managers stay by your side until the very last guest leaves.
              </p>
            </div>

            {/* Our 4 Commitments */}
            <div className="pt-6 border-t border-[#E5DED3] dark:border-[#38312B] space-y-3">
              <h3 className="font-serif text-lg font-bold text-[#1F1D1A] dark:text-[#FAF7F2]">
                Our 4 Promises to Every Host
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#3B3630] dark:text-[#D5CCC0]">
                <div className="p-3 bg-white dark:bg-[#1C1917] rounded-lg border border-[#E5DED3] dark:border-[#38312B] flex items-start space-x-2">
                  <Check className="w-4 h-4 text-[#6E1423] dark:text-[#F59E0B] shrink-0 mt-0.5" />
                  <span><strong>1. Live, Fresh Cooking:</strong> Pure mustard oil, morning-fresh Kolkata fish, and sanitized live counters.</span>
                </div>
                <div className="p-3 bg-white dark:bg-[#1C1917] rounded-lg border border-[#E5DED3] dark:border-[#38312B] flex items-start space-x-2">
                  <Check className="w-4 h-4 text-[#6E1423] dark:text-[#F59E0B] shrink-0 mt-0.5" />
                  <span><strong>2. Dedicated Pure Veg Kitchens:</strong> Separate cookware and specialized staff for Marwari & Jain events.</span>
                </div>
                <div className="p-3 bg-white dark:bg-[#1C1917] rounded-lg border border-[#E5DED3] dark:border-[#38312B] flex items-start space-x-2">
                  <Check className="w-4 h-4 text-[#6E1423] dark:text-[#F59E0B] shrink-0 mt-0.5" />
                  <span><strong>3. Transparent Line-Item Estimates:</strong> Clear pricing shared upfront with zero surprise additions on the bill.</span>
                </div>
                <div className="p-3 bg-white dark:bg-[#1C1917] rounded-lg border border-[#E5DED3] dark:border-[#38312B] flex items-start space-x-2">
                  <Check className="w-4 h-4 text-[#6E1423] dark:text-[#F59E0B] shrink-0 mt-0.5" />
                  <span><strong>4. On-Ground Presence:</strong> Our floor managers stay active on site from the morning setup to the final goodbye.</span>
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
