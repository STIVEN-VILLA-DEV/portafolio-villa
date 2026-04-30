import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  showLine?: boolean;
}

export function SectionHeader({ title, subtitle, showLine = true }: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-16"
    >
      <h2 className="section-title text-3xl md:text-4xl font-bold mb-4">
        {title}
      </h2>
      {showLine && (
        <div className="flex items-center gap-4">
          <div className="w-24 h-1 bg-green-primary" />
          {subtitle && (
            <span className="text-gray-500 text-sm font-display">
              {subtitle}
            </span>
          )}
        </div>
      )}
    </motion.div>
  );
}