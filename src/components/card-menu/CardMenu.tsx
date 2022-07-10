import React, { useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectTheme } from '../../features/theme/themeSlice';
import { CardMenuOptions } from '../../features/todo/ChangeTodoStatus';
import { BtnIcon } from '../Btn/variants/BtnIcon';

interface IProps {
  id: number;
}

const CardMenu: React.FC<IProps> = ({ id }) => {
  const theme = useAppSelector(selectTheme);
  const bgColor = theme === 'dark' ? 'bg-gray-600' : 'bg-gray-100';

  const [toggleMenu, SetToggleMenu] = useState(false);
  const handleToggle = (): void => {
    toggleMenu ? SetToggleMenu(false) : SetToggleMenu(true);
  };

  return (
    <div className="mr-1">
      <BtnIcon
        iconType="menu"
        handleClick={handleToggle}
        className={`h-6 px-0.5 py-1 rounded-sm ${bgColor}`}
      />
      {toggleMenu && <CardMenuOptions handleToggle={handleToggle} id={id} />}
    </div>
  );
};

export default CardMenu;
