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
      <div className="bg-navy-950 border-b border-gold-500/20 text-[11px] text-slate-300 py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="tracking-wide">Bespoke Celebrations & Artisanal Banquets</span>
          </div>
          <div className="flex items-center space-x-6 text-slate-300">
            <span className="flex items-center space-x-1.5">
              <PhoneCall className="w-3 h-3 text-gold-400" />
              <span>{COMPANY_INFO.phone}</span>
            </span>
            <span className="text-slate-400">|</span>
            <span>{COMPANY_INFO.email}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-navy-950/95 backdrop-blur-md shadow-lg border-b border-gold-500/20 py-3'
            : 'bg-navy-950/80 backdrop-blur-sm border-b border-slate-800/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-gold-glow group-hover:scale-105 transition-transform">
                <Crown className="w-6 h-6 text-navy-950" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-slate-100 uppercase group-hover:text-gold-300 transition-colors">
                  Royal Enterprise
                </span>
                <span className="text-[9px] uppercase tracking-widest text-gold-400 font-medium">
                  Events • Catering • Weddings
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative text-xs uppercase tracking-wider font-medium py-1 transition-colors duration-200 ${
                      isActive
                        ? 'text-gold-400 font-semibold'
                        : 'text-slate-300 hover:text-gold-300'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-400 shadow-gold-glow" />
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
                className="shadow-gold-glow"
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
                className="py-1.5 px-3 text-[11px]"
              >
                Quote
              </Button>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-300 hover:text-gold-400 p-2 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-navy-950/98 border-b border-gold-500/20 px-4 pt-4 pb-6 space-y-3 animate-in slide-in-from-top-3 duration-200">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3 py-2.5 rounded-sm text-sm font-medium tracking-wide uppercase transition-colors ${
                      isActive
                        ? 'bg-gold-500/15 text-gold-400 border-l-2 border-gold-400'
                        : 'text-slate-300 hover:bg-slate-900 hover:text-gold-300'
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
              <div className="text-center text-xs text-slate-400 pt-2">
                Direct Inquiries: <span className="text-gold-400">{COMPANY_INFO.phone}</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
