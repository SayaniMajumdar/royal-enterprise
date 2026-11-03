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
        <label htmlFor={name} className="block text-[11px] font-medium text-[#6B645C] uppercase tracking-[0.2em] mb-1.5">
          {label} {required && <span className="text-maroon font-bold">*</span>}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-1 flex items-center pointer-events-none text-[#8A6A2C]">
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
          className={`w-full min-h-[48px] bg-transparent border-b ${
            error
              ? 'border-[#B3261E] focus:border-[#B3261E]'
              : 'border-[#D5CCC0] focus:border-[#B8934A]'
          } rounded-none px-1 py-2 text-sm text-[#141414] placeholder-[#9E968D] focus:outline-none transition-colors duration-200 ${
            Icon ? 'pl-8' : ''
          }`}
          {...props}
        />
      </div>
      {error && <p className="mt-1 text-xs text-[#B3261E] font-medium">{error}</p>}
    </div>
  );
};

export default Input;
