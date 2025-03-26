// src/components/TaskCard.jsx
import React from 'react';
import './TaskCard.css';  // Import a CSS file for individual task card styling

const TaskCard = ({ task, onToggleStatus, onRemove }) => {
  return (
    <div className="task-card">
      <div>
        <h3 className={`task-status ${task.completed ? 'completed' : ''}`}>{task.name}</h3>
        <span className={`task-priority priority-${task.priority}`}>{task.priority}</span>
      </div>

      <div className="task-actions">
        <button onClick={onToggleStatus}>{task.completed ? 'Undo' : 'Complete'}</button>
        <button onClick={onRemove}>Delete</button>
      </div>
    </div>
  );
};

export default TaskCard;
