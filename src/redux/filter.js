import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  kindOfFilter: 'SHOW_ALL'
}


const filterTodos = createSlice({
  name: 'filterTodos',
  initialState,
  reducers: {
    visibilityFilter (state, action) {
    state.kindOfFilter = action.payload.filter;
    }

  }
})

export const {visibilityFilter} = filterTodos.actions;

export default filterTodos.reducer;
