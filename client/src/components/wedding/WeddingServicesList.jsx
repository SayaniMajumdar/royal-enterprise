import React from 'react';
import { WEDDING_SERVICES } from '../../data/mockData';
import { Check } from 'lucide-react';

const WeddingServicesList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {WEDDING_SERVICES.map((serv) => (
        <div
          key={serv.id}
          className="bg-navy-900/60 border border-slate-800 rounded-sm p-8 hover:border-gold-500/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
        >
          <div>
            <h3 className="font-serif text-xl font-bold text-slate-100 group-hover:text-gold-300 transition-colors mb-3">
              {serv.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              {serv.description}
            </p>

            <h5 className="text-[11px] uppercase tracking-wider font-semibold text-gold-400 mb-3 border-b border-slate-800/80 pb-2">
              Services & Inclusions:
            </h5>
            <ul className="space-y-2.5">
              {serv.items.map((item, idx) => (
                <li key={idx} className="flex items-start text-xs text-slate-300">
                  <div className="w-4 h-4 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0 mr-2.5 mt-0.5">
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
