import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectTheme, toggleTheme } from './themeSlice';
import icons from '../../assets/icons/Icons';

const ToggleTheme: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);

  const isDark = theme === 'dark';
  const bgColor = isDark ? 'bg-slate-600' : 'bg-gray-100';

  return (
    <button
      className={`p-2 rounded-full shadow-lg ${bgColor}`}
      onClick={() => dispatch(toggleTheme())}
    >
      <img
        className="h-4 pointer-events-none"
        src={isDark ? icons.sun.src : icons.moon.src}
        alt={isDark ? icons.sun.alt : icons.moon.src}
      />
    </button>
  );
};

export default ToggleTheme;

