import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './layouts/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="layout-wrapper">
        <Sidebar />
        <main className="main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            
            {/* CAMBIO CLAVE: Ruta en singular para que coincida con tus Links */}
            <Route path="/projects/:id" element={<ProjectDetail />} />
            
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;