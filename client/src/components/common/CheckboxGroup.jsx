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
        <label className="block text-[11px] font-medium text-[#6B645C] uppercase tracking-[0.2em] mb-3">
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
              className={`flex items-center space-x-2.5 p-3 rounded-[3px] border cursor-pointer transition-all select-none text-xs ${
                isChecked
                  ? 'border-maroon/60 bg-maroon/5 text-maroon font-medium'
                  : 'border-[#E8E1D5] bg-[#FFFDF9] text-[#3A352F] hover:border-[#D5CCC0]'
              }`}
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => handleToggle(opt)}
                className="w-4 h-4 rounded-[2px] border-[#D5CCC0] text-maroon focus:ring-maroon cursor-pointer"
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
