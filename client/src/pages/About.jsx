import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../data/mockData';
import { MapPin, Check, ArrowRight, MessageSquare } from 'lucide-react';

const teamMembers = [
  {
    name: '[Owner Name]',
    role: 'Director / Lead Planner',
    story: 'Directs turnkey wedding planning, client consultations, budget architecture, and overall event production.',
  },
  {
    name: '[Culinary Lead / Head Chef Name]',
    role: 'Head of Culinary Operations',
    story: 'Oversees in-house kitchens, authentic recipes, per-plate food tastings, and banquet service staff.',
  },
  {
    name: '[Core Team Member Name]',
    role: 'Stage Fabrication & AV Lead',
    story: 'Manages 3D LED setups, stage rigging, acoustic sound engineering, and site safety inspections.',
  },
  {
    name: '[Core Team Member Name]',
    role: 'Wedding Decor & Ritual Styling',
    story: 'Coordinates Vedic mandaps, floral themes, bridal entourage support, and minute-by-minute ritual timing.',
  },
  {
    name: '[Core Team Member Name]',
    role: 'Guest Logistics & Floor Operations',
    story: 'Supervises airport transfers, hotel check-in desks, dining transitions, and personal family shadow managers.',
  },
];

const venuesWorkedAt = [
  { name: '[Heritage Rajbari / Palace Venue]', type: 'Heritage Rajbaris & Palatial Weddings' },
  { name: '[5-Star Luxury Ballroom / Hotel]', type: 'Grand Luxury Ballrooms & Corporate Galas' },
  { name: '[Banquet Lawns & Convention Centres]', type: 'Large-scale Marwari & Bengali Weddings' },
  { name: '[Destination Hub / Luxury Resort]', type: 'Destination Weddings & Intimate Receptions' },
  { name: '[Cultural Center / Heritage Ground]', type: 'Thematic Sangeets & Cultural Programs' },
  { name: '[Exhibition Ground / Summit Arena]', type: 'Public Exhibitions & Megascale Summits' },
];

const About = () => {
  return (
    <div className="bg-[#FAF7F2] dark:bg-[#141210] min-h-screen text-[#1F1D1A] dark:text-[#F5EFE6] transition-colors">
      
      {/* Header Banner */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 border-b border-[#E5DED3] dark:border-[#38312B] bg-white dark:bg-[#1C1917] transition-colors">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <span className="stamp-tag">
              Our Story • Since {COMPANY_INFO.foundedYear}
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

      {/* Main Narrative & Founder */}
      <section className="py-20 sm:py-24 max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Founder Bio Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-lg overflow-hidden border border-[#E5DED3] dark:border-[#38312B] bg-white dark:bg-[#1C1917] p-2 shadow-paper-md dark:shadow-dark-card transition-colors">
              <img
                src="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=900&q=80"
                alt={`${COMPANY_INFO.founder}, Director of Royal Enterprise`}
                className="w-full h-80 sm:h-96 object-cover rounded"
              />
              <div className="p-4 bg-white dark:bg-[#1C1917] transition-colors">
                <span className="font-serif text-lg font-bold text-[#1F1D1A] dark:text-[#FAF7F2] block">
                  {COMPANY_INFO.founder}
                </span>
                <span className="text-xs text-[#6E1423] dark:text-[#F59E0B] font-semibold block">
                  {COMPANY_INFO.founderTitle}
                </span>
                <p className="text-xs text-[#524C44] dark:text-[#A89F91] mt-2 leading-relaxed">
                  "Events and weddings are built around trust, precision, and hospitality. When a client or family trusts us with their milestone celebration, they deserve dedicated attention, flawless execution, and a single accountable partner."
                </p>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-[#1C1917] border border-[#E5DED3] dark:border-[#38312B] rounded text-xs space-y-2 transition-colors">
              <div className="flex items-center space-x-3 pb-3 mb-2 border-b border-[#E5DED3] dark:border-[#38312B]">
                <img src="/logo-crest.png" alt="Royal Enterprise Seal" className="w-12 h-12 object-contain shrink-0 filter drop-shadow-sm" />
                <div>
                  <span className="font-serif text-sm font-bold block text-[#1F1D1A] dark:text-[#FAF7F2]">Royal Enterprise</span>
                  <span className="text-[10px] uppercase tracking-widest text-[#6E1423] dark:text-[#F59E0B] font-semibold">Official Trademark & Heraldic Shield</span>
                </div>
              </div>
              <div className="flex justify-between py-1 border-b border-[#E5DED3] dark:border-[#38312B]">
                <span className="text-[#7D756A] dark:text-[#8C8477]">Company Established:</span>
                <span className="font-semibold text-[#1F1D1A] dark:text-[#FAF7F2]">{COMPANY_INFO.foundedYear}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#E5DED3] dark:border-[#38312B]">
                <span className="text-[#7D756A] dark:text-[#8C8477]">Headquarters:</span>
                <span className="font-semibold text-[#1F1D1A] dark:text-[#FAF7F2]">{COMPANY_INFO.address}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#E5DED3] dark:border-[#38312B]">
                <span className="text-[#7D756A] dark:text-[#8C8477]">Official Email:</span>
                <span className="font-semibold text-[#1F1D1A] dark:text-[#FAF7F2]">{COMPANY_INFO.email}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#7D756A] dark:text-[#8C8477]">Operational Crew:</span>
                <span className="font-semibold text-[#1F1D1A] dark:text-[#FAF7F2]">{COMPANY_INFO.teamSize}</span>
              </div>
            </div>
          </div>

          {/* Honest Story Details */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase font-bold tracking-wider text-[#6E1423] dark:text-[#F59E0B] block">
              Behind Royal Enterprise
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1D1A] dark:text-[#FAF7F2] leading-tight">
              Integrated event production, wedding styling, and in-house catering.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#524C44] dark:text-[#A89F91] leading-relaxed">
              <p className="bg-[#FAF7F2] dark:bg-[#24201D] p-4 rounded border border-[#E5DED3] dark:border-[#38312B] text-xs sm:text-sm font-mono text-[#6E1423] dark:text-[#F59E0B]">
                [Company Founder Story: Insert story of {COMPANY_INFO.founder}, how Royal Enterprise was established in {COMPANY_INFO.foundedYear}, and the core mission of delivering end-to-end event management and in-house culinary experiences here.]
              </p>
              <p>
                When organizing a wedding or corporate conference, clients frequently experience the frustration of fragmented coordination—where decor, audiovisual, hospitality, and food catering are handled by unrelated vendors with no unified responsibility.
              </p>
              <p>
                Royal Enterprise provides an integrated, turnkey model. We take complete ownership of budget optimization, 3D design preview, vendor orchestration, aesthetic styling, guest logistics, and ritual execution—ensuring families and corporate organizers celebrate without operational stress.
              </p>
              <p>
                From intimate family celebrations to grand multi-day weddings and high-profile corporate summits, our dedicated coordinators and culinary personnel remain on the floor until the final guest departs.
              </p>
            </div>

            {/* Our 4 Rules */}
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

      {/* Team Strip */}
      <section className="py-16 sm:py-20 bg-white dark:bg-[#1C1917] border-y border-[#E5DED3] dark:border-[#38312B] transition-colors">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-10">
            <span className="text-xs uppercase font-bold tracking-wider text-[#6E1423] dark:text-[#F59E0B] block mb-1">
              Core Leadership & Operations
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1D1A] dark:text-[#FAF7F2] tracking-tight">
              Meet the key specialists running your event.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-[#FAF7F2] dark:bg-[#24201D] border border-[#E5DED3] dark:border-[#38312B] rounded-lg p-5 space-y-2 hover:border-[#6E1423]/40 dark:hover:border-[#F59E0B]/50 transition-colors shadow-paper-sm dark:shadow-dark-card"
              >
                <span className="font-serif text-lg font-bold text-[#1F1D1A] dark:text-[#FAF7F2] block">
                  {member.name}
                </span>
                <span className="text-xs text-[#6E1423] dark:text-[#F59E0B] font-semibold block">
                  {member.role}
                </span>
                <p className="text-xs text-[#524C44] dark:text-[#A89F91] leading-relaxed pt-1">
                  {member.story}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venues Worked At */}
      <section className="py-16 sm:py-20 max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-10">
          <span className="text-xs uppercase font-bold tracking-wider text-[#6E1423] dark:text-[#F59E0B] block mb-1">
            Track Record
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1D1A] dark:text-[#FAF7F2] tracking-tight">
            Real venues where we coordinate setups and banquets
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {venuesWorkedAt.map((v, idx) => (
            <div
              key={idx}
              className="p-4 bg-white dark:bg-[#1C1917] border border-[#E5DED3] dark:border-[#38312B] rounded flex items-start space-x-3 transition-colors shadow-paper-sm dark:shadow-dark-card"
            >
              <MapPin className="w-4 h-4 text-[#6E1423] dark:text-[#F59E0B] shrink-0 mt-0.5" />
              <div>
                <span className="font-serif font-bold text-sm text-[#1F1D1A] dark:text-[#FAF7F2] block">
                  {v.name}
                </span>
                <span className="text-xs text-[#7D756A] dark:text-[#8C8477]">{v.type}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-[#540D1A] dark:bg-[#3E0812] text-white rounded-lg flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#3E0812] dark:border-[#540D1A]">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif text-2xl font-bold text-white">
              Planning an upcoming celebration or corporate meet?
            </h3>
            <p className="text-xs sm:text-sm text-white/80 dark:text-[#D5CCC0]">
              Speak directly with {COMPANY_INFO.founder} or our lead coordinator to check dates.
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
