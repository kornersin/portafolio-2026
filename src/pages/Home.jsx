import React from 'react';
import { motion } from 'framer-motion';
import fotoPerfil from '../assets/perfil.jpg'; 

const Home = () => {
  return (
    <div className="home-container">
            
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
            <strong className="text-white">UX/UI Designer</strong> with a <strong className="text-white">Front-End Mindset</strong>. I design clear, functional, and frictionless products ready to build.
          </p>
          <p className="text-subtle hero-description">
            Experience in different sectors, adapting design solutions and collaborating directly with development to bring products to production.
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
      <section className="process-section">
        <div className="process-header-title">
          <div>
          <span className="text-cyan badge font-space">
            • How I Work
          </span>
          <h2 className="h2" style={{ marginTop: '16px' }}>
            From Discovery to Delivery
          </h2>
          </div>
          <div className="nav-container">
            <a 
              href="/resume.pdf" 
              download="resume.pdf" 
              className="btn-primary">
              <span>GET RESUME</span>
            </a>
          </div>
        </div>

        <div className="process-grid">
          {/* Card 1: Research */}
          <div className="process-card">
            <div className="process-card-header">
              <span className="process-number font-space">01</span>
              <h3 className="process-title h3">Discovery & Research</h3>
            </div>
            <p className="text-subtle">
              I learn about the business, user needs, and technical limits before starting the design. This helps build the right solution from the beginning.Understand business goals, user needs and technical constraints before proposing solutions.
            </p>
          </div>

          {/* Card 2: UI & Systems */}
          <div className="process-card">
            <div className="process-card-header">
              <span className="process-number font-space">02</span>
              <h3 className="process-title h3">Product Design</h3>
            </div>
            <p className="text-subtle">
              I create user flows, interfaces, and reusable components that keep the product clear, consistent, and ready for development.
            </p>
          </div>

          {/* Card 3: Handoff */}
          <div className="process-card">
            <div className="process-card-header">
              <span className="process-number font-space">03</span>
              <h3 className="process-title h3">Handoff & Optimization</h3>
            </div>
            <p className="text-subtle">
              I work closely with developers during handoff to make sure the final product matches the design and is ready for production.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;