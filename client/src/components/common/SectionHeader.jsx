import React from 'react';

const SectionHeader = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[align];

  return (
    <div className={`flex flex-col max-w-3xl mb-12 md:mb-16 ${alignmentClasses} ${className}`}>
      {badge && (
        <span className="inline-block text-[11px] md:text-xs font-semibold tracking-widest uppercase text-gold-400 bg-gold-500/10 border border-gold-500/30 px-3.5 py-1 rounded-full mb-3">
          {badge}
        </span>
      )}
      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100">
        {title}
      </h2>

      {/* Decorative Gold Divider */}
      <div className="flex items-center space-x-2 my-4">
        <div className="w-10 md:w-16 h-px bg-gradient-to-r from-transparent to-gold-400" />
        <div className="w-2 h-2 rotate-45 bg-gold-400 shadow-gold-glow" />
        <div className="w-10 md:w-16 h-px bg-gradient-to-l from-transparent to-gold-400" />
      </div>

      {subtitle && (
        <p className="text-sm sm:text-base md:text-lg text-slate-300 font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
