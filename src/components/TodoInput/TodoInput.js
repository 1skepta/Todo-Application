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
    <div className="flex gap-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo"
        className="p-2 border rounded"
      />
    </div>
  );
}

export default TodoInput;
