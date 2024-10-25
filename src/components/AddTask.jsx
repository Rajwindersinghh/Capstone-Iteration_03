import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskPriority, setTaskPriority] = useState('low');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskName) return;

    const newTask = {
      id: Date.now(), // Unique id based on time
      name: taskName,
      priority: taskPriority,
      completed: false,
    };

    addTask(newTask);
    setTaskName('');
    setTaskPriority('low');
  };

  return (
    <div className="add-task">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <select
          value={taskPriority}
          onChange={(e) => setTaskPriority(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
