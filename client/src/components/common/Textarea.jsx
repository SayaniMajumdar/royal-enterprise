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
        <label htmlFor={name} className="block text-[11px] font-medium text-[#6B645C] uppercase tracking-[0.2em] mb-1.5">
          {label} {required && <span className="text-maroon font-bold">*</span>}
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
        className={`w-full bg-transparent border-b ${
          error
            ? 'border-[#B3261E] focus:border-[#B3261E]'
            : 'border-[#D5CCC0] focus:border-[#B8934A]'
        } rounded-none px-1 py-2 text-sm text-[#141414] placeholder-[#9E968D] focus:outline-none transition-colors duration-200 resize-y`}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-[#B3261E] font-medium">{error}</p>}
    </div>
  );
};

export default Textarea;
