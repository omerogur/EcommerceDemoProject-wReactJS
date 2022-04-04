import React from 'react'
import { Link, Route, Router, Routes } from 'react-router-dom';
import App from './App';
import About from './components/About';
import Cart from './components/Cart';
import HomePage from './components/HomePage';
import OrderList from './components/OrderList';
import ProductDetail from './components/ProductDetail';

import ProductList from './components/ProductList';
const Routing = () => {
  return (
    <div>
   <Routes>
                <Route path='/' element={<ProductList />} />
                <Route path='/about' element={<About/>} />
                <Route path='/orders' element={<OrderList/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='/cart/:id' element={<ProductDetail/>} />
                <Route path='/all' element={<ProductList/>} />
                <Route path='/electronics' element={<ProductList/>} />
                <Route path='/jewelery' element={<ProductList/>} />
                <Route path='/mens' element={<ProductList/>} />
                <Route path='/womens' element={<ProductList/>} />
              </Routes>
    </div>
  )
}

export default Routing