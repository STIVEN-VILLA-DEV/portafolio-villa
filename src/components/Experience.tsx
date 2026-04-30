import { motion } from 'framer-motion';
import { experiences } from '../data/portfolio';
import { SectionHeader } from './ui/SectionHeader';
import ExperienceTerminal from './ui/ExperienceTerminal';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/4 w-1/3 h-1/3 bg-green-primary/5 rounded-full blur-xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          title="Experience" 
          subtitle="// My professional journey" 
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <ExperienceTerminal experiences={experiences} />
        </motion.div>
      </div>
    </section>
  );
}