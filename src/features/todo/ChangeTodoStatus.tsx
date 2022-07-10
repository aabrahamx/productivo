import React from 'react';
import { useAppDispatch } from '../../app/hooks';

import {
  changeStatusToTodo,
  changeStatusToDoing,
  changeStatusToFinished,
  changeStatusToArchived,
} from './todoSlice';


const btnUtil =
  'w-40 block my-2 p-1.5 pl-10 hover:bg-gray-50 text-xs font-semibold text-black rounded flex justify-start';

export function CardMenuOptions({ id, handleToggle }: any) {
  const dispatch = useAppDispatch();

  const moveToTodo = ({ target }: any) => {
    handleToggle();
    const id = Number(target.value);
    dispatch(changeStatusToTodo(id));
  };

  const moveToDoing = ({ target }: any) => {
    handleToggle();
    const id = Number(target.value);
    dispatch(changeStatusToDoing(id));
  };

  const moveToFinished = ({ target }: any) => {
    handleToggle();
    const id = Number(target.value);
    dispatch(changeStatusToFinished(id));
  };

  const moveToArchive = ({ target }: any) => {
    handleToggle();
    const id = Number(target.value);
    dispatch(changeStatusToArchived(id));
  };

  return (
    <>
      <div className="absolute top-0 border left-8 my-1.5 px-2 bg-gray-100 shadow-lg z-10">
        <button onClick={moveToTodo} value={id} className={btnUtil}>
          <span className="mr-2">🔴</span> Todo
        </button>
        <button onClick={moveToDoing} value={id} className={btnUtil}>
          <span className="mr-2">🟡</span> Doing
        </button>
        <button onClick={moveToFinished} value={id} className={btnUtil}>
          <span className="mr-2">🟢</span> Finished
        </button>
        <button onClick={moveToArchive} value={id} className={btnUtil}>
          <span className="mr-2">🗑</span> Delete
        </button>
      </div>
      <div className="fixed w-screen h-screen top-0 left-0 bg-red-500/20"></div>
    </>
  );
}