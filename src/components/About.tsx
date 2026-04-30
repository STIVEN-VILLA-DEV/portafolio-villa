import { motion } from 'framer-motion';
import { stack, softSkills, objectives } from '../data/portfolio';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { SectionHeader } from './ui/SectionHeader';


export default function About() {
  return (
    <section id="about" className="py-24 bg-terminal-dark relative">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeader title="About Me" subtitle="// Know more about me" />

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInUp} className="space-y-6">
              <motion.div variants={fadeInUp} className="card-terminal p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-green-primary/10 flex items-center justify-center text-3xl shrink-0">
                    SV
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-100 font-display">
                      Freelance Software Developer
                    </h3>
                    <p className="text-green-primary text-sm font-display">
                      2+ years of experience
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    As a freelance software developer with <span className="text-green-primary">2 years of experience</span>, I specialize in 
                    transforming complex requirements into <span className="text-green-primary">robust</span>, <span className="text-green-primary">high-performance</span> digital solutions. 
                    My work goes beyond attractive interfaces; I focus on engineering features that 
                    ensure <span className="text-green-primary">intuitive</span>, <span className="text-green-primary">scalable</span>, and <span className="text-green-primary">optimized</span> products.
                  </p>
                  <p>
                    Performance and <span className="text-green-primary">cybersecurity</span> are fundamental pillars in every project I take on. 
                    I stay ahead of the latest trends and vulnerabilities to implement <span className="text-green-primary">proactive defenses</span>. 
                    My mission is clear: to protect user information with the <span className="text-green-primary">highest security standards</span> 
                    while ensuring the system operates at <span className="text-green-primary">maximum efficiency</span>.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="card-terminal p-6">
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-green-primary">$</span>
                  <span className="text-gray-400 text-sm font-display">cat objectives</span>
                </div>
                <div className="space-y-3">
                  {objectives.map((obj, i) => (
                    <motion.div
                      key={obj}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-green-primary mt-0.5">›</span>
                      <span className="text-sm text-gray-400 font-display">{obj}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <motion.div className="card-terminal p-5 overflow-hidden">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-green-primary">$</span>
                    <span className="text-gray-400 text-sm font-display">cat tech_stack</span>
                  </div>
                   
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 pt-2">
                    {stack.map((tech, i) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + i * 0.02 }}
                        className="group px-3 py-2 rounded bg-terminal-bg border border-green-dim/20 hover:border-green-primary/50 hover:bg-green-primary/5 transition-all cursor-default"
                      >
                        <span className="text-xs text-gray-400 group-hover:text-green-primary font-display transition-colors">
                          {tech}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div className="card-terminal p-6">
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-green-primary">$</span>
                  <span className="text-gray-400 text-sm font-display">cat soft_skills</span>
                </div>
                <div className="space-y-3">
                  {softSkills.map((skill, i) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <span className="text-green-primary font-display">*</span>
                      <span className="text-sm text-gray-300 font-display">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div className="flex items-center gap-4 text-sm text-gray-500 font-display">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Always learning
                </span>
                <span className="text-green-dim">|</span>
                <span>Open to work</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}