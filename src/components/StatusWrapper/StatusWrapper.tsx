import React from 'react';

interface IProps {
  children: React.ReactNode;
  display: boolean;
}

export default function StatusWrapper({ children, display }: IProps) {
  const show = display ? 'block' : 'hidden';
  return (
    <div
      className={`absolute w-full px-5 md:px-0 left-0 md:static md:block ${show}`}
    >
      {children}
    </div>
  );
}
