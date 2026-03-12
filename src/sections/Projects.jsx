import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub, FiExternalLink, FiStar, FiMonitor, FiLock } from 'react-icons/fi';
import * as SiIcons from 'react-icons/si';
import { useTheme } from '../utils/ThemeContext';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { isDark } = useTheme();

  const projects = [
    {
      title: 'Modern & Ultimate CRM System',
      displayTitle: 'Modern & Ultimate CRM System',
      description: 'A full-stack CRM built for KalpShree Investments to manage clients, employees, meetings, and business operations. Features JWT-secured role-based access, automated email reminders, meeting scheduling, action plan tracking, and a real-time analytics dashboard — powered by a React + TypeScript frontend and ASP.NET Core Web API backend with SQL Server.',
      tech: [
        { name: 'React', icon: 'SiReact' },
        { name: 'TypeScript', icon: 'SiTypescript' },
        { name: 'ASP.NET Core', icon: 'SiDotnet' },
        { name: 'C#', icon: 'SiCsharp' },
        { name: 'SQL Server', icon: 'SiMicrosoftsqlserver' },
        { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
        { name: 'JWT', icon: null },
      ],
      github: 'https://github.com/Kevil-Gandhi/Sem7-Project-CRM-System',
      gradient: 'from-violet-600 via-purple-500 to-indigo-500',
      featured: true,
    },
    {
      title: 'Student Grade & Assignment Tracker App',
      description: 'Android app for assignment submission and grade tracking with role-based dashboards.',
      tech: [
        { name: 'Kotlin', icon: 'SiKotlin' },
        { name: 'Firebase', icon: 'SiFirebase' },
        { name: 'Android Studio', icon: 'SiAndroidstudio' },
      ],
      github: 'https://github.com/Kevil-Gandhi',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'University Management Application',
      description: 'Desktop application to manage student records, courses and faculty data.',
      tech: [
        { name: 'VB.NET', icon: 'SiDotnet' },
        { name: 'Windows Forms', icon: null },
      ],
      github: 'https://github.com/Kevil-Gandhi',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Digital Clock',
      description: 'Interactive digital clock with modern UI and real-time updates.',
      tech: [
        { name: 'HTML', icon: 'SiHtml5' },
        { name: 'CSS', icon: 'SiCss3' },
        { name: 'JavaScript', icon: 'SiJavascript' },
      ],
      github: 'https://github.com/Kevil-Gandhi',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      title: 'Calendar',
      description: 'Responsive calendar application with event management features.',
      tech: [
        { name: 'HTML', icon: 'SiHtml5' },
        { name: 'CSS', icon: 'SiCss3' },
        { name: 'JavaScript', icon: 'SiJavascript' },
      ],
      github: 'https://github.com/Kevil-Gandhi',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Age Calculator',
      description: 'Calculate age with precision including years, months, and days.',
      tech: [
        { name: 'HTML', icon: 'SiHtml5' },
        { name: 'CSS', icon: 'SiCss3' },
        { name: 'JavaScript', icon: 'SiJavascript' },
      ],
      github: 'https://github.com/Kevil-Gandhi',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'QR Code Generator',
      description: 'Generate custom QR codes for URLs, text, and contact information.',
      tech: [
        { name: 'HTML', icon: 'SiHtml5' },
        { name: 'CSS', icon: 'SiCss3' },
        { name: 'JavaScript', icon: 'SiJavascript' },
      ],
      github: 'https://github.com/Kevil-Gandhi',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Calculator',
      description: 'Modern calculator with advanced mathematical operations.',
      tech: [
        { name: 'HTML', icon: 'SiHtml5' },
        { name: 'CSS', icon: 'SiCss3' },
        { name: 'JavaScript', icon: 'SiJavascript' },
      ],
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
                className={`rounded-2xl overflow-hidden group ${project.featured ? 'md:col-span-2 lg:col-span-3' : ''}`}
                style={{ 
                  backgroundColor: project.featured
                    ? (isDark ? 'rgba(76, 29, 149, 0.18)' : 'rgba(245, 243, 255, 0.97)')
                    : (isDark ? 'rgba(17, 24, 39, 0.5)' : 'rgba(255, 255, 255, 0.9)'),
                  border: project.featured
                    ? `1px solid ${isDark ? 'rgba(139, 92, 246, 0.45)' : 'rgba(139, 92, 246, 0.3)'}`
                    : `1px solid ${isDark ? 'rgba(75, 85, 99, 0.5)' : 'rgba(229, 231, 235, 0.8)'}`,
                  backdropFilter: 'blur(12px)',
                  boxShadow: project.featured
                    ? (isDark ? '0 0 40px rgba(139,92,246,0.15)' : '0 0 40px rgba(139,92,246,0.1)')
                    : 'none',
                }}
              >
                <div className={`bg-gradient-to-r ${project.gradient} ${project.featured ? 'h-1.5' : 'h-2'}`} />

                <div className={`p-6 ${project.featured ? 'md:p-8' : ''}`}>
                  {project.featured && (
                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full"
                        style={{ backgroundColor: isDark ? 'rgba(139, 92, 246, 0.25)' : 'rgba(139, 92, 246, 0.12)', color: isDark ? '#c4b5fd' : '#6d28d9' }}
                      >
                        <FiStar size={11} /> Featured Project
                      </span>
                      <span
                        className="inline-flex items-center gap-1 px-3 py-1 text-xs font-bold rounded-full"
                        style={{ backgroundColor: isDark ? 'rgba(99, 102, 241, 0.2)' : 'rgba(99, 102, 241, 0.1)', color: isDark ? '#a5b4fc' : '#4338ca' }}
                      >
                        Capstone Project
                      </span>
                    </div>
                  )}
                  <h3 className={`font-bold mb-3 group-hover:text-primary transition-colors ${project.featured ? 'text-2xl md:text-3xl' : 'text-xl'}`} style={{ color: isDark ? '#ffffff' : '#111827' }}>
                    {project.displayTitle || project.title}
                  </h3>
                  
                  <p className="mb-4 line-clamp-3" style={{ color: isDark ? '#9ca3af' : '#4b5563' }}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => {
                      const TechIcon = tech.icon ? (SiIcons[tech.icon] || null) : null;
                      return (
                        <span
                          key={tech.name}
                          className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full"
                          style={{ backgroundColor: 'rgba(99, 102, 241, 0.1)', color: '#6366f1' }}
                        >
                          {TechIcon ? <TechIcon size={12} /> : <FiMonitor size={12} />}
                          {tech.name}
                        </span>
                      );
                    })}
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
