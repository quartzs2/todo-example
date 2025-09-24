import { useState } from "react";

export default function Todo({ todo, deleteTodo, updateTodo }) {
  const [inputValue, setInputValue] = useState(todo.content);
  const [isEditing, setIsEditing] = useState(false);

  const handleCheckboxChange = () => {
    updateTodo(todo.id, { ...todo, complete: !todo.complete });
  };

  const handleEditInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEditToggle = () => {
    if (isEditing) {
      updateTodo(todo.id, { ...todo, content: inputValue });
    }
    setIsEditing((prev) => !prev);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <li>
      <div className="todo-content">
        <input type="checkbox" checked={todo.complete} onChange={handleCheckboxChange} />
        {!isEditing && <span>{todo.content}</span>}
        {isEditing && <input type="text" value={inputValue} onChange={handleEditInputChange} />}
      </div>
      <div className="todo-btns">
        <button onClick={handleEditToggle}>{isEditing ? "완료" : "수정"}</button>
        <button onClick={handleDelete}>삭제</button>
      </div>
    </li>
  );
}
