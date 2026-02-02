import React from 'react';

export interface Project {
  id: string;
  title: string;
  type: string; // e.g., "Object", "Study", "Experiment"
  description: string;
  imageUrl: string;
  x: number; // percentage 0-100 relative to container
  y: number; // percentage 0-100 relative to container
  rotation: number;
  scale?: number;
}

export interface FloatingItemProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // Parallax speed
  zIndex?: number;
  x?: number | string;
  y?: number | string;
  rotation?: number;
  delay?: number;
  containerRef?: React.RefObject<HTMLElement | null>;
  onClick?: () => void;
}