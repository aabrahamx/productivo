import React, { useState } from 'react';
import { AddTodo } from '../../features/todo/ToDo';

export default function AddTodoContainer() {
  const [displayForm, setDisplayForm] = useState(false);
  const handleAddClick = (): void => setDisplayForm(true);
  const handleCloseClick = (): void => setDisplayForm(false);

  return (
    <>
      <button
        onClick={handleAddClick}
        className="fixed md:static bottom-7 right-5 md:w-full p-3 md:py-3 md:mt-4 rounded-full md:rounded text-white text-3xl bg-gray-700 hover:bg-gray-900"
      >
        <img className='h-5 m-auto' alt="add icon" src="https://img.icons8.com/ios-glyphs/90/ffffff/plus-math.png" />
      </button>
      {displayForm ? <HiddenContent onClick={handleCloseClick} /> : null}
    </>
  );
}

function HiddenContent({ onClick }: any) {
  return (
    <div className="h-screen w-screen fixed top-0 left-0 flex flex-col items-center justify-center backdrop-blur bg-gray-900/70">
      <div className="w-10/12 sm:w-9/12 md:w-8/12 lg:w-5/12 xl:w-4/12 p-6 bg-slate-200 ">
        <button
          className="p-2.5 rounded-full text-white  bg-gray-700 hover:bg-gray-900"
          onClick={onClick}
        >
          <img
            className="h-3 m-auto"
            alt="close icon"
            src="https://img.icons8.com/ios-glyphs/90/ffffff/delete-sign.png"
          />
        </button>
        <h4 className="my-2 text-gray-800 font-bold text-xl text-center">
          New Todo
        </h4>
        <AddTodo />
      </div>
    </div>
  );
}
