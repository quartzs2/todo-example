import { useState } from "react";

export default function TodoInput({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    const newTodo = { id: Number(new Date()), content: inputValue, complete: false };
    addTodo(newTodo);
    setInputValue("");
  };

  return (
    <div className="todo-input">
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>추가</button>
    </div>
  );
}
