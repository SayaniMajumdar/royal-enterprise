import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';

const Footer = ({ onOpenQuoteModal }) => {
  return (
    <footer className="bg-charcoal text-[#FFF8F0] pt-20 pb-12 border-t border-white/10">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Brand & Atelier Story */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-8 h-8 rounded-full border border-gold-light/60 flex items-center justify-center text-gold-light bg-black/30">
                <Star className="w-3.5 h-3.5 fill-current stroke-[1.5]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-medium tracking-[0.2em] text-[#FFF8F0] uppercase">
                  Royal Enterprise
                </span>
                <span className="text-[8px] uppercase tracking-[0.28em] text-gold-light">
                  Wedding & Event Atelier
                </span>
              </div>
            </Link>
            <p className="text-xs sm:text-[13px] text-white/70 font-light leading-relaxed">
              India's premier luxury event and wedding atelier. Conceptualizing bespoke celebrations, artisanal banquets, and grand stage engineering with timeless majesty.
            </p>
            <div className="flex items-center space-x-3 pt-2 text-white/60">
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-gold-light hover:text-gold-light transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-gold-light hover:text-gold-light transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-gold-light hover:text-gold-light transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href={COMPANY_INFO.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-gold-light hover:text-gold-light transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Divisions */}
          <div className="space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-gold-light font-medium">
              Atelier Divisions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-white/70 font-light">
              <li>
                <Link to="/events" className="hover:text-gold-light transition-colors flex items-center">
                  <span>Event Management</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-60" />
                </Link>
              </li>
              <li>
                <Link to="/catering" className="hover:text-gold-light transition-colors flex items-center">
                  <span>Artisanal Catering</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-60" />
                </Link>
              </li>
              <li>
                <Link to="/wedding-planner" className="hover:text-gold-light transition-colors flex items-center">
                  <span>Turnkey Wedding Planning</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-60" />
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-light transition-colors flex items-center">
                  <span>Our Heritage & Vision</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-60" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Concierge */}
          <div className="space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-gold-light font-medium">
              Concierge Desk
            </h4>
            <ul className="space-y-3 text-xs sm:text-[13px] text-white/70 font-light">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-gold-light shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-gold-light shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-gold-light">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-gold-light shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-gold-light">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Private Consultation */}
          <div className="space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-gold-light font-medium">
              Private Consultation
            </h4>
            <p className="text-xs text-white/70 font-light leading-relaxed">
              Book a one-on-one session with our senior event architects at our Kolkata lounge or via video.
            </p>
            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="w-full btn-gold py-2.5 text-[11px] tracking-[0.18em]"
            >
              Request Meeting
            </button>
            <p className="text-[10px] text-white/50 italic text-center pt-1">
              Available 7 days a week • 9 AM – 9 PM IST
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & "Crafted in Kolkata" line */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 tracking-wider">
          <p>© {new Date().getFullYear()} Royal Enterprise. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 font-serif italic text-gold-light/80">
            Crafted with passion in Kolkata • Sovereign Hospitality
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
