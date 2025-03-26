// src/store/store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import taskReducer from '../features/tasks/taskSlice';
import filterReducer from '../features/filters/filterSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // for localStorage

// Combine the reducers
const rootReducer = combineReducers({
  tasks: taskReducer,
  filter: filterReducer,
});

// persist configuration
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['tasks'], // Optional: specify which reducer to persist
};

// Apply persistReducer to your rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure your store with the persisted reducer
const store = configureStore({
  reducer: persistedReducer,
});

// Create a persistor object
const persistor = persistStore(store);

export { store, persistor };
