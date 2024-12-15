import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../store/todoSlice";
import checkmark from "../../assets/images/icon-check.svg";
import styles from "./TodoInput.module.css";

function TodoInput() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleAddTodo = () => {
    if (title.trim()) {
      dispatch(addTodo(title));
      setTitle("");
    }
  };

  return (
    <div
      className={styles.box}
      style={{ backgroundColor: theme === "light" ? "white" : "#25273c" }}
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo"
        style={{
          backgroundColor: theme === "light" ? "white" : "#25273c",
          color: theme === "light" ? "black" : "white",
        }}
      />
      <img
        src={checkmark}
        alt="checkmark"
        onClick={handleAddTodo}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}

export default TodoInput;
