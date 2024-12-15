import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCompleted } from "../../store/todoSlice";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  return (
    <div className={styles.box}>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <div className={styles.operations}>
        {todos.length === 0 ? "" : <p>{todos.length} items left</p>}
        {todos.length === 0 ? (
          ""
        ) : (
          <p
            onClick={() => {
              dispatch(clearCompleted());
            }}
          >
            Clear Completed
          </p>
        )}
      </div>
    </div>
  );
}

export default TodoList;
