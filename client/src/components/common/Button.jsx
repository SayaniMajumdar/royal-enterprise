import React from 'react';
import { Loader2 } from 'lucide-react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  loading = false,
  disabled = false,
  onClick,
  className = '',
  icon: Icon,
  iconPosition = 'left',
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none tracking-wider text-xs select-none rounded-md';

  const variants = {
    primary:
      'btn-brand shadow-sm active:translate-y-0',
    gold:
      'btn-gold text-[#1A1205] shadow-sm active:translate-y-0 rounded-full',
    maroon:
      'btn-maroon text-[#FFF8F0] shadow-sm active:translate-y-0',
    outline:
      'border border-slate-300 text-[#374151] hover:border-roseBrand hover:text-roseBrand hover:bg-roseBrand/5 active:translate-y-0',
    dark:
      'bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 active:translate-y-0',
    ghost:
      'text-roseBrand hover:text-roseBrand-dark active:translate-y-0',
  };

  const sizes = {
    sm: 'px-5 py-2 text-[10.5px]',
    md: 'px-7 py-3 text-xs',
    lg: 'px-9 py-3.5 text-xs sm:text-[12.5px]',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size]} ${
        disabled || loading ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
      {...props}
    >
      {loading ? (
        <Loader2 className="w-3.5 h-3.5 mr-2 animate-spin text-current" />
      ) : (
        Icon && iconPosition === 'left' && <Icon className="w-3.5 h-3.5 mr-2" />
      )}
      <span>{children}</span>
      {!loading && Icon && iconPosition === 'right' && <Icon className="w-3.5 h-3.5 ml-2" />}
    </button>
  );
};

export default Button;
