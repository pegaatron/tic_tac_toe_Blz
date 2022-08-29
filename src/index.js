import React from 'react';
import ReactDOM from 'react-dom/client';
import './Css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './Css/fonts/font.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle/>
    <App />
  </>
);


reportWebVitals();
