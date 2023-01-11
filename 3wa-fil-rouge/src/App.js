import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Products from './components/Products.jsx';
import Localisation from './components/Localisation.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Nos-produits" element={<Products />} />
          <Route path="/Nous-trouver" element={<Localisation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
