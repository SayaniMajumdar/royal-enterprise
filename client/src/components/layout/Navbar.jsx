import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';
import Logo from '../common/Logo';
import ThemeToggle from '../common/ThemeToggle';

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
      <div className="bg-[#540D1A] dark:bg-[#3E0812] text-white text-xs py-1.5 px-4 sm:px-6 border-b border-white/10 dark:border-white/5 hidden md:block transition-colors">
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
            ? 'bg-white dark:bg-[#1C1917] text-[#1F1D1A] dark:text-[#F5EFE6] shadow-md dark:shadow-dark-card py-2.5 sm:py-3 border-b border-[#E5DED3] dark:border-[#38312B]'
            : 'bg-[#FAF7F2] dark:bg-[#141210] text-[#1F1D1A] dark:text-[#F5EFE6] py-3 sm:py-3.5 border-b border-[#E5DED3] dark:border-[#38312B]'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* New Official Royal Enterprise Logo */}
            <Logo iconSize="h-10 w-10 sm:h-11 sm:w-11" />

            {/* Desktop Navigation Links: Short, single line, no wrapping */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-[14px] font-medium whitespace-nowrap py-1 transition-colors relative ${
                      isActive
                        ? 'text-[#6E1423] dark:text-[#F59E0B] font-semibold'
                        : 'text-[#3B3630] dark:text-[#D5CCC0] hover:text-[#6E1423] dark:hover:text-[#F59E0B]'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#6E1423] dark:bg-[#F59E0B] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Buttons: Theme Toggle & "Get a quote" */}
            <div className="hidden lg:flex items-center space-x-3">
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
                className="btn-maroon px-5 py-2 text-xs font-semibold tracking-wide whitespace-nowrap shadow-sm"
              >
                Get a quote
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
                Get quote
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-1.5 text-[#1F1D1A] dark:text-[#F5EFE6] hover:text-[#6E1423] dark:hover:text-[#F59E0B]"
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
        <div className="lg:hidden bg-white dark:bg-[#1C1917] border-b border-[#E5DED3] dark:border-[#38312B] px-6 pt-4 pb-6 space-y-4 shadow-xl text-[#1F1D1A] dark:text-[#F5EFE6]">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#FAF2F3] dark:bg-[#2A181C] text-[#6E1423] dark:text-[#F59E0B] font-semibold'
                      : 'text-[#3B3630] dark:text-[#D5CCC0] hover:text-[#6E1423] dark:hover:text-[#F59E0B]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-[#E5DED3] dark:border-[#38312B] space-y-2.5">
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
