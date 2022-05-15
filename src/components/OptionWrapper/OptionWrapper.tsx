import React from 'react';

interface IProps {
  children: React.ReactNode;
}

const util = 'w-full my-3 flex justify-between items-center';

export default function OptionWrapper({ children }: IProps) {
  return <div className={util}>{children}</div>;
}
