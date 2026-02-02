import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { Crosshair, Stamp } from './Doodles';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[20000] flex items-center justify-center p-4 md:p-8 bg-[#1A1A1A]/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#F2F0E9] shadow-2xl overflow-hidden flex flex-col md:flex-row cursor-auto"
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
        style={{
          backgroundImage: 'linear-gradient(#00000005 1px, transparent 1px), linear-gradient(90deg, #00000005 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      >
        {/* Paper Texture Overlay */}
        <div className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>

        {/* Left Col: Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-gray-200 border-r border-gray-300">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale contrast-125"
          />
          <div className="absolute top-4 left-4">
             <span className="bg-black text-white font-mono text-xs px-2 py-1 uppercase tracking-widest">Fig 1.1</span>
          </div>
          {/* Decorative scanner lines */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]" />
        </div>

        {/* Right Col: Details */}
        <div className="w-full md:w-1/2 p-8 md:p-10 relative flex flex-col">
          
          {/* Header */}
          <div className="mb-6 flex justify-between items-start">
             <div>
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.2em] block mb-1">Subject Matter</span>
                <h2 className="font-serif-display text-4xl md:text-5xl text-[#1A1A1A] leading-none">{project.title}</h2>
             </div>
             <Crosshair className="w-8 h-8 opacity-20" />
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8 border-t border-b border-gray-300 py-4">
             <div>
                <p className="font-mono text-[9px] uppercase text-gray-500">Classification</p>
                <p className="font-sans text-sm font-bold">{project.type}</p>
             </div>
             <div>
                <p className="font-mono text-[9px] uppercase text-gray-500">Date</p>
                <p className="font-sans text-sm font-bold">2023-2024</p>
             </div>
             <div>
                <p className="font-mono text-[9px] uppercase text-gray-500">Materiality</p>
                <p className="font-sans text-sm font-bold">Aluminum / PLA</p>
             </div>
             <div>
                <p className="font-mono text-[9px] uppercase text-gray-500">Status</p>
                <p className="font-sans text-sm font-bold text-green-700">Fabricated</p>
             </div>
          </div>

          {/* Description */}
          <div className="flex-grow">
             <h3 className="font-mono text-xs uppercase font-bold mb-2 flex items-center gap-2">
               <span className="w-2 h-2 bg-black rounded-full"></span>
               Field Notes
             </h3>
             <p className="font-serif-display text-lg leading-relaxed text-gray-800">
               {project.description} 
               <br/><br/>
               Further analysis indicates high structural integrity. The juxtaposition of organic curves with industrial rigidity creates a unique tactile experience. 
               This prototype served as the foundation for the subsequent "Series B" design language.
             </p>
          </div>

          {/* Footer Actions */}
          <div className="mt-8 pt-6 border-t border-dashed border-gray-400 flex justify-between items-center">
             <Stamp text="DECLASSIFIED" className="rotate-[-5deg]" />
             
             <button 
                onClick={onClose}
                className="group flex items-center gap-2 font-mono text-xs uppercase hover:text-red-600 transition-colors"
                data-hoverable="true"
             >
                <span>Close Case File</span>
                <span className="group-hover:translate-x-1 transition-transform">-></span>
             </button>
          </div>

          <div className="absolute bottom-4 right-4 font-mono text-[8px] text-gray-300 pointer-events-none">
             DOC_ID: {project.id}_SECURE
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;