
import React, { useState } from 'react';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Мои задачи</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Введите новую задачу"
      />
      <button onClick={addTask}>Добавить</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => removeTask(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
