// src/components/TaskList.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter, setSearchQuery } from '../features/filters/filterSlice';
import { addTask, toggleTaskStatus, removeTask } from '../features/tasks/taskSlice';
import TaskCard from './TaskCard';
import './TaskList.css'; // Import the CSS file

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks); // Accessing tasks from state
  const filter = useSelector(state => state.filter);

  // Filter tasks based on status and search query
  const filteredTasks = tasks
    .filter(task => {
      if (filter.status === 'completed') return task.completed;
      if (filter.status === 'active') return !task.completed;
      return true;
    })
    .filter(task => task.name.toLowerCase().includes(filter.searchQuery.toLowerCase()));

  return (
    <div className="task-list">
      {/* Search input */}
      <input
        className="search-input"
        type="text"
        placeholder="Search tasks"
        value={filter.searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      />

      {/* Filter dropdown */}
      <div className="filter-dropdown">
        <label htmlFor="status-filter">Filter by status: </label>
        <select
          id="status-filter"
          onChange={(e) => dispatch(setStatusFilter(e.target.value))}
          value={filter.status}
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {/* Task table */}
      <table className="task-table">
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Priority</th>
            <th>Category</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map(task => (
            <tr key={task.id}>
              <td>{task.name}</td>
              <td>{task.priority}</td>
              <td>{task.category}</td>
              <td>{task.completed ? 'Completed' : 'Active'}</td>
              <td className="action-buttons">
                <button
                  className="complete"
                  onClick={() => dispatch(toggleTaskStatus(task.id))}
                  style={{marginRight:"10px"}}
                >
                  {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button
                  className="delete"
                  onClick={() => dispatch(removeTask(task.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
