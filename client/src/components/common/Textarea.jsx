import React from 'react';

const Textarea = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows = 4,
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
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        required={required}
        className={`w-full bg-white dark:bg-[#1C1917] border ${
          error
            ? 'border-[#B3261E] focus:border-[#B3261E] focus:ring-1 focus:ring-[#B3261E]'
            : 'border-[#E8E0D5] dark:border-[#38312B] focus:border-[#6B1D2F] dark:focus:border-[#D4AF37] focus:ring-2 focus:ring-[#6B1D2F]/10 dark:focus:ring-[#D4AF37]/15'
        } rounded-lg px-3.5 py-2.5 text-sm text-[#2B2625] dark:text-[#FAF8F5] placeholder-[#9E9488] dark:placeholder-[#6B645C] focus:outline-none transition-all duration-200 resize-y`}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-[#B3261E] font-medium">{error}</p>}
    </div>
  );
};

export default Textarea;
