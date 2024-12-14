import React from "react";
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";

function Layout() {
  return (
    <div style={{ backgroundColor: "red", width: "100vw" }}>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default Layout;
