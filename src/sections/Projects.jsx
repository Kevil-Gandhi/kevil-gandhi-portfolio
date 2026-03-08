import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useTheme } from '../utils/ThemeContext';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { isDark } = useTheme();

  const projects = [
    {
      title: 'Student Grade & Assignment Tracker App',
      description: 'Android app for assignment submission and grade tracking with role-based dashboards.',
      tech: ['Kotlin', 'Firebase', 'Android Studio'],
      github: 'https://github.com/Kevil-Gandhi',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'University Management Application',
      description: 'Desktop application to manage student records, courses and faculty data.',
      tech: ['VB.NET', 'Windows Forms'],
      github: 'https://github.com/Kevil-Gandhi',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Digital Clock',
      description: 'Interactive digital clock with modern UI and real-time updates.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Kevil-Gandhi',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      title: 'Calendar',
      description: 'Responsive calendar application with event management features.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Kevil-Gandhi',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Age Calculator',
      description: 'Calculate age with precision including years, months, and days.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Kevil-Gandhi',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'QR Code Generator',
      description: 'Generate custom QR codes for URLs, text, and contact information.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Kevil-Gandhi',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Calculator',
      description: 'Modern calculator with advanced mathematical operations.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Kevil-Gandhi',
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section id="projects" className="py-20" style={{ backgroundColor: isDark ? '#111827' : '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="rounded-2xl overflow-hidden group"
                style={{ 
                  backgroundColor: isDark ? 'rgba(17, 24, 39, 0.5)' : 'rgba(255, 255, 255, 0.9)',
                  border: `1px solid ${isDark ? 'rgba(75, 85, 99, 0.5)' : 'rgba(229, 231, 235, 0.8)'}`,
                  backdropFilter: 'blur(12px)'
                }}
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors" style={{ color: isDark ? '#ffffff' : '#111827' }}>
                    {project.title}
                  </h3>
                  
                  <p className="mb-4 line-clamp-3" style={{ color: isDark ? '#9ca3af' : '#4b5563' }}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-semibold rounded-full"
                        style={{ backgroundColor: 'rgba(99, 102, 241, 0.1)', color: '#6366f1' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 transition-colors"
                      style={{ color: isDark ? '#d1d5db' : '#374151' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#6366f1'}
                      onMouseLeave={(e) => e.currentTarget.style.color = isDark ? '#d1d5db' : '#374151'}
                    >
                      <FiGithub /> Code
                    </motion.a>
                    {project.demo && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 transition-colors"
                        style={{ color: isDark ? '#d1d5db' : '#374151' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#6366f1'}
                        onMouseLeave={(e) => e.currentTarget.style.color = isDark ? '#d1d5db' : '#374151'}
                      >
                        <FiExternalLink /> Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
