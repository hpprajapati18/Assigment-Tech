import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { HiPaperAirplane, HiOutlineEnvelope } from 'react-icons/hi2';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending...' });

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: form.name,
          from_email: form.email,
          to_email: 'creativecontent1818@gmail.com',
          message: form.message,
        },
        'YOUR_PUBLIC_KEY',
      );

      setStatus({ type: 'success', message: 'Message sent successfully. Thank you!' });
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or email me directly.',
      });
    }
  };

  return (
    <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] md:items-start">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
          Contact
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          Let&apos;s collaborate on your next interface.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
          Whether you need a polished marketing site, a design system, or a complex product flow,
          I&apos;m always open to thoughtful projects and teams that care about craft.
        </p>

        <div className="mt-6 rounded-2xl border border-slate-800/80 bg-slate-900/70 p-4 text-xs text-slate-300 sm:text-sm">
          <p className="font-medium text-slate-100 flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-sky-400">
              <HiOutlineEnvelope className="h-3.5 w-3.5" />
            </span>
            Email
          </p>
          <p className="mt-1 text-slate-300">creativecontent1818@gmail.com</p>
          <p className="mt-4 text-xs text-slate-400">
            Configure EmailJS by replacing <code>YOUR_SERVICE_ID</code>,{' '}
            <code>YOUR_TEMPLATE_ID</code>, and <code>YOUR_PUBLIC_KEY</code> in{' '}
            <code>Contact.jsx</code> after creating your template on their dashboard.
          </p>
        </div>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        className="glass-panel rounded-2xl p-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="space-y-4">
          <div className="relative">
            <label htmlFor="name" className="text-xs font-medium text-slate-300">
              Name
            </label>
            <motion.input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="mt-1 w-full rounded-xl border border-slate-700/80 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none transition-colors placeholder:text-slate-500 focus:border-sky-500"
              whileFocus={{ scale: 1.01 }}
            />
          </div>

          <div className="relative">
            <label htmlFor="email" className="text-xs font-medium text-slate-300">
              Email
            </label>
            <motion.input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full rounded-xl border border-slate-700/80 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none transition-colors placeholder:text-slate-500 focus:border-sky-500"
              whileFocus={{ scale: 1.01 }}
            />
          </div>

          <div className="relative">
            <label htmlFor="message" className="text-xs font-medium text-slate-300">
              Message
            </label>
            <motion.textarea
              id="message"
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              className="mt-1 w-full resize-none rounded-xl border border-slate-700/80 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none transition-colors placeholder:text-slate-500 focus:border-sky-500"
              whileFocus={{ scale: 1.01 }}
            />
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <motion.button
            type="submit"
            disabled={status.type === 'loading'}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-md shadow-sky-500/40 disabled:cursor-not-allowed disabled:opacity-60"
            whileHover={{ scale: status.type === 'loading' ? 1 : 1.02 }}
            whileTap={{ scale: status.type === 'loading' ? 1 : 0.98 }}
          >
            <HiPaperAirplane className="h-4 w-4" />
            {status.type === 'loading' ? 'Sending...' : 'Send Message'}
          </motion.button>

          {status.type !== 'idle' && (
            <motion.p
              className={`text-xs ${
                status.type === 'success' ? 'text-emerald-400' : 'text-amber-300'
              }`}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {status.message}
            </motion.p>
          )}
        </div>
      </motion.form>
    </div>
  );
};

export default Contact;

