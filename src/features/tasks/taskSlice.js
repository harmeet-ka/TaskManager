// src/features/tasks/taskSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);  // Adds a new task
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload); // Removes a task
    },
    toggleTaskStatus: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed; // Toggle completion status
      }
    },
    updateTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.name = updatedTask.name;
        task.priority = updatedTask.priority;
        task.category = updatedTask.category;
      }
    },
  },
});

export const { addTask, removeTask, toggleTaskStatus, updateTask } = taskSlice.actions;

export default taskSlice.reducer;
