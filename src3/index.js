import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomoContext from './Components/home/HomoContext';
import { BrowserRouter } from 'react-router-dom'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <HomoContext>
      <App />
    </HomoContext>
  </BrowserRouter>

);


