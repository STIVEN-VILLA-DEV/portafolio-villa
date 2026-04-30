import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const commands = [
  { cmd: 'whoami', output: 'stivenvilla' },
  { cmd: 'cat status.txt', output: 'Available for new opportunities' },
  { cmd: 'ping -c 1 inbox', output: 'Always responding within 24h' },
];

export default function Contact() {
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeLine < commands.length) {
        setActiveLine((prev) => prev + 1);
      }
    }, 800);
    return () => clearTimeout(timer);
  }, [activeLine]);

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-primary/5 rounded-full blur-xl" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(var(--color-green-dim) 1px, transparent 1px), linear-gradient(90deg, var(--color-green-dim) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400 max-w-xl mx-auto font-display">// Drop a message, let's build something</p>
        </motion.div>
        
        <div className="max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="card-terminal p-0 overflow-hidden border-green-primary/30"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-green-primary/10 border-b border-green-primary/20">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-3 text-gray-500 text-xs font-mono">contact.sh</span>
            </div>
            
            <div className="p-4 font-mono text-sm space-y-1">
              {commands.slice(0, activeLine).map((item, i) => (
                <motion.div
                  key={item.cmd}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-green-dim">
                    <span className="text-green-primary">$</span> {item.cmd}
                  </div>
                  <div className="text-gray-300 pl-4">{item.output}</div>
                </motion.div>
              ))}
              
              {activeLine < commands.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-primary"
                >
                  <span className="text-green-primary">$</span> <span className="animate-pulse">█</span>
                </motion.div>
              )}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6"
          >
            <motion.a 
              href="https://t.me/VillaProgramacion" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.01, x: 4 }} 
              className="card-terminal flex items-center gap-3 p-4 group"
            >
              <span className="text-green-primary text-xs">➜</span>
              <div className="flex-1">
                <p className="font-bold text-gray-100 font-display">Telegram</p>
                <p className="text-xs text-gray-500">Direct message</p>
              </div>
              <span className="text-green-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </motion.a>
            
            <motion.a 
              href="mailto:stivenvilla2001@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.01, x: 4 }} 
              className="card-terminal flex items-center gap-3 p-4 group"
            >
              <span className="text-green-primary text-xs">✉</span>
              <div className="flex-1">
                <p className="font-bold text-gray-100 font-display">Email</p>
                <p className="text-xs text-gray-500">hello@stivenvilla.dev</p>
              </div>
              <span className="text-green-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </motion.a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-center"
          >
            <p className="text-gray-500 text-xs font-mono">
              <span className="text-green-primary">#</span> echo $MESSAGE
              <br />
              <span className="text-gray-400">"Excited to work on your next project!"</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}