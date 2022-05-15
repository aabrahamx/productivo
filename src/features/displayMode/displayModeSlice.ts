import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
            
export interface DisplayMode {
  darkMode: boolean;
}

const initialState: DisplayMode = {
  darkMode: false,
};

export const displayModeSlice = createSlice({
  name: 'dark mode',
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
  },
});

export const { toggle } = displayModeSlice.actions;
export const selectDarkMode = (state: RootState) => state.displayMode.darkMode;

export default displayModeSlice.reducer;
