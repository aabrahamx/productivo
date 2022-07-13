import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { changeTodoStatus } from './todoSlice';
import { capitalize } from '../../helpers/functions';
import { selectTheme } from '../theme/themeSlice';

const btnOptions = [
  { name: 'todo', icon: '🟥' },
  { name: 'doing', icon: '🟡' },
  { name: 'finished', icon: '✅' },
  { name: 'remove', icon: '🗑' },
];

interface IProps {
  id: number;
  handleToggle: () => void;
}

export const CardMenuOptions: React.FC<IProps> = ({ id, handleToggle }) => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);
  const [bgCard, bgBtnHover, colorBtn] =
    theme === 'light'
      ? ['bg-gray-100', 'hover:bg-gray-200', 'text-black']
      : ['bg-gray-700', 'hover:bg-gray-600', 'text-white']

  const handleStatusChange = ({ currentTarget }: any) => {
    const { id, value } = currentTarget;
    dispatch(changeTodoStatus({ id: Number(id), status: value.toLowerCase() }));
    handleToggle();
  };

  return (
    <>
      <div
        className={`absolute w-11/12 h-full top-0 left-7 my-1.5 px-2 z-10 flex justify-center items-center flex-wrap ${bgCard}`}
      >
        {btnOptions.map((option) => {
          const { name, icon } = option;
          return (
            <button
              key={name}
              value={name}
              id={String(id)}
              onClick={handleStatusChange}
              className={`flex justify-start px-3 py-1 mx-1 text-xs font-semibold rounded ${bgBtnHover} ${colorBtn}`}
            >
              <span className="mr-2">{icon}</span>
              <span>{capitalize(name)}</span>
            </button>
          );
        })}
      </div>
    </>
  );
};
