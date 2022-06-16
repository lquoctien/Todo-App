import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

import todoReducer from "./todo";
import filterReducer from "./filter";

const reducer = combineReducers ({
  todo: todoReducer,
  filter: filterReducer
});

export default configureStore({reducer});