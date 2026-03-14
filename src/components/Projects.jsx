import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa6';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';

const projects = [
  {
    title: 'Interaction-heavy SaaS Dashboard',
    description:
      'A motion-rich analytics dashboard with live data visualizations, granular filters, and dark-mode design system.',
    tech: ['React', 'TypeScript', 'Framer Motion', 'Tailwind'],
    image: '',
    github: 'https://github.com/yourusername/project-one',
    demo: 'https://yourproject-one.com',
  },
  {
    title: 'Design System Playground',
    description:
      'Token-driven design system with theming, component primitives, and documentation site built for fast iteration.',
    tech: ['Storybook', 'React', 'Radix UI', 'Figma'],
    image: '',
    github: 'https://github.com/yourusername/project-two',
    demo: 'https://yourproject-two.com',
  },
  {
    title: 'Portfolio Motion Experiments',
    description:
      'A collection of micro-interactions and scroll-based narratives exploring premium product storytelling patterns.',
    tech: ['Next.js', 'Framer Motion', 'GSAP'],
    image: '',
    github: 'https://github.com/yourusername/project-three',
    demo: 'https://yourproject-three.com',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const Projects = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end"
      >
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            Projects
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Selected work that blends craft and performance.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
            A snapshot of interfaces, systems, and experiments—each focused on clarity, motion, and
            a premium product feel.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 shadow-soft-xl transition-colors duration-300 hover:bg-slate-900/80"
          >
            <div className="relative h-40 overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950">
              <motion.div
                className="absolute inset-6 rounded-3xl bg-gradient-to-br from-sky-500/40 via-indigo-500/30 to-emerald-400/30 blur-2xl"
                animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="relative flex h-full items-end justify-between p-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-300/80">
                    Case Study
                  </p>
                  <p className="mt-1 text-base font-semibold text-slate-50">
                    {project.title}
                  </p>
                </div>
                <motion.div
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900/80 text-slate-100 shadow-lg shadow-slate-950/80"
                  whileHover={{ scale: 1.05 }}
                >
                  <HiArrowTopRightOnSquare className="h-4 w-4" />
                </motion.div>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-4">
              <p className="text-sm text-slate-300">{project.description}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-800/80 px-2.5 py-1 text-xs text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/80 px-3 py-2 text-xs font-medium text-slate-100 hover:border-sky-500/80 hover:text-sky-400"
                >
                  <FaGithub className="h-3.5 w-3.5" />
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-3 py-2 text-xs font-semibold text-slate-950 shadow-md shadow-sky-500/40"
                >
                  <HiArrowTopRightOnSquare className="h-3.5 w-3.5" />
                  Live
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;

