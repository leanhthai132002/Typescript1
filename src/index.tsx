import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import AppClone from './App_clone';
ReactDOM.render(
  <React.StrictMode>
    {/* Quản lý sự thay đổi của đường dẫn url và điều hướng toàn bộ app */}
    <BrowserRouter>
      <AppClone />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
