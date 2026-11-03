import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

const Toast = ({ message, type = 'success', onClose }) => {
  if (!message) return null;

  const typeConfig = {
    success: {
      border: 'border-emerald-600/40 dark:border-emerald-500/50',
      bg: 'bg-[#FFFDF9] dark:bg-[#1C1917]',
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-700 dark:text-emerald-400 shrink-0" />,
      title: 'Success',
      accent: 'text-emerald-800 dark:text-emerald-300',
      textColor: 'text-[#1F1D1A] dark:text-[#FAF7F2]',
    },
    error: {
      border: 'border-rose-500/40 dark:border-rose-500/50',
      bg: 'bg-[#FFFDF9] dark:bg-[#1C1917]',
      icon: <AlertCircle className="w-5 h-5 text-rose-700 dark:text-rose-400 shrink-0" />,
      title: 'Notice',
      accent: 'text-rose-800 dark:text-rose-300',
      textColor: 'text-[#1F1D1A] dark:text-[#FAF7F2]',
    },
    info: {
      border: 'border-gold-dark/40 dark:border-gold-light/40',
      bg: 'bg-[#FFFDF9] dark:bg-[#1C1917]',
      icon: <Info className="w-5 h-5 text-gold-dark dark:text-gold-light shrink-0" />,
      title: 'Information',
      accent: 'text-gold-dark dark:text-gold-light',
      textColor: 'text-[#1F1D1A] dark:text-[#FAF7F2]',
    },
  }[type] || {
    border: 'border-gold-dark/40 dark:border-gold-light/40',
    bg: 'bg-[#FFFDF9] dark:bg-[#1C1917]',
    icon: <CheckCircle2 className="w-5 h-5 text-gold-dark dark:text-gold-light shrink-0" />,
    title: 'Success',
    accent: 'text-gold-dark dark:text-gold-light',
    textColor: 'text-[#1F1D1A] dark:text-[#FAF7F2]',
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md w-full animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div
        className={`flex items-start p-4 rounded-[4px] shadow-2xl border ${typeConfig.border} ${typeConfig.bg}`}
      >
        <div className="mr-3 mt-0.5">{typeConfig.icon}</div>
        <div className="flex-1 mr-2">
          <h4 className={`text-xs uppercase font-semibold tracking-wider ${typeConfig.accent}`}>
            {typeConfig.title}
          </h4>
          <p className={`text-sm ${typeConfig.textColor} mt-0.5 leading-snug font-light`}>{message}</p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-[#6B645C] dark:text-[#A8A29E] hover:text-maroon dark:hover:text-gold-light transition-colors p-1"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Toast;
