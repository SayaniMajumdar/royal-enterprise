import React from 'react';

const CheckboxGroup = ({
  label,
  options = [],
  selected = [],
  onChange,
  columns = 2,
  className = '',
}) => {
  const handleToggle = (option) => {
    const val = typeof option === 'object' ? option.value : option;
    if (selected.includes(val)) {
      onChange(selected.filter((item) => item !== val));
    } else {
      onChange([...selected, val]);
    }
  };

  const colClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-4',
  }[columns] || 'grid-cols-1 sm:grid-cols-2';

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-xs font-semibold text-[#5A524E] dark:text-[#D4CCC2] mb-3">
          {label}
        </label>
      )}
      <div className={`grid ${colClass} gap-2.5`}>
        {options.map((opt) => {
          const val = typeof opt === 'object' ? opt.value : opt;
          const lbl = typeof opt === 'object' ? opt.label : opt;
          const isChecked = selected.includes(val);

          return (
            <label
              key={val}
              className={`flex items-center space-x-2.5 p-3 rounded-lg border cursor-pointer transition-all select-none text-xs ${
                isChecked
                  ? 'border-[#6B1D2F] bg-[#6B1D2F]/5 dark:bg-[#6B1D2F]/20 text-[#6B1D2F] dark:text-[#E0CFA6] font-medium shadow-sm'
                  : 'border-[#E8E0D5] dark:border-[#38312B] bg-white dark:bg-[#1C1917] text-[#2B2625] dark:text-[#FAF8F5] hover:border-[#CFC2B0] dark:hover:border-[#524B42]'
              }`}
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => handleToggle(opt)}
                className="w-4 h-4 rounded border-[#D5C7B5] text-[#6B1D2F] focus:ring-[#6B1D2F] cursor-pointer"
              />
              <span className="leading-snug">{lbl}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default CheckboxGroup;
