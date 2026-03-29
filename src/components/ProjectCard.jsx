import { motion } from 'framer-motion';

const ProjectCard = ({ title, category, image, gridArea }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      style={{
        gridArea: gridArea, // Aquí definimos cuánto espacio ocupa
        backgroundColor: 'var(--bg-card)',
        borderRadius: 'var(--radius-card)',
        border: '1px solid var(--border-gray-subtle)',
        overflow: 'hidden',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Espacio para la imagen del proyecto */}
      <div style={{ 
        flex: 1, 
        backgroundColor: '#0f172a', // Fondo temporal
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
        color: 'var(--text-gray-subtle)'
      }}>
        {image ? <img src={image} style={{width: '100%', height: '100%', objectFit: 'cover'}} /> : "Imagen del Proyecto"}
      </div>

      {/* Info del Proyecto */}
      <div style={{ padding: '20px' }}>
        <p style={{ 
          fontFamily: 'var(--font-space)', 
          color: 'var(--accent-cyan)', 
          fontSize: '10px', 
          textTransform: 'uppercase',
          marginBottom: '4px'
        }}>
          {category}
        </p>
        <h3 style={{ 
          fontFamily: 'var(--font-jakarta)', 
          color: 'var(--text-white)',
          fontSize: '18px'
        }}>
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

export default ProjectCard;