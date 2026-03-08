import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiAward } from 'react-icons/fi';
import { useTheme } from '../utils/ThemeContext';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { isDark } = useTheme();

  const certifications = [
    { name: 'RDBMS PostgreSQL', issuer: 'IIT Bombay', color: 'from-blue-500 to-cyan-500', link: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS54S1458033604063476' },
    { name: 'PHP & MySQL', issuer: 'IIT Bombay', color: 'from-purple-500 to-pink-500', link: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS54S1458033604063476' },
    { name: 'Arduino', issuer: 'IIT Bombay', color: 'from-green-500 to-teal-500', link: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS54S1458033604063476' },
    { name: 'JavaScript', issuer: 'IIT Bombay', color: 'from-yellow-500 to-orange-500', link: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS54S1458033604063476' },
    { name: 'Advanced C++', issuer: 'Online Course', color: 'from-red-500 to-pink-500', link: '#' },
    { name: 'Bootstrap', issuer: 'Online Course', color: 'from-indigo-500 to-purple-500', link: '#' },
    { name: 'CSS', issuer: 'Online Course', color: 'from-pink-500 to-rose-500', link: '#' },
    { name: 'C Programming', issuer: 'Online Course', color: 'from-blue-500 to-indigo-500', link: '#' },
    { name: 'Linux', issuer: 'Online Course', color: 'from-green-500 to-emerald-500', link: '#' },
    { name: 'HTML', issuer: 'Online Course', color: 'from-orange-500 to-red-500', link: '#' },
    { name: 'Introduction to Computers', issuer: 'Online Course', color: 'from-cyan-500 to-blue-500', link: '#' },
  ];

  return (
    <section id="certifications" className="py-20" style={{ backgroundColor: isDark ? '#111827' : '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <motion.a
                key={cert.name}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="rounded-2xl overflow-hidden cursor-pointer"
                style={{ 
                  backgroundColor: isDark ? 'rgba(17, 24, 39, 0.5)' : 'rgba(255, 255, 255, 0.9)',
                  border: `1px solid ${isDark ? 'rgba(75, 85, 99, 0.5)' : 'rgba(229, 231, 235, 0.8)'}`,
                  backdropFilter: 'blur(12px)'
                }}
              >
                <div className={`h-2 bg-gradient-to-r ${cert.color}`} />
                <div className="p-6">
                  <FiAward className="text-4xl mb-3" style={{ color: '#6366f1' }} />
                  <h3 className="text-lg font-bold mb-2" style={{ color: isDark ? '#ffffff' : '#111827' }}>
                    {cert.name}
                  </h3>
                  <p className="text-sm" style={{ color: isDark ? '#9ca3af' : '#4b5563' }}>
                    {cert.issuer}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
