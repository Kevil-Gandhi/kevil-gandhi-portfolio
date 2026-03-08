import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { icon: <FiGithub />, label: 'GitHub', url: 'https://github.com/Kevil-Gandhi' },
    { icon: <FiLinkedin />, label: 'LinkedIn', url: 'https://linkedin.com/in/kevil-gandhi' },
    { icon: <FiMail />, label: 'Email', url: 'mailto:kevilmgandhi@gmail.com' },
  ];

  return (
    <footer className="py-12" style={{ backgroundColor: '#111827', color: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-6 mb-6"
          >
            {links.map((link) => (
              <motion.a
                key={link.label}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                title={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <p className="text-gray-400 mb-2">
              © {currentYear} Kevil Gandhi. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
              Designed & Built with <FiHeart className="text-red-500" /> using React
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
