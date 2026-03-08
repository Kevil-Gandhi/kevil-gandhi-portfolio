import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import { useTheme } from '../utils/ThemeContext';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { isDark } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic (static site, so just show alert)
    alert('Thank you for your message! This is a demo form.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: <FiMail />, label: 'Email', value: 'kevilmgandhi@gmail.com', link: 'mailto:kevilmgandhi@gmail.com' },
    { icon: <FiPhone />, label: 'Phone', value: '+91 9054262706', link: 'tel:+919054262706' },
    { icon: <FiMapPin />, label: 'Location', value: 'Surat, Gujarat, India', link: null },
  ];

  const socialLinks = [
    { icon: <FiGithub />, label: 'GitHub', link: 'https://github.com/Kevil-Gandhi' },
    { icon: <FiLinkedin />, label: 'LinkedIn', link: 'https://linkedin.com/in/kevil-gandhi' },
    { icon: <FiMail />, label: 'Email', link: 'mailto:kevilmgandhi@gmail.com' },
  ];

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: isDark ? '#1f2937' : '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6" style={{ color: isDark ? '#ffffff' : '#111827' }}>
                Contact Information
              </h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.label}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white text-xl">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm" style={{ color: isDark ? '#9ca3af' : '#6b7280' }}>{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="font-semibold transition-colors"
                          style={{ color: isDark ? '#ffffff' : '#111827' }}
                          onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                          onMouseLeave={(e) => e.target.style.color = isDark ? '#ffffff' : '#111827'}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-semibold" style={{ color: isDark ? '#ffffff' : '#111827' }}>{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white text-xl hover:shadow-lg transition-shadow"
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="p-8 rounded-2xl"
                style={{ 
                  backgroundColor: isDark ? 'rgba(17, 24, 39, 0.5)' : 'rgba(255, 255, 255, 0.9)',
                  border: `1px solid ${isDark ? 'rgba(75, 85, 99, 0.5)' : 'rgba(229, 231, 235, 0.8)'}`,
                  backdropFilter: 'blur(12px)'
                }}
              >
                <div className="mb-6">
                  <label className="block font-semibold mb-2" style={{ color: isDark ? '#d1d5db' : '#374151' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border focus:border-primary focus:outline-none transition-colors"
                    style={{
                      backgroundColor: isDark ? '#374151' : '#ffffff',
                      borderColor: isDark ? '#4b5563' : '#d1d5db',
                      color: isDark ? '#f3f4f6' : '#111827'
                    }}
                    placeholder="Your Name"
                  />
                </div>

                <div className="mb-6">
                  <label className="block font-semibold mb-2" style={{ color: isDark ? '#d1d5db' : '#374151' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border focus:border-primary focus:outline-none transition-colors"
                    style={{
                      backgroundColor: isDark ? '#374151' : '#ffffff',
                      borderColor: isDark ? '#4b5563' : '#d1d5db',
                      color: isDark ? '#f3f4f6' : '#111827'
                    }}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="mb-6">
                  <label className="block font-semibold mb-2" style={{ color: isDark ? '#d1d5db' : '#374151' }}>
                    Message
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border focus:border-primary focus:outline-none transition-colors resize-none"
                    style={{
                      backgroundColor: isDark ? '#374151' : '#ffffff',
                      borderColor: isDark ? '#4b5563' : '#d1d5db',
                      color: isDark ? '#f3f4f6' : '#111827'
                    }}
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
                >
                  Send Message <FiSend />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
