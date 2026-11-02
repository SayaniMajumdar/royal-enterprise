import React from 'react';
import { Check } from 'lucide-react';

const CheckboxGroup = ({
  label,
  options = [],
  selected = [],
  onChange,
  error,
  columns = 2,
  className = '',
}) => {
  const toggleOption = (optionValue) => {
    if (selected.includes(optionValue)) {
      onChange(selected.filter((item) => item !== optionValue));
    } else {
      onChange([...selected, optionValue]);
    }
  };

  const colClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
  }[columns] || 'grid-cols-1 sm:grid-cols-2';

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
          {label}
        </label>
      )}
      <div className={`grid ${colClass} gap-2.5`}>
        {options.map((option) => {
          const val = typeof option === 'object' ? option.value : option;
          const lbl = typeof option === 'object' ? option.label : option;
          const isChecked = selected.includes(val);

          return (
            <button
              key={val}
              type="button"
              onClick={() => toggleOption(val)}
              className={`flex items-center text-left p-2.5 rounded-sm border transition-all duration-200 text-xs md:text-sm ${
                isChecked
                  ? 'border-gold-400 bg-gold-500/10 text-gold-200 font-medium'
                  : 'border-slate-800 bg-navy-900/60 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-sm mr-2.5 flex items-center justify-center border transition-colors ${
                  isChecked ? 'border-gold-400 bg-gold-500 text-navy-950' : 'border-slate-600 bg-navy-950'
                }`}
              >
                {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
              </div>
              <span className="flex-1">{lbl}</span>
            </button>
          );
        })}
      </div>
      {error && <p className="mt-1.5 text-xs text-rose-400">{error}</p>}
    </div>
  );
};

export default CheckboxGroup;
