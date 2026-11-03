import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Star, Phone, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';

const Navbar = ({ onOpenQuoteModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
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

  // Determine navbar appearance: transparent over hero when at top of homepage, solid ivory otherwise
  const isTransparent = isHomePage && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isTransparent
            ? 'bg-gradient-to-b from-black/70 via-black/40 to-transparent py-5'
            : 'bg-[#F6F3EE]/95 backdrop-blur-md border-b border-[#E8E1D5] py-3.5 shadow-sm'
        }`}
      >
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Logo in Theevexa Style: Circular Star/Crown Emblem + Letterspaced Title */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${
                  isTransparent
                    ? 'border-gold-light/60 text-gold-light bg-black/20'
                    : 'border-gold-base/70 text-gold-dark bg-[#FFFDF9]'
                }`}
              >
                <Star className="w-4 h-4 fill-current stroke-[1.5]" />
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-serif text-lg sm:text-[19px] font-medium tracking-[0.22em] uppercase leading-none transition-colors ${
                    isTransparent ? 'text-white' : 'text-[#141414]'
                  }`}
                >
                  Royal Enterprise
                </span>
                <span
                  className={`text-[8.5px] uppercase tracking-[0.28em] font-medium mt-1 transition-colors ${
                    isTransparent ? 'text-gold-light/90' : 'text-gold-dark'
                  }`}
                >
                  Wedding & Event Atelier
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links (Theevexa letterspaced uppercase) */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-[11.5px] uppercase tracking-[0.2em] font-medium py-1 transition-colors duration-200 relative ${
                      isTransparent
                        ? isActive
                          ? 'text-gold-light font-semibold'
                          : 'text-white/90 hover:text-gold-light'
                        : isActive
                        ? 'text-maroon font-semibold'
                        : 'text-[#3A352F] hover:text-gold-dark'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span
                        className={`absolute -bottom-1 left-0 right-0 h-[1.5px] ${
                          isTransparent ? 'bg-gold-light' : 'bg-maroon'
                        }`}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right CTA: Deep Maroon Pill / Rectangular Button (Theevexa PLAN WEDDING signature) */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="bg-maroon hover:bg-maroon-dark text-[#FFF8F0] px-6 py-2.5 rounded-[3px] text-[11px] uppercase tracking-[0.2em] font-medium shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                Plan Event
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center space-x-2.5">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="bg-maroon text-[#FFF8F0] px-3.5 py-1.5 rounded-[2px] text-[10px] uppercase tracking-[0.18em] font-medium"
              >
                Plan
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 transition-colors ${
                  isTransparent ? 'text-white hover:text-gold-light' : 'text-[#141414] hover:text-maroon'
                }`}
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-[#F6F3EE] border-b border-[#E8E1D5] px-6 pt-4 pb-6 space-y-4 shadow-xl">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3 py-2.5 rounded-[2px] text-xs font-medium tracking-[0.18em] uppercase transition-colors ${
                      isActive
                        ? 'bg-maroon/10 text-maroon font-semibold'
                        : 'text-[#3A352F] hover:text-gold-dark'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
            <div className="pt-3 border-t border-[#E8E1D5] space-y-3">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full bg-maroon text-[#FFF8F0] py-3 rounded-[3px] text-xs uppercase tracking-[0.2em] font-medium"
              >
                Plan Your Event
              </button>
              <div className="flex items-center justify-center space-x-4 text-xs text-[#6B645C] pt-1">
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-center space-x-1.5 hover:text-maroon"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-dark" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Floating Bottom Quick Action Bar on Mobile (56px high, as requested in Part 4.8) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border-t border-[#E8E1D5] py-2.5 px-4 flex items-center justify-between lg:hidden shadow-lg">
        <a
          href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
          className="flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-[3px] border border-[#D5CCC0] text-xs text-[#141414] font-medium uppercase tracking-wider mr-2 active:bg-slate-100"
        >
          <Phone className="w-3.5 h-3.5 text-gold-dark" />
          <span>Call Us</span>
        </a>
        <button
          type="button"
          onClick={onOpenQuoteModal}
          className="flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-[3px] bg-maroon text-[#FFF8F0] text-xs font-medium uppercase tracking-wider active:bg-maroon-dark"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Enquire</span>
        </button>
      </div>
    </>
  );
};

export default Navbar;
