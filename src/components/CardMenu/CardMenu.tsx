import React, { useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectDarkMode } from '../../features/displayMode/displayModeSlice';
import { CardMenuOptions } from '../../features/todo/ToDo';
import ImgIcon from '../ImgIcon/ImgIcon';

interface IProps {
  id: number
}

const btnUtil = 'px-0.5 py-1';

export default function CardMenu({ id }: IProps) {
  
  const isDarkMode = useAppSelector(selectDarkMode);

  const [toggleMenu, SetToggleMenu] = useState(false);
  const handleToggle = (): void => {
    toggleMenu ? SetToggleMenu(false) : SetToggleMenu(true);
  };

  return (
    <div className="mr-1">
      <button
        className={btnUtil + (isDarkMode ? ' bg-gray-600' : ' bg-gray-100')}
        onClick={handleToggle}
      >
        <ImgIcon color="black" name="menu" util="h-4" />
      </button>
      {toggleMenu ? <CardMenuOptions handleToggle={handleToggle} id={id} /> : null}
    </div>
  );
}
