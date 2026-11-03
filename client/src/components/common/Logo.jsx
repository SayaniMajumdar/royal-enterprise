import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Royal Enterprise Official Vector Logo Component
 * Supports light & dark modes automatically with SVG vector rendering
 */
const Logo = ({
  variant = 'full', // 'full' | 'icon' | 'stacked'
  className = '',
  iconSize = 'h-10 w-10',
  linkToHome = true,
}) => {
  const Emblem = (
    <div className={`relative shrink-0 ${iconSize} flex items-center justify-center`}>
      <img
        src="/logo-icon.svg"
        alt="Royal Enterprise Imperial Seal"
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
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1F1D1A] dark:text-[#FAF7F2] leading-tight transition-colors">
            Royal <span className="text-[#6E1423] dark:text-[#F59E0B]">Enterprise</span>
          </span>

          {/* Subtitle / Divisions */}
          <div className="flex items-center space-x-1.5 mt-0.5">
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D97706] dark:text-[#FCD34D]">
              Events • Catering • Weddings
            </span>
          </div>

          {variant === 'stacked' && (
            <span className="text-[9px] uppercase tracking-[0.16em] font-medium text-[#7D756A] dark:text-[#A89F91]">
              Kolkata • Est. 2014
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (linkToHome) {
    return (
      <Link to="/" className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6E1423] rounded">
        {Content}
      </Link>
    );
  }

  return Content;
};

export default Logo;
