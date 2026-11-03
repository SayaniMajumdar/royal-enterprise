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
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div
        className={`relative w-full ${maxWidth} bg-[#FFFDF9] dark:bg-[#1C1917] border border-[#E8E1D5] dark:border-[#38312B] rounded-[4px] shadow-2xl z-10 my-8 overflow-hidden`}
      >
        {/* Top Maroon/Gold Line Accent */}
        <div className="h-[3px] bg-gradient-to-r from-maroon via-gold-base to-maroon" />

        {/* Header */}
        <div className="flex items-start justify-between p-6 sm:p-7 border-b border-[#E8E1D5] dark:border-[#38312B] bg-[#FAF8F4] dark:bg-[#141210]">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#141414] dark:text-[#FAF7F2] tracking-tight">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs sm:text-sm text-[#6B645C] dark:text-[#A8A29E] mt-1 font-light">{subtitle}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-[#6B645C] dark:text-[#A8A29E] hover:text-maroon dark:hover:text-gold-light transition-colors p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/5"
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
