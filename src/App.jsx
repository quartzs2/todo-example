import { useState, useRef } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import Todo from "./components/Todo";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 0, content: "123", complete: false },
    { id: 1, content: "코딩 공부하기", complete: false },
    { id: 2, content: "잠 자기", complete: false },
  ]);

  const nextId = useRef(3);

  function addTodo(content) {
    const newTodo = {
      id: nextId.current++,
      content,
      complete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
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
      <TodoList>
        {todoList.map((todo) => (
          <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
        ))}
      </TodoList>
      <hr />
      <TodoInput addTodo={addTodo} />
    </>
  );
}

export default App;
