import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface ITheme {
  theme: 'light' | 'dark';
}

const initialState: ITheme = {
  theme: 'dark',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;
