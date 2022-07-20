import { configureStore } from "@reduxjs/toolkit";

import todoList from "./todoSlice";
import filter from "./filterSlice";

const store = configureStore({
  reducer: {
    todoList,
    filter,
  },
});

export default store;
