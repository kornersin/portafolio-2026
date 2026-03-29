// En Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    // CONTENEDOR PRINCIPAL: Controla el padding de toda la página
    <div className="projects-page-wrapper">
      
      {/* HEADER: Título principal */}
      <header className="projects-header">
        <span className="badge text-cyan label-caps" style={{marginBottom: '40px'}}>• Selected Works</span>
        <h1 className="h1 projects-main-title">
          Solving complex problems <br /> 
          through <span className="text-cyan">Design & Logic.</span>
        </h1>
      </header>

      {/* BENTO GRID: Contenedor de las cards */}
      <div className="bento-grid-container">
        {projects.map((project, index) => {
          
          // LÓGICA DE SPAN HARDCODED (Blindaje PD Lead)
          // index % 2 === 0 significa índice impar (1º, 3º...)
          const spanClass = index % 2 === 0 ? 'span-7' : 'span-5';

          return (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // Asignamos la clase de span calculada + clase base
              className={`bento-card-wrapper ${spanClass}`}
            >
              <Link 
                to={`/projects/${project.id}`} 
                className="project-card-anchor"
                style={{ 
                  // Mantenemos solo la imagen dinámica, el resto al CSS
                  backgroundImage: `linear-gradient(to top, rgba(7, 13, 24, 0.95) 5%, rgba(7, 13, 24, 0.2) 60%), url(${project.heroImage})`
                }}
              >
                {/* CONTENIDO DE LA CARD */}
                <div className="project-card-content">
                  <span className="label-caps text-cyan project-category">
                    {project.category}
                  </span>
                  <h3 className="h3 project-card-title">
                    {project.title}
                  </h3>
                  
                  <div className="project-tags-row">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="pill tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;