const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  todoList: [],
};

const todoList = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList = [...state.todoList, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
    updateToDo: (state, action) => {
      console.log(action.payload);
      // state.todoList = todoList.map((todo) => {
      //   if (todo.id === action.id) {
      //     return { ...todo, status: action.status };
      //   }
      //   return todo;
      // });
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoList.actions;
export default todoList.reducer;
