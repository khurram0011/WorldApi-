import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Country from './components/Country';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div>
      <NavBar /> {/* Include NavBar component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/country" element={<Country />} />
        <Route path="/country/:id" element={<CountryDetails />} />

      </Routes>
    </div>
  );
}

export default App;
