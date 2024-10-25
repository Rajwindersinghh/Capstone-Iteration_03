import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import AddTask from '../components/AddTask';

const Tasks = () => {
  const [tasks, setTasks] = useState(() => {
    // Retrieve tasks from localStorage if they exist
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const addTask = (task) => {
    const newTask = { ...task, id: Date.now(), completed: false }; // Ensure each task has a unique ID and completed status
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div className="tasks-page">
      <h1>Manage Your Tasks</h1>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default Tasks;
