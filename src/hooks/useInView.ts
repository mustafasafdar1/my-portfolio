import { useInView as useInViewFramer } from 'framer-motion';
import { useRef } from 'react';

export const useInView = (options?: { once?: boolean; margin?: string }) => {
  const ref = useRef(null);
  const isInView = useInViewFramer(ref, { 
    once: options?.once ?? true, 
    margin: options?.margin ?? '-100px' 
  });
  
  return { ref, isInView };
};
