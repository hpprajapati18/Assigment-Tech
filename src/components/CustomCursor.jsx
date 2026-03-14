import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const handleDown = () => setIsActive(true);
    const handleUp = () => setIsActive(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed z-50 hidden h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-400/80 bg-sky-400/10 lg:block"
      animate={{
        x: position.x,
        y: position.y,
        scale: isActive ? 0.7 : 1,
        opacity: 1,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 25, mass: 0.4 }}
    >
      <div className="absolute inset-1 rounded-full bg-sky-400/15 blur-sm" />
    </motion.div>
  );
};

export default CustomCursor;

