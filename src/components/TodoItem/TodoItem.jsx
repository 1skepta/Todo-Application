import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, editTodo, deleteTodo } from "../../store/todoSlice";
import styles from "./TodoItem.module.css";
import del from "../../assets/images/close.svg";
import edit from "../../assets/images/edit.svg";
import check from "../../assets/images/chekmark.svg";

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
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
          className={styles.checkmark}
        />
        {isEditing ? (
          <input
            className={styles.editBox}
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        ) : (
          <span
            className={todo.completed ? styles.strikethrough : styles.editBox}
          >
            {todo.title}
          </span>
        )}
      </div>
      <div className={styles.second}>
        <img
          className={styles.editing}
          src={isEditing ? check : edit}
          onClick={handleEdit}
        />
        <img
          className={styles.close}
          src={del}
          alt="delete button"
          onClick={() => dispatch(deleteTodo(todo.id))}
        />
      </div>
    </li>
  );
}

export default TodoItem;
