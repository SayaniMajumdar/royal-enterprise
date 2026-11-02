import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

const Toast = ({ message, type = 'success', onClose }) => {
  if (!message) return null;

  const typeConfig = {
    success: {
      border: 'border-gold-400',
      bg: 'bg-navy-900/95',
      icon: <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />,
      title: 'Success',
      accent: 'text-gold-300',
    },
    error: {
      border: 'border-rose-500',
      bg: 'bg-navy-900/95',
      icon: <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />,
      title: 'Notice',
      accent: 'text-rose-300',
    },
    info: {
      border: 'border-sky-500',
      bg: 'bg-navy-900/95',
      icon: <Info className="w-5 h-5 text-sky-400 shrink-0" />,
      title: 'Information',
      accent: 'text-sky-300',
    },
  }[type] || {
    border: 'border-gold-400',
    bg: 'bg-navy-900/95',
    icon: <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />,
    title: 'Success',
    accent: 'text-gold-300',
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md w-full animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div
        className={`flex items-start p-4 rounded-md shadow-2xl backdrop-blur-md border ${typeConfig.border} ${typeConfig.bg}`}
      >
        <div className="mr-3 mt-0.5">{typeConfig.icon}</div>
        <div className="flex-1 mr-2">
          <h4 className={`text-xs uppercase font-semibold tracking-wider ${typeConfig.accent}`}>
            {typeConfig.title}
          </h4>
          <p className="text-sm text-slate-200 mt-0.5 leading-snug">{message}</p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200 transition-colors p-1"
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
