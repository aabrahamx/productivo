import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

import { mockData } from '../../helpers/mockData';

// Todo.status is todo, doing, finished, archived respectively
export interface Todo {
  id: number;
  title: string;
  description: string;
  status: 'todo' | 'doing' | 'finished' | 'archived';
  tags: 'personal' | 'work' | null;
}

const initialState: Todo[] = [...mockData];

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },

    deleteTodo: (state, action: PayloadAction<Todo>) => {
      state.filter((todo) => todo.id !== action.payload.id);
    },
 
    changeStatusToTodo: (state, action: PayloadAction<Todo['id']>) => {
      state.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.status = 'todo';
        }
      });
    },
    changeStatusToDoing: (state, action: PayloadAction<Todo['id']>) => {
      state.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.status = 'doing';
        }
      });
    },
    changeStatusToFinished: (state, action: PayloadAction<Todo['id']>) => {
      state.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.status = 'finished';
        }
      });
    },
    changeStatusToArchived: (state, action: PayloadAction<Todo['id']>) => {
      state.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.status = 'archived';
        }
      });
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  changeStatusToArchived,
  changeStatusToDoing,
  changeStatusToFinished,
  changeStatusToTodo,
} = todoSlice.actions;

export const selectAllTodo = (state: RootState) => state.todo;

export default todoSlice.reducer;
