import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    editTodo: (state, action) => {
      const { id, newTitle } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.title = newTitle;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    clearCompleted: (state, action) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
  },
});

export const { addTodo, toggleTodo, editTodo, deleteTodo, clearCompleted } =
  todoSlice.actions;
export default todoSlice.reducer;
