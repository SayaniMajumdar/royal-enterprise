import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Star, Phone, MapPin, ChevronDown } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';

const Navbar = ({ onOpenQuoteModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Event Management', path: '/events' },
    { name: 'Catering', path: '/catering' },
    { name: 'Wedding Planner', path: '/wedding-planner' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar (WedMeGood Screenshot 1 Reference) */}
      <div className="bg-[#540D1A] text-white text-[11px] sm:text-xs py-1.5 px-4 sm:px-6 border-b border-white/10 hidden md:block">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="font-light tracking-wide text-white/90">
              Kolkata's Premier Luxury Event, Banquet & Wedding Atelier
            </span>
            <div className="inline-flex items-center space-x-1 bg-white/15 px-2.5 py-0.5 rounded-[3px] text-white/95">
              <MapPin className="w-3 h-3 text-gold-light" />
              <span>Kolkata & Pan India</span>
              <ChevronDown className="w-3 h-3 ml-0.5 opacity-70" />
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center space-x-1.5 hover:text-gold-light transition-colors"
            >
              <Phone className="w-3 h-3 text-gold-light" />
              <span>Direct Desk: {COMPANY_INFO.phone}</span>
            </a>
            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="hover:text-gold-light transition-colors underline font-medium"
            >
              Request Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white text-[#1F2937] shadow-md py-3 border-b border-slate-200'
            : 'bg-white/95 backdrop-blur-md text-[#1F2937] py-3.5 border-b border-slate-200/80 shadow-sm'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Logo: Royal Enterprise with Wedding Knot / Star Emblem */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-9 h-9 rounded-full bg-roseBrand text-white flex items-center justify-center shadow-sm">
                <Star className="w-4 h-4 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1F2937] group-hover:text-roseBrand transition-colors leading-none">
                  Royal Enterprise
                </span>
                <span className="text-[9px] uppercase tracking-[0.24em] font-semibold text-roseBrand mt-1">
                  Events • Catering • Weddings
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-[13px] font-medium tracking-wide py-1 transition-colors duration-150 relative ${
                      isActive
                        ? 'text-roseBrand font-semibold'
                        : 'text-[#374151] hover:text-roseBrand'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-roseBrand rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right CTA Button (WedMeGood Pink Button) */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="btn-brand px-6 py-2.5 text-xs uppercase tracking-wider font-semibold shadow-sm"
              >
                Plan An Event
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="btn-brand px-3.5 py-1.5 text-xs uppercase font-medium"
              >
                Plan
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-[#374151] hover:text-roseBrand"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 pt-4 pb-6 space-y-4 shadow-xl text-[#1F2937]">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2.5 rounded-[4px] text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-roseBrand-light text-roseBrand font-semibold'
                      : 'text-[#374151] hover:text-roseBrand'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-slate-100 space-y-3">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full btn-brand py-3 text-xs uppercase font-semibold"
            >
              Plan Your Event
            </button>
            <div className="flex items-center justify-center space-x-4 text-xs text-[#6B7280] pt-1">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center space-x-1.5 hover:text-roseBrand"
              >
                <Phone className="w-3.5 h-3.5 text-roseBrand" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom Quick Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 py-2.5 px-4 flex items-center justify-between lg:hidden shadow-lg">
        <a
          href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
          className="flex-1 flex items-center justify-center space-x-2 py-2.5 px-3 rounded-[4px] border border-slate-300 text-xs text-[#374151] font-semibold uppercase tracking-wider mr-2 active:bg-slate-100"
        >
          <Phone className="w-3.5 h-3.5 text-roseBrand" />
          <span>Call Desk</span>
        </a>
        <button
          type="button"
          onClick={onOpenQuoteModal}
          className="flex-1 flex items-center justify-center space-x-2 py-2.5 px-3 rounded-[4px] btn-brand text-xs font-semibold uppercase tracking-wider shadow-sm"
        >
          <span>Enquire Now</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;