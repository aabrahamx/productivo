import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectDarkMode, toggle } from './displayModeSlice';

const src = {
  sun: 'https://img.icons8.com/ios-glyphs/90/000000/sun--v1.png',
  moon: 'https://img.icons8.com/ios-glyphs/90/000000/bright-moon--v2.png',
};

export default function ToggleDarkMode() {
  const isDarkMode = useAppSelector(selectDarkMode);
  const dispatch = useAppDispatch();

  const toggleDarkMode = (): void => {
    isDarkMode ? dispatch(toggle(false)) : dispatch(toggle(true));
  };

  return (
    <button
      className="p-2 rounded-full mr-2 bg-gray-100 font-semibold shadow-lg"
      onClick={toggleDarkMode}
    >
      <img className='h-4' src={isDarkMode ? src.sun : src.moon} alt="" />
    </button>
  );
}
