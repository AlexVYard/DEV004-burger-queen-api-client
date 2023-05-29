// import logo from './logo.svg';
import React/* , { useState, useEffect } */ from 'react'
// import { /* Link,  */Route, Routes, Router/* , useNavigate */ } from 'react-router-dom'
import {/*  BrowserRouter as Router,  */Routes, Route } from 'react-router-dom'
import Login from './components/login.js';
import Menu from './components/menu.js';
import Kitchen from './components/kitchen.js';
import Office from './components/office.js';
import OfficeProducts from './components/officeProducts.js';
// import { onNavigate } from './lib/onNavigate.js';
// import './App.css';
import PrivateRoutes from './scripts/privateRoutes.js'
// import Product from './components/product.js';

function App() {
  /* const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate('/menu')
    }
  }, []) */
  return (
      <>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Menu />} path="/menu" exact />
            <Route element={<Kitchen />} path="/kitchen" exact />
            <Route element={<Office />} path="/office" exact />
            <Route element={<OfficeProducts />} path="/officeProducts" exact />
          </Route>
          <Route element={<Login />} path="/login" />  
          <Route element={<Login />} path="/" />        
        </Routes>
      </>
  )
  // onNavigate('/');
  /* return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React today!
        </a>
      </header>
    </div>
  ); */
}

export default App;
