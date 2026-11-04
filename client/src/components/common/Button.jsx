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
    'relative inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none tracking-wide text-xs select-none rounded-lg cursor-pointer';

  const variants = {
    primary:
      'btn-brand shadow-sm hover:shadow active:translate-y-0',
    gold:
      'btn-gold shadow-sm hover:shadow active:translate-y-0',
    maroon:
      'btn-maroon shadow-sm hover:shadow active:translate-y-0',
    outline:
      'border border-[#D5C7B5] dark:border-[#38312B] text-[#2B2625] dark:text-[#FAF8F5] hover:border-[#6B1D2F] dark:hover:border-[#D4AF37] hover:text-[#6B1D2F] dark:hover:text-[#D4AF37] hover:bg-[#6B1D2F]/5 dark:hover:bg-[#D4AF37]/10 active:translate-y-0',
    dark:
      'bg-[#2B2625] hover:bg-[#1F1B1A] text-[#FAF8F5] border border-[#38312F] active:translate-y-0',
    ghost:
      'text-[#6B1D2F] dark:text-[#D4AF37] hover:bg-[#6B1D2F]/5 dark:hover:bg-[#D4AF37]/10 active:translate-y-0',
  };

  const sizes = {
    sm: 'px-4 py-2 text-[11px]',
    md: 'px-6 py-2.5 text-xs',
    lg: 'px-8 py-3.5 text-[13px]',
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
