import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../utils/scrollToSection';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'GitHub', href: '#github-activity' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollToSection = (href: string) => {
    scrollToSection(href);
    setIsMenuOpen(false);
  };

  const scrollToHome = () => {
    scrollToSection('#home');
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between py-4">
          <motion.button
            onClick={scrollToHome}
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text cursor-pointer ml-2 sm:ml-0"
          >
            Mujtaba
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleScrollToSection(item.href)}
                className={`group relative font-medium transition-all duration-300 ease-in-out ${
                  isScrolled
                    ? 'text-white hover:text-primary-400'
                    : 'text-white hover:text-primary-400'
                }`}
              >
                <span className="relative z-10 transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-lg group-hover:drop-shadow-primary-400/30 group-hover:shadow-lg group-hover:shadow-primary-400/20">
                  {item.name}
                </span>
                {/* Clean animated underline */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-purple-400 transition-all duration-300 group-hover:w-full group-hover:shadow-sm group-hover:shadow-primary-400/40"></span>
                {/* Subtle glow effect around text */}
                <span className="absolute inset-0 rounded-md bg-gradient-to-r from-primary-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 group-hover:animate-pulse-glow transition-opacity duration-300 blur-sm -z-10"></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900 rounded-lg shadow-lg mt-2"
          >
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleScrollToSection(item.href)}
                  className="group relative block w-full text-left py-3 px-4 text-gray-300 hover:text-primary-400 rounded-md transition-all duration-300 ease-in-out overflow-hidden hover:animate-pulse-glow"
                >
                  <span className="relative z-10 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-105 group-hover:drop-shadow-lg group-hover:drop-shadow-primary-400/30">
                    {item.name}
                  </span>
                  {/* Mobile hover background with gradient */}
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-900/20 via-purple-900/20 to-pink-900/20 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse-glow"></span>
                  {/* Mobile animated left border */}
                  <span className="absolute left-0 top-0 w-0 h-full bg-gradient-to-b from-primary-400 via-purple-400 to-pink-400 transition-all duration-500 group-hover:w-1 group-hover:shadow-lg group-hover:shadow-primary-400/50"></span>
                  {/* Mobile shimmer effect */}
                  <span className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-slide-in-left transition-all duration-500"></span>
                  {/* Mobile bottom border */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-purple-400 transition-all duration-300 group-hover:w-full group-hover:shadow-lg group-hover:shadow-primary-400/50"></span>
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;