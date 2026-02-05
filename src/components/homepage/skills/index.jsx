// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import { motion } from "framer-motion";

function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div id="skills" className="relative z-10 border-t my-12 lg:my-24 border-[var(--card-border)] transition-colors">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-color)] to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-16 h-[1px] bg-[var(--accent-color)]"></span>
          <span className="mx-4 text-[var(--accent-color)] font-bold text-lg uppercase tracking-widest">Skills & Technologies</span>
          <span className="w-16 h-[1px] bg-[var(--accent-color)]"></span>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4">
        {Object.entries(skillsData).map(([category, skills], index) => (
          <motion.div 
            key={index} 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 last:mb-0"
          >
            <motion.h3 
              variants={itemVariants} 
              className="text-2xl md:text-3xl font-bold text-center mb-10 flex items-center justify-center gap-4"
            >
              <span className="text-[var(--text-primary)]">{category}</span>
              <span className="h-px w-12 bg-[var(--accent-color)]"></span>
            </motion.h3>
            
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6"
            >
              {skills.map((skill, id) => (
                <motion.div
                  key={id}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] p-6 text-center transition-all duration-300 hover:border-[var(--accent-color)]/50">
                    <div className="flex flex-col items-center justify-center">
                      <div className="mb-3 h-12 w-12 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                        <img
                          src={skillsImage(skill)}
                          alt={skill}
                          width={48}
                          height={48}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <h4 className="text-[var(--text-primary)] font-semibold text-sm md:text-base capitalize">
                        {skill}
                      </h4>
                    </div>
                    
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-color)]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--accent-color)] to-emerald-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;