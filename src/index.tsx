import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import reportWebVitals from 'reportWebVitals';
import { setStorage, getStorage } from 'utils/webStorage';
import 'index.css';

!getStorage('lang', false) && setStorage('lang', 'zhTW', false);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
