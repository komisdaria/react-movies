import "dotenv/config.js";
import React from 'react';
import ReactDOM from 'react-dom';
// import dotenv from 'dotenv';
import './index.css';
import App from './App';

// dotenv.config();
const isLoad = false ;

ReactDOM.render(
  <React.StrictMode>
    <App isLoad={isLoad} />
  </React.StrictMode>,
  document.getElementById('root')
);


