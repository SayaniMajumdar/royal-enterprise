import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../data/mockData';
import { MapPin, Check, ArrowRight, MessageSquare } from 'lucide-react';

const teamMembers = [
  {
    name: 'Subrata Majumdar',
    role: 'Founder & Client Operations',
    story: 'Oversees every event roadmap and personally visits key venues prior to wedding dates.',
  },
  {
    name: 'Chef Ashis Bhattacharya',
    role: 'Head of Culinary Operations',
    story: '22 years running large-scale Kolkata banquets, traditional Bengali recipes, and Awadhi dum handis.',
  },
  {
    name: 'Poulami Mukherjee',
    role: 'Wedding Decor & Ritual Styling',
    story: 'Coordinates Vedic mandaps, marigold canopies, bridal attire draping, and floral vendors.',
  },
  {
    name: 'Arindam Roy',
    role: 'Stage Fabrication & AV Lead',
    story: 'Manages 3D LED setups, stage rigging, acoustic sound engineering, and safety inspections.',
  },
  {
    name: 'Biswanath Dey',
    role: 'Senior Halwai & Traditional Sweets',
    story: 'Prepares hot Nolen gur rosogollas, live kesariya jalebi counters, and authentic pure-ghee mishti.',
  },
];

const venuesWorkedAt = [
  { name: 'The Rajbari Bawali', type: 'Heritage Rajbari & Palatial Weddings' },
  { name: 'ITC Royal Bengal, Kolkata', type: 'Grand Luxury Ballroom & Corporate Galas' },
  { name: 'PC Chandra Garden, Kolkata', type: 'Large-scale Marwari & Bengali Weddings' },
  { name: 'Taj Bengal, Alipore', type: 'Intimate Banquets & High-Profile Receptions' },
  { name: 'Swabhumi Heritage', type: 'Thematic Sangeets & Cultural Programs' },
  { name: 'Biswa Bangla Mela Prangan', type: 'Public Exhibitions & Large Summits' },
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
              Started with two tandoor ovens and one simple rule.
            </h1>
            <p className="text-base sm:text-lg text-[#524C44] dark:text-[#A89F91] leading-relaxed">
              If our name is on the invite, our own cooks must be in the kitchen.
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
                alt={`${COMPANY_INFO.founder}, Founder of Royal Enterprise`}
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
                  "Kolkata weddings are built around respect and food. When a family trusts us with their daughter's wedding or an annual corporate meet, they aren't looking for agency buzzwords. They want the mutton tender, the audio clean, and someone answering the phone at midnight."
                </p>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-[#1C1917] border border-[#E5DED3] dark:border-[#38312B] rounded text-xs space-y-2 transition-colors">
              <div className="flex justify-between py-1 border-b border-[#E5DED3] dark:border-[#38312B]">
                <span className="text-[#7D756A] dark:text-[#8C8477]">Company Registered:</span>
                <span className="font-semibold text-[#1F1D1A] dark:text-[#FAF7F2]">{COMPANY_INFO.foundedYear}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#E5DED3] dark:border-[#38312B]">
                <span className="text-[#7D756A] dark:text-[#8C8477]">Headquarters:</span>
                <span className="font-semibold text-[#1F1D1A] dark:text-[#FAF7F2]">Rashbehari Avenue, Kolkata</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#E5DED3] dark:border-[#38312B]">
                <span className="text-[#7D756A] dark:text-[#8C8477]">Central Kitchen:</span>
                <span className="font-semibold text-[#1F1D1A] dark:text-[#FAF7F2]">North & South Kolkata Base</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#7D756A] dark:text-[#8C8477]">Full-Time Staff:</span>
                <span className="font-semibold text-[#1F1D1A] dark:text-[#FAF7F2]">28 On-Payroll Members</span>
              </div>
            </div>
          </div>

          {/* Honest Story Details */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase font-bold tracking-wider text-[#6E1423] dark:text-[#F59E0B] block">
              How Royal Enterprise Grew
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1D1A] dark:text-[#FAF7F2] leading-tight">
              From family wedding catering to 2,500-guest gatherings.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#524C44] dark:text-[#A89F91] leading-relaxed">
              <p>
                In 2014, Subrata Majumdar founded Royal Enterprise after noticing that most event planners in Kolkata operated merely as brokers. They would take an event booking, charge a hefty margin, and then sub-contract the catering to one vendor, the sound to another, and the flowers to a third stranger.
              </p>
              <p>
                When anything went wrong—whether the fish fry was cold or the microphone had feedback—nobody took responsibility, and the host family was left embarrassed in front of their guests.
              </p>
              <p>
                Subrata decided to build an integrated service. He hired a permanent crew of veteran halwais and wedding cooks, invested in in-house concert sound and staging, and instituted a strict rule: <strong>a dedicated on-site floor manager remains with the family until the last guest leaves.</strong>
              </p>
              <p>
                Today, Royal Enterprise has delivered over 750 events across Eastern India, handling everything from 100-guest intimate family Biye Baris in Ballygunge to 2,500-guest political and corporate gatherings.
              </p>
            </div>

            {/* Our 4 Rules */}
            <div className="pt-6 border-t border-[#E5DED3] dark:border-[#38312B] space-y-3">
              <h3 className="font-serif text-lg font-bold text-[#1F1D1A] dark:text-[#FAF7F2]">
                The 4 Rules We Never Break
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#3B3630] dark:text-[#D5CCC0]">
                <div className="p-3 bg-white dark:bg-[#1C1917] rounded border border-[#E5DED3] dark:border-[#38312B] flex items-start space-x-2">
                  <Check className="w-4 h-4 text-[#6E1423] dark:text-[#F59E0B] shrink-0 mt-0.5" />
                  <span><strong>1. Zero Kitchen Outsourcing:</strong> Our own bawarchis and halwais cook every dish.</span>
                </div>
                <div className="p-3 bg-white dark:bg-[#1C1917] rounded border border-[#E5DED3] dark:border-[#38312B] flex items-start space-x-2">
                  <Check className="w-4 h-4 text-[#6E1423] dark:text-[#F59E0B] shrink-0 mt-0.5" />
                  <span><strong>2. Dedicated Veg Kitchen:</strong> Separate cookware and utensils for Marwari/Jain guests.</span>
                </div>
                <div className="p-3 bg-white dark:bg-[#1C1917] rounded border border-[#E5DED3] dark:border-[#38312B] flex items-start space-x-2">
                  <Check className="w-4 h-4 text-[#6E1423] dark:text-[#F59E0B] shrink-0 mt-0.5" />
                  <span><strong>3. Fixed Estimates:</strong> Itemized written quote with no surprise midnight billing.</span>
                </div>
                <div className="p-3 bg-white dark:bg-[#1C1917] rounded border border-[#E5DED3] dark:border-[#38312B] flex items-start space-x-2">
                  <Check className="w-4 h-4 text-[#6E1423] dark:text-[#F59E0B] shrink-0 mt-0.5" />
                  <span><strong>4. Floor Presence:</strong> A designated manager stays on ground till the final plate.</span>
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
              The People On Ground
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1D1A] dark:text-[#FAF7F2] tracking-tight">
              Meet the core team running your event.
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
            Real venues where we have managed setups and banquets
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
              Planning an upcoming celebration in Kolkata?
            </h3>
            <p className="text-xs sm:text-sm text-white/80 dark:text-[#D5CCC0]">
              Speak directly with Subrata or our catering lead to check dates.
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
