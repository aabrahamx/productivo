import React, { useState } from 'react';
import ImgIcon from '../../components/ImgIcon/ImgIcon';
import { AddTodo } from '../../features/todo/ToDo';


const btnUtil = 'bg-gray-700 hover:bg-gray-900';
const btn1Util =
  'fixed md:static bottom-7 right-5 md:w-full p-3 md:py-3 md:mt-4 rounded-full md:rounded';
const btn2util = 'p-2.5 rounded-full';


export default function AddTodoContainer() {
  
  const [displayForm, setDisplayForm] = useState(false);
  const handleAddClick = (): void => setDisplayForm(true);
  const handleCloseClick = (): void => setDisplayForm(false);


  return (
    <>
      <button onClick={handleAddClick} className={`${btn1Util} ${btnUtil}`}>
        <ImgIcon color='white' name='add' util='h-5' />
      </button>
      {displayForm ? <HiddenContent onClick={handleCloseClick} /> : null}
    </>
  );
}

function HiddenContent({ onClick }: any) {
  return (
    <div className="h-screen w-screen fixed top-0 left-0 flex flex-col items-center justify-center backdrop-blur bg-gray-900/70">
      <div className="w-10/12 sm:w-9/12 md:w-8/12 lg:w-5/12 xl:w-4/12 p-6 bg-white ">
        <button className={`${btnUtil} ${btn2util}`} onClick={onClick}>
          <ImgIcon color='white' name='close' util="h-3" />
        </button>
        <h4 className="my-2 text-gray-800 font-bold text-xl text-center">
          New Todo
        </h4>
        <AddTodo handleClose={onClick} />
      </div>
    </div>
  );
}
