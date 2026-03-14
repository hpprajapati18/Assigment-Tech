import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
import Home from './pages/Home';
import CustomCursor from './components/CustomCursor';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen text-slate-100">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed left-0 top-0 z-40 h-1 bg-gradient-to-r from-accent via-sky-400 to-emerald-400 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Animated background blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-sky-500/40 blur-3xl"
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/30 blur-3xl"
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/20 blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Custom cursor on desktop */}
      <CustomCursor />

      {/* Loading screen */}
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="glass-panel flex h-32 w-32 items-center justify-center rounded-3xl"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.div
              className="h-14 w-14 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-500"
              animate={{ rotate: 360, borderRadius: ['1rem', '2rem', '1.5rem', '1rem'] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}

      {/* Main app content */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

