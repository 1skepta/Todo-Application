import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  console.log("Todos: ", todos);
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
