import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';
import Logo from '../common/Logo';
import ThemeToggle from '../common/ThemeToggle';

const Navbar = ({ onOpenQuoteModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

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
    { name: 'Weddings', path: '/wedding-planner' },
    { name: 'Events', path: '/events' },
    { name: 'Catering', path: '/catering' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Scrolled state

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar: Clear Kolkata Helpline & WhatsApp */}
      <div className="text-xs py-1.5 px-4 sm:px-6 border-b transition-colors duration-300 hidden md:block bg-[#4A101D] dark:bg-[#24080E] text-white border-white/10">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3 text-white/90">
            <span className="font-medium text-[#E0CFA6]">Kolkata & Eastern India</span>
            <span className="text-white/40">•</span>
            <span>Weddings, Corporate Galas & In-House Catering</span>
          </div>
          <div className="flex items-center space-x-5">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Royal%20Enterprise,%20I%20would%20like%20to%20discuss%20an%20event.`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1.5 text-emerald-300 hover:text-white transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp: {COMPANY_INFO.displayPhone}</span>
            </a>
            <span className="text-white/30">|</span>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center space-x-1.5 hover:text-[#E0CFA6] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E0CFA6]" />
              <span>Call: {COMPANY_INFO.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 border-b ${
          scrolled
            ? 'bg-[#FAF8F5]/98 dark:bg-[#141210]/98 backdrop-blur-md text-[#2B2625] dark:text-[#FAF8F5] shadow-sm py-3 sm:py-3.5 border-[#E8E0D5] dark:border-[#38312B]'
            : 'bg-[#FAF8F5]/95 dark:bg-[#141210]/95 backdrop-blur-md text-[#2B2625] dark:text-[#FAF8F5] py-3.5 sm:py-4 border-[#E8E0D5] dark:border-[#38312B]'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Logo Crest Component */}
            <Logo iconSize="h-11 w-11 sm:h-12 sm:w-12" />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-[13.5px] uppercase tracking-[0.14em] font-medium whitespace-nowrap py-1 transition-all duration-200 relative group ${
                      isActive
                        ? 'text-[#6B1D2F] dark:text-[#E0CFA6] font-semibold'
                        : 'text-[#5A524E] dark:text-[#D4CCC2] hover:text-[#6B1D2F] dark:hover:text-[#E0CFA6]'
                    }`}
                  >
                    {link.name}
                    {isActive ? (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#C5A059] rounded-full shadow-sm" />
                    ) : (
                      <span className="absolute -bottom-1 left-1/2 right-1/2 h-[1.5px] bg-[#C5A059] rounded-full transition-all duration-300 group-hover:left-0 group-hover:right-0 opacity-0 group-hover:opacity-100" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3.5">
              <ThemeToggle size="md" />

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Royal%20Enterprise,%20I%20would%20like%20to%20discuss%20an%20event.`}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp px-3.5 py-2 text-xs font-semibold inline-flex items-center space-x-1.5 shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="btn-maroon px-5 py-2.5 text-xs font-semibold tracking-wide whitespace-nowrap shadow-sm"
              >
                Plan Your Event
              </button>
            </div>

            {/* Mobile Actions: Theme Toggle + Quote + Menu */}
            <div className="flex lg:hidden items-center space-x-2">
              <ThemeToggle size="sm" />

              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="btn-maroon px-3 py-1.5 text-xs font-semibold"
              >
                Quote
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg transition-colors text-[#2B2625] dark:text-[#FAF8F5] hover:bg-[#FAF8F5] dark:hover:bg-[#1C1917]"
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
        <div className="lg:hidden bg-white/98 dark:bg-[#141210]/98 backdrop-blur-lg border-b border-[#E8E0D5] dark:border-[#38312B] px-6 pt-4 pb-6 space-y-4 shadow-2xl text-[#2B2625] dark:text-[#FAF8F5]">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#FAF2F3] dark:bg-[#28080F] text-[#6B1D2F] dark:text-[#E0CFA6] font-semibold border-l-2 border-[#6B1D2F] dark:border-[#C5A059]'
                      : 'text-[#5A524E] dark:text-[#D4CCC2] hover:bg-[#FAF8F5] dark:hover:bg-[#1C1917]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-[#E8E0D5] dark:border-[#38312B] space-y-2.5">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full btn-maroon py-3 text-xs uppercase font-semibold"
            >
              Plan Your Event
            </button>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Royal%20Enterprise,%20I%20would%20like%20to%20discuss%20an%20event.`}
              target="_blank"
              rel="noreferrer"
              className="w-full btn-whatsapp py-2.5 text-xs font-semibold flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;