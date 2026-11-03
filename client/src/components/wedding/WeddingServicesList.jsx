import React from 'react';
import { WEDDING_SERVICES } from '../../data/mockData';
import { Check } from 'lucide-react';

const WeddingServicesList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {WEDDING_SERVICES.map((serv) => (
        <div
          key={serv.id}
          className="bg-[#090E1B]/80 border border-slate-800/80 rounded-[3px] p-7 sm:p-8 hover:border-gold-500/35 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:-translate-y-0.5"
        >
          <div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-100 group-hover:text-gold-300 transition-colors mb-3 tracking-wide">
              {serv.title}
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed mb-6 font-light">
              {serv.description}
            </p>

            <h5 className="text-[10.5px] uppercase tracking-[0.16em] font-semibold text-gold-400 mb-3 border-b border-slate-800/80 pb-2">
              Services & Inclusions:
            </h5>
            <ul className="space-y-2.5">
              {serv.items.map((item, idx) => (
                <li key={idx} className="flex items-start text-xs sm:text-[13px] text-slate-300 font-light">
                  <div className="w-4 h-4 rounded-[2px] bg-gold-500/15 text-gold-400 flex items-center justify-center shrink-0 mr-2.5 mt-0.5">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeddingServicesList;
