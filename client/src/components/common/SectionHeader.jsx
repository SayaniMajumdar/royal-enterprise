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
          <span className={`w-5 h-px ${isLight ? 'bg-gold-600/50' : 'bg-gold-400/50'}`} />
          <span
            className={`text-[10px] sm:text-[10.5px] font-semibold tracking-[0.26em] uppercase ${
              isLight ? 'text-gold-700 font-bold' : 'text-gold-400'
            }`}
          >
            {badge}
          </span>
          <span className={`w-5 h-px ${isLight ? 'bg-gold-600/50' : 'bg-gold-400/50'}`} />
        </div>
      )}

      <h2
        className={`font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold tracking-tight leading-[1.2] ${
          isLight ? 'text-[#1B1713]' : 'text-slate-100'
        }`}
      >
        {title}
      </h2>

      {/* Decorative Minimal Architectural Gold Divider */}
      <div className="flex items-center space-x-2.5 my-4">
        <div
          className={`w-8 md:w-12 h-px bg-gradient-to-r from-transparent ${
            isLight ? 'to-gold-600/60' : 'to-gold-400/50'
          }`}
        />
        <div
          className={`w-1.5 h-1.5 rotate-45 ${
            isLight ? 'bg-gold-600' : 'bg-gold-400/70'
          }`}
        />
        <div
          className={`w-8 md:w-12 h-px bg-gradient-to-l from-transparent ${
            isLight ? 'to-gold-600/60' : 'to-gold-400/50'
          }`}
        />
      </div>

      {subtitle && (
        <p
          className={`text-sm sm:text-base font-light leading-relaxed max-w-2xl ${
            isLight ? 'text-[#524B42]' : 'text-slate-300/85'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
