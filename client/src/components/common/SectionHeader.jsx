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
    <div className={`flex flex-col max-w-3xl mb-8 md:mb-10 ${alignmentClasses} ${className}`}>
      {badge && (
        <div className="inline-flex items-center space-x-2.5 mb-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C49A53]" />
          <span
            className={`text-[10.5px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase font-sans ${
              isLight ? 'text-[#401D2C] dark:text-[#E2CCA1]' : 'text-[#E2CCA1]'
            }`}
          >
            {badge}
          </span>
        </div>
      )}

      <h2
        className={`font-display text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-[1.12] ${
          isLight ? 'text-[#292323] dark:text-[#F6F0E7]' : 'text-[#F6F0E7]'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-sm sm:text-base font-light leading-relaxed max-w-2xl mt-3 font-sans ${
            isLight ? 'text-[#665C5C] dark:text-[#D4CCC2]' : 'text-[#F6F0E7]/80'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
