import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export default function InteractiveButton({ children, onClick, className = '' }) {
  return (
    <motion.button
      className={`interactive-button ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.button>
  );
}

InteractiveButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string
};
