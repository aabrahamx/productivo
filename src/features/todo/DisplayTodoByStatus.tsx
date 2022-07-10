import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectAllTodo, Todo } from './todoSlice';
import CardContainer from '../../components/Card/CardContainer/CardContainer';

interface IProps {
  status: Todo['status'];
}

export const DisplayTodoByStatus: React.FC<IProps> = ({ status }) => {
  const todo = useAppSelector(selectAllTodo);
  const filtered = todo.filter((data) => data.status === status);
  return (
    <>
      {filtered.map((todo) => {
        return <CardContainer todo={todo} />;
      })}
    </>
  );
};

export default DisplayTodoByStatus;
