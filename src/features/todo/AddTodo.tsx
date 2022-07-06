import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addTodo } from './todoSlice';

import { TodoForm } from '../../components/TodoForm/TodoForm';
import { BtnIcon } from '../../components/Btn/variants/BtnIcon';
import { Heading4 } from '../../components/Heading/Heading';
import { selectTheme } from '../theme/themeSlice';
import { getTodoObjTemplate } from '../../helpers/functions';

export const AddTodo: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);
  const btnBgUtil =
    theme === 'light'
      ? 'bg-gray-200 hover:bg-gray-300'
      : 'bg-gray-700 hover:bg-gray-900';

  const [todoTitle, setTodoTitle] = useState('');
  const [todoDetails, setTodoDetails] = useState('');
  const [todoTags, setTodoTags] = useState<'personal' | 'work' | ''>('');

  const resetForm = () => {
    setTodoTitle('');
    setTodoDetails('');
    setTodoTags('');
  };

  const [showForm, setShowForm] = useState(false);
  const handleOpenForm = (): void => setShowForm(true);
  const handleCloseForm = (): void => {
    setShowForm(false);
    resetForm()
  };

  const handleSubmitForm = (e: any): any => {
    e.preventDefault();
    if (todoTitle) {
      const data = getTodoObjTemplate(todoTitle, todoDetails, todoTags);
      dispatch(addTodo(data));
      handleCloseForm();
      resetForm()
    }
  };

  return (
    <>
      <BtnIcon
        iconType="add"
        handleClick={handleOpenForm}
        className={`fixed h-10 md:h-14 md:static bottom-16 right-4 md:w-full p-3 md:mt-4 rounded-full md:rounded-lg ${btnBgUtil}`}
      />

      {showForm && (
        <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full backdrop-blur bg-gray-900/70">
          <div className={`w-10/12 max-w-[25rem] p-6 bg-gray-100`}>
            <BtnIcon
              iconType="close"
              handleClick={handleCloseForm}
              className="h-8 bg-gray-700 hover:bg-gray-900 p-2.5 rounded-full"
            />

            <Heading4>New Todo</Heading4>
            <TodoForm
              todoTitle={todoTitle}
              setTodoTitle={setTodoTitle}
              todoDetails={todoDetails}
              setTodoDetails={setTodoDetails}
              tagList={['personal', 'work']}
              setTodoTags={setTodoTags}
              handleSubmitForm={handleSubmitForm}
            />
          </div>
        </div>
      )}
    </>
  );
};
