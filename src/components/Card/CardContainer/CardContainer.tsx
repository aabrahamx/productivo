import React from 'react';
import { Todo } from '../../../features/todo/todoSlice';

import CardMenu from '../../card-menu/CardMenu';
import CardData from '../../card-data/CardData';

interface IProps {
  todo: Todo;
}

const CardContainer: React.FC<IProps> = ({ todo }) => {
  const { id, title, description, tags } = todo;
  return (
    <StyledWrapper>
      <CardMenu id={id} />
      <CardData title={title} description={description} tags={tags} />
    </StyledWrapper>
  );
};

function StyledWrapper({ children }: any) {
  return <div className="relative flex w-full pl-1 pr-2 my-3">{children}</div>;
}

export default CardContainer;
