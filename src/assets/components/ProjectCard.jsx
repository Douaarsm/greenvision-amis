import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function ProjectCard({ project }) {
  const { t } = useTranslation();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - left) / width - 0.5);
    mouseY.set((e.clientY - top) / height - 0.5);
  };

  const transform = useMotionTemplate`
    rotateX(${mouseY * 15}deg)
    rotateY(${mouseX * -15}deg)
  `;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      style={{ transform }}
      whileHover={{ scale: 1.03 }}
      className="project-card relative overflow-hidden rounded-xl shadow-lg"
    >
      <div className="card-content">
        <motion.img 
          src={project.image}
          alt={t(`projects.${project.id}.title`)}
          className="project-image"
          initial={{ opacity: 0.9 }}
          whileHover={{ opacity: 1 }}
        />
        
        <motion.div 
          className="progress-bar"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
        
        <div className="project-info">
          <h3>{t(`projects.${project.id}.title`)}</h3>
          <p>{t(`projects.${project.id}.description`)}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="details-btn"
          >
            {t('view_details')}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}