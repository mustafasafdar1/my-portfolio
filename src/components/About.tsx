import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedBackground from './AnimatedBackground';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <AnimatedBackground>
      <section id="about" ref={ref} className="section-padding pt-20">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 lg:order-1"
            >
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-80 lg:h-80 mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 blur-xl"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30">
                  <img
                    src="/mustafa.jpg"
                    alt="Mustafa Safdar"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4 lg:space-y-6 order-2 lg:order-2"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 lg:mb-4 leading-tight">
                Studying in  University of Central Punjab with BS in Computer Science
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Equipped with certifications in Python. Passionate about leveraging technical expertise to build efficient applications. Dedicated to continuous learning and impactful collaboration in the field of software development.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Currently working as an Intern at Algorix, where I'm building Scalable web application Backend for Restful API.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 lg:mt-8">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-300 text-sm sm:text-base">Full Stack Developer</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-300 text-sm sm:text-base">Restful API</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-300 text-sm sm:text-base">Database Management</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </section>
    </AnimatedBackground>
  );
};

export default About;
