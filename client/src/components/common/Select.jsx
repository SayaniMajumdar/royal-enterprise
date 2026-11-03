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
        <label htmlFor={name} className="block text-[11px] font-medium text-[#6B645C] dark:text-[#A8A29E] uppercase tracking-[0.2em] mb-1.5">
          {label} {required && <span className="text-maroon font-bold">*</span>}
        </label>
      )}
      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full min-h-[48px] bg-transparent border-b ${
            error
              ? 'border-[#B3261E] focus:border-[#B3261E]'
              : 'border-[#D5CCC0] dark:border-[#38312B] focus:border-[#B8934A] dark:focus:border-gold-light'
          } rounded-none px-1 py-2 text-sm text-[#141414] dark:text-[#FAF7F2] focus:outline-none transition-colors duration-200 appearance-none`}
          {...props}
        >
          <option value="" disabled className="bg-[#FAF8F4] dark:bg-[#1C1917] text-[#9E968D] dark:text-[#6B645C]">
            {placeholder}
          </option>
          {options.map((opt) => {
            const val = typeof opt === 'object' ? opt.value : opt;
            const lbl = typeof opt === 'object' ? opt.label : opt;
            return (
              <option key={val} value={val} className="bg-[#FAF8F4] dark:bg-[#1C1917] text-[#141414] dark:text-[#FAF7F2] py-2">
                {lbl}
              </option>
            );
          })}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1 text-[#8A6A2C] dark:text-gold-light">
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
