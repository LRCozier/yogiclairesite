import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from './Pages/Home';
import About from './Pages/About';
import Classes from './Pages/Classes';
import Contact from './Pages/Contact';
import Footer from './Components/Footer/Footer';
import './App.css'


const App = () => {

  return (
    <>
    <Router>
      <Navbar />
      <main>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      </main>
      <Footer/>
    </Router>
    </>
  )
}

export default App
