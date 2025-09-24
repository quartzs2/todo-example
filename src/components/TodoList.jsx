import Todo from "./Todo";

export default function TodoList({ todoList, deleteTodo, updateTodo }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      ))}
    </ul>
  );
}
