import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span>{task.task}</span>
      <span>Priority: {task.priority}</span>
      <span>Status: {task.completed ? 'Completed' : 'Incomplete'}</span>
    </li>
  );
};

export default TaskItem;
