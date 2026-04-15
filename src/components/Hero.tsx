import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Python3DAnimation from './Python3DAnimation';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 grid-animation"></div>
      </div>

      {/* Floating Geometric Shapes - Hidden on mobile for cleaner look */}
      <div className="hidden sm:block absolute top-20 left-10 w-32 h-32 border border-primary-500/30 rotate-45 animate-pulse"></div>
      <div className="hidden sm:block absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      <div className="hidden sm:block absolute bottom-32 left-1/4 w-16 h-16 border-2 border-purple-500/40 rotate-12 animate-pulse" style={{ animationDelay: '4s' }}></div>
      <div className="hidden sm:block absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full animate-bounce" style={{ animationDelay: '6s' }}></div>

      {/* Animated Lines - Mobile Only */}
      <div className="sm:hidden absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent animate-pulse"></div>
      <div className="sm:hidden absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-pulse" style={{ animationDelay: '3s' }}></div>

      {/* 3D Python Animation */}
      <Python3DAnimation />

      <div className="container-max text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Mustafa Safdar</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-2xl sm:max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed"
          >
            A Passionate Full Stack Developer Creating Efficient Applications
            with Modern Technologies and Clean Code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center items-center"
          >
            <motion.button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-primary-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get In Touch
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </motion.button>
          </motion.div>

          {/* Floating Code Snippets Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-6 sm:mt-8 flex justify-center"
          >
            <div className="relative w-64 h-16 sm:w-80 sm:h-20 overflow-hidden blur-[0.5px] will-change-transform">
              {/* Floating Code Elements */}
              <motion.div
                className="absolute top-2 left-4 text-xs sm:text-sm font-mono text-green-400 z-10"
                animate={{ 
                  y: [0, -6, 0],
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: [0.4, 0, 0.6, 1],
                  delay: 0
                }}
              >
                &lt;code&gt;
              </motion.div>
              
              <motion.div
                className="absolute top-6 left-8 text-xs sm:text-sm font-mono text-blue-400 z-10"
                animate={{ 
                  y: [0, -5, 0],
                  opacity: [0.8, 1, 0.8],
                  scale: [1, 1.01, 1]
                }}
                transition={{ 
                  duration: 3.5, 
                  repeat: Infinity, 
                  ease: [0.4, 0, 0.6, 1],
                  delay: 0.8
                }}
              >
                def create_magic():
              </motion.div>
              
              <motion.div
                className="absolute top-10 left-12 text-xs sm:text-sm font-mono text-purple-400 z-10"
                animate={{ 
                  y: [0, -4, 0],
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.015, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: [0.4, 0, 0.6, 1],
                  delay: 1.6
                }}
              >
                return "Hello World"
              </motion.div>
              
              <motion.div
                className="absolute top-2 right-4 text-xs sm:text-sm font-mono text-yellow-400 z-10"
                animate={{ 
                  y: [0, -7, 0],
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 4.2, 
                  repeat: Infinity, 
                  ease: [0.4, 0, 0.6, 1],
                  delay: 2.4
                }}
              >
                &lt;/code&gt;
              </motion.div>
              
            </div>
          </motion.div>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-4 sm:mt-6 flex justify-center relative z-20"
          >
            <div className="flex items-center space-x-2 text-gray-400 text-xs sm:text-sm font-mono">
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                &gt;
              </motion.span>
              <motion.span
                animate={{ 
                  opacity: [0, 1, 0],
                  x: [0, 5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.3
                }}
              >
                Building amazing things
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ 
                  duration: 1, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.6
                }}
                className="text-primary-400"
              >
                with code
              </motion.span>
              <motion.div
                className="w-1 h-4 bg-primary-400"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ 
                  duration: 1, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
            </div>
          </motion.div>



        </motion.div>
      </div>

      <style>{`
        .grid-animation {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: grid-move 20s linear infinite;
          will-change: transform;
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        /* 3D Animation Enhancements */
        .python-3d-container {
          transform-style: preserve-3d;
          perspective: 1000px;
          will-change: transform;
        }

        .python-3d-container:hover {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
          50% { transform: translateY(-20px) rotateX(5deg) rotateY(5deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
