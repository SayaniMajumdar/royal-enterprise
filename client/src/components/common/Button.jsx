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
    'relative inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none uppercase tracking-[0.16em] text-xs font-semibold select-none';

  const variants = {
    primary:
      'btn-gold text-[#1A1205] shadow-sm active:translate-y-0',
    maroon:
      'btn-maroon text-[#FFF8F0] shadow-sm active:translate-y-0',
    outline:
      'border border-[#B8934A]/70 text-[#141414] hover:bg-[#B8934A]/10 hover:border-[#B8934A] rounded-full active:translate-y-0',
    dark:
      'bg-charcoal hover:bg-charcoal-surface text-[#FFF8F0] border border-white/20 rounded-full active:translate-y-0',
    ghost:
      'text-gold-dark hover:text-maroon tracking-[0.16em] active:translate-y-0',
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
