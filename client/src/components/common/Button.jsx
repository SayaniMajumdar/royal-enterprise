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
    'relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 focus:ring-offset-navy-950 uppercase tracking-wider text-xs md:text-sm';

  const variants = {
    primary:
      'bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold shadow-gold-glow hover:shadow-gold-glow-lg border border-gold-300 active:scale-[0.98]',
    outline:
      'border border-gold-400 text-gold-400 hover:bg-gold-400/10 hover:text-gold-300 backdrop-blur-sm active:scale-[0.98]',
    dark:
      'bg-navy-900/90 hover:bg-navy-800 text-slate-100 border border-slate-700/60 hover:border-gold-500/50 shadow-md active:scale-[0.98]',
    ghost:
      'text-gold-300 hover:text-gold-200 hover:bg-gold-500/10 active:scale-[0.98]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-xs md:text-sm',
    lg: 'px-8 py-4 text-sm md:text-base font-semibold',
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
        Icon && iconPosition === 'left' && <Icon className="w-4 h-4 mr-2" />
      )}
      <span>{children}</span>
      {!loading && Icon && iconPosition === 'right' && <Icon className="w-4 h-4 ml-2" />}
    </button>
  );
};

export default Button;
