import React from 'react';

interface IProps {
  children: React.ReactNode;
}

const util = 'w-full sm:w-10/12 md:w-full lg:w-10/12 2xl:w-8/12';

export default function MainWrapper({ children }: IProps) {
  return <main className={util}>{children}</main>;
}
