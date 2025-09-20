import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, GitCommit, MessageSquare, Star, GitPullRequest, GitBranch, Eye } from 'lucide-react';
import { useGitHubActivity } from '../hooks/useGitHubActivity';
import { GitHubEvent } from '../types';
import AnimatedBackground from './AnimatedBackground';

const GitHubActivity: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { events, loading, error } = useGitHubActivity();

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'PushEvent':
        return <GitCommit className="w-4 h-4 text-green-400" />;
      case 'IssueCommentEvent':
        return <MessageSquare className="w-4 h-4 text-blue-400" />;
      case 'IssuesEvent':
        return <MessageSquare className="w-4 h-4 text-yellow-400" />;
      case 'WatchEvent':
        return <Star className="w-4 h-4 text-yellow-400" />;
      case 'PullRequestEvent':
        return <GitPullRequest className="w-4 h-4 text-purple-400" />;
      case 'PullRequestReviewEvent':
        return <Eye className="w-4 h-4 text-indigo-400" />;
      case 'PullRequestReviewCommentEvent':
        return <MessageSquare className="w-4 h-4 text-cyan-400" />;
      case 'CreateEvent':
        return <GitBranch className="w-4 h-4 text-green-400" />;
      default:
        return <Github className="w-4 h-4 text-gray-400" />;
    }
  };

  const getEventDescription = (event: GitHubEvent): string => {
    const { type, payload, repo } = event;
    
    switch (type) {
      case 'IssueCommentEvent':
        return `Commented on issue #${payload.issue?.number} in ${repo.name}`;
      case 'PushEvent':
        return `Pushed to ${repo.name}`;
      case 'IssuesEvent':
        return `Created issue #${payload.issue?.number} in ${repo.name}`;
      case 'WatchEvent':
        return `Starred ${repo.name}`;
      case 'PullRequestEvent':
        return `Created pull request #${payload.pull_request?.number} in ${repo.name}`;
      case 'PullRequestReviewEvent':
        return `Reviewed pull request #${payload.pull_request?.number} in ${repo.name}`;
      case 'PullRequestReviewCommentEvent':
        return `Commented on pull request #${payload.pull_request?.number} in ${repo.name}`;
      case 'CreateEvent':
        return `Created ${payload.ref_type} ${payload.ref} in ${repo.name}`;
      default:
        return `${type} in ${repo.name}`;
    }
  };

  if (loading) {
    return (
      <AnimatedBackground>
        <section id="github-activity" ref={ref} className="section-padding pt-20">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                GitHub <span className="gradient-text">Activity</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
                My latest contributions and activity on GitHub.
              </p>
            </motion.div>
            
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          </div>
        </section>
      </AnimatedBackground>
      );
    }

  if (error) {
    return (
      <AnimatedBackground>
        <section id="github-activity" ref={ref} className="section-padding pt-20">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                GitHub <span className="gradient-text">Activity</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
                My latest contributions and activity on GitHub.
              </p>
            </motion.div>
            
            <div className="text-center py-12">
              <p className="text-red-400 mb-4">Unable to load GitHub activity</p>
              <p className="text-gray-400 text-sm">{error}</p>
            </div>
          </div>
        </section>
      </AnimatedBackground>
      );
    }

  return (
    <AnimatedBackground>
      <section id="github-activity" ref={ref} className="section-padding pt-20">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
              GitHub <span className="gradient-text">Activity</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
              My latest contributions and activity on GitHub.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-3 sm:space-y-4">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-700/50 hover:border-primary-500/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                      {getEventIcon(event.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-xs sm:text-sm md:text-base font-medium leading-tight sm:leading-normal">
                        {getEventDescription(event)}
                      </p>
                      <p className="text-gray-400 text-xs sm:text-sm mt-1">
                        {formatDate(event.created_at)}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <a
                        href={`https://github.com/${event.repo.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-400 hover:text-primary-300 transition-colors duration-200 p-1 rounded"
                      >
                        <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {events.length === 0 && (
              <div className="text-center py-8 sm:py-12">
                <Github className="w-12 h-12 sm:w-16 sm:h-16 text-gray-600 mx-auto mb-3 sm:mb-4" />
                <p className="text-gray-400 text-sm sm:text-base">No recent activity found</p>
              </div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center mt-8"
            >
              <motion.a
                href="https://github.com/mujtabaalmas"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Main Button Container */}
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-1 shadow-2xl group-hover:shadow-primary-500/25 transition-all duration-500 overflow-hidden">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-purple-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Glassmorphism Overlay */}
                  <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Animated Border Glow - Fixed positioning */}
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary-400/30 via-purple-400/30 to-cyan-400/30 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10"></div>
                  
                  {/* Button Content */}
                  <div className="relative flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold text-white">
                    {/* GitHub Icon with Animation */}
                    <motion.div
                      className="relative"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                      {/* Icon Glow Effect */}
                      <div className="absolute inset-0 bg-primary-400/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>
                    
                    {/* Button Text */}
                    <span className="relative z-10">View Full Profile</span>
                    
                    {/* Animated Arrow */}
                    <motion.div
                      className="relative"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className="w-1.5 h-1.5 bg-white rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>
                  </div>
                  
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                  />
                  
                  {/* Floating Particles */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    {[...Array(2)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/40 rounded-full"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${30 + i * 20}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Outer Glow Ring - Fixed positioning */}
                <motion.div
                  className="absolute -inset-2 rounded-2xl border-2 border-primary-400/20 opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
};

export default GitHubActivity;
