import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProvideR  from './ownReduxProvider'
import { configureStore } from '@reduxjs/toolkit';
import { reducer, preloadedState } from './reducer';
const store = configureStore({reducer, preloadedState})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProvideR store={store}>
    <App />
  </ProvideR>
);


