import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiAward } from 'react-icons/fi';
import { useTheme } from '../utils/ThemeContext';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { isDark } = useTheme();

  return (
    <section id="about" className="py-20" style={{ backgroundColor: isDark ? '#111827' : '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="bg-white/10 dark:bg-gray-900/30 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 p-8 rounded-2xl"
              style={{ 
                backgroundColor: isDark ? 'rgba(17, 24, 39, 0.3)' : 'rgba(249, 250, 251, 0.8)',
                borderColor: isDark ? 'rgba(75, 85, 99, 0.5)' : 'rgba(229, 231, 235, 0.8)'
              }}
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: isDark ? '#ffffff' : '#111827' }}>
                Professional Summary
              </h3>
              <p className="leading-relaxed" style={{ color: isDark ? '#9ca3af' : '#4b5563' }}>
                Recent B.Sc(IT) graduate with a strong foundation in web development, app development, 
                databases, and object-oriented programming. Passionate about building efficient software 
                and contributing to innovative IT projects. Enthusiastic advocate for Linux and open-source 
                technologies, actively exploring and contributing to the open-source community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2" style={{ color: isDark ? '#ffffff' : '#111827' }}>
                <FiAward style={{ color: '#6366f1' }} /> Education
              </h3>
              
              <div className="relative border-l-4 border-primary pl-8 space-y-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/10 dark:bg-gray-900/30 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 p-6 rounded-xl"
                  style={{ 
                    backgroundColor: isDark ? 'rgba(17, 24, 39, 0.3)' : 'rgba(249, 250, 251, 0.8)',
                    borderColor: isDark ? 'rgba(75, 85, 99, 0.5)' : 'rgba(229, 231, 235, 0.8)'
                  }}
                >
                  <div className="absolute -left-3 w-6 h-6 bg-primary rounded-full border-4 border-white dark:border-gray-900" />
                  <span className="text-sm font-semibold" style={{ color: '#6366f1' }}>Currently Pursuing</span>
                  <h4 className="text-xl font-bold mt-1" style={{ color: isDark ? '#ffffff' : '#111827' }}>M.Sc IT</h4>
                  <p className="mt-2" style={{ color: isDark ? '#9ca3af' : '#4b5563' }}>Master of Science in Information Technology</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/10 dark:bg-gray-900/30 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 p-6 rounded-xl"
                  style={{ 
                    backgroundColor: isDark ? 'rgba(17, 24, 39, 0.3)' : 'rgba(249, 250, 251, 0.8)',
                    borderColor: isDark ? 'rgba(75, 85, 99, 0.5)' : 'rgba(229, 231, 235, 0.8)'
                  }}
                >
                  <div className="absolute -left-3 w-6 h-6 bg-secondary rounded-full border-4 border-white dark:border-gray-900" />
                  <span className="text-sm font-semibold" style={{ color: '#8b5cf6' }}>2022 – 2025</span>
                  <h4 className="text-xl font-bold mt-1" style={{ color: isDark ? '#ffffff' : '#111827' }}>B.Sc IT</h4>
                  <p className="mt-2" style={{ color: isDark ? '#9ca3af' : '#4b5563' }}>
                    Veer Narmad South Gujarat University
                  </p>
                  <p className="font-semibold mt-2" style={{ color: '#6366f1' }}>GPA: 8.24</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
