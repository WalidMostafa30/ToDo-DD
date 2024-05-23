import { createSlice } from "@reduxjs/toolkit";
import { data } from "../assets/Data";
import toast from "react-hot-toast";

const DDTodoList = localStorage.getItem("DDTodoList")
  ? JSON.parse(localStorage.getItem("DDTodoList"))
  : data;

const DDTodoListInLS = (data) => {
  localStorage.setItem("DDTodoList", JSON.stringify(data));
};

export const DDTodoListSlice = createSlice({
  name: "DDTodoListSlice",
  initialState: DDTodoList,
  reducers: {
    addPost: (state, action) => {
      state[0].items.push(action.payload);
      DDTodoListInLS(state);
      toast.success("Task Added 🥰");
    },

    removePost: (state, action) => {
      state[action.payload.DRid - 1].items = state[
        action.payload.DRid - 1
      ].items.filter((item) => item.id !== action.payload.id);
      DDTodoListInLS(state);
      toast.success("Task Deleted 😓");
    },

    editPost: (state, action) => {
      const { id, content, DRid } = action.payload;
      const todo = state[DRid - 1].items.find((todo) => todo.id === id);
      if (todo) {
        todo.content = content;
      }
      DDTodoListInLS(state);
    },

    swipePost: (state, action) => {
      const source = action.payload.source;
      const destination = action.payload.destination;

      if (!action.payload.destination) return;

      // in another column
      if (source.droppableId !== destination.droppableId) {
        const sourceColumnIndex = state.findIndex(
          (e) => e.id === source.droppableId
        );
        const destColumnIndex = state.findIndex(
          (e) => e.id === destination.droppableId
        );
        const sourceColumn = state[sourceColumnIndex];
        const destColumn = state[destColumnIndex];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        state[sourceColumnIndex].items = sourceItems;
        state[destColumnIndex].items = destItems;
        DDTodoListInLS(state);

        // in same column
      } else {
        const sourceColumnIndex = state.findIndex(
          (e) => e.id === source.droppableId
        );
        const sourceColumn = state[sourceColumnIndex];
        const sourceItems = [...sourceColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        sourceItems.splice(destination.index, 0, removed);
        state[sourceColumnIndex].items = sourceItems;
        DDTodoListInLS(state);
      }
    },
  },
});

export const { addPost, removePost, editPost, swipePost } =
  DDTodoListSlice.actions;
export default DDTodoListSlice.reducer;
