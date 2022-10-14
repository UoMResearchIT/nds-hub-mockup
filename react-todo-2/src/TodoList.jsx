const TodoList = ({ todoList, msg }) => {
  return (
    <ul>
      {msg}
      {todoList.map((todo) => (
        <li>{todo}</li>
      ))}
    </ul>
  );
};

export { TodoList };
