import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { FloatingItemProps } from '../types';

const CollageItem: React.FC<FloatingItemProps> = ({ 
  children, 
  className = "", 
  speed = 1, 
  zIndex = 10,
  x = 0,
  y = 0,
  rotation = 0,
  delay = 0,
  containerRef,
  onClick
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  // Parallax Logic
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yMove = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);
  const smoothY = useSpring(yMove, { stiffness: 400, damping: 90 });

  return (
    <div
      ref={ref}
      className={className}
      style={{ 
        position: 'absolute',
        left: typeof x === 'number' ? `${x}%` : x,
        top: typeof y === 'number' ? `${y}%` : y,
        zIndex: isDragging ? 9999 : (isHovering ? 1000 : zIndex),
        pointerEvents: 'none',
        width: 'max-content',
        maxWidth: '100%'
      }}
    >
      <motion.div 
        style={{ y: smoothY }}
        className="w-full h-full"
      >
        <motion.div
            drag
            dragConstraints={containerRef}
            dragElastic={0.05} // Significantly reduced to prevent wild over-dragging
            dragMomentum={true}
            dragTransition={{ power: 0.1, timeConstant: 200 }} // Reduced momentum for "minimal" movement
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
            onTap={onClick} 
            whileHover={{ 
                scale: 1.02, 
                rotate: rotation + 2, 
            }}
            whileDrag={{ 
                scale: 1.05, 
                rotate: rotation,
                cursor: "grabbing"
            }}
            style={{ 
                rotate: rotation,
                pointerEvents: 'auto',
                cursor: "grab"
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
                duration: 1.2, 
                delay: delay, 
                ease: [0.22, 1, 0.36, 1] 
            }}
            data-hoverable="true"
        >
            {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CollageItem;