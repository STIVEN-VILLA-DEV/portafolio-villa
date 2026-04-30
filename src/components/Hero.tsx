import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import HeroCodeBlock from './ui/HeroCodeBlock';
import GlitchName from './ui/GlitchName';
import { Button } from './ui';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center gradient-bg noise-bg relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-primary/5 rounded-full blur-xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-primary/3 rounded-full blur-xl" />
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: `linear-gradient(var(--color-green-dim) 1px, transparent 1px), linear-gradient(90deg, var(--color-green-dim) 1px, transparent 1px)`, 
            backgroundSize: '50px 50px' 
          }} 
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden" 
          animate="visible" 
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-primary animate-pulse" />
              <span className="text-green-muted text-sm font-display tracking-wider">
                // Full Stack Developer
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold flex flex-col">
              <span className="text-gray-100">Hi, I'm</span>
              <GlitchName className="mt-1" />
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed">
            Specialist in modern, scalable web development with a strong focus on cybersecurity. My passion lies in building robust solutions that protect personal data.            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-4">
              <Button variant="primary" size="md" href="https://drive.google.com/file/d/1lx1Vom7DlxCM4GbxwNtEsEK7K-PpYCmZ/view" target="_blank" rel="noopener noreferrer" className="md:px-8 md:py-4 md:text-base" icon={
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="md:w-4 md:h-4">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                </svg>
              }>
                View CV
              </Button>
              <Button variant="outline" size="md" href="#projects" className="md:px-8 md:py-4 md:text-base" icon={
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="md:w-4 md:h-4">
                  <rect x="3" y="3" width="7" height="7"/>
                  <rect x="14" y="3" width="7" height="7"/>
                  <rect x="14" y="14" width="7" height="7"/>
                  <rect x="3" y="14" width="7" height="7"/>
                </svg>
              }>
                View Projects
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="hidden md:block font-display text-sm text-gray-600 pt-4">
              <span className="text-green-primary">$</span> ls -la ~/portfolio
            </motion.div>
          </div>

<HeroCodeBlock />
          </motion.div>
        </div>
      </section>
  );
}