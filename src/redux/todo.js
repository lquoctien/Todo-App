import { createSlice } from "@reduxjs/toolkit";

const initialState= {
  items: []
}

const todo = createSlice ({
  name: 'todo',
  initialState,
  reducers: {
    onAddClick(state, action) {
      state.items.push(action.payload)
    },
    onTodoClick(state, action) {
      state.items.splice(
        action.payload.id,
        1, 
        {...action.payload,
        completed: !action.payload.completed}
      )
    }
  }
})

export const {onAddClick, onTodoClick} = todo.actions;

export default todo.reducer;