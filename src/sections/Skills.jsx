import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiDatabase, FiTool } from 'react-icons/fi';
import { useTheme } from '../utils/ThemeContext';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { isDark } = useTheme();

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <FiCode />,
      skills: [
        { name: 'C', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'Java', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'JavaScript', level: 85 },
        { name: 'VB.NET', level: 75 },
        { name: 'Shell Scripting', level: 75 },
      ],
    },
    {
      title: 'Web Technologies',
      icon: <FiCode />,
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'React.js', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 80 },
        { name: 'PHP', level: 75 },
        { name: 'ASP.NET', level: 75 },
        { name: '.NET Web API', level: 80 },
      ],
    },
    {
      title: 'Databases',
      icon: <FiDatabase />,
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Oracle', level: 75 },
        { name: 'MSSQL', level: 75 },
      ],
    },
    {
      title: 'Frameworks & Technologies',
      icon: <FiTool />,
      skills: [
        { name: 'MERN Stack', level: 85 },
        { name: 'Enterprise Java', level: 80 },
        { name: 'iOS Development', level: 75 },
        { name: 'AI/ML', level: 70 },
        { name: 'Blockchain', level: 70 },
        { name: 'Hyperledger Fabric', level: 65 },
      ],
    },
    {
      title: 'Tools & DevOps',
      icon: <FiTool />,
      skills: [
        { name: 'Git', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Visual Studio', level: 85 },
        { name: 'Android Studio', level: 75 },
        { name: 'Firebase', level: 75 },
        { name: 'Linux', level: 85 },
        { name: 'Cloud & Hosting', level: 80 },
        { name: 'Domain Management', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20" style={{ backgroundColor: isDark ? '#1f2937' : '#f9fafb' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-2xl"
                style={{ 
                  backgroundColor: isDark ? 'rgba(17, 24, 39, 0.5)' : 'rgba(255, 255, 255, 0.9)',
                  border: `1px solid ${isDark ? 'rgba(75, 85, 99, 0.5)' : 'rgba(229, 231, 235, 0.8)'}`,
                  backdropFilter: 'blur(12px)'
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-3xl" style={{ color: '#6366f1' }}>{category.icon}</div>
                  <h3 className="text-2xl font-bold" style={{ color: isDark ? '#ffffff' : '#111827' }}>
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium" style={{ color: isDark ? '#d1d5db' : '#374151' }}>
                          {skill.name}
                        </span>
                        <span className="text-sm" style={{ color: isDark ? '#9ca3af' : '#6b7280' }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: isDark ? '#374151' : '#e5e7eb' }}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: idx * 0.1 }}
                          className="h-full"
                          style={{ background: 'linear-gradient(to right, #6366f1, #8b5cf6)' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
