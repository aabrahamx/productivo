import React from 'react';

interface IProps {
  children: React.ReactNode;
}

export default function StatusWrapper({ children }: IProps) {
  return <div className="h-60 md:h-96 overflow-y-auto">{children}</div>;
}
