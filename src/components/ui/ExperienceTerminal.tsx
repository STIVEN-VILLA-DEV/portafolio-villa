import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Experience } from '../data/portfolio';
import type { RefObject } from 'react';

interface ExperienceTerminalProps {
  experiences: Experience[];
}

export default function ExperienceTerminal({ experiences }: ExperienceTerminalProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const experience = experiences[current];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % experiences.length);
  }, [experiences.length]);

  useEffect(() => {
    if (isPaused || !isVisible) return;
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next, isPaused, isVisible]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card-terminal overflow-hidden"
    >
      <div 
        className="flex items-center gap-2 px-4 py-3 bg-terminal-bg border-b border-green-dim/20 cursor-pointer"
        onClick={() => setIsPaused(!isPaused)}
      >
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
        </div>
        <span className="text-xs text-gray-500 font-display ml-2">~/experience.sh</span>
        <div className="ml-auto flex items-center gap-2">
          <span className={`text-xs font-display transition-opacity ${isPaused ? 'text-yellow-400' : 'text-green-primary/70'}`}>
            {isPaused ? '⏸ paused' : '▶ playing'}
          </span>
          <span className="text-xs text-green-primary/70 font-display">
            {current + 1}/{experiences.length}
          </span>
        </div>
      </div>

      <div className="p-5" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 text-xs text-green-primary font-display mb-4">
              <span>$</span>
              <span>cat ./experience_{current + 1}.json</span>
            </div>

            <div className="space-y-3 pl-4 font-display text-sm border-l-2 border-green-dim/30">
              <div>
                <span className="text-gray-400">company: </span>
                <span className="text-green-400">"{experience.company}"</span>
              </div>
              <div>
                <span className="text-gray-400">role: </span>
                <span className="text-gray-100">"{experience.role}"</span>
              </div>
              <div>
                <span className="text-gray-400">period: </span>
                <span className="text-green-400">"{experience.period}"</span>
              </div>
              <div>
                <span className="text-gray-400">description: </span>
                <span className="text-gray-300">"{experience.description}"</span>
              </div>
              <div>
                <span className="text-gray-400">technologies: </span>
                <span className="text-gray-500">[</span>
                {experience.technologies.map((tech, i) => (
                  <span key={tech}>
                    <span className="text-green-400">"{tech}"</span>
                    {i < experience.technologies.length - 1 && <span className="text-gray-500">, </span>}
                  </span>
                ))}
                <span className="text-gray-500">]</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 pt-4 border-t border-green-dim/20">
          <div className="flex items-center justify-center gap-2">
            {experiences.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current 
                    ? 'w-6 bg-green-primary' 
                    : 'w-2 bg-green-dim/30 hover:bg-green-dim/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}