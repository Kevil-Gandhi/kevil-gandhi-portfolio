import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCloud, FiCode, FiDatabase, FiTool } from 'react-icons/fi';
import * as SiIcons from 'react-icons/si';
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
        { name: 'C', icon: 'SiC' },
        { name: 'C++', icon: 'SiCplusplus' },
        { name: 'Java', icon: 'SiOpenjdk' },
        { name: 'Kotlin', icon: 'SiKotlin' },
        { name: 'Python', icon: 'SiPython' },
        { name: 'JavaScript', icon: 'SiJavascript' },
        { name: 'VB.NET', icon: 'SiDotnet' },
        { name: 'Shell Scripting', icon: 'SiGnubash' },
      ],
    },
    {
      title: 'Web Technologies',
      icon: <FiCode />,
      skills: [
        { name: 'HTML', icon: 'SiHtml5' },
        { name: 'CSS', icon: 'SiCss3' },
        { name: 'TypeScript', icon: 'SiTypescript' },
        { name: 'React.js', icon: 'SiReact' },
        { name: 'Node.js', icon: 'SiNodedotjs' },
        { name: 'Express.js', icon: 'SiExpress' },
        { name: 'PHP', icon: 'SiPhp' },
        { name: 'ASP.NET', icon: 'SiDotnet' },
        { name: '.NET Web API', icon: 'SiDotnet' },
      ],
    },
    {
      title: 'Databases',
      icon: <FiDatabase />,
      skills: [
        { name: 'MySQL', icon: 'SiMysql' },
        { name: 'MongoDB', icon: 'SiMongodb' },
        { name: 'PostgreSQL', icon: 'SiPostgresql' },
        { name: 'Oracle', icon: 'SiOracle' },
        { name: 'MSSQL', icon: 'SiMicrosoftsqlserver' },
      ],
    },
    {
      title: 'Frameworks & Technologies',
      icon: <FiTool />,
      skills: [
        { name: 'MERN Stack', icon: 'SiMongodb' },
        { name: 'Enterprise Java', icon: 'SiOpenjdk' },
        { name: 'Android Development', icon: 'SiAndroid' },
        { name: 'iOS Development', icon: 'SiApple' },
        { name: 'AI/ML', icon: 'SiTensorflow' },
        { name: 'Blockchain', icon: 'SiBlockchaindotcom' },
        { name: 'Hyperledger Fabric', icon: 'SiHyperledger' },
      ],
    },
    {
      title: 'Cloud & Deployment',
      icon: <FiCloud />,
      skills: [
        { name: 'Hostinger', icon: 'SiHostinger' },
        { name: 'Cloudflare', icon: 'SiCloudflare' },
        { name: 'AWS', icon: 'SiAmazonwebservices' },
        { name: 'Virtualization', icon: 'SiVmware' },
        { name: 'Docker', icon: 'SiDocker' },
        { name: 'GitHub Pages', icon: 'SiGithub' },
      ],
    },
    {
      title: 'Tools & DevOps',
      icon: <FiTool />,
      skills: [
        { name: 'Git', icon: 'SiGit' },
        { name: 'VS Code', icon: 'SiVisualstudiocode' },
        { name: 'Visual Studio', icon: 'SiVisualstudio' },
        { name: 'Android Studio', icon: 'SiAndroidstudio' },
        { name: 'Firebase', icon: 'SiFirebase' },
        { name: 'Linux', icon: 'SiLinux' },
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

                <div className="grid sm:grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -2 }}
                      className="flex items-center gap-3 px-3 py-2 rounded-xl"
                      style={{
                        backgroundColor: isDark ? 'rgba(31, 41, 55, 0.7)' : 'rgba(243, 244, 246, 0.9)',
                        border: `1px solid ${isDark ? 'rgba(75, 85, 99, 0.6)' : 'rgba(209, 213, 219, 0.8)'}`,
                      }}
                    >
                      {(() => {
                        const SkillIcon = SiIcons[skill.icon] || FiTool;

                        return (
                          <SkillIcon
                            className="text-lg shrink-0"
                            style={{ color: isDark ? '#a5b4fc' : '#4f46e5' }}
                            aria-hidden="true"
                          />
                        );
                      })()}
                      <span className="text-sm font-medium" style={{ color: isDark ? '#d1d5db' : '#374151' }}>
                        {skill.name}
                      </span>
                    </motion.div>
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
