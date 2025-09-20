import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github } from 'lucide-react';
import { Project } from '../types';
import AnimatedBackground from './AnimatedBackground';

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects: Project[] = [
    {
      id: '1',
      title: 'AI Healthcare System - Full Stack',
      description: 'AI-powered adventure game with FastAPI backend and React frontend. Features custom themes and story generation.',
      image: '/healthcare.png',
      technologies: ['Express', 'RestfulAPI', 'React', 'Vite', 'SQLite', 'AI Integration'],
      liveUrl: 'https://github.com/mustafasafdar1/AI-healthcare-System',
      githubUrl: 'https://github.com/mustafasafdar1/AI-healthcare-System'
    },
    {
      id: '2',
      title: 'Social Media App Backend',
      description: 'FastAPI backend with PostgreSQL, JWT authentication, and full CRUD operations for posts and user management.',
      image: '/pythonfastapi.jpg',
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Alembic', 'Authentication'],
      liveUrl: 'https://github.com/mustafasafdar1/Python-backend-fastapi',
      githubUrl: 'https://github.com/mustafasafdar1/Python-backend-fastapi'
    },
    // {
    //   id: '3',
    //   title: 'E-commerce App Backend',
    //   description: 'Django REST API with user/vendor authentication, product management, cart operations, and checkout functionality.',
    //   image: '/PythonDjango.jpg',
    //   technologies: ['Python', 'Django', 'REST API', 'PostgreSQL', 'Postman'],
    //   liveUrl: 'https://github.com/mujtabaalmas/Python-Django-API',
    //   githubUrl: 'https://github.com/mujtabaalmas/Python-Django-API'
    // }
  ];

  return (
    <AnimatedBackground>
      <section id="projects" ref={ref} className="section-padding pt-20">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
              Here are some of my recent projects that showcase my skills and experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-700/50 hover:border-primary-500/50 group"
              >
                <div className="h-24 sm:h-28 md:h-32 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-3 sm:p-4 lg:p-4">
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 text-white">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-2 sm:mb-3 lg:mb-4 leading-relaxed text-xs sm:text-sm lg:text-base">
                    {project.description}
                  </p>
                  
                  {/* <div className="flex flex-wrap gap-1 sm:gap-1.5 lg:gap-2 mb-3 sm:mb-4 lg:mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-1.5 sm:px-2 lg:px-3 py-0.5 sm:py-1 bg-primary-900/30 text-primary-300 text-xs sm:text-sm rounded-full border border-primary-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div> */}
                  
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors duration-200 text-sm sm:text-base"
                    >
                      <Github size={14} className="sm:w-4 sm:h-4" />
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
};

export default memo(Projects);