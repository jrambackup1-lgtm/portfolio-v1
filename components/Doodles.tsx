import React from 'react';
import { motion } from 'framer-motion';

export const SwirlVine: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path
      d="M20,180 C50,150 10,120 40,90 C80,50 150,150 180,20"
      stroke="#3D5A3D"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
    <motion.path
      d="M45,95 C60,100 50,110 40,105"
      stroke="#3D5A3D"
      strokeWidth="1.5"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    />
  </svg>
);

export const CircleScribble: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path
      d="M50,10 C20,15 10,40 15,60 C20,85 55,95 75,80 C95,65 90,30 65,20 C45,15 30,25 35,45"
      stroke="#8B4513"
      strokeWidth="1"
      strokeDasharray="4 2"
      initial={{ pathLength: 0, rotate: 0 }}
      whileInView={{ pathLength: 1, rotate: 360 }}
      transition={{ duration: 3, ease: "linear" }}
    />
  </svg>
);

export const StarSparkle: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 50 50" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
     <motion.path 
       d="M25 0L30 20L50 25L30 30L25 50L20 30L0 25L20 20L25 0Z" 
       fill="#1A1A1A"
       initial={{ scale: 0 }}
       whileInView={{ scale: 1, rotate: 180 }}
       transition={{ duration: 1.5, type: "spring" }}
     />
  </svg>
);

export const Underline: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 200 20" className={className} fill="none" preserveAspectRatio="none">
        <motion.path
            d="M5,15 Q50,5 100,10 T195,5"
            stroke="#0000EE"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.2 }}
        />
    </svg>
);

export const Crosshair: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1">
    <line x1="12" y1="0" x2="12" y2="24" />
    <line x1="0" y1="12" x2="24" y2="12" />
    <circle cx="12" cy="12" r="8" strokeDasharray="2 2" />
  </svg>
);

export const Stamp: React.FC<{ className?: string; text?: string }> = ({ className, text = "APPROVED" }) => (
    <div className={`border-4 border-double border-red-600/60 p-2 rounded-sm transform -rotate-12 inline-block ${className}`}>
        <span className="font-mono font-bold text-red-600/60 text-xs tracking-[0.2em] uppercase">{text}</span>
    </div>
);