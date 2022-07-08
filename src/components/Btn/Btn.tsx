import React from 'react';

export const Btn: React.FC<any> = ({
  handleClick,
  value,
  children,
  className,
}) => {
  return (
    <button onClick={handleClick} value={value} className={className}>
      {children}
    </button>
  );
};
