import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const links = [
  { href: 'home', label: 'Home' },
  { href: 'about', label: 'About' },
  { href: 'skills', label: 'Skills' },
  { href: 'projects', label: 'Projects' },
  { href: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    const el = document.getElementById(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setOpen(false);
  };

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-30 flex justify-center"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div
        className={`mt-3 flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-3 sm:px-6 lg:px-8 ${
          isScrolled ? 'glass-panel' : 'bg-slate-900/10 border border-transparent backdrop-blur-xs'
        } transition-all duration-300`}
      >
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-slate-100"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500 text-xs font-bold shadow-lg shadow-sky-500/40">
            HP
          </span>
          <span className="hidden sm:inline">Hanjari Prajapati</span>
        </button>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
          {links.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleNavClick(link.href)}
              className="group relative"
            >
              <span className="relative z-10 transition-colors group-hover:text-sky-400">
                {link.label}
              </span>
              <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-sky-400 to-indigo-500 transition-transform duration-300 group-hover:scale-x-100" />
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-slate-700/70 bg-slate-900/60 text-slate-100 shadow-md shadow-slate-900/70 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <HiOutlineX className="h-5 w-5" /> : <HiOutlineMenu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute inset-x-0 top-[4.75rem] mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 md:hidden"
          >
            <div className="glass-panel flex flex-col gap-1 rounded-2xl p-3">
              {links.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-medium text-slate-100 hover:bg-slate-800/70"
                >
                  <span>{link.label}</span>
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;

