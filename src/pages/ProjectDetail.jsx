import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
// IMPORTACIÓN CORREGIDA:
import { ArrowLeft, X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  const projectIndex = projects.findIndex(p => p.id === id);
  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  const showNext = useCallback((e) => {
    e?.stopPropagation();
    if (project?.gallery?.length) {
      setSelectedIndex((prev) => (prev + 1 === project.gallery.length ? 0 : prev + 1));
    }
  }, [project]);

  const showPrev = useCallback((e) => {
    e?.stopPropagation();
    if (project?.gallery?.length) {
      setSelectedIndex((prev) => (prev === 0 ? project.gallery.length - 1 : prev - 1));
    }
  }, [project]);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedIndex]);

  if (!project) return <div className="main-container text-cyan">Project not found_</div>;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="project-detail-page">
      
      <div className="sticky-back-container">
        <Link to="/projects" className="back-link-inline">
          <ArrowLeft size={16} className="text-cyan" />
          <span className="label-caps">Back to Projects</span>
        </Link>
      </div>

      <section className="project-hero" style={{ marginTop: '-60px' }}>
        <img src={project.heroImage} alt={project.title} className="hero-img-bg" />
        <div className="hero-content">
          <h1 className="h1-display">{project.title}</h1>
        </div>
      </section>

      <section className="detail-info-grid">
        <div className="info-main">
          <div className="info-block">
            <h2 className="h2-label">Project Overview</h2>
            <p className="text-body-large">{project.overview}</p>
          </div>
          <div className="info-block">
            <h2 className="h2-label">Challenge</h2>
            <p className="text-body-large">{project.challenge}</p>
          </div>
          <div className="info-block">
            <h2 className="h2-label">Solution</h2>
            <p className="text-body-large">{project.solution}</p>
          </div>
          <div className="info-block">
            <h2 className="h2-label">Impact</h2>
            <p className="text-body-large">{project.impact}</p>
          </div>
        </div>

        <aside className="detail-sidebar">
          <div>
            <h3 className="label-caps text-cyan">Role & Tech</h3>
            <p className="text-white" style={{ marginTop: '8px'}}>
              <strong>Role:</strong> {project.role}
            </p>
          </div>

          {/* PARÁMETROS EXTRA (Ficha Técnica) */}
          <div>
            <p className="label-caps text-cyan-subtle" style={{ fontSize: '10px' }}>Timeline</p>
            <p className="text-white">{project.timeline}</p>
          </div>
          <div>
            <p className="label-caps text-cyan-subtle" style={{ fontSize: '10px' }}>Industry</p>
            <p className="text-white">{project.category}</p>
          </div>
          {/* <div className="project-specs" style={{ borderTop: '1px solid var(--border-cyan-subtle)', paddingTop: '24px', display: 'grid', gap: '20px' }}>
          </div> */}

          <div className="tech-pills-container">
            <p className="label-caps text-cyan-subtle" style={{ fontSize: '10px' }}>Responsibilites</p>
            {project.tags.map(tag => (
              <span key={tag} className="pill-outline">{tag}</span>
            ))}
          </div>
          {/* CTAs DINÁMICOS */}
          <div className="project-actions">
            {project.prototypeLink && project.prototypeLink !== "https:" && (
              <a href={project.prototypeLink} target="_blank" rel="noopener noreferrer" className="btn-prototype">
                <span>View Prototype</span>
              </a>
            )}

            {project.externalLink && project.externalLink !== "https:" && (
              <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className="btn-website">
                <span>Website</span>
              </a>
            )}
          </div>
        </aside>
      </section>

      {/* GALERÍA */}
      <section className="gallery-section">
        <div className="project-gallery-grid">
          {project.gallery?.map((item, index) => (
            <motion.div 
              key={index}
              className={`gallery-item ${item.type}`} 
              onClick={() => setSelectedIndex(index)}
              whileHover={{ y: -8 }}
              style={{ cursor: 'zoom-in' }}
            >
              <img src={item.url} alt={`Gallery ${index}`} className="gallery-img-obj" />
            </motion.div>
          ))}
        </div>
      </section>

       {/* 5. NEXT PROJECT FOOTER */}
      <section className="next-project-footer" style={{ marginBottom: '40px' }}>
        <p className="label-caps text-cyan" style={{ textAlign: 'center' }}>Up Next</p>
        <Link to={`/projects/${nextProject.id}`} className="next-link">
          <motion.h2 className="h2" whileHover={{ letterSpacing: "6px" }} style={{ textAlign: 'center' }}>
            {nextProject.title} <span>→</span>
          </motion.h2>
        </Link>
      </section>

      {/* MODAL / LIGHTBOX */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            className="lightbox-overlay"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <button className="modal-close" onClick={() => setSelectedIndex(null)}><X size={32} /></button>
            <button className="nav-btn-cyber left" onClick={showPrev}><ChevronLeft size={48} /></button>
            <motion.div 
              key={selectedIndex}
              className="modal-content-cyber"
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={project.gallery[selectedIndex].url} className="lightbox-img" alt="Fullscreen" />
              <div className="label-caps modal-counter">
                {selectedIndex + 1} / {project.gallery.length}
              </div>
            </motion.div>
            <button className="nav-btn-cyber right" onClick={showNext}><ChevronRight size={48} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectDetail;