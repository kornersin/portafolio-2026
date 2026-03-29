import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, Mail } from 'lucide-react';

const menuItems = [
  { id: 'home', icon: Home, label: 'HOME', path: '/' },
  { id: 'projects', icon: Briefcase, label: 'PROJECTS', path: '/projects' },
  { id: 'about', icon: User, label: 'ABOUT', path: '/about' },
  { id: 'contact', icon: Mail, label: 'CONTACT', path: '/contact' }
];

const Sidebar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  // Detectamos si es mobile para no mostrar tooltips
  const isMobile = window.innerWidth <= 768;

  return (
    <nav className="sidebar">
      <ul>
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          
          return (
            <li key={item.id} style={{ position: 'relative' }}>
              <NavLink 
                to={item.path}
                end={item.path === '/'} 
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onMouseEnter={() => !isMobile && setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <IconComponent size={20} />
                
                {/* Texto fijo abajo solo para Mobile */}
                <span className="mobile-label">{item.label}</span>
                
                {/* Tooltip flotante solo para Desktop */}
                <AnimatePresence>
                  {hoveredItem === item.id && !isMobile && (
                    <motion.div
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -5 }}
                      className="tooltip-desktop font-space"
                    >
                      {item.label}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;