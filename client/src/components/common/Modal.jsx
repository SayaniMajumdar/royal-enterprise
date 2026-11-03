import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, subtitle, children, maxWidth = 'max-w-2xl' }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-950/90 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div
        className={`relative w-full ${maxWidth} bg-[#0A0F1D] border border-gold-500/25 rounded-[3px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] z-10 my-8 overflow-hidden`}
      >
        {/* Top Gold Trim Accent */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-gold-400/70 to-transparent" />

        {/* Header */}
        <div className="flex items-start justify-between p-6 sm:p-7 border-b border-slate-800/80 bg-navy-950/40">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-100 tracking-wide">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-light">{subtitle}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-gold-300 transition-colors p-1.5 rounded-[2px] bg-navy-900/60 hover:bg-navy-900 border border-slate-800"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
