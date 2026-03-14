import { motion } from 'framer-motion';
import { HiArrowDownRight, HiArrowDownTray } from 'react-icons/hi2';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { SiReact, SiTailwindcss, SiFramer, SiJavascript } from 'react-icons/si';

const techIcons = [
  { Icon: SiReact, color: 'text-sky-400', bg: 'bg-sky-500/10', delay: 0 },
  { Icon: SiTailwindcss, color: 'text-cyan-400', bg: 'bg-cyan-500/10', delay: 0.1 },
  { Icon: SiFramer, color: 'text-fuchsia-400', bg: 'bg-fuchsia-500/10', delay: 0.2 },
  { Icon: SiJavascript, color: 'text-yellow-300', bg: 'bg-yellow-500/10', delay: 0.3 },
];

const words = ['MERN Stack Developer', 'Frontend Developer', 'Fresher Engineer'];

const Hero = () => {
  return (
    <div className="flex flex-col items-start gap-10 pt-10 lg:flex-row lg:items-center lg:justify-between lg:pt-16">
      <div className="flex-1 space-y-6">
        <motion.p
          className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-300 shadow-md shadow-slate-950/80"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Available for freelance projects
        </motion.p>

        <motion.h1
          className="text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Crafting premium
          <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
            {' '}
            interfaces
          </span>
          {' '}for modern web experiences.
        </motion.h1>

        <motion.p
          className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          I&apos;m a MERN stack fresher passionate about modern web apps, clean UI, and smooth
          interactions. I love turning ideas into usable products with React, Node.js, and MongoDB.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40"
          >
            View Projects
            <HiArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </button>

          <a
            href="/Resume-hanjari.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-100 hover:border-sky-500/70 hover:bg-slate-900/80"
          >
            <HiArrowDownTray className="h-4 w-4" />
            Download CV
          </a>
        </motion.div>

        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="flex items-center gap-2 text-xs text-slate-400 sm:text-sm">
            <span className="text-slate-500">Focused on</span>
            <div className="relative h-5 overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 flex flex-col"
                animate={{ y: ['0%', '-100%', '-200%', '0%'] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              >
                {words.map((word) => (
                  <div key={word} className="h-5">
                    <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
                      {word}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="flex gap-3">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-700/70 bg-slate-900/60 text-slate-200 hover:text-sky-400"
            >
              <FaGithub className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-700/70 bg-slate-900/60 text-slate-200 hover:text-sky-400"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="relative mt-4 flex flex-1 justify-center lg:mt-0"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
      >
        <div className="relative h-64 w-64 max-w-xs sm:h-72 sm:w-72 lg:h-80 lg:w-80">
          <div className="glass-panel absolute inset-0 rounded-3xl" />
          <motion.div
            className="absolute inset-1 rounded-3xl bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-900/70 p-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="text-xs text-slate-400">MERN Stack Developer (Fresher)</p>
                <p className="mt-1 text-lg font-semibold text-slate-50">Hanjari Prajapati</p>
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                <p>Focused on building full‑stack MERN projects with clean, reusable components.</p>
                <p className="text-slate-400">Exploring real‑world projects, best practices, and UI polish.</p>
              </div>
            </div>
          </motion.div>

          {/* Floating tech icons */}
          {techIcons.map(({ Icon, color, bg, delay }, index) => (
            <motion.div
              key={color}
              className={`absolute flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-700/70 ${bg} shadow-lg shadow-slate-950/80`}
              style={
                index === 0
                  ? { top: '-10%', left: '10%' }
                  : index === 1
                  ? { top: '10%', right: '-6%' }
                  : index === 2
                  ? { bottom: '12%', left: '-6%' }
                  : { bottom: '-8%', right: '10%' }
              }
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                ease: 'easeInOut',
                delay,
              }}
            >
              <Icon className={`h-5 w-5 ${color}`} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;

