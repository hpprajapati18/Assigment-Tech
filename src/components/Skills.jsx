import { motion } from 'framer-motion';
import { FaCode, FaServer, FaToolbox } from 'react-icons/fa6';

const categories = [
  {
    title: 'Frontend (MERN)',
    icon: FaCode,
    color: 'from-sky-500 to-cyan-400',
    skills: [
      { name: 'HTML / CSS / JS', level: 85 },
      { name: 'React.js', level: 80 },
      { name: 'Tailwind CSS', level: 78 },
      { name: 'Responsive UI & basics of Framer Motion', level: 70 },
    ],
  },
  {
    title: 'Backend (MERN)',
    icon: FaServer,
    color: 'from-indigo-500 to-purple-400',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Express.js', level: 72 },
      { name: 'MongoDB / Mongoose', level: 70 },
      { name: 'REST APIs & JWT Auth basics', level: 68 },
    ],
  },
  {
    title: 'Tools & Practices',
    icon: FaToolbox,
    color: 'from-emerald-500 to-lime-400',
    skills: [
      { name: 'Git / GitHub', level: 80 },
      { name: 'VS Code & npm', level: 78 },
      { name: 'Postman, Chrome DevTools', level: 72 },
      { name: 'Basic deployment (Vercel / Render)', level: 70 },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.15 * i, ease: 'easeOut' },
  }),
};

const Skills = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-8 max-w-2xl"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
          Skills
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          MERN stack skills I&apos;m building.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
          As a fresher, I focus on strong basics in JavaScript, React, Node.js, Express, and MongoDB,
          while practicing with real projects and version control.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {categories.map((category, idx) => (
          <motion.article
            key={category.title}
            className="group glass-panel rounded-2xl p-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            custom={idx}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 220, damping: 20 }}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                  {category.title}
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  Current skills & comfort level.
                </p>
              </div>
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${category.color} text-slate-950 shadow-lg`}
              >
                <category.icon className="h-4 w-4" />
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span>{skill.name}</span>
                    <span className="text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-800/90">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, amount: 0.7 }}
                      transition={{ duration: 0.9, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Skills;

