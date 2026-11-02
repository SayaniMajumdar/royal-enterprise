import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import Button from '../common/Button';

const EventServiceCard = ({ service, onEnquire }) => {
  return (
    <div className="bg-navy-900/60 border border-slate-800 rounded-sm overflow-hidden hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div className="relative h-60 overflow-hidden">
          <img
            src={service.image}
            alt={service.category}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-100">
              {service.category}
            </h3>
          </div>
        </div>

        <div className="p-6">
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            {service.description}
          </p>

          <h5 className="text-xs uppercase tracking-wider font-semibold text-gold-400 mb-3">
            Key Inclusions:
          </h5>
          <ul className="space-y-2 mb-6">
            {service.items.map((item, idx) => (
              <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-300">
                <div className="w-4 h-4 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0 mr-2.5 mt-0.5">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-6 pt-0 border-t border-slate-800/80 flex items-center justify-between gap-3">
        <Button
          variant="primary"
          size="sm"
          onClick={() => onEnquire(service.category)}
          className="w-full"
          icon={ArrowRight}
          iconPosition="right"
        >
          Enquire for {service.category}
        </Button>
      </div>
    </div>
  );
};

export default EventServiceCard;
