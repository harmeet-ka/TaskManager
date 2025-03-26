// src/App.jsx
import React from 'react';
import TaskList from './components/TaskList';  // Import the TaskList component

const App = () => {
  return (
    <div>
      <h1>Task Tracker</h1>  {/* Heading for your application */}
      <TaskList />  {/* Render the TaskList component to display tasks */}
    </div>
  );
};

export default App;
