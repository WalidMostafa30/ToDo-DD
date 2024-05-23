import { configureStore } from "@reduxjs/toolkit";
import DDTodoListSlice from "./DD-ToDo-List";

export const store = configureStore({
  reducer: {
    To_Do: DDTodoListSlice,
  },
});
