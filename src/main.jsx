import React from 'react';
import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import {Provider} from 'react-redux';
import store from './redux/reducer/store.js';
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      </Provider>
  </React.StrictMode>
);
