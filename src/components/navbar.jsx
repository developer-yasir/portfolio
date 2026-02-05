import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import ThemeToggle from './helper/theme-toggle';
import MobileMenu from './helper/mobile-menu';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-[9999] bg-[var(--nav-bg)] backdrop-blur-md pointer-events-auto border-b border-white/5 transition-colors">
        <div className="relative flex items-center py-5">
          {/* Logo - Left Side */}
          <div className="flex flex-1 items-center justify-start">
            <Link
              to="/"
              className="text-[var(--accent-color)] text-2xl lg:text-3xl font-bold whitespace-nowrap">
              YASIR RAEES
            </Link>
          </div>

          {/* Menu Items - Hidden on mobile */}
          <div className="hidden md:flex flex-shrink-0 items-center justify-center">
            <ul className="flex items-center space-x-1 lg:space-x-4 text-sm font-medium" id="navbar-default">
              <li>
                <a className="block px-3 py-2 no-underline outline-none hover:no-underline transition-colors duration-300 text-[var(--text-primary)] hover:text-[var(--accent-color)]" href="/#about">
                  ABOUT
                </a>
              </li>
              <li>
                <a className="block px-3 py-2 no-underline outline-none hover:no-underline transition-colors duration-300 text-[var(--text-primary)] hover:text-[var(--accent-color)]" href="/#experience">
                  EXPERIENCE
                </a>
              </li>
              <li>
                <a className="block px-3 py-2 no-underline outline-none hover:no-underline transition-colors duration-300 text-[var(--text-primary)] hover:text-[var(--accent-color)]" href="/#skills">
                  SKILLS
                </a>
              </li>
              <li>
                <a className="block px-3 py-2 no-underline outline-none hover:no-underline transition-colors duration-300 text-[var(--text-primary)] hover:text-[var(--accent-color)]" href="/#projects">
                  PROJECTS
                </a>
              </li>
              <li>
                <Link className="block px-3 py-2 no-underline outline-none hover:no-underline transition-colors duration-300 text-[var(--text-primary)] hover:text-[var(--accent-color)]" to="/services">
                  SERVICES
                </Link>
              </li>
              <li>
                <a className="block px-3 py-2 no-underline outline-none hover:no-underline transition-colors duration-300 text-[var(--text-primary)] hover:text-[var(--accent-color)]" href="/#education">
                  EDUCATION
                </a>
              </li>
              <li>
                <Link className="block px-3 py-2 no-underline outline-none hover:no-underline transition-colors duration-300 text-[var(--text-primary)] hover:text-[var(--accent-color)]" to="/blog">
                  BLOG
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Side: Mobile Menu + Theme Toggle + Contact Button */}
          <div className="flex flex-1 items-center justify-end gap-3">
            {/* Mobile Menu Button - visible on small screens */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
              aria-label="Open menu"
            >
              <HiMenuAlt3 className="text-[var(--text-primary)] w-6 h-6" />
            </button>

            <ThemeToggle />

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
              className="hidden sm:block"
            >
              <a
                className="relative group overflow-hidden flex items-center gap-1 rounded-full bg-gradient-to-r from-green-400 to-emerald-600 px-4 py-2 lg:px-6 lg:py-2.5 text-xs lg:text-sm font-extrabold text-[var(--background-color)] transition-all duration-300 hover:scale-110 active:scale-95 shadow-xl"
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

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}

export default Navbar;