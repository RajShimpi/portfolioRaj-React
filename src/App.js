import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './componets/Navbar';
import Skills from './componets/Skills';
import Projects from './componets/Projects';
import Services from './componets/Services';
import Contact from './componets/Contact';
import Footer from './componets/Footer';
import Home from './componets/Home';
import About from './componets/About';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </Router>
  );
}
export default App;