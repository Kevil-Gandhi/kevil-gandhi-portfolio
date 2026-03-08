import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiDownload, FiFileText } from 'react-icons/fi';
import { useTheme } from '../utils/ThemeContext';

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { isDark } = useTheme();

  return (
    <section id="resume" className="py-20" style={{ backgroundColor: isDark ? '#111827' : '#f9fafb' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Resume
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="p-12 rounded-2xl"
            style={{ 
              backgroundColor: isDark ? 'rgba(17, 24, 39, 0.5)' : 'rgba(255, 255, 255, 0.9)',
              border: `1px solid ${isDark ? 'rgba(75, 85, 99, 0.5)' : 'rgba(229, 231, 235, 0.8)'}`,
              backdropFilter: 'blur(12px)'
            }}
          >
            <FiFileText className="text-6xl mx-auto mb-6" style={{ color: '#6366f1' }} />
            <h3 className="text-2xl font-bold mb-4" style={{ color: isDark ? '#ffffff' : '#111827' }}>
              Download My Resume
            </h3>
            <p className="mb-8 max-w-2xl mx-auto" style={{ color: isDark ? '#9ca3af' : '#4b5563' }}>
              Get a comprehensive overview of my education, skills, experience, and certifications.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Kevil_Gandhi_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              <FiDownload size={20} />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
