import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = ({ className = '', size = 'md' }) => {
  const { isDark, toggleTheme } = useTheme();

  const buttonSizes = {
    sm: 'p-1.5 text-xs',
    md: 'p-2 text-sm',
    lg: 'p-2.5 text-base',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`rounded-full border transition-all duration-200 flex items-center justify-center ${buttonSizes[size]} ${
        isDark
          ? 'bg-[#24201D] border-[#3E3831] text-[#FCD34D] hover:bg-[#2C2723] hover:border-[#F59E0B] shadow-inner'
          : 'bg-white border-[#E5DED3] text-[#524C44] hover:text-[#6E1423] hover:border-[#6E1423] shadow-sm'
      } ${className}`}
    >
      {isDark ? (
        <Sun className={`${iconSizes[size]} transition-transform duration-300 hover:rotate-45`} />
      ) : (
        <Moon className={`${iconSizes[size]} transition-transform duration-300 hover:-rotate-12`} />
      )}
    </button>
  );
};

export default ThemeToggle;
