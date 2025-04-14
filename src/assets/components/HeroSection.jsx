import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import InteractiveButton from './InteractiveButton';
import ThreeDParticles from './ThreeDParticles';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <ThreeDParticles />
      
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>{t('welcome')}</h1>
          <p className="mission-text">{t('mission')}</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <InteractiveButton>
              {t('join_cta')}
            </InteractiveButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}