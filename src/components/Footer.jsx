import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 4 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4 }}
        >
          © {new Date().getFullYear()} Hanjari Prajapati. Crate with React .
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 4 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;

