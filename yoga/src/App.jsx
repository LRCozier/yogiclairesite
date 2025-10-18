import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Classes from './Pages/Classes';
import Retreats from './Pages/Retreats';
import YogaInEducation from './Pages/YogaInEducation';
import Contact from './Pages/Contact';
import Footer from './Components/Footer/Footer';
import '../src/Styles/main.scss';

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
          <Route path="/retreats" element={<Retreats />} />
          <Route path="/yoga-in-education" element={<YogaInEducation />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      </main>
      <Footer/>
    </Router>
    </>
  )
}

export default App
