import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Terminal, Zap } from 'lucide-react';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="about-container">
      
      {/* 1. INTRO HERO */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
        className="about-hero"
      >
        <span className="text-cyan badge" style={{marginBottom: '40px'}}>• The Person behind the pixels</span>
        <h1 className="about-title">
          Bridging the gap between <span className="text-cyan">Design</span> & <span className="text-purple-glow">Code.</span>
        </h1>
        <p className="text-subtle about-description">
          I am Carlos, a <strong className="text-white">Sr. Product Designer</strong> with a heavy Front-End background. 
          I specialize in creating digital products that are not only visually stunning but technically scalable and business-oriented.
        </p>
      </motion.section>

      {/* 2. CORE PHILOSOPHY */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
        className="philosophy-grid"
      >
        <div className="card-syntax philo-card">
          <Palette className="text-purple" size={32} />
          <h3 className="label-caps card-title">DesignOps</h3>
          <p className="text-subtle card-text">
            Reducing handoff friction by 65% through technical-design alignment and robust system documentation.
          </p>
        </div>
        <div className="card-syntax philo-card featured">
          <Zap className="text-cyan" size={32} />
          <h3 className="label-caps card-title">UX Strategy</h3>
          <p className="text-subtle card-text">
            Converting complex business requirements and regulations into intuitive, accessible user journeys.
          </p>
        </div>
        <div className="card-syntax philo-card">
          <Terminal className="text-purple" size={32} />
          <h3 className="label-caps card-title">Engineering</h3>
          <p className="text-subtle card-text">
            Fluent in React and modern CSS, ensuring high-fidelity implementation and performance optimization.
          </p>
        </div>
      </motion.section>

      {/* 3. EXPERIENCE TIMELINE */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
        className="path-section"
      >
        <h2 className="label-caps text-cyan section-subtitle">Professional Path</h2>

        <div className="timeline-container">
          {[
            { 
                role: 'UX/UI Senior', 
                company: 'Broxel (Fintech)', 
                period: 'Jan 2026 — Present', 
                desc: 'Optimization of legal compliance workflows by architecting a centralized digital repository. Standardized complex information architecture for T&Cs and Privacy Notices across multiple financial entities, utilizing AI-assisted development and Google Apps Script to streamline developer handoff.' 
            },
            { 
              role: 'Product UX/UI Designer', 
              company: 'Saak Solutions', 
              period: 'Jul 2025 — Present', 
              desc: 'Architecting scalable UI Kits and high-fidelity prototypes. Working closely with developers to ensure pixel-perfect implementation and business alignment.' 
            },
            { 
              role: 'Product UX/UI Designer / Front-End Developer', 
              company: 'G21', 
              period: 'Apr 2024 — Jun 2025', 
              desc: 'Led the redesign of responsive web interfaces, improving usability by 35% and streamlining design-to-dev handoff through automated documentation.' 
            },
            { 
              role: 'Product UX Designer / Front-End Developer', 
              company: 'Adryo', 
              period: 'Jul 2022 — Sep 2023', 
              desc: 'Delivered a high-performance dashboard that improved client tracking by 45% and enhanced team oversight by 65% using heuristic evaluation and iterative testing.' 
            }
          ].map((job, index) => (
            <div key={index} className="timeline-row">
              <div className="timeline-left">
                <span className="label-caps period-text">{job.period}</span>
                <h3 className="company-name">{job.company}</h3>
              </div>
              <div className="timeline-right">
                <h4 className="text-cyan role-name">{job.role}</h4>
                <p className="text-subtle job-description">{job.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 4. TECH STACK */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
        className="expertise-section"
      >
        <h2 className="label-caps text-subtle section-subtitle-centered" style={{marginBottom: '16px'}}>
            Expertise & Toolstack
        </h2>
        
        <div className="skills-pills-container">
            {[
            'Product Discovery', 'UX Strategy', 'Design Systems', 'DesignOps', 
            'Information Architecture', 'User Research', 'Heuristic Evaluation',
            'Stakeholder Management', 'Agile / Scrum', 'Prototyping'
            ].map(skill => (
            <span key={skill} className="pill skill-pill">
                {skill}
            </span>
            ))}

            {[
            'Figma', 'React Foundations', 'Tailwind CSS', 'AI-Assisted Design', 'Design QA'
            ].map(tech => (
            <span key={tech} className="pill tech-pill-bridge">
                {tech}
            </span>
            ))}
        </div>
      </motion.section>

      {/* 5. EDUCATION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
        className="education-grid"
      >
        <div className="edu-column">
          <h2 className="label-caps text-cyan" style={{margin: '16px'}}>Education</h2>
          <div className="edu-entry" style={{marginBottom: '12px'}}>
            <p className="edu-title" >Computer Science</p>
            <span className="text-subtle">Universidad de Londres • 2024—Present</span>
          </div>
          <div className="edu-entry">
            <p className="edu-title">Master in UX/UI & Coding</p>
            <span className="text-subtle">Dev.F • 2020—2022</span>
          </div>
        </div>
        <div className="certs-column">
          <h2 className="label-caps text-cyan" style={{margin: '16px'}}>Certifications</h2>
          <ul className="certs-list">
            <li>Scrum Master & Design Sprint (Platzi)</li>
            <li>AI Product Discovery (Platzi)</li>
            <li>Design System Management</li>
            <li>Product Management</li>
          </ul>
        </div>
      </motion.section>
    </div>
  );
};

export default About;