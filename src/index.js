import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from './context';
// import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
  {/* <BrowserRouter> */}
  <ThemeProvider>
      <App />
      </ThemeProvider>
  {/* </BrowserRouter> */}
   
  </React.StrictMode>,
  document.getElementById('root')
);

