import React from 'react';
import { WEDDING_SERVICES } from '../../data/mockData';
import { Check } from 'lucide-react';

const WeddingServicesList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {WEDDING_SERVICES.map((serv) => (
        <div
          key={serv.id}
          className="bg-[#FFFDF9] border border-[#E8E1D5] rounded-[4px] p-7 sm:p-8 hover:border-gold-base/50 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:-translate-y-1 hover:shadow-md"
        >
          <div>
            <h3 className="font-serif text-lg sm:text-xl font-normal text-[#141414] group-hover:text-maroon transition-colors mb-3 tracking-wide">
              {serv.title}
            </h3>
            <p className="text-xs sm:text-[13px] text-[#554F47] leading-relaxed mb-6 font-light">
              {serv.description}
            </p>

            <h5 className="text-[10.5px] uppercase tracking-[0.16em] font-semibold text-gold-dark mb-3 border-b border-[#E8E1D5] pb-2">
              Services & Inclusions:
            </h5>
            <ul className="space-y-2.5">
              {serv.items.map((item, idx) => (
                <li key={idx} className="flex items-start text-xs sm:text-[13px] text-[#3A352F] font-light">
                  <div className="w-4 h-4 rounded-full bg-gold-dark/15 text-gold-dark flex items-center justify-center shrink-0 mr-2.5 mt-0.5">
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
