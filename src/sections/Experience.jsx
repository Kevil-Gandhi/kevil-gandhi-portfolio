import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FiExternalLink, FiX } from 'react-icons/fi';
import { useTheme } from '../utils/ThemeContext';

const experiences = [
  {
    id: 1,
    role: 'Full Stack Developer Intern',
    company: 'Logiklee Digital Private Limited',
    location: 'Surat, Gujarat, India',
    period: 'Jul 2025 – Nov 2025',
    type: 'Internship',
    logo: 'https://logiklee.com/wp-content/uploads/2023/02/LgD_TMlogo_WEBP-scaled.webp',
    companyUrl: 'https://logiklee.com/',
    description:
      'Completed a project internship contributing to a CRM system, gaining hands-on experience with modern full-stack technologies and scalable system design.',
    highlights: [
      'Developed backend APIs using .NET 8 and Entity Framework',
      'Designed and managed relational databases with MySQL',
      'Built responsive UIs with React.js, TypeScript, and Tailwind CSS',
      'Implemented JWT-based authentication and Role-Based Access Control (RBAC)',
      'Worked on real-time notification features to improve usability',
      'Collaborated with the team to deliver project modules on time',
    ],
    skills: ['.NET 8', 'React', 'TypeScript', 'MySQL', 'JWT', 'RBAC', 'Tailwind CSS'],
    certificateLink:
      'https://drive.google.com/file/d/1XKXX9Kl1hQgA_HKvhtWheDSjWiG5-rZP/view?usp=sharing',
  },
];

const Experience = () => {
  const ref = useRef(null);
  const lineRef = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { isDark } = useTheme();
  const [selectedExp, setSelectedExp] = useState(null);

  const getPreviewLink = (url) => {
    const match = url.match(/\/file\/d\/([^/]+)/);
    if (!match) return url;
    return `https://drive.google.com/file/d/${match[1]}/preview`;
  };

  useEffect(() => {
    if (!selectedExp) return undefined;
    document.body.style.overflow = 'hidden';
    const handleEscape = (e) => {
      if (e.key === 'Escape') setSelectedExp(null);
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [selectedExp]);

  return (
    <section
      id="experience"
      className="py-20 overflow-hidden"
      style={{ backgroundColor: isDark ? '#111827' : '#ffffff' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16" />

          {/* ── Desktop: horizontal path timeline ── */}
          <div className="hidden md:block relative" ref={lineRef}>
            {/* Background horizontal line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2"
              style={{ backgroundColor: isDark ? 'rgba(99,102,241,0.25)' : 'rgba(99,102,241,0.18)' }}
            />

            {/* Animated progress line */}
            <motion.div
              className="absolute top-1/2 left-0 h-0.5 -translate-y-1/2 origin-left"
              style={{ background: 'linear-gradient(to right,#6366f1,#8b5cf6)' }}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
            />

            {/* Start cap */}
            <motion.div
              className="absolute top-1/2 left-0 w-4 h-4 rounded-full -translate-y-1/2 -translate-x-1/2 ring-4"
              style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', ringColor: isDark ? '#111827' : '#ffffff' }}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.2 }}
            />

            {/* End cap */}
            <motion.div
              className="absolute top-1/2 right-0 w-4 h-4 rounded-full -translate-y-1/2 translate-x-1/2 ring-4 ring-offset-2"
              style={{ background: isDark ? '#374151' : '#e5e7eb', boxShadow: 'inset 0 0 0 2px #6366f1' }}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 1.4 }}
            />

            {/* Experience nodes */}
            <div className="relative flex justify-around items-center py-6">
              {experiences.map((exp, idx) => {
                const isAbove = idx % 2 === 0;
                return (
                  <div key={exp.id} className="relative flex flex-col items-center" style={{ flex: '0 0 auto', maxWidth: '520px', width: '100%' }}>

                    {/* Card – above or below the line */}
                    <motion.div
                      initial={{ opacity: 0, y: isAbove ? -50 : 50 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + idx * 0.2, duration: 0.5 }}
                      className={isAbove ? 'mb-8' : 'order-last mt-8'}
                    >
                      <motion.div
                        whileHover={{ y: isAbove ? -6 : 6, boxShadow: isDark ? '0 20px 48px rgba(99,102,241,0.32)' : '0 20px 48px rgba(99,102,241,0.18)' }}
                        onClick={() => setSelectedExp(exp)}
                        className="cursor-pointer rounded-2xl overflow-hidden"
                        style={{
                          width: '420px',
                          backgroundColor: isDark ? 'rgba(17,24,39,0.9)' : 'rgba(255,255,255,0.98)',
                          border: `1px solid ${isDark ? 'rgba(99,102,241,0.4)' : 'rgba(99,102,241,0.28)'}`,
                          backdropFilter: 'blur(16px)',
                          boxShadow: isDark ? '0 4px 24px rgba(0,0,0,0.4)' : '0 4px 24px rgba(99,102,241,0.08)',
                        }}
                      >
                        {/* Gradient top accent bar */}
                        <div className="h-1.5 w-full" style={{ background: 'linear-gradient(to right,#6366f1,#8b5cf6,#a78bfa)' }} />

                        <div className="p-6">
                          {/* Logo */}
                          <div
                            className="w-full rounded-xl overflow-hidden mb-4 flex items-center justify-center"
                            style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.95)' : '#f3f4f6', border: `1px solid ${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(209,213,219,0.8)'}`, minHeight: '72px', padding: '10px 16px' }}
                          >
                            <img
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              className="w-full object-contain"
                              style={{ maxHeight: '56px' }}
                              loading="lazy"
                            />
                          </div>

                          {/* Period + type badges */}
                          <div className="flex items-center gap-2 mb-3 flex-wrap">
                            <span
                              className="inline-block text-xs font-semibold px-3 py-1 rounded-full"
                              style={{ backgroundColor: 'rgba(99,102,241,0.12)', color: '#6366f1' }}
                            >
                              {exp.period}
                            </span>
                            <span
                              className="inline-block text-xs font-semibold px-3 py-1 rounded-full"
                              style={{ backgroundColor: isDark ? 'rgba(139,92,246,0.18)' : 'rgba(139,92,246,0.1)', color: '#8b5cf6' }}
                            >
                              {exp.type}
                            </span>
                          </div>

                          <h3 className="text-xl font-bold leading-snug mb-1" style={{ color: isDark ? '#ffffff' : '#111827' }}>
                            {exp.role}
                          </h3>
                          <p className="text-sm font-semibold" style={{ color: isDark ? '#c4b5fd' : '#4f46e5' }}>
                            {exp.company}
                          </p>
                          <p className="text-xs mt-0.5 mb-4" style={{ color: isDark ? '#6b7280' : '#9ca3af' }}>
                            📍 {exp.location}
                          </p>

                          {/* Description snippet */}
                          <p className="text-sm mb-4 leading-relaxed" style={{ color: isDark ? '#d1d5db' : '#4b5563' }}>
                            {exp.description}
                          </p>

                          {/* Skill pills */}
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((s) => (
                              <span
                                key={s}
                                className="text-xs px-2.5 py-1 rounded-full font-semibold"
                                style={{ backgroundColor: isDark ? 'rgba(31,41,55,0.9)' : 'rgba(243,244,246,0.9)', color: isDark ? '#a5b4fc' : '#4f46e5', border: `1px solid ${isDark ? 'rgba(99,102,241,0.4)' : 'rgba(99,102,241,0.22)'}` }}
                              >
                                {s}
                              </span>
                            ))}
                          </div>

                          <div className="mt-5 flex items-center justify-between">
                            <p className="text-sm font-semibold" style={{ color: '#6366f1' }}>
                              View details →
                            </p>
                            <span className="text-xs px-2.5 py-1 rounded-full" style={{ backgroundColor: 'rgba(16,185,129,0.12)', color: '#10b981' }}>🎓 Certificate</span>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Connector stem */}
                    <motion.div
                      className="w-0.5 h-8"
                      style={{ background: 'linear-gradient(to bottom,#6366f1,#8b5cf6)' }}
                      initial={{ scaleY: 0 }}
                      animate={isInView ? { scaleY: 1 } : {}}
                      transition={{ delay: 0.5 + idx * 0.2 }}
                    />

                    {/* Dot on the line */}
                    <motion.div
                      className="w-5 h-5 rounded-full ring-4 z-10"
                      style={{
                        background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
                        ringColor: isDark ? '#111827' : '#ffffff',
                      }}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.6 + idx * 0.2, type: 'spring', stiffness: 300 }}
                    />
                    {/* second stem below dot (for below-line cards) */}
                    {!isAbove && (
                      <motion.div
                        className="w-0.5 h-8"
                        style={{ background: 'linear-gradient(to bottom,#6366f1,#8b5cf6)' }}
                        initial={{ scaleY: 0 }}
                        animate={isInView ? { scaleY: 1 } : {}}
                        transition={{ delay: 0.55 + idx * 0.2 }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Mobile: vertical timeline ── */}
          <div className="md:hidden relative border-l-4 pl-8 space-y-8"
            style={{ borderColor: 'rgba(99,102,241,0.4)' }}
          >
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + idx * 0.15 }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -left-[2.85rem] top-5 w-5 h-5 rounded-full ring-4"
                  style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', ringColor: isDark ? '#111827' : '#ffffff' }}
                />

                <motion.div
                  whileHover={{ x: 4, boxShadow: isDark ? '0 16px 40px rgba(99,102,241,0.28)' : '0 16px 40px rgba(99,102,241,0.14)' }}
                  onClick={() => setSelectedExp(exp)}
                  className="cursor-pointer rounded-2xl overflow-hidden"
                  style={{
                    backgroundColor: isDark ? 'rgba(17,24,39,0.9)' : 'rgba(255,255,255,0.98)',
                    border: `1px solid ${isDark ? 'rgba(99,102,241,0.4)' : 'rgba(99,102,241,0.28)'}`,
                    backdropFilter: 'blur(16px)',
                    boxShadow: isDark ? '0 4px 24px rgba(0,0,0,0.4)' : '0 4px 24px rgba(99,102,241,0.08)',
                  }}
                >
                  {/* Gradient top accent bar */}
                  <div className="h-1.5 w-full" style={{ background: 'linear-gradient(to right,#6366f1,#8b5cf6,#a78bfa)' }} />

                  <div className="p-6">
                    <div
                      className="w-full rounded-xl overflow-hidden mb-4 flex items-center justify-center"
                      style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.95)' : '#f3f4f6', border: `1px solid ${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(209,213,219,0.8)'}`, minHeight: '68px', padding: '10px 16px' }}
                    >
                      <img src={exp.logo} alt={`${exp.company} logo`} className="w-full object-contain" style={{ maxHeight: '52px' }} loading="lazy" />
                    </div>

                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(99,102,241,0.12)', color: '#6366f1' }}>
                        {exp.period}
                      </span>
                      <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: isDark ? 'rgba(139,92,246,0.18)' : 'rgba(139,92,246,0.1)', color: '#8b5cf6' }}>
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-0.5" style={{ color: isDark ? '#ffffff' : '#111827' }}>{exp.role}</h3>
                    <p className="text-sm font-semibold" style={{ color: isDark ? '#c4b5fd' : '#4f46e5' }}>{exp.company}</p>
                    <p className="text-xs mt-0.5 mb-4" style={{ color: isDark ? '#6b7280' : '#9ca3af' }}>📍 {exp.location}</p>

                    <p className="text-sm mb-4 leading-relaxed" style={{ color: isDark ? '#d1d5db' : '#4b5563' }}>{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((s) => (
                        <span key={s} className="text-xs px-2.5 py-1 rounded-full font-semibold"
                          style={{ backgroundColor: isDark ? 'rgba(31,41,55,0.9)' : 'rgba(243,244,246,0.9)', color: isDark ? '#a5b4fc' : '#4f46e5', border: `1px solid ${isDark ? 'rgba(99,102,241,0.4)' : 'rgba(99,102,241,0.22)'}` }}>
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center justify-between">
                      <p className="text-sm font-semibold" style={{ color: '#6366f1' }}>Tap for details →</p>
                      <span className="text-xs px-2.5 py-1 rounded-full" style={{ backgroundColor: 'rgba(16,185,129,0.12)', color: '#10b981' }}>🎓 Certificate</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Detail Modal ── */}
      <AnimatePresence>
        {selectedExp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <button
              type="button"
              onClick={() => setSelectedExp(null)}
              className="absolute inset-0"
              style={{ backgroundColor: 'rgba(17,24,39,0.75)', backdropFilter: 'blur(6px)' }}
              aria-label="Close"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl rounded-2xl overflow-hidden"
              style={{
                backgroundColor: isDark ? '#111827' : '#ffffff',
                border: `1px solid ${isDark ? 'rgba(75,85,99,0.7)' : 'rgba(229,231,235,1)'}`,
                boxShadow: isDark ? '0 20px 45px rgba(0,0,0,0.5)' : '0 20px 45px rgba(0,0,0,0.15)',
                maxHeight: '90vh',
                overflowY: 'auto',
              }}
            >
              {/* Modal header */}
              <div className="px-5 py-4 border-b sticky top-0 z-10"
                style={{ borderColor: isDark ? '#374151' : '#e5e7eb', backgroundColor: isDark ? '#111827' : '#ffffff' }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold" style={{ color: isDark ? '#ffffff' : '#111827' }}>
                      {selectedExp.role}
                    </h3>
                    <p className="text-sm" style={{ color: isDark ? '#9ca3af' : '#6b7280' }}>
                      {selectedExp.company} · {selectedExp.period}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedExp(null)}
                    className="p-2 rounded-lg shrink-0"
                    style={{ backgroundColor: isDark ? '#1f2937' : '#f3f4f6', color: isDark ? '#d1d5db' : '#374151' }}
                    aria-label="Close"
                  >
                    <FiX />
                  </button>
                </div>
              </div>

              {/* Modal body */}
              <div className="p-5 space-y-5">
                {/* Company logo */}
                <div className="w-full rounded-xl overflow-hidden"
                  style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.92)' : '#f9fafb', border: `1px solid ${isDark ? 'rgba(255,255,255,0.12)' : 'rgba(209,213,219,0.8)'}` }}
                >
                  <img src={selectedExp.logo} alt={`${selectedExp.company} logo`} className="w-full object-contain" style={{ maxHeight: '60px' }} />
                </div>

                {/* Type badge + location */}
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: 'rgba(99,102,241,0.12)', color: '#6366f1' }}>
                    {selectedExp.type}
                  </span>
                  <span className="text-sm" style={{ color: isDark ? '#9ca3af' : '#6b7280' }}>
                    📍 {selectedExp.location}
                  </span>
                </div>

                {/* Description */}
                <p style={{ color: isDark ? '#d1d5db' : '#374151' }}>{selectedExp.description}</p>

                {/* Key highlights */}
                <div>
                  <h4 className="text-sm font-bold mb-2 uppercase tracking-wide" style={{ color: isDark ? '#9ca3af' : '#6b7280' }}>
                    Key Highlights
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedExp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm" style={{ color: isDark ? '#d1d5db' : '#374151' }}>
                        <span style={{ color: '#6366f1', marginTop: '2px' }}>•</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-sm font-bold mb-2 uppercase tracking-wide" style={{ color: isDark ? '#9ca3af' : '#6b7280' }}>
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExp.skills.map((s) => (
                      <span key={s} className="text-sm px-3 py-1 rounded-full font-medium"
                        style={{ backgroundColor: isDark ? 'rgba(31,41,55,0.9)' : 'rgba(243,244,246,0.9)', color: isDark ? '#a5b4fc' : '#4f46e5', border: `1px solid ${isDark ? 'rgba(75,85,99,0.6)' : 'rgba(209,213,219,0.8)'}` }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certificate */}
                {selectedExp.certificateLink && (
                  <div>
                    <h4 className="text-sm font-bold mb-3 uppercase tracking-wide" style={{ color: isDark ? '#9ca3af' : '#6b7280' }}>
                      Internship Certificate
                    </h4>
                    <div className="h-72 rounded-xl overflow-hidden" style={{ border: `1px solid ${isDark ? 'rgba(75,85,99,0.5)' : 'rgba(229,231,235,0.8)'}` }}>
                      <iframe
                        src={getPreviewLink(selectedExp.certificateLink)}
                        title="Internship certificate"
                        className="w-full h-full"
                        allow="autoplay"
                      />
                    </div>
                    <a
                      href={selectedExp.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold"
                      style={{ color: '#6366f1' }}
                    >
                      Open certificate <FiExternalLink size={14} />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
