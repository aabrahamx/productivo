import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";


export interface FilterState {
  condition: 'all' | 'work' | 'personal';
}

export const initialState: FilterState = {
  condition: 'all'
}


export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<FilterState['condition']>) => {
      state.condition = action.payload;
    },
  },
});

export const { change } = filterSlice.actions;
export const selectFilter = (state: RootState) => state.filter.condition

export default filterSlice.reducer