import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function TeamMemberCard({ member }) {
  const { t } = useTranslation();

  return (
    <motion.div
      className="team-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="card-inner">
        <div className="card-front">
          <img 
            src={member.photo} 
            alt={t(`team.${member.id}.name`)} 
            className="member-photo"
          />
          <div className="member-info">
            <h3>{t(`team.${member.id}.name`)}</h3>
            <p>{t(`team.${member.id}.position`)}</p>
          </div>
        </div>
        
        <div className="card-back">
          <h3>{t(`team.${member.id}.name`)}</h3>
          <p className="bio">{t(`team.${member.id}.bio`)}</p>
          <div className="social-links">
            {member.socials.map((social) => (
              <a 
                key={social.name}
                href={social.url}
                aria-label={social.name}
              >
                <motion.img
                  src={`/icons/${social.name}.svg`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}