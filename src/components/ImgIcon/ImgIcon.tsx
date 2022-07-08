import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectTheme } from '../../features/theme/themeSlice';
import menu from '../../assets/icons/dots.png';

interface IProps {
  iconType: 'add' | 'close' | 'menu';
  className?: string;
}

const icons = {
  dark: {
    add: 'https://img.icons8.com/ios-glyphs/90/000000/plus-math.png',
    close: 'https://img.icons8.com/ios-glyphs/90/000000/delete-sign.png',
    menu: menu,
  },
  light: {
    add: 'https://img.icons8.com/ios-glyphs/90/ffffff/plus-math.png',
    close: 'https://img.icons8.com/ios-glyphs/90/ffffff/delete-sign.png',
    menu: menu,
  },
};

export const ImgIcon: React.FC<IProps> = ({ iconType, className }) => {
  const appTheme = useAppSelector(selectTheme);
  const iconTheme = appTheme === 'light' ? 'dark' : 'light';
  return (
    <img
      alt={`${iconType} icon`}
      src={icons[iconTheme][iconType]}
      className={`${className} m-auto h-full pointer-events-none`}
    />
  );
};
