import React from 'react';

export const Heading4: React.FC<any> = ({ children }) => {
  return (
    <h4 className="my-2 text-xl font-bold text-center text-gray-800">
      {children}
    </h4>
  );
};
