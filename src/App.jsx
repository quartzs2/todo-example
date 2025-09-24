import "./App.css";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import Todo from "./components/Todo";
import { useTodos } from "./hooks/useTodos";

function App() {
  const { todoList, addTodo, deleteTodo, updateTodo } = useTodos();

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
