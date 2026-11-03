import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Crown, PhoneCall, Sparkles } from 'lucide-react';
import Button from '../common/Button';
import { COMPANY_INFO } from '../../data/mockData';

const Navbar = ({ onOpenQuoteModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
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
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#050810] border-b border-gold-500/15 text-[11px] text-slate-300 py-2 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <Sparkles className="w-3.5 h-3.5 text-gold-400/80" />
            <span className="tracking-[0.08em] text-slate-300 font-normal">Bespoke Celebrations & Artisanal Banquets</span>
          </div>
          <div className="flex items-center space-x-6 text-slate-300">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center space-x-1.5 hover:text-gold-300 transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-gold-400" />
              <span className="tracking-wide">{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hover:text-gold-300 transition-colors tracking-wide"
            >
              {COMPANY_INFO.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#060A13]/95 backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.8)] border-b border-gold-500/15 py-3'
            : 'bg-[#060A13]/85 backdrop-blur-sm border-b border-slate-800/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3.5 group">
              <div className="w-9 h-9 rounded-[2px] bg-gradient-to-b from-navy-800 to-navy-950 border border-gold-400/50 flex items-center justify-center shadow-md group-hover:border-gold-300 transition-colors">
                <Crown className="w-5 h-5 text-gold-400 group-hover:scale-105 transition-transform" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-[19px] font-bold tracking-[0.16em] text-slate-100 uppercase group-hover:text-gold-300 transition-colors leading-tight">
                  Royal Enterprise
                </span>
                <span className="text-[8.5px] uppercase tracking-[0.26em] text-gold-400/90 font-medium">
                  Events • Catering • Weddings
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative text-[11px] uppercase tracking-[0.14em] font-semibold py-1.5 transition-colors duration-200 ${
                      isActive
                        ? 'text-gold-300'
                        : 'text-slate-300 hover:text-gold-300'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-gold-500/40 via-gold-400 to-gold-500/40" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="primary"
                size="sm"
                onClick={onOpenQuoteModal}
              >
                Get a Quote
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center space-x-3">
              <Button
                variant="primary"
                size="sm"
                onClick={onOpenQuoteModal}
                className="py-1 px-3 text-[10px]"
              >
                Quote
              </Button>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-300 hover:text-gold-400 p-2 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-[#070B16] border-b border-gold-500/20 px-5 pt-4 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200 shadow-2xl">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3 py-2.5 rounded-[2px] text-xs font-semibold tracking-[0.14em] uppercase transition-colors ${
                      isActive
                        ? 'bg-gold-500/10 text-gold-300 border-l-2 border-gold-400'
                        : 'text-slate-300 hover:bg-slate-900/60 hover:text-gold-300'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  setIsOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full"
              >
                Get a Quote
              </Button>
              <div className="text-center text-xs text-slate-400 pt-1">
                Direct Inquiries: <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="text-gold-400 hover:underline">{COMPANY_INFO.phone}</a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
