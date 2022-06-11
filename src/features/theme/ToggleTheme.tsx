import React from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectIsDarkMode, toggleDarkMode } from './themeSlice';
import icons from '../../helpers/Icons';

const ToggleDarkMode: React.FC = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector(selectIsDarkMode);

  const bgColor = isDarkMode ? 'bg-slate-600' : 'bg-gray-100';

  return (
    <button
      className={`p-2 rounded-full shadow-lg ${bgColor}`}
      onClick={() => dispatch(toggleDarkMode())}
    >
      <img
        className="h-4 pointer-events-none"
        src={isDarkMode ? icons.sun.src : icons.moon.src}
        alt={isDarkMode ? icons.sun.alt : icons.moon.src}
      />
    </button>
  );
};

export default ToggleDarkMode;
