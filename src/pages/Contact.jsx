import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MessageSquare, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      initial="hidden" 
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="contact-section-container"
    >
      <motion.div variants={itemVariants} className="contact-header-block">
        <span className="badge text-cyan" style={{margin: '80px 0 40px'}}>• Available for Strategic Partnerships</span>
        <h1 className="contact-hero-title">
          Let’s talk about your <br />
          <span className="text-cyan">next big product.</span>
        </h1>
      </motion.div>

      <div className="contact-bento-grid">
        {/* LINKEDIN */}
        <motion.a 
          variants={itemVariants}
          href="https://www.linkedin.com/in/carloseh5/" 
          target="_blank" rel="noopener noreferrer"
          className="contact-card-bento"
        >
          <Linkedin className="text-cyan" size={32} />
          <div className="contact-card-footer">
            <div className="contact-info">
              <p className="method-label">LinkedIn</p>
              <span className="method-sub">Professional Network</span>
            <ArrowUpRight size={20} style={{marginLeft: '4px'}} className="text-subtle" />
            </div>
          </div>
        </motion.a>

        {/* EMAIL */}
        <motion.a 
          variants={itemVariants}
          href="mailto:kornersin@gmail.com"
          className="contact-card-bento"
        >
          <Mail className="text-cyan" size={32} />
          <div className="contact-card-footer">
            <div className="contact-info">
              <p className="method-label">Email</p>
              <span className="method-sub">kornersin@gmail.com</span>
            <ArrowUpRight size={20} style={{marginLeft: '4px'}} className="text-subtle" />
            </div>
          </div>
        </motion.a>

        {/* WHATSAPP */}
        <motion.a 
          variants={itemVariants}
          href="https://wa.me/525528470852"
          target="_blank" rel="noopener noreferrer"
          className="contact-card-bento"
        >
          <MessageSquare className="text-cyan" size={32} />
          <div className="contact-card-footer">
            <div className="contact-info">
              <p className="method-label">WhatsApp</p>
              <span className="method-sub">Direct Message</span>
            <ArrowUpRight size={20} style={{marginLeft: '4px'}} className="text-subtle" />
            </div>
          </div>
        </motion.a>
      </div>

      <motion.div variants={itemVariants} className="contact-location-footer">
        <p className="text-subtle" style={{marginTop: '40px'}}>Based in Mexico City • Open to Work Globally</p>
      </motion.div>
    </motion.div>
  );
};

export default Contact;