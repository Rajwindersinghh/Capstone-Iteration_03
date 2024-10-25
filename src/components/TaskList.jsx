import React, { useState } from 'react';

const TaskList = ({ tasks, setTasks }) => {
  const [showCompleted, setShowCompleted] = useState(true); // State to show/hide completed tasks

  // Toggle completed status
  const handleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  // Delete a task
  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  // Undo completion of a task
  const handleUndo = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: false } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  // Toggle visibility of completed tasks
  const toggleShowCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  return (
    <div>
      {/* Hide Completed button */}
      {tasks.some((task) => task.completed) && (
        <button onClick={toggleShowCompleted}>
          {showCompleted ? 'Hide Completed' : 'Show Completed'}
        </button>
      )}

      <ul className="task-list">
        {tasks
          .filter((task) => (showCompleted ? true : !task.completed)) // Filter tasks based on showCompleted
          .map((task) => (
            <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
              <span>{task.name} - Priority: {task.priority}</span>
              <div className="task-actions">
                {task.completed ? (
                  <button onClick={() => handleUndo(task.id)}>Undo</button>
                ) : (
                  <button onClick={() => handleComplete(task.id)}>Complete</button>
                )}
                <button onClick={() => handleDelete(task.id)}>Delete</button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TaskList;
