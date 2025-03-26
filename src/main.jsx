// src/main.jsx (or src/index.jsx)
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import App from './App';
import { store } from './store/store'; // Import your Redux store

import './index.css'; // Optional for styling

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>  {/* Wrap your App component with Provider */}
    <App />
  </Provider>
);
