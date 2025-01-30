import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Make sure this file has @tailwind directives
import Job from './job'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Job />
);
