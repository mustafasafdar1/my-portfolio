import React, { useEffect, useRef, memo, useMemo } from 'react';
import { motion } from 'framer-motion';

const Python3DAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Add mouse move effect for 3D rotation
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (x - centerX) / 10;
      
      container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const codeSnippets = useMemo(() => [
    { text: 'def hello_world():', color: 'text-blue-400' },
    { text: 'import numpy', color: 'text-green-400' },
    { text: 'class Developer:', color: 'text-yellow-400' },
    { text: 'async def main():', color: 'text-purple-400' },
    { text: 'from fastapi import', color: 'text-cyan-400' },
    { text: 'if __name__ == "__main__":', color: 'text-red-400' },
  ], []);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* 3D Python Logo Container */}
      <div
        ref={containerRef}
        className="python-3d-container relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
        style={{ transformStyle: 'preserve-3d' }}
      >

        {/* Floating Code Snippets */}
        {codeSnippets.map((snippet, index) => (
          <motion.div
            key={index}
            className={`absolute text-xs sm:text-sm font-mono ${snippet.color} z-10 blur-[0.5px]`}
            initial={{ 
              x: 0, 
              y: 0, 
              scale: 0.9,
              opacity: 0.6 
            }}
            animate={{ 
              x: [0, Math.cos(index * 60 * Math.PI / 180) * 100],
              y: [0, Math.sin(index * 60 * Math.PI / 180) * 100 - 20],
              scale: [0.9, 1.02, 0.9],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: 4 + index * 0.5, 
              repeat: Infinity, 
              delay: index * 0.8,
              ease: [0.4, 0, 0.6, 1]
            }}
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {snippet.text}
          </motion.div>
        ))}

        {/* 3D Glow Effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-green-400/20 to-yellow-400/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
      </div>

      {/* Background Code Matrix Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400/10 font-mono text-xs"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: -20,
              opacity: 0
            }}
            animate={{ 
              y: window.innerHeight + 20,
              opacity: [0, 0.8, 0]
            }}
            transition={{ 
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: [0.4, 0, 0.6, 1]
            }}
          >
            {['import', 'def', 'class', 'async', 'from', 'if', 'for', 'while'][Math.floor(Math.random() * 8)]}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default memo(Python3DAnimation);
