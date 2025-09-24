import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 0, content: "123", complete: false },
    { id: 1, content: "코딩 공부하기", complete: false },
    { id: 2, content: "잠 자기", complete: false },
  ]);

  function addTodo(todo) {
    setTodoList((prev) => [...prev, todo]);
  }

  function deleteTodo(id) {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  }

  function updateTodo(id, new_todo) {
    setTodoList((prev) => prev.map((todo) => (todo.id === id ? new_todo : todo)));
  }

  return (
    <>
      <h1>오늘의 할 일 ✏️</h1>
      <TodoList todoList={todoList} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      <hr />
      <TodoInput addTodo={addTodo} />
    </>
  );
}

export default App;
