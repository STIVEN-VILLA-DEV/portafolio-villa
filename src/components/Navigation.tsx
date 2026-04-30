import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-terminal-bg/95 backdrop-blur-md border-b border-green-dim/20' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <motion.a href="#" className="flex items-center gap-2 font-display text-lg font-bold" whileHover={{ scale: 1.05 }}>
              <span className="text-green-primary">{'>'}</span>
              <span className="text-gray-500">VillaDev</span>
            </motion.a>
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.a key={item.href} href={item.href} className="text-gray-400 hover:text-green-primary text-sm font-display transition-colors relative group" whileHover={{ y: -2 }}>
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-primary group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>
            <Button href="#contact" variant="primary" size="sm" className="hidden md:flex">
                Let's Talk
              </Button>
            <motion.button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden w-10 h-10 flex items-center justify-center text-gray-300" whileTap={{ scale: 0.95 }}>
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 8 : 0 }} className="w-full h-0.5 bg-current origin-center" />
                <motion.span animate={{ opacity: isMobileMenuOpen ? 0 : 1 }} className="w-full h-0.5 bg-current" />
                <motion.span animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -8 : 0 }} className="w-full h-0.5 bg-current origin-center" />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 md:hidden">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMobileMenuOpen(false)} className="absolute inset-0 bg-terminal-bg/80 backdrop-blur-sm" />
            <motion.div 
              initial={{ y: '100%' }} 
              animate={{ y: 0 }} 
              exit={{ y: '100%' }} 
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="absolute bottom-0 left-0 right-0 bg-terminal-dark border-t border-green-dim/20 rounded-t-2xl p-6 pb-10"
            >
              <div className="w-12 h-1 bg-green-dim/30 rounded-full mx-auto mb-6" />
              <div className="space-y-1">
                {navItems.map((item, index) => (
                  <motion.a key={item.href} href={item.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between py-4 px-4 text-gray-300 font-display hover:text-green-primary hover:bg-green-primary/5 rounded-xl transition-colors">
                    {item.label}
                    <span className="text-green-primary/50">→</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}