import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, editTodo, deleteTodo } from "../../store/todoSlice";
import styles from "./TodoItem.module.css";
import del from "../../assets/images/icon-cross.svg";
import edit from "../../assets/images/edit-button-svgrepo-com.svg";
import check from "../../assets/images/icon-check.svg";

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleEdit = () => {
    if (isEditing && newTitle.trim()) {
      dispatch(editTodo({ id: todo.id, newTitle }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      ) : (
        <span>{todo.title}</span>
      )}
      <img
        className={styles.editing}
        src={isEditing ? check : edit}
        onClick={handleEdit}
      />
      <img
        src={del}
        alt="delete button"
        onClick={() => dispatch(deleteTodo(todo.id))}
      />
    </li>
  );
}

export default TodoItem;
