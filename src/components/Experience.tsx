import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Experience as ExperienceType } from '../types';
import AnimatedBackground from './AnimatedBackground';

const Experience: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences: ExperienceType[] = [
    {
      id: '1',
      company: 'Algorix',
      position: 'Intern',
      duration: 'August 2025 - Present',
      description: 'Currently working as an intern, gaining hands-on experience in software development and contributing to real-world projects.',
      technologies: ['Python', 'Restful API', 'MYSQL', 'GitHub']
    },
    {
      id: '2',
      company: 'Alkhidmat Foundation Pakistan',
      position: 'Associate (Volunteer)',
      duration: 'Sep 2024 - Sep 2024',
      description: 'Participated in Alkhidmat Mega Plantation drive 2024, contributing to environmental conservation efforts by planting trees for a better environment.',
      technologies: ['Community Service', 'Environmental Conservation', 'Teamwork']
    }
  ];

  return (
    <AnimatedBackground>
      <section id="experience" ref={ref} className="section-padding pt-20">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
              My <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
              My professional journey and the roles that have shaped my career.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line - Hidden on mobile for cleaner look */}
              <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-primary-500/50"></div>
              
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative flex items-start mb-6 sm:mb-8 lg:mb-12"
                >
                  {/* Timeline dot - Hidden on mobile */}
                  <div className="hidden sm:block absolute left-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-black"></div>
                  
                  <div className="sm:ml-16 bg-gray-900/50 backdrop-blur-sm p-3 sm:p-4 lg:p-6 rounded-xl shadow-lg w-full border border-gray-700/50">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3 lg:mb-4">
                      <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white">
                        {experience.position}
                      </h3>
                      <span className="text-primary-400 font-medium text-xs sm:text-sm lg:text-base">
                        {experience.duration}
                      </span>
                    </div>
                    
                    <h4 className="text-sm sm:text-base lg:text-lg font-medium text-gray-300 mb-2 sm:mb-3">
                      {experience.company}
                    </h4>
                    
                    <p className="text-gray-300 mb-2 sm:mb-3 lg:mb-4 leading-relaxed text-xs sm:text-sm lg:text-base">
                      {experience.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 lg:gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-1.5 sm:px-2 lg:px-3 py-0.5 sm:py-1 bg-primary-900/30 text-primary-300 text-xs sm:text-sm rounded-full border border-primary-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
};

export default Experience;
