import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const socialCommands = [
  { cmd: 'github', label: 'GitHub', url: 'https://github.com/STIVEN-VILLA-DEV' },
  { cmd: 'linkedin', label: 'LinkedIn', url: 'https://co.linkedin.com/in/stiven-villa-416745252' },
  { cmd: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/villa_programador?igsh=MWZpbnJrMnIybGJwYQ==' },
];

export default function HeroCodeBlock() {
  const [typedLines, setTypedLines] = useState<string[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypedLines(['> stivenvilla@dev', '  location: Colombia 🇨🇴', '  role: Full Stack Developer']);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <div className="relative p-6 rounded-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(20,20,20,0.9) 100%)',
          boxShadow: '0 0 60px rgba(34,197,94,0.1), inset 0 0 60px rgba(0,0,0,0.5)'
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(34,197,94,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.03) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }} />
          <div className="absolute inset-0" style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)'
          }} />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="ml-2 text-[10px] text-green-500/60 font-display tracking-widest">~/Villa@Software</span>
          </div>

          <div className="space-y-3 font-display text-sm">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex items-center gap-1.5">
              <span className="text-green-500">$</span>
              <span className="text-purple-400">cat</span>
              <span className="text-cyan-400">about.txt</span>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-green-500/70 text-xs pl-4">
              {typedLines.map((line, i) => (
                <motion.div key={line} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.3 }}>
                  <span className="text-green-400">{line}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-3 text-xs">
              <div className="text-green-500/50">┌─   AVAILABLE FOR WORK    ─┐</div>
              <div className="text-green-400">   │    Open to collaborate    │</div>
              <div className="text-green-500/50">└──────────────────────┘</div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.6, type: 'spring' }} className="mt-4 p-3 rounded-lg border border-green-500/20 bg-green-500/5">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-green-400">stack:</span>
                <span className="text-cyan-400">React</span>
                <span className="text-gray-600">|</span>
                <span className="text-purple-400">Node</span>
                <span className="text-gray-600">|</span>
                <span className="text-pink-400">TypeScript</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className="mt-3 pt-3 border-t border-green-500/10">
              <div className="text-[10px] text-green-500/50 mb-2">$ connect --social</div>
              <div className="flex gap-3">
                {socialCommands.map((social, i) => (
                  <motion.a key={social.cmd} href={social.url} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2 + i * 0.1 }} className="group flex items-center gap-1.5 text-xs px-2 py-1 rounded bg-green-500/5 border border-green-500/20 hover:border-green-500/50 hover:bg-green-500/10 transition-all">
                    <span className="text-green-400 font-display">$</span>
                    <span className="text-gray-400 group-hover:text-gray-300">{social.label}</span>
                    <span className="text-green-500/50">→</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}