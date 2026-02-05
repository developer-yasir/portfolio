import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="sticky top-0 z-[9999] bg-[#0d1224]/50 backdrop-blur-md pointer-events-auto">
      <div className="relative flex items-center py-5">
        {/* Logo - Left Side (Expanded to push menu to center) */}
        <div className="flex flex-1 items-center justify-start">
          <Link
            to="/"
            className="text-[#16f2b3] text-2xl lg:text-3xl font-bold whitespace-nowrap">
            YASIR RAEES
          </Link>
        </div>

        {/* Menu Items - Absolute Center (Visible on Desktop) */}
        <div className="hidden md:flex flex-shrink-0 items-center justify-center">
          <ul className="flex items-center space-x-1 lg:space-x-4 text-sm font-medium" id="navbar-default">
            {/* ... link items ... */}
            <li>
              <a className="block px-3 py-2 no-underline outline-none hover:no-underline transition-colors duration-300 text-white hover:text-[#16f2b3]" href="/#about">
                ABOUT
              </a>
            </li>
            <li>
              <a className="block px-3 py-2 no-underline outline-none hover:no-underline transition-colors duration-300 text-white hover:text-[#16f2b3]" href="/#experience">
                EXPERIENCE
              </a>
            </li>
            <li>
              <a className="block px-3 py-2 no-underline outline-none hover:no-underline transition-colors duration-300 text-white hover:text-[#16f2b3]" href="/#skills">
                SKILLS
              </a>
            </li>
            <li>
              <a className="block px-3 py-2 no-underline outline-none hover:no-underline transition-colors duration-300 text-white hover:text-[#16f2b3]" href="/#projects">
                PROJECTS
              </a>
            </li>
            <li>
              <Link className="block px-3 py-2 no-underline outline-none hover:no-underline transition-colors duration-300 text-white hover:text-[#16f2b3]" to="/services">
                SERVICES
              </Link>
            </li>
            <li>
              <a className="block px-3 py-2 no-underline outline-none hover:no-underline transition-colors duration-300 text-white hover:text-[#16f2b3]" href="/#education">
                EDUCATION
              </a>
            </li>
            <li>
              <Link className="block px-3 py-2 no-underline outline-none hover:no-underline transition-colors duration-300 text-white hover:text-[#16f2b3]" to="/blog">
                BLOG
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Button - Right Side (Animated) */}
        <div className="flex flex-1 items-center justify-end">
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: ["0 0 0px rgba(16,185,129,0)", "0 0 20px rgba(16,185,129,0.3)", "0 0 0px rgba(16,185,129,0)"]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <a
              className="relative group overflow-hidden flex items-center gap-1 rounded-full bg-gradient-to-r from-green-400 to-emerald-600 px-4 py-2 lg:px-6 lg:py-2.5 text-xs lg:text-sm font-extrabold text-[#0d1224] transition-all duration-300 hover:scale-110 active:scale-95 shadow-xl"
              href="/#contact"
            >
              {/* Shimmer Effect */}
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-20"
              />

              <span className="relative z-10 uppercase tracking-widest">Hire Me</span>
            </a>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;