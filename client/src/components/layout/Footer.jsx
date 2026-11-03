import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink, MessageSquare, Instagram, Facebook, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';

const Footer = ({ onOpenQuoteModal }) => {
  return (
    <footer className="bg-white text-[#1F1D1A] pt-16 pb-12 border-t border-[#E5DED3]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Column 1: Brand & Founder Story (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center space-x-2.5 group">
              <div className="w-8 h-8 rounded bg-[#6E1423] text-white flex items-center justify-center font-serif text-base font-bold shadow-sm">
                R
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-[#1F1D1A]">
                Royal Enterprise
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#524C44] leading-relaxed max-w-sm">
              Kolkata wedding planning, event management, and in-house catering company serving Eastern India and destination celebrations. Planned, cooked, and run by one team since {COMPANY_INFO.foundedYear}.
            </p>

            <div className="flex items-center space-x-2 pt-1 text-[#524C44]">
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-[#FAF7F2] hover:text-[#6E1423] hover:bg-[#FAF2F3] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-[#FAF7F2] hover:text-[#6E1423] hover:bg-[#FAF2F3] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-[#FAF7F2] hover:text-[#6E1423] hover:bg-[#FAF2F3] flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-[#FAF7F2] hover:text-[#6E1423] hover:bg-[#FAF2F3] flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Services (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F1D1A]">
              Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#524C44]">
              <li>
                <Link to="/catering" className="hover:text-[#6E1423] transition-colors">
                  In-House Catering
                </Link>
              </li>
              <li>
                <Link to="/wedding-planner" className="hover:text-[#6E1423] transition-colors">
                  Wedding Planning
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-[#6E1423] transition-colors">
                  Event Management
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#6E1423] transition-colors">
                  About Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#6E1423] transition-colors">
                  Check Dates
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Desk (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F1D1A]">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-[#524C44]">
              <div>
                <span className="text-[#7D756A] block">Phone & WhatsApp:</span>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                  className="font-bold text-[#1F1D1A] hover:text-[#6E1423] text-sm block"
                >
                  {COMPANY_INFO.displayPhone}
                </a>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Royal%20Enterprise,%20I%20would%20like%20to%20discuss%20an%20event.`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-700 font-semibold hover:underline inline-flex items-center space-x-1 mt-0.5"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
              <div>
                <span className="text-[#7D756A] block">Email:</span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="font-semibold text-[#1F1D1A] hover:text-[#6E1423]"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div>
                <span className="text-[#7D756A] block">Desk Hours:</span>
                <span>{COMPANY_INFO.officeHours}</span>
              </div>
            </div>
          </div>

          {/* Column 4: Address & Maps (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F1D1A]">
              Kolkata Office
            </h4>
            <div className="flex items-start space-x-2 text-xs text-[#524C44] leading-relaxed">
              <MapPin className="w-4 h-4 text-[#6E1423] shrink-0 mt-0.5" />
              <div>
                <span>{COMPANY_INFO.address}</span>
                <a
                  href={COMPANY_INFO.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#6E1423] font-semibold hover:underline inline-flex items-center space-x-1 mt-1 block"
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
        <div className="pt-8 border-t border-[#E5DED3] flex flex-col sm:flex-row items-center justify-between text-xs text-[#7D756A] gap-4">
          <p>© {new Date().getFullYear()} Royal Enterprise. Rashbehari Avenue, Kolkata, West Bengal.</p>
          <div className="flex items-center space-x-4">
            <Link to="/about" className="hover:text-[#6E1423]">Our Story</Link>
            <span>•</span>
            <Link to="/catering" className="hover:text-[#6E1423]">Sample Menus</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-[#6E1423]">Contact Us</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
