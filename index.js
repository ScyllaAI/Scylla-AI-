// client/src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Optional: include any global styles

// Render the React app into the root div in the HTML
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);