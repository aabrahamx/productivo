import React from 'react';

interface IProps {
  children: React.ReactNode;
}

const CardContainer: React.FC<IProps> = ({ children }) => {
  return <div className="relative flex w-full pl-1 pr-2 my-3">{children}</div>;
};

export default CardContainer;
