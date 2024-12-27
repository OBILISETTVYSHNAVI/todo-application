import React, { useEffect, useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/todos') // Backend API URL
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.log('Error fetching to-dos:', error));
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
