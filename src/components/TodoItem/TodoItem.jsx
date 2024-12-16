import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, editTodo, deleteTodo } from "../../store/todoSlice";
import styles from "./TodoItem.module.css";
import { FaTimes, FaCheck, FaEdit } from "react-icons/fa";

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleEdit = () => {
    if (isEditing && newTitle.trim()) {
      dispatch(editTodo({ id: todo.id, newTitle }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <li
      className={styles.item}
      style={{
        backgroundColor: theme === "light" ? "white" : "#25273c",
        color: theme === "light" ? "black" : "white",
        borderBottom:
          theme === "light" ? "1px solid #ccc" : "1px solid #666666",
      }}
    >
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
          className={styles.checkmark}
        />
        {isEditing ? (
          <input
            style={{
              backgroundColor: theme === "light" ? "white" : "#25273c",
              color: theme === "light" ? "black" : "white",
            }}
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
        {!todo.completed &&
          (isEditing ? (
            <FaCheck onClick={handleEdit} className={styles.editing} />
          ) : (
            <FaEdit onClick={handleEdit} className={styles.editing} />
          ))}
        <FaTimes
          className={styles.close}
          onClick={() => dispatch(deleteTodo(todo.id))}
        />
      </div>
    </li>
  );
}

export default TodoItem;
