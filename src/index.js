import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css' 
import 'antd/dist/antd.css'
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from './context/CartContex';
ReactDOM.render(
  <CartProvider>

  <BrowserRouter>
  
    <App />
  
  </BrowserRouter>
  </CartProvider>,
  document.getElementById('root')
);

