import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageSquare, Instagram, Facebook, Linkedin, Youtube, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';
import Logo from '../common/Logo';

const Footer = ({ onOpenQuoteModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#100E0D] text-[#FAF8F5] pt-20 pb-12 border-t border-[#262220] transition-colors relative overflow-hidden">
      {/* Delicate Champagne Gold Top Hairline */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent absolute top-0 left-0 right-0" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 mb-16">
          
          {/* Column 1: Brand & Kolkata Heritage (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Logo iconSize="h-14 w-14 sm:h-16 sm:w-16" variant="stacked" />

            <p className="text-xs sm:text-[13px] text-white/70 font-light leading-relaxed max-w-sm pt-2">
              Kolkata wedding planning, event management, and in-house catering company serving Eastern India and destination celebrations. Planned, cooked, and run by one team since {COMPANY_INFO.foundedYear}.
            </p>

            {/* Social Channels */}
            <div className="flex items-center space-x-2.5 pt-2 text-white/80">
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#C5A059] hover:text-[#E0CFA6] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#C5A059] hover:text-[#E0CFA6] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#C5A059] hover:text-[#E0CFA6] flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#C5A059] hover:text-[#E0CFA6] flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E0CFA6]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-white/70 font-light">
              <li>
                <Link to="/" className="hover:text-[#E0CFA6] transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/wedding-planner" className="hover:text-[#E0CFA6] transition-colors">
                  Wedding Planning
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-[#E0CFA6] transition-colors">
                  Event Management
                </Link>
              </li>
              <li>
                <Link to="/catering" className="hover:text-[#E0CFA6] transition-colors">
                  In-House Catering
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#E0CFA6] transition-colors">
                  Our Story & Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#E0CFA6] transition-colors">
                  Contact & Venue Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Capabilities (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E0CFA6]">
              Specialties
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-white/70 font-light">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                <span>Heritage Rajbari Biye Bari</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                <span>Pure Vegetarian & Jain Kitchens</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                <span>Corporate Summits & Galas</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                <span>3D LED Stage Fabrication</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                <span>Live Tandoori & Bhetki Stations</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                <span>Single On-Site Floor Management</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Desk (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E0CFA6]">
              Direct Desk • Kolkata
            </h4>

            <div className="space-y-3 text-xs sm:text-[13px] text-white/70 font-light">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COMPANY_INFO.address}</span>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                    className="hover:text-[#E0CFA6] font-semibold text-white block transition-colors"
                  >
                    {COMPANY_INFO.displayPhone}
                  </a>
                  <span className="text-[11px] text-white/50 block">Alt: {COMPANY_INFO.secondaryPhone}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-[#E0CFA6] block transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="pt-2">
                <span className="text-[11px] uppercase tracking-wider text-white/50 block font-mono">
                  Desk Hours: {COMPANY_INFO.officeHours}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-[#262220] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Royal Enterprise. All rights reserved. Kolkata, West Bengal.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider text-[#E0CFA6] hover:text-white transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 group-hover:border-[#C5A059] flex items-center justify-center transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;