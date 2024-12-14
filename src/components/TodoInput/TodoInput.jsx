import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";
import checkmark from "../../assets/images/icon-check.svg";
import styles from "./TodoInput.module.css";

function TodoInput() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (title.trim()) {
      dispatch(addTodo(title));
      setTitle("");
    }
  };

  return (
    <div className={styles.box}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo"
      />
      <img src={checkmark} alt="checkmark" onClick={handleAddTodo} />
    </div>
  );
}

export default TodoInput;
