import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";

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
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default TodoInput;
