import React from 'react';
import menu from '../../assets/icons/dots.png'

interface IProps {
  name: 'add' | 'close' | 'menu';
  util?: string;
  color: 'white' | 'black';
}

const icons = {
  black: {
    add: 'https://img.icons8.com/ios-glyphs/90/000000/plus-math.png',
    close: 'https://img.icons8.com/ios-glyphs/90/000000/delete-sign.png',
    menu: menu,
  },
  white: {
    add: 'https://img.icons8.com/ios-glyphs/90/ffffff/plus-math.png',
    close: 'https://img.icons8.com/ios-glyphs/90/ffffff/delete-sign.png',
    menu: 'https://img.icons8.com/ios-glyphs/90/ffffff/circled-menu.pngg',
  },
};

export default function ImgIcon({ name, util, color }: IProps) {
  return (
    <img
      alt={name + ' icon'}
      src={icons[color][name]}
      className={'m-auto pointer-events-none ' + util}
    />
  );
}
