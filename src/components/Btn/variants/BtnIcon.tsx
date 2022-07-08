import React from 'react';
import { ImgIcon } from '../../ImgIcon/ImgIcon';
import { Btn } from '../Btn';

export const BtnIcon: React.FC<any> = ({
  handleClick,
  iconType,
  className,
}) => {
  return (
    <Btn handleClick={handleClick} className={className}>
      <ImgIcon iconType={iconType} />
    </Btn>
  );
};
