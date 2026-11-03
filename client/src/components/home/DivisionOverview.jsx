import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const servicesData = [
  {
    number: '01',
    title: 'Décor & Stage Architecture',
    subtitle: 'Event Management & Turnkey Sets',
    description:
      'From 3D custom stage sets and concert audio to corporate summits and VIP media galas, our team crafts flawless environments.',
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    link: '/events',
  },
  {
    number: '02',
    title: 'Gourmet Catering & Banquets',
    subtitle: 'Artisanal Culinary Mastery',
    description:
      'Authentic Awadhi dum biryanis, Mughlai feasts, continental courses, and interactive live culinary stations served with royal hospitality.',
    image:
      'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80',
    link: '/catering',
  },
  {
    number: '03',
    title: 'Bespoke Wedding Planning',
    subtitle: 'Turnkey 360° Royal Weddings',
    description:
      'Complete responsibility from heritage palace venue scouting, bridal couture, and jewellery to photography and Vedic ritual coordination.',
    image:
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    link: '/wedding-planner',
  },
  {
    number: '04',
    title: 'Cinematography & Styling',
    subtitle: 'Visuals of Eternal Grace',
    description:
      'Cinematic 4K wedding films, candid storytelling, high-definition bridal makeup artists, and coordinated groom styling.',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    link: '/wedding-planner',
  },
];

const DivisionOverview = ({ onOpenQuote }) => {
  return (
    <section className="py-24 sm:py-32 bg-[#F6E4E1] text-[#141414] relative border-b border-[#ECD6D2]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 text-left">
          <div className="inline-flex items-center space-x-2 text-gold-dark text-[11px] font-semibold uppercase tracking-[0.24em] mb-3">
            <span className="w-5 h-px bg-gold-dark/60" />
            <span>Our Expertise</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#141414] tracking-tight leading-[1.12]">
            Universal <span className="font-editorial italic font-normal text-maroon">elegance</span> for every milestone
          </h2>
        </div>

        {/* 4 Portrait Cards Grid (Exactly like Theevexa Image 2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((svc) => (
            <Link
              key={svc.number}
              to={svc.link}
              className="group bg-[#FFFDF9] rounded-[3px] overflow-hidden border border-[#ECD6D2] hover:border-gold-base/60 transition-all duration-300 flex flex-col justify-between shadow-sm hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                {/* Portrait Photo Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-200">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-maroon">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6">
                  {/* Number Indicator */}
                  <span className="block text-[11px] font-medium tracking-[0.2em] text-gold-dark mb-2">
                    {svc.number}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-normal text-[#141414] mb-2.5 group-hover:text-maroon transition-colors leading-snug">
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-[#554F47] font-light leading-relaxed">
                    {svc.description}
                  </p>
                </div>
              </div>

              {/* Bottom Subtle Action */}
              <div className="px-6 pb-6 pt-1 flex items-center justify-between text-[11px] uppercase tracking-[0.16em] font-semibold text-gold-dark group-hover:text-maroon transition-colors">
                <span>Explore Details</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DivisionOverview;
