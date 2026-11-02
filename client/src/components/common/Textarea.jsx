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
        <label htmlFor={name} className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
          {label} {required && <span className="text-gold-400">*</span>}
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
        className={`w-full bg-navy-900/90 border ${
          error ? 'border-rose-500 focus:border-rose-400 focus:ring-rose-400/20' : 'border-slate-700/80 focus:border-gold-400 focus:ring-gold-400/20'
        } rounded-sm px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 transition-all duration-200 resize-y`}
        {...props}
      />
      {error && <p className="mt-1.5 text-xs text-rose-400">{error}</p>}
    </div>
  );
};

export default Textarea;
