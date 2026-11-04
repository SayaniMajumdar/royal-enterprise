import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Royal Enterprise Official Monogram Crest Logo Component
 * Incorporates the authentic royal crowned monogram crest with interlocking R & E,
 * deep royal burgundy accents, and antique gold filigree.
 */
const Logo = ({
  variant = 'full', // 'full' | 'icon' | 'stacked' | 'crest'
  className = '',
  iconSize = 'h-11 w-11 sm:h-12 sm:w-12',
  linkToHome = true,
}) => {
  const Emblem = (
    <div className={`relative shrink-0 ${iconSize} flex items-center justify-center`}>
      <img
        src="/logo-crest.png"
        alt="Royal Enterprise Monogram Crest"
        className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-200 group-hover:scale-105"
      />
    </div>
  );

  const Content = (
    <div className={`inline-flex items-center space-x-3 group ${className}`}>
      {Emblem}

      {variant !== 'icon' && (
        <div className="flex flex-col text-left">
          {/* Main Brand Title */}
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2B2625] dark:text-[#FAF8F5] leading-tight transition-colors">
            Royal <span className="text-[#6B1D2F] dark:text-[#C5A059]">Enterprise</span>
          </span>

          {/* Subtitle / Divisions */}
          <div className="flex items-center space-x-1.5 mt-0.5">
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-semibold text-[#C5A059] dark:text-[#E0CFA6]">
              Events • Catering • Weddings
            </span>
          </div>

          {variant === 'stacked' && (
            <span className="text-[9px] uppercase tracking-[0.16em] font-medium text-[#827771] dark:text-[#A8A29E]">
              Kolkata • Est. 2014
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (linkToHome) {
    return (
      <Link to="/" className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B1D2F] rounded">
        {Content}
      </Link>
    );
  }

  return Content;
};

export default Logo;
