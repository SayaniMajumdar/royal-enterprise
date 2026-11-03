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
        className={`relative w-full ${maxWidth} bg-[#FFFDF9] border border-[#E8E1D5] rounded-[4px] shadow-2xl z-10 my-8 overflow-hidden`}
      >
        {/* Top Maroon/Gold Line Accent */}
        <div className="h-[3px] bg-gradient-to-r from-maroon via-gold-base to-maroon" />

        {/* Header */}
        <div className="flex items-start justify-between p-6 sm:p-7 border-b border-[#E8E1D5] bg-[#FAF8F4]">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#141414] tracking-tight">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs sm:text-sm text-[#6B645C] mt-1 font-light">{subtitle}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-[#6B645C] hover:text-maroon transition-colors p-1.5 rounded-full hover:bg-black/5"
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
