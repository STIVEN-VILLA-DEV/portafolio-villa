import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface GlitchNameProps {
  className?: string;
}

const NAME = 'Stiven Villa';

export default function GlitchName({ className = '' }: GlitchNameProps) {
  const [isGlitching, setIsGlitching] = useState(false);
  const [displayText, setDisplayText] = useState(NAME);

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      
      const glitchCount = Math.floor(Math.random() * 3) + 1;
      let result = NAME;
      
      for (let i = 0; i < glitchCount; i++) {
        const pos = Math.floor(Math.random() * NAME.length);
        const char = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        result = result.slice(0, pos) + char + result.slice(pos + 1);
      }
      
      setDisplayText(result);
      
      setTimeout(() => {
        setDisplayText(NAME);
        setIsGlitching(false);
      }, 50 + Math.random() * 100);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.span
      className={`text-green-primary font-display ${className}`}
      animate={{
        x: isGlitching ? [0, -2, 2, -1, 1, 0] : 0,
        opacity: isGlitching ? [1, 0.8, 1, 0.9, 1] : 1,
      }}
      transition={{ duration: 0.1 }}
    >
      {displayText}
    </motion.span>
  );
}