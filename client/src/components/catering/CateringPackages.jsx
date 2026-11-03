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
          className={`relative rounded-[3px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
            pkg.popular
              ? 'bg-[#0B1020] border-2 border-gold-400/80 shadow-[0_12px_40px_rgba(0,0,0,0.7)]'
              : 'bg-[#090E1B]/80 border border-slate-800/80 hover:border-gold-500/35 shadow-md'
          }`}
        >
          {pkg.popular && (
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-navy-950 font-bold text-[9.5px] uppercase tracking-[0.2em] px-4 py-1 rounded-[2px] shadow-md flex items-center">
              <Crown className="w-3 h-3 mr-1" />
              Most Preferred
            </div>
          )}

          <div>
            <div className="mb-6">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-100 mb-1 tracking-wide">
                {pkg.name}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">{pkg.tagline}</p>
            </div>

            <div className="inline-flex items-center space-x-2 bg-navy-950 px-3 py-1.5 rounded-[2px] border border-slate-800 text-xs text-gold-300 font-medium mb-6">
              <Users className="w-3.5 h-3.5 text-gold-400" />
              <span>{pkg.guestRange}</span>
            </div>

            <h5 className="text-[11px] uppercase tracking-[0.14em] font-semibold text-slate-300 mb-4 border-b border-slate-800 pb-2">
              Package Inclusions:
            </h5>

            <ul className="space-y-3 mb-8">
              {pkg.features.map((feat, idx) => (
                <li key={idx} className="flex items-start text-xs sm:text-[13px] text-slate-300 font-light">
                  <div className="w-4 h-4 rounded-[2px] bg-gold-500/15 text-gold-400 flex items-center justify-center shrink-0 mr-2.5 mt-0.5">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button
            variant={pkg.popular ? 'primary' : 'outline'}
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
