import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com' },
  { name: 'LinkedIn', url: 'https://linkedin.com' },
  { name: 'Twitter', url: 'https://twitter.com' }
];

const footerLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-terminal-dark border-t border-green-dim/20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="pt-8 flex flex-wrap items-center justify-between gap-4 text-sm text-gray-500">
          <p className="font-display">{currentYear} Full Stack Developer</p>
          <p className="font-display"><span className="text-green-primary">Built</span> with <span className="text-red-400">♥</span> using <span className="text-orange-400">Astro</span></p>
        </motion.div>
        <motion.a href="#" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="fixed bottom-6 right-6 w-10 h-10 flex items-center justify-center rounded-lg bg-green-primary text-terminal-bg opacity-0 hover:opacity-100 transition-opacity z-50" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
        </motion.a>
      </div>
    </footer>
  );
}