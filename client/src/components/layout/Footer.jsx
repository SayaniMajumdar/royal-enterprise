import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink, MessageSquare, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';
import Logo from '../common/Logo';

const Footer = ({ onOpenQuoteModal }) => {
  return (
    <footer className="bg-[#FAF8F5] dark:bg-[#1C1917] text-[#2B2625] dark:text-[#FAF8F5] pt-16 pb-12 border-t border-[#E8E0D5] dark:border-[#38312B] transition-colors relative">
      <div className="h-px bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent absolute top-0 left-0 right-0" />
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Column 1: Brand & Founder Story (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo iconSize="h-12 w-12 sm:h-14 sm:w-14" variant="stacked" />

            <p className="text-xs sm:text-sm text-[#524C44] dark:text-[#A89F91] leading-relaxed max-w-sm pt-2">
              Kolkata wedding planning, event management, and in-house catering company serving Eastern India and destination celebrations. Planned, cooked, and run by one team since {COMPANY_INFO.foundedYear}.
            </p>

            <div className="flex items-center space-x-2 pt-1 text-[#524C44] dark:text-[#A89F91]">
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-[#FAF7F2] dark:bg-[#24201D] hover:text-[#6E1423] dark:hover:text-[#F59E0B] hover:bg-[#FAF2F3] dark:hover:bg-[#2C2723] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-[#FAF7F2] dark:bg-[#24201D] hover:text-[#6E1423] dark:hover:text-[#F59E0B] hover:bg-[#FAF2F3] dark:hover:bg-[#2C2723] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-[#FAF7F2] dark:bg-[#24201D] hover:text-[#6E1423] dark:hover:text-[#F59E0B] hover:bg-[#FAF2F3] dark:hover:bg-[#2C2723] flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-[#FAF7F2] dark:bg-[#24201D] hover:text-[#6E1423] dark:hover:text-[#F59E0B] hover:bg-[#FAF2F3] dark:hover:bg-[#2C2723] flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Services (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F1D1A] dark:text-[#F5EFE6]">
              Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#524C44] dark:text-[#A89F91]">
              <li>
                <Link to="/catering" className="hover:text-[#6E1423] dark:hover:text-[#F59E0B] transition-colors">
                  In-House Catering
                </Link>
              </li>
              <li>
                <Link to="/wedding-planner" className="hover:text-[#6E1423] dark:hover:text-[#F59E0B] transition-colors">
                  Wedding Planning
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-[#6E1423] dark:hover:text-[#F59E0B] transition-colors">
                  Event Management
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#6E1423] dark:hover:text-[#F59E0B] transition-colors">
                  About Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#6E1423] dark:hover:text-[#F59E0B] transition-colors">
                  Check Dates
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Desk (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F1D1A] dark:text-[#F5EFE6]">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-[#524C44] dark:text-[#A89F91]">
              <div>
                <span className="text-[#7D756A] dark:text-[#8C8477] block">Phone & WhatsApp:</span>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                  className="font-bold text-[#1F1D1A] dark:text-[#F5EFE6] hover:text-[#6E1423] dark:hover:text-[#F59E0B] text-sm block"
                >
                  {COMPANY_INFO.displayPhone}
                </a>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Royal%20Enterprise,%20I%20would%20like%20to%20discuss%20an%20event.`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-700 dark:text-emerald-400 font-semibold hover:underline inline-flex items-center space-x-1 mt-0.5"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
              <div>
                <span className="text-[#7D756A] dark:text-[#8C8477] block">Email:</span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="font-semibold text-[#1F1D1A] dark:text-[#F5EFE6] hover:text-[#6E1423] dark:hover:text-[#F59E0B]"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div>
                <span className="text-[#7D756A] dark:text-[#8C8477] block">Desk Hours:</span>
                <span>{COMPANY_INFO.officeHours}</span>
              </div>
            </div>
          </div>

          {/* Column 4: Address & Maps (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F1D1A] dark:text-[#F5EFE6]">
              Kolkata Office
            </h4>
            <div className="flex items-start space-x-2 text-xs text-[#524C44] dark:text-[#A89F91] leading-relaxed">
              <MapPin className="w-4 h-4 text-[#6E1423] dark:text-[#F59E0B] shrink-0 mt-0.5" />
              <div>
                <span>{COMPANY_INFO.address}</span>
                <a
                  href={COMPANY_INFO.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#6E1423] dark:text-[#F59E0B] font-semibold hover:underline inline-flex items-center space-x-1 mt-1 block"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="btn-maroon w-full py-2.5 text-xs font-semibold"
              >
                Get a quote
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E5DED3] dark:border-[#38312B] flex flex-col sm:flex-row items-center justify-between text-xs text-[#7D756A] dark:text-[#8C8477] gap-4">
          <p>© {new Date().getFullYear()} Royal Enterprise. {COMPANY_INFO.address}.</p>
          <div className="flex items-center space-x-4">
            <Link to="/about" className="hover:text-[#6E1423] dark:hover:text-[#F59E0B]">Our Story</Link>
            <span>•</span>
            <Link to="/catering" className="hover:text-[#6E1423] dark:hover:text-[#F59E0B]">Sample Menus</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-[#6E1423] dark:hover:text-[#F59E0B]">Contact Us</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
