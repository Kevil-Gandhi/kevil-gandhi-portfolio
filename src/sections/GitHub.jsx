import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { FiGithub, FiUsers, FiBook, FiStar } from 'react-icons/fi';
import { useTheme } from '../utils/ThemeContext';

const GitHub = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [githubData, setGithubData] = useState(null);
  const [repos, setRepos] = useState([]);
  const { isDark } = useTheme();

  useEffect(() => {
    fetch('https://api.github.com/users/Kevil-Gandhi')
      .then(res => res.json())
      .then(data => setGithubData(data))
      .catch(err => console.error(err));

    fetch('https://api.github.com/users/Kevil-Gandhi/repos?sort=updated&per_page=6')
      .then(res => res.json())
      .then(data => setRepos(data))
      .catch(err => console.error(err));
  }, []);

  const stats = [
    { icon: <FiBook />, label: 'Repositories', value: githubData?.public_repos || 0 },
    { icon: <FiUsers />, label: 'Followers', value: githubData?.followers || 0 },
    { icon: <FiUsers />, label: 'Following', value: githubData?.following || 0 },
  ];

  return (
    <section id="github" className="py-20" style={{ backgroundColor: isDark ? '#1f2937' : '#f9fafb' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            GitHub Activity
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12" />

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl text-center"
                style={{
                  backgroundColor: isDark ? 'rgba(17, 24, 39, 0.5)' : 'rgba(255, 255, 255, 0.9)',
                  border: `1px solid ${isDark ? 'rgba(75, 85, 99, 0.5)' : 'rgba(229, 231, 235, 0.8)'}`,
                  backdropFilter: 'blur(12px)'
                }}
              >
                <div className="text-4xl mb-2 flex justify-center" style={{ color: '#6366f1' }}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-1" style={{ color: isDark ? '#ffffff' : '#111827' }}>
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: isDark ? '#9ca3af' : '#6b7280' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Recent Repositories */}
          <h3 className="text-2xl font-bold text-center mb-8" style={{ color: isDark ? '#ffffff' : '#111827' }}>
            Recent Repositories
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.slice(0, 6).map((repo, idx) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl group"
                style={{
                  backgroundColor: isDark ? 'rgba(17, 24, 39, 0.5)' : 'rgba(255, 255, 255, 0.9)',
                  border: `1px solid ${isDark ? 'rgba(75, 85, 99, 0.5)' : 'rgba(229, 231, 235, 0.8)'}`,
                  backdropFilter: 'blur(12px)'
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <FiGithub className="text-2xl" style={{ color: '#6366f1' }} />
                  {repo.stargazers_count > 0 && (
                    <div className="flex items-center gap-1 text-yellow-500">
                      <FiStar size={16} />
                      <span className="text-sm">{repo.stargazers_count}</span>
                    </div>
                  )}
                </div>
                <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors" style={{ color: isDark ? '#ffffff' : '#111827' }}>
                  {repo.name}
                </h4>
                <p className="text-sm line-clamp-2 mb-3" style={{ color: isDark ? '#9ca3af' : '#4b5563' }}>
                  {repo.description || 'No description available'}
                </p>
                {repo.language && (
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full" style={{ backgroundColor: 'rgba(99, 102, 241, 0.1)', color: '#6366f1' }}>
                    {repo.language}
                  </span>
                )}
              </motion.a>
            ))}
          </div>

          {/* GitHub Stats Images */}
          <div className="mt-12 space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="flex justify-center"
            >
              <img
                src={`https://github-readme-stats.vercel.app/api?username=Kevil-Gandhi&show_icons=true&theme=radical`}
                alt="GitHub Stats"
                className="rounded-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="flex justify-center"
            >
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=Kevil-Gandhi&theme=radical`}
                alt="GitHub Streak"
                className="rounded-lg"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHub;
