import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

const navLinks = ['home', 'about', 'projects', 'team', 'contact'];

export default function ResponsiveNavbar() {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.nav 
      className={`navbar ${isMobile ? 'mobile' : 'desktop'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="logo">Les Amis de Demain</div>

      {isMobile && (
        <button 
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      )}

      <AnimatePresence>
        {(menuOpen || !isMobile) && (
          <motion.div
            className={`nav-items ${isMobile ? 'mobile-menu' : ''}`}
            initial={isMobile ? { x: '100%' } : { opacity: 0 }}
            animate={isMobile ? { x: 0 } : { opacity: 1 }}
            exit={isMobile ? { x: '100%' } : { opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {navLinks.map((link) => (
              <Link key={link} to={`/${link === 'home' ? '' : link}`}>
                {t(link)}
              </Link>
            ))}
            <LanguageSwitcher />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}