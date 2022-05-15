import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  changeStatusToDoing,
  changeStatusToFinished,
  changeStatusToTodo,
  selectAllTodo,
  changeStatusToArchived,
  Todo,
  addTodo,
} from './todoSlice';

import CardWrapper from '../../components/CardWrapper/CardWrapper';
import CardMenu from '../../components/CardMenu/CardMenu';
import CardData from '../../components/CardData/CardData';

export function StatusFinishedContainer() {
  const todo = useAppSelector(selectAllTodo);
  const filtered = todo.filter((data) => data.status === 'finished');
  return (
    <>
      {filtered.map((todo) => {
        return (
          <CardWrapper>
            <CardMenu id={todo.id} />
            <CardData
              title={todo.title}
              description={todo.description}
              tags={todo.tags}
            />
          </CardWrapper>
        );
      })}
    </>
  );
}

export function StatusDoingContainer() {
  const todo = useAppSelector(selectAllTodo);
  const filtered = todo.filter((data) => data.status === 'doing');
  return (
    <>
      {filtered.map((todo) => {
        return (
          <CardWrapper>
            <CardMenu id={todo.id} />
            <CardData
              title={todo.title}
              description={todo.description}
              tags={todo.tags}
            />
          </CardWrapper>
        );
      })}
    </>
  );
}

export function StatusTodoContainer() {
  const todo = useAppSelector(selectAllTodo);
  const filtered = todo.filter((data) => data.status === 'todo');
  return (
    <>
      {filtered.map((todo) => {
        return (
          <CardWrapper>
            <CardMenu id={todo.id} />
            <CardData
              title={todo.title}
              description={todo.description}
              tags={todo.tags}
            />
          </CardWrapper>
        );
      })}
    </>
  );
}

const btnUtil =
  'w-full my-2 p-1.5 border rounded border-gray-300 hover:bg-gray-200 text-sm text-black font-semibold hover:drop-shadow-md';

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
    <div className="absolute w-64 my-1.5 shadow-2xl border py-3 px-8 bg-gray-100 z-10 text-white">
      <button onClick={moveToTodo} value={id} className={btnUtil}>
        To-do <span>📌</span>
      </button>
      <button onClick={moveToDoing} value={id} className={btnUtil}>
        Doing <span>🔧</span>
      </button>
      <button onClick={moveToFinished} value={id} className={btnUtil}>
        Finished <span>✅</span>
      </button>
      <button onClick={moveToArchive} value={id} className={btnUtil}>
        Archive <span>📁</span>
      </button>
    </div>
  );
}

export function AddTodo({ handleClose }: any) {
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState('');
  const handleTitleChange = ({ target }: any) => {
    setTitle(target.value);
  };

  const [description, setDescription] = useState('');
  const handleDescriptionChange = ({ target }: any) => {
    setDescription(target.value);
  };

  const [tags, setTags] = useState<Todo['tags']>(null);
  const handletagsChange = ({ target }: any): void => {
    tags === target.value ? setTags(null) : setTags(target.value);
  };

  const handleSubmitForm = (e: any): void => {
    e.preventDefault();
    handleClose()
    const data: Todo = {
      id: new Date().valueOf(),
      title: title,
      description: description,
      status: 'todo',
      tags: tags,
    };

    dispatch(addTodo(data));
  };

  return (
    <form className="flex flex-col text-black">
      <input
        placeholder="Todo Title"
        onChange={handleTitleChange}
        value={title}
        type="text"
        className="my-2 px-4 py-2 rounded bg-inherit border border-gray-300"
      />
      <textarea
        placeholder="description..."
        onChange={handleDescriptionChange}
        value={description}
        className="my-4 px-4 py-1 resize-none text-sm font-light h-20 rounded border border-gray-300"
      ></textarea>
      <fieldset className="px-4 text-xs font-light text-black">
        <label htmlFor="personal">Personal</label>
        <input
          onChange={handletagsChange}
          id="personal"
          type="radio"
          className="mr-6 ml-1"
          name="tag"
        />
        <label htmlFor="work">Work</label>
        <input
          onChange={handletagsChange}
          id="work"
          type="radio"
          className="mr-6 ml-1"
          name="tag"
        />
      </fieldset>
      <button
        onClick={handleSubmitForm}
        className="w-full mt-8 py-2 rounded text-white bg-gray-700 hover:bg-gray-900"
      >
        Add to Todo
      </button>
    </form>
  );
}
