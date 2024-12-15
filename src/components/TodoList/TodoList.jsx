import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  console.log("Todos: ", todos);
  return (
    <div className={styles.box}>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
