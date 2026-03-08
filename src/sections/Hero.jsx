import { motion } from 'framer-motion';
import { FiGithub, FiDownload, FiArrowRight } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { useTheme } from '../utils/ThemeContext';

const Hero = () => {
  const [githubData, setGithubData] = useState(null);
  const { isDark } = useTheme();

  useEffect(() => {
    fetch('https://api.github.com/users/Kevil-Gandhi')
      .then(res => res.json())
      .then(data => setGithubData(data))
      .catch(err => console.error(err));
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-gradient opacity-20 dark:opacity-10" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: '#6366f1',
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-4"
              style={{ color: isDark ? '#ffffff' : '#111827' }}
            >
              Kevil Gandhi
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-4xl gradient-text font-semibold mb-6"
            >
              Software Developer | IT Graduate
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl mb-12"
              style={{ color: isDark ? '#9ca3af' : '#4b5563' }}
            >
              Building modern software, web applications, and digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center md:justify-start gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="px-8 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
                style={{ background: 'linear-gradient(to right, #6366f1, #8b5cf6)', color: 'white' }}
              >
                View Projects <FiArrowRight />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Kevil_Gandhi_Resume.pdf"
                download
                className="px-8 py-3 bg-white/10 dark:bg-gray-900/30 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 text-gray-900 dark:text-white rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                Download Resume <FiDownload />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/Kevil-Gandhi"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                GitHub Profile <FiGithub />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center md:justify-end"
          >
            {githubData?.avatar_url && (
              <motion.img
                whileHover={{ scale: 1.05, rotate: 2 }}
                src={githubData.avatar_url}
                alt="Kevil Gandhi"
                className="w-64 h-64 md:w-96 md:h-96 rounded-full border-4 shadow-2xl"
                style={{ borderColor: '#6366f1' }}
              />
            )}
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full mt-2"
              style={{ background: '#6366f1' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
