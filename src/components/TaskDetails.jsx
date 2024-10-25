import React from 'react';

const TaskDetails = ({ task }) => {
  return (
    <div className="task-details">
      <h2>Task Details</h2>
      <p>{task.name}</p>
    </div>
  );
};

export default TaskDetails;
