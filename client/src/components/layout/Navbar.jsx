import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';

const Navbar = ({ onOpenQuoteModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Utility Bar: Clear Kolkata Helpline & WhatsApp */}
      <div className="bg-[#540D1A] text-white text-xs py-1.5 px-4 sm:px-6 border-b border-white/10 hidden md:block">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3 text-white/90">
            <span className="font-medium text-amber-200">Kolkata & Eastern India</span>
            <span className="text-white/40">•</span>
            <span>Weddings, Corporate Events & In-House Catering</span>
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
              className="inline-flex items-center space-x-1.5 hover:text-amber-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span>Call: {COMPANY_INFO.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-200 ${
          scrolled
            ? 'bg-white text-[#1F1D1A] shadow-md py-3 border-b border-[#E5DED3]'
            : 'bg-[#FAF7F2] text-[#1F1D1A] py-3.5 border-b border-[#E5DED3]'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2.5 group">
              <div className="w-9 h-9 rounded bg-[#6E1423] text-white flex items-center justify-center font-serif text-lg font-bold shadow-sm">
                R
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1F1D1A] leading-tight group-hover:text-[#6E1423] transition-colors">
                  Royal Enterprise
                </span>
                <span className="text-[10px] uppercase tracking-[0.16em] font-medium text-[#7D756A]">
                  Kolkata • Events & Catering
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links: Short, single line, no wrapping */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-[14px] font-medium whitespace-nowrap py-1 transition-colors relative ${
                      isActive
                        ? 'text-[#6E1423] font-semibold'
                        : 'text-[#3B3630] hover:text-[#6E1423]'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#6E1423] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Buttons: Single-line "Get a quote" */}
            <div className="hidden lg:flex items-center space-x-3">
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
                className="btn-maroon px-5 py-2 text-xs font-semibold tracking-wide whitespace-nowrap shadow-sm"
              >
                Get a quote
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="btn-maroon px-3 py-1.5 text-xs font-semibold"
              >
                Get a quote
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-[#1F1D1A] hover:text-[#6E1423]"
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
        <div className="lg:hidden bg-white border-b border-[#E5DED3] px-6 pt-4 pb-6 space-y-4 shadow-xl text-[#1F1D1A]">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#FAF2F3] text-[#6E1423] font-semibold'
                      : 'text-[#3B3630] hover:text-[#6E1423]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-[#E5DED3] space-y-2.5">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full btn-maroon py-3 text-xs uppercase font-semibold"
            >
              Get a quote
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
