import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';

const venueSearches = [
  {
    title: 'Heritage Rajbaris & Palaces',
    subtitle: 'Bawali, Sovabazar, Itachuna & Destination Hubs',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80',
    locations: ['Kolkata', 'Burdwan', 'Murshidabad', 'Udaipur'],
    link: '/wedding-planner',
  },
  {
    title: '5-Star Banquet Halls',
    subtitle: 'ITC Royal Bengal, JW Marriott, Taj Bengal & Hyatt',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80',
    locations: ['EM Bypass', 'Salt Lake', 'Rajarhat', 'Alipore'],
    link: '/events',
  },
  {
    title: 'Marriage Gardens & Waterfront Lawns',
    subtitle: 'Open-air riverside mandaps & evening fairy-light sets',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=600&q=80',
    locations: ['Ganges Riverfront', 'New Town', 'Vedic Village', 'Howrah'],
    link: '/wedding-planner',
  },
];

const bannerServices = [
  {
    title: 'Turnkey Wedding Planning',
    subtitle: 'Venue Scouting, Rituals, Trousseau & Family Concierge',
    tag: 'Full 360° Management',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80',
    bgColor: 'bg-[#FFF0F3] border-[#FFE4E8]',
    textColor: 'text-roseBrand',
    link: '/wedding-planner',
  },
  {
    title: 'Artisanal Gourmet Catering',
    subtitle: 'Awadhi Dum Biryani, Pure Bhetki Paturi & Live Sweet Stations',
    tag: 'Master Chef Banquets',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80',
    bgColor: 'bg-[#FFF7ED] border-[#FFEDD5]',
    textColor: 'text-amber-800',
    link: '/catering',
  },
  {
    title: 'Event Management & Sets',
    subtitle: 'Leadership Summits, 3D Laser Stage Fabrication & AV Sound',
    tag: 'Corporate & Media Standard',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80',
    bgColor: 'bg-[#F0FDF4] border-[#DCFCE7]',
    textColor: 'text-emerald-800',
    link: '/events',
  },
  {
    title: 'Bridal Styling & Cinema',
    subtitle: 'Celebrity Makeup Artists, Candid 4K Films & Pre-Wedding Shoots',
    tag: 'Visual Storytelling',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
    bgColor: 'bg-[#FAF5FF] border-[#F3E8FF]',
    textColor: 'text-purple-800',
    link: '/wedding-planner',
  },
];

const DivisionOverview = ({ onOpenQuote }) => {
  return (
    <section className="py-20 sm:py-28 bg-white text-[#1F2937] border-b border-slate-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-20">
        
        {/* ========================================================================= */}
        {/* 1. POPULAR SEARCHES & VENUES (WedMeGood Screenshot 2 Reference) */}
        {/* ========================================================================= */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-roseBrand block mb-1">
                Curated Spaces
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937] tracking-tight">
                Popular Venue & Celebration Searches
              </h2>
            </div>
            <Link
              to="/wedding-planner"
              className="text-xs sm:text-sm font-semibold text-roseBrand hover:underline inline-flex items-center space-x-1"
            >
              <span>Explore All Venues</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {venueSearches.map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[10px] font-bold text-[#1F2937] uppercase tracking-wider px-2.5 py-1 rounded-full">
                    Kolkata & Beyond
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1F2937] group-hover:text-roseBrand transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#6B7280] font-light leading-relaxed mb-4">
                      {item.subtitle}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5 text-[11px] text-[#4B5563]">
                    {item.locations.map((loc, locIdx) => (
                      <span key={locIdx} className="bg-slate-50 px-2 py-0.5 rounded text-roseBrand font-medium">
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. INHOUSE SERVICES BANNERS (WedMeGood Screenshot 3 Reference) */}
        {/* ========================================================================= */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-roseBrand block mb-1">
                Atelier Divisions
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937] tracking-tight">
                Royal Enterprise Signature Services
              </h2>
            </div>
            <button
              type="button"
              onClick={onOpenQuote}
              className="btn-brand px-5 py-2 text-xs uppercase font-semibold rounded-md shadow-sm self-start sm:self-auto"
            >
              Get Custom Quote
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bannerServices.map((svc, idx) => (
              <Link
                key={idx}
                to={svc.link}
                className={`group border rounded-2xl p-6 ${svc.bgColor} hover:shadow-md transition-all duration-300 flex items-center justify-between gap-4`}
              >
                <div className="flex-1 space-y-2">
                  <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-white/80 ${svc.textColor}`}>
                    {svc.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] group-hover:text-roseBrand transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B5563] font-light leading-relaxed">
                    {svc.subtitle}
                  </p>
                  <div className={`text-xs font-bold pt-2 flex items-center space-x-1 ${svc.textColor}`}>
                    <span>Explore details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shrink-0 shadow-sm border-2 border-white">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default DivisionOverview;