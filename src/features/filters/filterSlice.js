// src/features/filters/filterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'all',
  searchQuery: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setStatusFilter: (state, action) => {
      state.status = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

// Export actions
export const { setStatusFilter, setSearchQuery } = filterSlice.actions;

// Export the reducer to be used in the store
export default filterSlice.reducer;
