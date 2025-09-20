import React from 'react';

interface AnimatedBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Modern Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary-500/30 rotate-45 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-purple-500/40 rotate-12 animate-pulse" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full animate-bounce" style={{ animationDelay: '6s' }}></div>
      <div className="absolute top-1/3 left-1/3 w-12 h-12 border border-cyan-500/30 rotate-45 animate-pulse" style={{ animationDelay: '8s' }}></div>
      <div className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full animate-bounce" style={{ animationDelay: '10s' }}></div>

      {/* Animated Lines */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent animate-pulse"></div>
      <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-pulse lg:hidden" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent animate-pulse lg:hidden" style={{ animationDelay: '6s' }}></div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;
