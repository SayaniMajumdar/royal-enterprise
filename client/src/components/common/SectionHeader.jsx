import React from 'react';

const SectionHeader = ({
  badge,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = '',
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[align];

  const isLight = theme === 'light';

  return (
    <div className={`flex flex-col max-w-3xl mb-12 md:mb-16 ${alignmentClasses} ${className}`}>
      {badge && (
        <div className="inline-flex items-center space-x-2.5 mb-3.5">
          <span className={`w-4 h-px ${isLight ? 'bg-[#C5A059]/60 dark:bg-[#D4AF37]/60' : 'bg-[#D4AF37]/50'}`} />
          <span
            className={`text-[10.5px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase ${
              isLight ? 'text-[#6B1D2F] dark:text-[#E0CFA6]' : 'text-[#E0CFA6]'
            }`}
          >
            {badge}
          </span>
          <span className={`w-4 h-px ${isLight ? 'bg-[#C5A059]/60 dark:bg-[#D4AF37]/60' : 'bg-[#D4AF37]/50'}`} />
        </div>
      )}

      <h2
        className={`font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold tracking-tight leading-[1.2] ${
          isLight ? 'text-[#2B2625] dark:text-[#FAF8F5]' : 'text-[#FAF8F5]'
        }`}
      >
        {title}
      </h2>

      {/* Decorative Minimal Architectural Gold Divider */}
      <div className="flex items-center space-x-2.5 my-4">
        <div
          className={`w-8 md:w-12 h-px bg-gradient-to-r from-transparent ${
            isLight ? 'to-[#C5A059]/60 dark:to-[#D4AF37]/60' : 'to-[#D4AF37]/50'
          }`}
        />
        <div
          className={`w-1.5 h-1.5 rotate-45 ${
            isLight ? 'bg-[#C5A059] dark:bg-[#D4AF37]' : 'bg-[#D4AF37]/80'
          }`}
        />
        <div
          className={`w-8 md:w-12 h-px bg-gradient-to-l from-transparent ${
            isLight ? 'to-[#C5A059]/60 dark:to-[#D4AF37]/60' : 'to-[#D4AF37]/50'
          }`}
        />
      </div>

      {subtitle && (
        <p
          className={`text-sm sm:text-base font-normal leading-relaxed max-w-2xl ${
            isLight ? 'text-[#5A524E] dark:text-[#D4CCC2]' : 'text-slate-300/90'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
