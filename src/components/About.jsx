import { motion } from 'framer-motion';

const highlights = [
  'MERN stack fresher with strong fundamentals',
  'Comfortable with React, Node.js, Express & MongoDB',
  'Enjoys learning by building real projects',
];

const About = () => {
  return (
    <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)] md:items-center">
      <motion.div
        className="relative mx-auto h-56 w-56 max-w-xs overflow-hidden rounded-3xl sm:h-64 sm:w-64 md:mx-0"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="glass-panel absolute inset-0 rounded-3xl" />
        <img
          src="/formal pic.png"
          alt="Portrait of Hanjari Prajapati"
          className="relative h-full w-full rounded-3xl object-cover object-center"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
          About
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          Designing experiences that feel as good as they look.
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
          I&apos;m a MERN stack fresher who loves turning ideas into working projects. I focus on
          clean code, simple UX, and learning modern tools so I can grow into a strong full‑stack
          developer.
        </p>

        <ul className="mt-4 space-y-2 text-sm text-slate-200">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-400 to-emerald-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href="/Resume-hanjari.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-100 hover:border-sky-500/70 hover:bg-slate-900/90"
          >
            Download CV
          </a>
          <p className="text-xs text-slate-400">
            Based in{' '}
            <span className="text-slate-200">
              Ahmedabad, India
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;

