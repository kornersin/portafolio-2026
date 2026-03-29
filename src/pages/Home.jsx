import React from 'react';
import { motion } from 'framer-motion';
import fotoPerfil from '../assets/perfil.jpg'; 

const Home = () => {
  return (
    <div className="home-container">
      {/* BARRA SUPERIOR (Syntactic Header) */}
      <nav className="home-nav">
        <div className="nav-container">
          <a 
            href="/resume.pdf" 
            download="resume.pdf" 
            className="btn-primary"
          >
            <span>GET RESUME</span>
          </a>
        </div>
      </nav>

      {/* SECCIÓN HERO */}
      <section className="hero-section">
        
        {/* BLOQUE DE TEXTO IZQUIERDO */}
        <div className="hero-content">
          <span className="text-cyan badge">
            • Engineering Aesthetics
          </span>

          <h1 className="hero-title">
            PRODUCT [UX/UI] DESIGNER
          </h1>
          <h2 className="hero-subtitle">
            FRONTEND MINDSET.
          </h2>

          <p className="text-subtle hero-description">
            I am a Product Designer with a <strong className="text-white">Front-End Mindset</strong>. 
            I bridge the gap between pixel-perfect design and production-ready code, focusing on 
            highly interactive interfaces.
          </p>

          {/* MÉTRICAS DE IMPACTO */}
          <div className="metrics-grid">
            <div className="metric-item">
              <h2 className="metric-value">05+</h2>
              <p className="label-caps text-subtle">years experience</p>
            </div>
            <div className="metric-item">
              <h2 className="metric-value">90%</h2>
              <p className="label-caps text-subtle">build accuracy</p>
            </div>
          </div>
        </div>

        {/* BLOQUE DE FOTO DERECHO */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="hero-visual"
        >
          {/* Círculo de resplandor (Glow) de fondo */}
          <div className="glow-effect" />

          {/* Tarjeta de Foto con el borde Cyan */}
          <div className="profile-card">
            <img 
              src={fotoPerfil} 
              alt="Carlos - Product Designer" 
              className="profile-photo"
            />
            
            {/* Pills de Stack sobre la foto */}
            <div className="stack-pills">
              <span className="pill">REACT</span>
              <span className="pill">FIGMA</span>
              <span className="pill">TAILWIND</span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;