import React from 'react';

const Select = ({
  label,
  name,
  value,
  onChange,
  options = [],
  placeholder = 'Select an option',
  required = false,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label htmlFor={name} className="block text-xs font-semibold text-[#5A524E] dark:text-[#D4CCC2] mb-1.5">
          {label} {required && <span className="text-[#6B1D2F] dark:text-[#E0CFA6] font-bold">*</span>}
        </label>
      )}
      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full min-h-[44px] bg-white dark:bg-[#1C1917] border ${
            error
              ? 'border-[#B3261E] focus:border-[#B3261E] focus:ring-1 focus:ring-[#B3261E]'
              : 'border-[#E8E0D5] dark:border-[#38312B] focus:border-[#6B1D2F] dark:focus:border-[#D4AF37] focus:ring-2 focus:ring-[#6B1D2F]/10 dark:focus:ring-[#D4AF37]/15'
          } rounded-lg px-3.5 py-2 text-sm text-[#2B2625] dark:text-[#FAF8F5] focus:outline-none transition-all duration-200 appearance-none`}
          {...props}
        >
          <option value="" disabled className="bg-[#FAF8F5] dark:bg-[#1C1917] text-[#9E9488] dark:text-[#6B645C]">
            {placeholder}
          </option>
          {options.map((opt) => {
            const val = typeof opt === 'object' ? opt.value : opt;
            const lbl = typeof opt === 'object' ? opt.label : opt;
            return (
              <option key={val} value={val} className="bg-[#FAF8F5] dark:bg-[#1C1917] text-[#2B2625] dark:text-[#FAF8F5] py-2">
                {lbl}
              </option>
            );
          })}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-[#C5A059] dark:text-[#D4AF37]">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
      {error && <p className="mt-1 text-xs text-[#B3261E] font-medium">{error}</p>}
    </div>
  );
};

export default Select;
