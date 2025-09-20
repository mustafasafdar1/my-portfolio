import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/mustafasafdar1' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/mustafa-safdar-2350b9380/' },
    { name: 'Email', icon: Mail, href: 'mailto:mustafsafdar87@gmail.com' },
  ];
 
  return (
    <footer className="bg-black text-white">
      <div className="container-max">
        <div className="py-8 sm:py-12">
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 text-center md:text-left">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-xl sm:text-2xl font-bold gradient-text">Mustafa Safdar</h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                A passionate Python Developer creating efficient applications 
                with modern technologies and clean code.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-base sm:text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2 flex flex-col items-center md:items-start">
                {[
                  { name: 'About', id: 'about' },
                  { name: 'Skills', id: 'skills' },
                  { name: 'Projects', id: 'projects' },
                  { name: 'GitHub', id: 'github-activity' },
                  { name: 'Experience', id: 'experience' },
                  { name: 'Contact', id: 'contact' }
                ].map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => {
                        const element = document.querySelector(`#${link.id}`);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h4 className="text-base sm:text-lg font-semibold text-white">Connect</h4>
              <div className="flex space-x-4 justify-center md:justify-start">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                  >
                    <social.icon size={18} className="sm:w-5 sm:h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center"
          >
            <p className="text-gray-400 text-xs sm:text-sm">
              © {currentYear} Mustafa Safdar. All  rights reserved. Built with React & TypeScript.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

