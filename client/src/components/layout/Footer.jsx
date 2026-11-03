import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';

const Footer = ({ onOpenQuoteModal }) => {
  return (
    <footer className="bg-white text-[#374151] pt-16 pb-12 border-t border-slate-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Main 4-Column Grid (WedMeGood Screenshot 4 Reference) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14">
          
          {/* Column 1: Brand & Atelier */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2.5 group">
              <div className="w-8 h-8 rounded-full bg-roseBrand text-white flex items-center justify-center shadow-sm">
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-[#1F2937]">
                Royal Enterprise
              </span>
            </Link>
            <p className="text-xs sm:text-[13px] text-[#6B7280] font-light leading-relaxed">
              India's premier luxury event and wedding atelier. Conceptualizing bespoke celebrations, artisanal banquets, and grand stage engineering with timeless majesty.
            </p>
            <div className="flex items-center space-x-2.5 pt-1 text-[#6B7280]">
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-roseBrand hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-roseBrand hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-roseBrand hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-roseBrand hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Divisions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F2937]">
              Atelier Divisions
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px] text-[#4B5563]">
              <li>
                <Link to="/events" className="hover:text-roseBrand transition-colors flex items-center">
                  <span>Event Management</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-50" />
                </Link>
              </li>
              <li>
                <Link to="/catering" className="hover:text-roseBrand transition-colors flex items-center">
                  <span>Artisanal Gourmet Catering</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-50" />
                </Link>
              </li>
              <li>
                <Link to="/wedding-planner" className="hover:text-roseBrand transition-colors flex items-center">
                  <span>Turnkey Wedding Planning</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-50" />
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-roseBrand transition-colors flex items-center">
                  <span>Our Heritage & Standards</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-50" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Channels (WedMeGood Screenshot 4 Style) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F2937]">
              Contact Concierge Desk
            </h4>
            <div className="space-y-2.5 text-xs text-[#4B5563]">
              <div>
                <span className="text-[#9CA3AF] text-[11px] block">For Wedding & Event Enquiries:</span>
                <a href={`mailto:${COMPANY_INFO.email}`} className="font-medium text-[#1F2937] hover:text-roseBrand">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div>
                <span className="text-[#9CA3AF] text-[11px] block">Telephone Helpline:</span>
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="font-bold text-[#1F2937] hover:text-roseBrand">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div>
                <span className="text-[#9CA3AF] text-[11px] block">Operating Hours:</span>
                <span>{COMPANY_INFO.officeHours}</span>
              </div>
            </div>
          </div>

          {/* Column 4: Corporate Studio Address */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F2937]">
              Executive Studio
            </h4>
            <div className="flex items-start space-x-2 text-xs text-[#4B5563] leading-relaxed">
              <MapPin className="w-4 h-4 text-roseBrand shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.address}</span>
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="w-full btn-brand py-2 text-xs uppercase font-semibold rounded-md shadow-sm"
              >
                Plan An Event
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B7280] gap-4">
          <p>© {new Date().getFullYear()} Royal Enterprise. All rights reserved. Kolkata, India.</p>
          <div className="flex items-center space-x-4">
            <Link to="/about" className="hover:text-roseBrand">Privacy Policy</Link>
            <span>•</span>
            <Link to="/about" className="hover:text-roseBrand">Terms of Service</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-roseBrand">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;