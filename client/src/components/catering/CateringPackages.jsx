import React from 'react';
import { CATERING_PACKAGES } from '../../data/mockData';
import { Check, Crown, Users } from 'lucide-react';
import Button from '../common/Button';

const CateringPackages = ({ onSelectPackage }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {CATERING_PACKAGES.map((pkg) => (
        <div
          key={pkg.id}
          className={`relative rounded-[4px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
            pkg.popular
              ? 'bg-[#FFFDF9] border-2 border-maroon shadow-md'
              : 'bg-[#FFFDF9] border border-[#E8E1D5] hover:border-gold-base/50 shadow-sm'
          }`}
        >
          {pkg.popular && (
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-maroon text-[#FFF8F0] font-medium text-[9.5px] uppercase tracking-[0.2em] px-4 py-1 rounded-[2px] shadow-sm flex items-center">
              <Crown className="w-3 h-3 mr-1" />
              Most Preferred
            </div>
          )}

          <div>
            <div className="mb-6">
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#141414] mb-1 tracking-wide">
                {pkg.name}
              </h3>
              <p className="text-xs text-[#6B645C] leading-relaxed font-light">{pkg.tagline}</p>
            </div>

            <div className="inline-flex items-center space-x-2 bg-[#FAF8F4] px-3 py-1.5 rounded-[2px] border border-[#E8E1D5] text-xs text-gold-dark font-medium mb-6">
              <Users className="w-3.5 h-3.5 text-gold-dark" />
              <span>{pkg.guestRange}</span>
            </div>

            <h5 className="text-[11px] uppercase tracking-[0.14em] font-semibold text-gold-dark mb-4 border-b border-[#E8E1D5] pb-2">
              Package Inclusions:
            </h5>

            <ul className="space-y-3 mb-8">
              {pkg.features.map((feat, idx) => (
                <li key={idx} className="flex items-start text-xs sm:text-[13px] text-[#3A352F] font-light">
                  <div className="w-4 h-4 rounded-full bg-gold-dark/15 text-gold-dark flex items-center justify-center shrink-0 mr-2.5 mt-0.5">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button
            variant={pkg.popular ? 'maroon' : 'outline'}
            size="md"
            onClick={() => onSelectPackage(pkg.name)}
            className="w-full"
          >
            Select & Request Quote
          </Button>
        </div>
      ))}
    </div>
  );
};

export default CateringPackages;
