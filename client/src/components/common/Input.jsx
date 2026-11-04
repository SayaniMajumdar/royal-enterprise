import React from 'react';

const Input = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  error,
  icon: Icon,
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
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#C5A059] dark:text-[#D4AF37]">
            <Icon className="w-4 h-4" />
          </div>
        )}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`w-full min-h-[44px] bg-white dark:bg-[#1C1917] border ${
            error
              ? 'border-[#B3261E] focus:border-[#B3261E] focus:ring-1 focus:ring-[#B3261E]'
              : 'border-[#E8E0D5] dark:border-[#38312B] focus:border-[#6B1D2F] dark:focus:border-[#D4AF37] focus:ring-2 focus:ring-[#6B1D2F]/10 dark:focus:ring-[#D4AF37]/15'
          } rounded-lg px-3.5 py-2 text-sm text-[#2B2625] dark:text-[#FAF8F5] placeholder-[#9E9488] dark:placeholder-[#6B645C] focus:outline-none transition-all duration-200 ${
            Icon ? 'pl-9' : ''
          }`}
          {...props}
        />
      </div>
      {error && <p className="mt-1 text-xs text-[#B3261E] font-medium">{error}</p>}
    </div>
  );
};

export default Input;
