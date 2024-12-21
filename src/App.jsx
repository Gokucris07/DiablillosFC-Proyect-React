import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Inicio from './Inicio'
import Header from './Header'
import Footer from './Footer'
import Plantilla from './Plantila';
import Partidos from './Partidos';
import './App.css'
export default function App() {
  return (
    <>
    
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/plantilla" element={<Plantilla />} />
        <Route path="/partidos" element={<Partidos />} />
      </Routes>
      <Footer/>
    </Router>
    
    </>
  )
}
