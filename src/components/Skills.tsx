import React, { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Skill } from '../types';
import AnimatedBackground from './AnimatedBackground';

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills: Skill[] = [
    { name: 'Python', level: 5, category: 'programming' },
    { name: 'Express', level: 4, category: 'frameworks' },
    { name: 'Restful API', level: 4, category: 'frameworks' },
    { name: 'MySql', level: 4, category: 'database' },
    { name: 'GitHub', level: 4, category: 'tools' },
    { name: 'Postman', level: 4, category: 'tools' },
    { name: 'VS Code', level: 5, category: 'tools' },
    { name: 'DBMS', level: 4, category: 'database' },
    { name: 'Problem Solving', level: 5, category: 'skills' },
    { name: 'Web Applications', level: 4, category: 'skills' },
  ];

  const categories = {
    programming: 'Programming',
    frameworks: 'Frameworks',
    database: 'Database',
    tools: 'Tools',
    skills: 'Core Skills'
  };

  const getCategorySkills = useMemo(() => (category: keyof typeof categories) => 
    skills.filter(skill => skill.category === category), [skills]);

  return (
    <AnimatedBackground>
      <section id="skills" ref={ref} className="section-padding pt-20">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {Object.entries(categories).map(([categoryKey, categoryName], categoryIndex) => (
              <motion.div
                key={categoryKey}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="bg-gray-900/50 backdrop-blur-sm p-3 sm:p-4 lg:p-6 rounded-xl shadow-lg border border-gray-700/50"
              >
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 lg:mb-6 text-center gradient-text">
                  {categoryName}
                </h3>
                <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                  {getCategorySkills(categoryKey as keyof typeof categories).map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-300 text-sm sm:text-base">
                          {skill.name}
                        </span>
                        <span className="text-xs sm:text-sm text-gray-400">
                          {skill.level}/5
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${(skill.level / 5) * 100}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.2) + (index * 0.1) + 0.5 }}
                          className="bg-gradient-to-r from-primary-500 to-purple-500 h-2 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
};

export default memo(Skills);
