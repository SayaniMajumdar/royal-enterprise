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
    'relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-[2px] focus:outline-none focus:ring-1 focus:ring-gold-400/50 uppercase tracking-[0.16em] text-xs font-semibold select-none';

  const variants = {
    primary:
      'bg-gradient-to-b from-[#DEC692] via-[#C5A059] to-[#B38734] hover:brightness-105 text-navy-950 font-bold border border-gold-300/40 shadow-[0_2px_12px_rgba(197,160,89,0.2)] active:translate-y-[1px]',
    outline:
      'border border-gold-400/60 text-gold-300 hover:border-gold-300 hover:bg-gold-500/10 hover:text-gold-200 bg-transparent active:translate-y-[1px]',
    dark:
      'bg-[#0C1220] hover:bg-[#121B2F] text-slate-200 border border-slate-800 hover:border-gold-500/40 active:translate-y-[1px]',
    ghost:
      'text-gold-400/90 hover:text-gold-200 hover:bg-gold-500/10 tracking-[0.14em] active:translate-y-[1px]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-[10.5px]',
    md: 'px-6 py-2.5 text-xs',
    lg: 'px-8 py-3.5 text-xs sm:text-[12.5px]',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${
        disabled || loading ? 'opacity-60 cursor-not-allowed' : ''
      } ${className}`}
      {...props}
    >
      {loading ? (
        <Loader2 className="w-4 h-4 mr-2 animate-spin text-current" />
      ) : (
        Icon && iconPosition === 'left' && <Icon className="w-3.5 h-3.5 mr-2" />
      )}
      <span>{children}</span>
      {!loading && Icon && iconPosition === 'right' && <Icon className="w-3.5 h-3.5 ml-2" />}
    </button>
  );
};

export default Button;
