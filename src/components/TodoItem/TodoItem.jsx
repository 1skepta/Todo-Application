import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, editTodo, deleteTodo } from "../../store/todoSlice";

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
    <li>
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
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </li>
  );
}

export default TodoItem;
