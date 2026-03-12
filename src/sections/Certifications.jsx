import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FiAward, FiExternalLink, FiX } from 'react-icons/fi';
import { useTheme } from '../utils/ThemeContext';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { isDark } = useTheme();
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeTab, setActiveTab] = useState('certificate');

  const openCert = (cert) => {
    setSelectedCert(cert);
    setActiveTab('certificate');
  };

  const getPreviewLink = (url) => {
    const match = url.match(/\/file\/d\/([^/]+)/);

    if (!match) return url;

    return `https://drive.google.com/file/d/${match[1]}/preview`;
  };

  useEffect(() => {
    if (!selectedCert) return undefined;

    document.body.style.overflow = 'hidden';

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedCert(null);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [selectedCert]);

  const certifications = [
    {
      name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
      issuer: 'Oracle',
      color: 'from-red-600 via-orange-500 to-amber-400',
      link: 'https://drive.google.com/file/d/1bujGluPp6tkNGn_tkWDKD_ZJaUMPYtEb/view?usp=sharing',
      badgeLink: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=1CD656D2F9B443B1A238902046846C2FFC413D63A774D9702EA992168E79D91C',
      featured: true,
    },
    { name: 'RDBMS and PostgreSQL', issuer: 'Spoken Tutorial, IIT Bombay', color: 'from-blue-500 to-cyan-500', link: 'https://drive.google.com/file/d/1nO0LbM4tOF_La3UL7Eh76C0BrOdNeNJy/view?usp=sharing' },
    { name: 'PHP and MySQL', issuer: 'Spoken Tutorial, IIT Bombay', color: 'from-purple-500 to-pink-500', link: 'https://drive.google.com/file/d/1DOqf7p0vpLXuOlWvyQMAE9fdDY4SQFmh/view?usp=sharing' },
    { name: 'Arduino', issuer: 'Spoken Tutorial, IIT Bombay', color: 'from-green-500 to-teal-500', link: 'https://drive.google.com/file/d/1Ld35l96swm_lT7v0E0Ujiv29pz0pc0bE/view?usp=sharing' },
    { name: 'Java', issuer: 'Spoken Tutorial, IIT Bombay', color: 'from-amber-500 to-red-500', link: 'https://drive.google.com/file/d/1eT3mELuhaZlL9zIZ2oA1lWMw7Zji8eCg/view?usp=sharing' },
    { name: 'JavaScript', issuer: 'Spoken Tutorial, IIT Bombay', color: 'from-yellow-500 to-orange-500', link: 'https://drive.google.com/file/d/1VTdA32H_MGGlDW7b8fy7gSQm7Iw_Ueor/view?usp=sharing' },
    { name: 'Advanced C++', issuer: 'Spoken Tutorial, IIT Bombay', color: 'from-red-500 to-pink-500', link: 'https://drive.google.com/file/d/1HYERTGxoilhgLatNUazzEil6pFb_XEGa/view?usp=sharing' },
    { name: 'Bootstrap', issuer: 'Spoken Tutorial, IIT Bombay', color: 'from-indigo-500 to-purple-500', link: 'https://drive.google.com/file/d/1_wWkvA495TaHydREeCRogWEBC2oUz7Ot/view?usp=sharing' },
    { name: 'CSS', issuer: 'Spoken Tutorial, IIT Bombay', color: 'from-pink-500 to-rose-500', link: 'https://drive.google.com/file/d/1FmRDyirIhpoESH1gE40L74Did45m3OwH/view?usp=sharing' },
    { name: 'C', issuer: 'Spoken Tutorial, IIT Bombay', color: 'from-blue-500 to-indigo-500', link: 'https://drive.google.com/file/d/1KsdiQ-4KNT3q28WIDoHOyQHITZdHdo2_/view?usp=sharing' },
    { name: 'Linux', issuer: 'Spoken Tutorial, IIT Bombay', color: 'from-green-500 to-emerald-500', link: 'https://drive.google.com/file/d/1a_dKXuJgwSacJSMKn8tj2OtEkAu6agV-/view?usp=sharing' },
    { name: 'HTML', issuer: 'Spoken Tutorial, IIT Bombay', color: 'from-orange-500 to-red-500', link: 'https://drive.google.com/file/d/1XV0m6g5LIkiVmp6uG2WjWRog28HkTVUh/view?usp=sharing' },
    { name: 'Introduction to Computers', issuer: 'Spoken Tutorial, IIT Bombay', color: 'from-cyan-500 to-blue-500', link: 'https://drive.google.com/file/d/1RjJcEg2cmDjaHPaoaiCKx4nqCXiTeFSm/view?usp=sharing' },
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
              <motion.button
                key={cert.name}
                type="button"
                onClick={() => openCert(cert)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.98 }}
                className={`rounded-2xl overflow-hidden cursor-pointer text-left ${cert.featured ? 'md:col-span-2 lg:col-span-3' : ''}`}
                style={{ 
                  backgroundColor: cert.featured
                    ? (isDark ? 'rgba(127, 29, 29, 0.22)' : 'rgba(254, 242, 242, 0.95)')
                    : (isDark ? 'rgba(17, 24, 39, 0.5)' : 'rgba(255, 255, 255, 0.9)'),
                  border: `1px solid ${isDark ? 'rgba(75, 85, 99, 0.5)' : 'rgba(229, 231, 235, 0.8)'}`,
                  backdropFilter: 'blur(12px)'
                }}
              >
                <div className={`h-2 bg-gradient-to-r ${cert.color}`} />
                <div className="p-6">
                  {cert.featured && (
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span
                        className="inline-block px-3 py-1 text-xs font-semibold rounded-full"
                        style={{ backgroundColor: isDark ? 'rgba(239, 68, 68, 0.2)' : 'rgba(239, 68, 68, 0.12)', color: isDark ? '#fca5a5' : '#b91c1c' }}
                      >
                        Latest Achievement
                      </span>
                      <span
                        className="inline-block px-3 py-1 text-xs font-semibold rounded-full"
                        style={{ backgroundColor: isDark ? 'rgba(251, 191, 36, 0.18)' : 'rgba(251, 191, 36, 0.18)', color: isDark ? '#fcd34d' : '#92400e' }}
                      >
                        Oracle Certified
                      </span>
                    </div>
                  )}
                  <FiAward className="text-4xl mb-3" style={{ color: '#6366f1' }} />
                  <h3 className={`font-bold mb-2 ${cert.featured ? 'text-xl md:text-2xl' : 'text-lg'}`} style={{ color: isDark ? '#ffffff' : '#111827' }}>
                    {cert.name}
                  </h3>
                  <p className="text-sm" style={{ color: isDark ? '#9ca3af' : '#4b5563' }}>
                    {cert.issuer}
                  </p>
                  {cert.featured && cert.badgeLink && (
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <span
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-full"
                        style={{ backgroundColor: isDark ? 'rgba(99, 102, 241, 0.2)' : 'rgba(99, 102, 241, 0.12)', color: isDark ? '#c7d2fe' : '#4338ca' }}
                      >
                        Certificate &amp; Badge
                      </span>
                    </div>
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          <AnimatePresence>
            {selectedCert && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
              >
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="absolute inset-0"
                  style={{ backgroundColor: 'rgba(17, 24, 39, 0.75)', backdropFilter: 'blur(6px)' }}
                  aria-label="Close certificate preview"
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-full max-w-5xl rounded-2xl overflow-hidden"
                  style={{
                    backgroundColor: isDark ? '#111827' : '#ffffff',
                    border: `1px solid ${isDark ? 'rgba(75, 85, 99, 0.7)' : 'rgba(229, 231, 235, 1)'}`,
                    boxShadow: isDark ? '0 20px 45px rgba(0, 0, 0, 0.5)' : '0 20px 45px rgba(0, 0, 0, 0.15)',
                  }}
                >
                  <div className="px-5 py-4 border-b" style={{ borderColor: isDark ? '#374151' : '#e5e7eb' }}>
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="text-lg font-bold truncate" style={{ color: isDark ? '#ffffff' : '#111827' }}>
                          {activeTab === 'certificate' ? 'Certificate' : 'Badge'}
                        </h3>
                        <p className="text-sm" style={{ color: isDark ? '#9ca3af' : '#6b7280' }}>
                          {selectedCert.issuer}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <a
                          href={activeTab === 'certificate' ? selectedCert.link : (selectedCert.badgeLink || selectedCert.link)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium"
                          style={{ backgroundColor: isDark ? '#1f2937' : '#f3f4f6', color: isDark ? '#d1d5db' : '#374151' }}
                        >
                          Open
                          <FiExternalLink size={14} />
                        </a>
                        <button
                          type="button"
                          onClick={() => setSelectedCert(null)}
                          className="p-2 rounded-lg"
                          style={{ backgroundColor: isDark ? '#1f2937' : '#f3f4f6', color: isDark ? '#d1d5db' : '#374151' }}
                          aria-label="Close popup"
                        >
                          <FiX />
                        </button>
                      </div>
                    </div>

                    {selectedCert.badgeLink && (
                      <div className="mt-3 flex gap-1 p-1 rounded-xl w-fit" style={{ backgroundColor: isDark ? '#1f2937' : '#f3f4f6' }}>
                        <button
                          type="button"
                          onClick={() => setActiveTab('certificate')}
                          className="px-4 py-1.5 rounded-lg text-sm font-semibold transition-all"
                          style={activeTab === 'certificate'
                            ? { backgroundColor: isDark ? '#6366f1' : '#6366f1', color: '#ffffff', boxShadow: '0 1px 6px rgba(99,102,241,0.4)' }
                            : { backgroundColor: 'transparent', color: isDark ? '#9ca3af' : '#6b7280' }
                          }
                        >
                          Certificate
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveTab('badge')}
                          className="px-4 py-1.5 rounded-lg text-sm font-semibold transition-all"
                          style={activeTab === 'badge'
                            ? { backgroundColor: isDark ? '#6366f1' : '#6366f1', color: '#ffffff', boxShadow: '0 1px 6px rgba(99,102,241,0.4)' }
                            : { backgroundColor: 'transparent', color: isDark ? '#9ca3af' : '#6b7280' }
                          }
                        >
                          Badge
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="h-[70vh] bg-black/5">
                    <iframe
                      src={activeTab === 'badge' && selectedCert.badgeLink
                        ? selectedCert.badgeLink
                        : getPreviewLink(selectedCert.link)
                      }
                      title={activeTab === 'badge' ? `${selectedCert.name} badge` : `${selectedCert.name} certificate`}
                      className="w-full h-full"
                      allow="autoplay"
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
