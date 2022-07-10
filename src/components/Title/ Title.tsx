import React from 'react';

import { TDisplay } from '../Main/Main'

interface IProps {
  title: TDisplay;
  util: 'bg-red-400' | 'bg-yellow-400' | 'bg-green-400';
  changeDisplay: any;
  display: boolean;
}

export default function Title(props: IProps) {
  const { display, title, util, changeDisplay } = props;
  const fade = display
    ? 'text-white'
    : 'text-black';

  return (
    <h2
      className={`py-1.5 font-bold text-center md:opacity-100 relative ${util} ${fade}`}
      onClick={() => changeDisplay(title)}
    >
      {title}
    </h2>
  );
}
