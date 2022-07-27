import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Login';
import Main from './Main';
import Add from './Add';
import Update from './Update';
import Product from './Product';
import Contact from './Contact';
import About from './About';
import Faq from './Faq';
import Shop from './Shop';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/add" element={<Add />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/faq" element={<Faq />} ></Route>
        <Route path="/shop" element={<Shop />} ></Route>
        <Route path="/product/:PRODUCT_ID" element={<Product />} ></Route>
        <Route path="/update/:PRODUCTID" element={<Update />} ></Route>
        <Route path="/" element={<Main />} ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
