import React from 'react';

interface IProps {
  children: React.ReactNode;
  util: 'bg-red-400' | 'bg-yellow-400' | 'bg-green-400',
}


const utilGlobal = 'py-1.5 font-bold text-black text-center ';

export default function Title({ children, util }: IProps) {

  return <h2 className={utilGlobal + util}>{children}</h2>;
}
