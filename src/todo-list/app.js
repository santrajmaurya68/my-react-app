import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value)
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!inputValue) {
      return;
    }

    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Add Todo</button>
      </form>
      <ol>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;

