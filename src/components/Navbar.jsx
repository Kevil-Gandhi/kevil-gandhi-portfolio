import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../utils/ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const menuItems = ['Home', 'About', 'Skills', 'Projects', 'GitHub', 'Resume', 'Contact'];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (item) => {
    const id = item.toLowerCase();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
      style={{
        backgroundColor: isScrolled 
          ? (isDark ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.8)')
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled 
          ? `1px solid ${isDark ? 'rgba(75, 85, 99, 0.3)' : 'rgba(229, 231, 235, 0.5)'}` 
          : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text cursor-pointer"
            onClick={() => scrollToSection('Home')}
            style={{ 
              textShadow: isDark ? 'none' : '0 1px 2px rgba(0,0,0,0.1)'
            }}
          >
            Kevil Gandhi
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item)}
                className="font-medium transition-colors"
                style={{ color: isDark ? '#d1d5db' : '#374151' }}
                onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                onMouseLeave={(e) => e.target.style.color = isDark ? '#d1d5db' : '#374151'}
              >
                {item}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleTheme();
              }}
              className="p-2 rounded-full"
              style={{ background: isDark ? '#374151' : '#e5e7eb' }}
            >
              {isDark ? (
                <FiSun className="text-yellow-400" size={20} />
              ) : (
                <FiMoon className="text-gray-700" size={20} />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleTheme();
              }}
              className="p-2 rounded-full"
              style={{ background: isDark ? '#374151' : '#e5e7eb' }}
            >
              {isDark ? (
                <FiSun className="text-yellow-400" size={20} />
              ) : (
                <FiMoon className="text-gray-700" size={20} />
              )}
            </motion.button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              style={{ color: isDark ? '#d1d5db' : '#111827' }}
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden"
            style={{
              backgroundColor: isDark ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(12px)',
              borderBottom: `1px solid ${isDark ? 'rgba(75, 85, 99, 0.3)' : 'rgba(229, 231, 235, 0.5)'}`,
            }}
          >
          <div className="px-4 py-4 space-y-3">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-2 rounded-lg transition-colors font-medium"
                style={{ 
                  backgroundColor: 'transparent',
                  color: isDark ? '#d1d5db' : '#374151'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(99, 102, 241, 0.1)';
                  e.target.style.color = '#6366f1';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = isDark ? '#d1d5db' : '#374151';
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
