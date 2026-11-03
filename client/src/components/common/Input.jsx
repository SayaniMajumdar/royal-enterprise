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
        <label htmlFor={name} className="block text-[11px] font-medium text-slate-300 uppercase tracking-[0.14em] mb-2">
          {label} {required && <span className="text-gold-400 font-bold">*</span>}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
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
          className={`w-full bg-navy-900/60 border ${
            error
              ? 'border-rose-500/80 focus:border-rose-400 focus:ring-1 focus:ring-rose-400/30'
              : 'border-slate-800 focus:border-gold-400/70 focus:ring-1 focus:ring-gold-400/30'
          } rounded-[2px] px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:bg-navy-900 transition-all duration-200 ${
            Icon ? 'pl-10' : ''
          }`}
          {...props}
        />
      </div>
      {error && <p className="mt-1.5 text-xs text-rose-400">{error}</p>}
    </div>
  );
};

export default Input;
