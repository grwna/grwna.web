import * as React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

export const CursorSpotlight = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // High stiffness and low damping for near-instant tracking
  const springConfig = { damping: 100, stiffness: 10000 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[-1] opacity-0 md:opacity-100"
      style={{
        background: useTransform(
          [springX, springY],
          ([x, y]) => 
            `radial-gradient(150px circle at ${x}px ${y}px, rgba(var(--primary-rgb, 120, 120, 120), 0.2) 0%, rgba(var(--primary-rgb, 120, 120, 120), 0.05) 30%, transparent 60%)`
        ),
      }}
    />
  );
};