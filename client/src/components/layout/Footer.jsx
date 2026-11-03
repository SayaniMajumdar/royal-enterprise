import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, Phone, Mail, MapPin, Clock, ArrowRight, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import { COMPANY_INFO, DIVISIONS } from '../../data/mockData';

const Footer = ({ onOpenQuoteModal }) => {
  return (
    <footer className="bg-[#04070E] text-slate-300 border-t border-gold-500/15 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3.5 group">
              <div className="w-9 h-9 rounded-[2px] bg-gradient-to-b from-navy-800 to-navy-950 border border-gold-400/50 flex items-center justify-center shadow-md">
                <Crown className="w-5 h-5 text-gold-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-[0.16em] text-slate-100 uppercase">
                  Royal Enterprise
                </span>
                <span className="text-[8.5px] uppercase tracking-[0.24em] text-gold-400 font-medium">
                  Luxury • Integrity • Grandeur
                </span>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
              India’s premier luxury brand uniting world-class event management, artisanal gourmet catering, and breathtaking bespoke wedding planning.
            </p>
            <div className="flex items-center space-x-2.5 pt-2">
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-[2px] bg-navy-900/80 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-gold-300 hover:border-gold-500/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-[2px] bg-navy-900/80 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-gold-300 hover:border-gold-500/40 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-[2px] bg-navy-900/80 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-gold-300 hover:border-gold-500/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href={COMPANY_INFO.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-[2px] bg-navy-900/80 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-gold-300 hover:border-gold-500/40 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Business Divisions */}
          <div>
            <h4 className="font-serif text-xs font-bold text-slate-100 uppercase tracking-[0.18em] mb-4 flex items-center">
              <span className="w-1.5 h-1.5 bg-gold-400/80 mr-2.5 rotate-45"></span>
              Our Divisions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              <li>
                <Link to="/events" className="text-slate-400 hover:text-gold-300 transition-colors flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Event Management
                </Link>
              </li>
              <li>
                <Link to="/catering" className="text-slate-400 hover:text-gold-300 transition-colors flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Catering Services
                </Link>
              </li>
              <li>
                <Link to="/wedding-planner" className="text-slate-400 hover:text-gold-300 transition-colors flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Wedding Planner
                </Link>
              </li>
              <li>
                <Link to="/wedding-planner#complete-package" className="text-slate-400 hover:text-gold-300 transition-colors flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Complete Wedding Package
                </Link>
              </li>
              <li>
                <Link to="/events#stage-design" className="text-slate-400 hover:text-gold-300 transition-colors flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Stage & Set Production
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-serif text-xs font-bold text-slate-100 uppercase tracking-[0.18em] mb-4 flex items-center">
              <span className="w-1.5 h-1.5 bg-gold-400/80 mr-2.5 rotate-45"></span>
              Royal Enterprise
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              <li>
                <Link to="/" className="text-slate-400 hover:text-gold-300 transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-gold-300 transition-colors">
                  About Our Vision
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-gold-300 transition-colors">
                  Contact & Locations
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenQuoteModal}
                  className="text-gold-400/90 hover:text-gold-300 transition-colors text-left"
                >
                  Request a Formal Quote
                </button>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-gold-300 transition-colors">
                  Media & Press Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-xs font-bold text-slate-100 uppercase tracking-[0.18em] mb-4 flex items-center">
              <span className="w-1.5 h-1.5 bg-gold-400/80 mr-2.5 rotate-45"></span>
              Concierge Desk
            </h4>
            <ul className="space-y-3 text-xs sm:text-[13px] text-slate-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-3.5 h-3.5 text-gold-400/80 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-3.5 h-3.5 text-gold-400/80 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-gold-300 transition-colors">{COMPANY_INFO.phone}</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-3.5 h-3.5 text-gold-400/80 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-gold-300 transition-colors break-all">{COMPANY_INFO.email}</a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-3.5 h-3.5 text-gold-400/80 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.officeHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="pt-8 mt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-4 sm:space-y-0">
          <p>
            &copy; {new Date().getFullYear()} <span className="text-gold-400/90 font-medium">Royal Enterprise</span>. All rights reserved.
          </p>
          <p className="tracking-[0.06em]">
            Crafted for Extraordinary Celebrations & Imperial Banquets
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
