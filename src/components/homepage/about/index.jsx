import { personalData } from "@/utils/data/personal-data";
import { motion } from "framer-motion";
import { FaCode, FaGraduationCap, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import GlowCard from "../../helper/glow-card";

function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const codeString = `const developer = {
  name: '${personalData.name}',
  role: 'Software Engineer',
  specialty: 'MERN Stack',
  passion: 'Scalable Systems',
  location: '${personalData.address}',
  hireable: true,
  skills: ['React', 'NodeJS', 'MongoDB', 'Next.js'],
  philosophy: function() {
    return "Code is Art; Performance is Key";
  }
};`;

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden bg-[#0d1224]">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch"
        >
          {/* Left Column: Developer IDE */}
          <motion.div variants={itemVariants} className="flex flex-col h-full">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-emerald-500" />
              <span className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest">Compiling Profile...</span>
            </div>

            <div className="relative group flex-grow h-full min-h-[400px]">
              {/* Window Header */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-[#1a1f35] rounded-t-2xl border-t border-x border-white/10 flex items-center px-4 gap-2 z-20">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex-grow text-center text-[10px] text-gray-500 font-mono uppercase tracking-tighter">
                  developer_profile.js — 1280×800
                </div>
              </div>

              {/* IDE Content */}
              <div className="absolute inset-0 pt-10 pb-6 px-6 bg-[#0d1224]/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden font-mono text-sm md:text-base cursor-text group-hover:border-emerald-500/30 transition-colors">
                <div className="h-full overflow-auto scrollbar-hide py-4 relative">
                  {/* Line Numbers Decorator */}
                  <div className="absolute left-0 top-4 w-6 text-gray-700 text-right pr-4 select-none italic text-xs">
                    {Array.from({ length: 14 }).map((_, i) => (
                      <div key={i}>{i + 1}</div>
                    ))}
                  </div>

                  <div className="pl-10 space-y-1">
                    <div className="flex flex-wrap gap-x-2">
                      <span className="text-pink-500">const</span>
                      <span className="text-emerald-400">developer</span>
                      <span className="text-white">=</span>
                      <span className="text-amber-300">{"{"}</span>
                    </div>
                    <div className="pl-6 flex gap-2">
                      <span className="text-white">name:</span>
                      <span className="text-emerald-300">'{personalData.name}'</span>,
                    </div>
                    <div className="pl-6 flex gap-2">
                      <span className="text-white">role:</span>
                      <span className="text-emerald-300">'Software Engineer'</span>,
                    </div>
                    <div className="pl-6 flex gap-2">
                      <span className="text-white">specialty:</span>
                      <span className="text-emerald-300">'MERN Stack'</span>,
                    </div>
                    <div className="pl-6 flex gap-2">
                      <span className="text-white">location:</span>
                      <span className="text-emerald-300">'{personalData.address}'</span>,
                    </div>
                    <div className="pl-6 flex gap-2">
                      <span className="text-white">hardWorker:</span>
                      <span className="text-orange-400">true</span>,
                    </div>
                    <div className="pl-6 flex gap-2">
                      <span className="text-white">quickLearner:</span>
                      <span className="text-orange-400">true</span>,
                    </div>
                    <div className="pl-6 flex gap-2">
                      <span className="text-white">problemSolver:</span>
                      <span className="text-orange-400">true</span>,
                    </div>
                    <div className="pl-6 flex gap-2">
                      <span className="text-pink-500 italic">hireable:</span>
                      <span className="text-pink-500">function</span>
                      <span className="text-white">() {"{"}</span>
                    </div>
                    <div className="pl-12 flex gap-2">
                      <span className="text-pink-500">return</span>
                      <span className="text-amber-300">{"("}</span>
                    </div>
                    <div className="pl-18 flex flex-wrap gap-2 text-white">
                      this.hardWorker && this.problemSolver && <span className="text-cyan-400">this.skills.length</span> {">="} <span className="text-orange-400">5</span>
                    </div>
                    <div className="pl-12">
                      <span className="text-amber-300">{")"}</span>;
                    </div>
                    <div className="pl-6 text-white">{"}"}</div>
                    <div className="text-amber-300">{"}"}</div>
                  </div>

                  {/* Typing Cursor Effect */}
                  <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="inline-block w-[2px] h-4 bg-emerald-500 ml-1 translate-y-0.5"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bento Grid Stats */}
          <div className="flex flex-col justify-between py-2">
            <motion.div variants={itemVariants} className="mb-12">
              <h2 className="text-5xl font-black text-white mb-6 leading-[0.9]">
                Architecting <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 italic">Solutions</span> that Scale.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg mb-8">
                I don't just write code; I build robust digital architectures. My focus is on creating high-performance MERN applications with clean, maintainable logic.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Stat 1: 1+ Year Experience */}
              <GlowCard identifier="about-exp">
                <div className="p-5 relative h-full">
                  <img
                    src="/blur-23.svg"
                    alt="Hero"
                    width={1080}
                    height={200}
                    className="absolute bottom-0 left-0 opacity-80"
                  />
                  <div className="flex items-center gap-x-6 h-full">
                    <div className="text-emerald-500 transition-all duration-300 hover:scale-125 flex-shrink-0">
                      <FaBriefcase size={32} />
                    </div>
                    <div>
                      <p className="text-base sm:text-lg mb-1 font-bold text-white">
                        1+ Year Experience
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400">
                        Expertise in Professional Development
                      </p>
                    </div>
                  </div>
                </div>
              </GlowCard>

              {/* Stat 2: Modern Stack */}
              <GlowCard identifier="about-stack">
                <div className="p-5 relative h-full">
                  <img
                    src="/blur-23.svg"
                    alt="Hero"
                    width={1080}
                    height={200}
                    className="absolute bottom-0 left-0 opacity-80"
                  />
                  <div className="flex items-center gap-x-6 h-full">
                    <div className="text-cyan-500 transition-all duration-300 hover:scale-125 flex-shrink-0">
                      <FaCode size={32} />
                    </div>
                    <div>
                      <p className="text-base sm:text-lg mb-1 font-bold text-white">
                        Modern Stack
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400">
                        React, Next.js, Node, MongoDB
                      </p>
                    </div>
                  </div>
                </div>
              </GlowCard>

              {/* Stat 3: Quality Code */}
              <GlowCard identifier="about-quality">
                <div className="p-5 relative h-full">
                  <img
                    src="/blur-23.svg"
                    alt="Hero"
                    width={1080}
                    height={200}
                    className="absolute bottom-0 left-0 opacity-80"
                  />
                  <div className="flex items-center gap-x-6 h-full">
                    <div className="text-amber-500 transition-all duration-300 hover:scale-125 flex-shrink-0">
                      <FaGraduationCap size={32} />
                    </div>
                    <div>
                      <p className="text-base sm:text-lg mb-1 font-bold text-white">
                        Quality Code
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400">
                        Clean Architectures & Patterns
                      </p>
                    </div>
                  </div>
                </div>
              </GlowCard>

              {/* Stat 4: Lahore, Pakistan */}
              <GlowCard identifier="about-location">
                <div className="p-5 relative h-full">
                  <img
                    src="/blur-23.svg"
                    alt="Hero"
                    width={1080}
                    height={200}
                    className="absolute bottom-0 left-0 opacity-80"
                  />
                  <div className="flex items-center gap-x-6 h-full">
                    <div className="text-violet-500 transition-all duration-300 hover:scale-125 flex-shrink-0">
                      <FaMapMarkerAlt size={32} />
                    </div>
                    <div>
                      <p className="text-base sm:text-lg mb-1 font-bold text-white">
                        {personalData.address}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400">
                        Available for Global Remote roles
                      </p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;