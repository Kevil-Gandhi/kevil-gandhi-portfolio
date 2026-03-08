import { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './utils/ThemeContext';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Loader from './components/Loader';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import GitHub from './sections/GitHub';
import Certifications from './sections/Certifications';
import Resume from './sections/Resume';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const { isDark } = useTheme();

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <div 
      className="min-h-screen transition-colors duration-300"
      style={{ 
        backgroundColor: isDark ? '#111827' : '#ffffff',
        color: isDark ? '#f3f4f6' : '#111827'
      }}
    >
      {isLoading && <Loader />}
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHub />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
