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
        <label htmlFor={name} className="block text-[11px] font-medium text-slate-300 uppercase tracking-[0.14em] mb-2">
          {label} {required && <span className="text-gold-400 font-bold">*</span>}
        </label>
      )}
      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full bg-navy-900/60 border ${
            error
              ? 'border-rose-500/80 focus:border-rose-400 focus:ring-1 focus:ring-rose-400/30'
              : 'border-slate-800 focus:border-gold-400/70 focus:ring-1 focus:ring-gold-400/30'
          } rounded-[2px] px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:bg-navy-900 transition-all duration-200 appearance-none`}
          {...props}
        >
          <option value="" disabled className="bg-navy-900 text-slate-400">
            {placeholder}
          </option>
          {options.map((opt) => {
            const val = typeof opt === 'object' ? opt.value : opt;
            const lbl = typeof opt === 'object' ? opt.label : opt;
            return (
              <option key={val} value={val} className="bg-navy-900 text-slate-100 py-2">
                {lbl}
              </option>
            );
          })}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-gold-400/80">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
      {error && <p className="mt-1.5 text-xs text-rose-400">{error}</p>}
    </div>
  );
};

export default Select;
