import React from 'react';

export const TodoForm: React.FC<any> = ({
  todoTitle,
  setTodoTitle,
  todoDetails,
  setTodoDetails,
  tagList,
  setTodoTags,
  handleSubmitForm,
}) => {
  return (
    <form className="flex flex-col text-black">
      <input
        className="my-1 p-2 rounded border border-gray-200 focus:border-gray-500 focus:outline-none"
        value={todoTitle}
        placeholder="Title"
        onChange={({ target }) => setTodoTitle(target.value)}
      />
      <textarea
        className="my-1 p-2 rounded resize-none border border-gray-200 focus:border-gray-500 focus:outline-none"
        value={todoDetails}
        placeholder="Details"
        onChange={({ target }) => setTodoDetails(target.value)}
      ></textarea>

      <fieldset className="my-1 px-1 text-sm flex">
        {tagList.map((option: string) => {
          return (
            <div className="mr-2 flex items-center">
              <label className="mr-1" htmlFor={option}>
                {option[0].toUpperCase() + option.slice(1)}
              </label>
              <input
                id={option}
                value={option}
                name="tag"
                type="radio"
                onChange={({ target }) => setTodoTags(target.value)}
              />
            </div>
          );
        })}
      </fieldset>

      <button
        onClick={handleSubmitForm}
        className="w-full py-2 mt-8 text-white bg-gray-700 rounded hover:bg-gray-900"
      >
        Add to Todo
      </button>
    </form>
  );
};
