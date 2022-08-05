import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
