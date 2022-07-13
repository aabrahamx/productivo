import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { todoMockData } from '../../helpers/todoMockData';

export interface Todo {
  id: number;
  title: string;
  description: string;
  status: string;
  tags: string;
}

const initialState: Todo[] = [...todoMockData];

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },

    changeTodoStatus: (
      state,
      action: PayloadAction<{ id: number; status: string }>
    ) => {
      const { id, status } = action.payload;

      if (status === 'remove') {
        return state.filter((todo) => todo.id !== id);
      }

      state.forEach((todo) => {
        if (todo.id === id) {
          todo.status = status;
        }
      });
    },
  },
});

export const { addTodo, changeTodoStatus } = todoSlice.actions;

export const selectAllTodo = (state: RootState) => state.todo;

export default todoSlice.reducer;
