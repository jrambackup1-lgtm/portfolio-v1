import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Cursor from './components/Cursor';
import CollageItem from './components/CollageItem';
import ProjectModal from './components/ProjectModal';
import { SwirlVine, CircleScribble, StarSparkle, Underline, Crosshair, Stamp } from './components/Doodles';
import { Project } from './types';

// Mock Data for "Objects" (Projects)
const projects: Project[] = [
  {
    id: '01',
    title: 'Sonic Chamber',
    type: 'Consumer Audio',
    description: 'CNC Aluminum Housing with custom acoustic dampening polymers.',
    imageUrl: 'https://picsum.photos/seed/mech1/400/500',
    x: 10,
    y: 10,
    rotation: -5
  },
  {
    id: '02',
    title: 'Medi-Shell V2',
    type: 'Medical Device',
    description: 'Ergonomic Injection Molded Enclosure for handheld diagnostics.',
    imageUrl: 'https://picsum.photos/seed/wood2/350/450',
    x: 65,
    y: 35,
    rotation: 8
  },
  {
    id: '03',
    title: 'Rapid Form',
    type: 'Study',
    description: 'Exploration of generative lattices in FDM printing.',
    imageUrl: 'https://picsum.photos/seed/void3/400/400',
    x: 15,
    y: 60,
    rotation: -2
  },
  {
    id: '04',
    title: 'Gearbox A-9',
    type: 'Mechanism',
    description: 'Planetary gear assembly for high-torque robotic limb.',
    imageUrl: 'https://picsum.photos/seed/chrome/300/300',
    x: 70,
    y: 85,
    rotation: 12
  }
];

const tapeColors = ["#D4C5A5", "#E8C4C4", "#C4E8D5", "#D0D8D8"];

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [layoutKey, setLayoutKey] = useState(0);

  const handleReset = () => {
    setLayoutKey(prev => prev + 1);
  };

  return (
    <div ref={containerRef} className="relative w-full min-h-[450vh] overflow-hidden bg-paper text-charcoal">
      <Cursor />

      {/* Modal Layer */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      {/* --- Fixed Navigation Corners --- */}
      <nav className="fixed inset-0 pointer-events-none z-50 p-8 md:p-12 mix-blend-multiply">
        {/* Top Left - Name */}
        <div className="absolute top-8 left-8 md:top-12 md:left-12 pointer-events-auto cursor-pointer">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.05, originX: 0 }}
            className="font-serif-display text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 hover:text-accent-orange"
          >
            Jayaram H
          </motion.h1>
          <p className="font-hand text-lg text-gray-500 mt-1 ml-4 -rotate-2">Portfolio 2026</p>
        </div>

        {/* Top Right - Menu */}
        <div className="absolute top-8 right-8 md:top-12 md:right-12 flex flex-col items-end gap-2 pointer-events-auto">


          {/* Reset Button */}
          <motion.button
            onClick={handleReset}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="group font-sans text-xs uppercase tracking-widest text-red-500 hover:text-red-700 transition-colors relative mt-4 cursor-pointer"
            data-hoverable="true"
          >
            [ Reset Layout ]
          </motion.button>
        </div>



        {/* Bottom Right - Contact */}
        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 pointer-events-auto">
          <motion.a
            href="mailto:hello@jayaram.design"
            className="font-serif-display text-lg md:text-xl italic hover:text-accent-brown"
            data-hoverable="true"
            whileHover={{ scale: 1.1 }}
          >
            Let&apos;s Chat -&gt;
          </motion.a>
        </div>
      </nav>

      {/* --- SECTION 1: HERO AREA (0 - 130vh) --- */}
      <section className="relative h-[130vh] w-full bg-gradient-to-b from-paper to-paper">

        {/* Main Hero Text */}
        <CollageItem key={`hero-text-${layoutKey}`} containerRef={containerRef} x="10%" y="20%" zIndex={20} speed={0.5}>
          <h2 className="font-serif-display text-5xl md:text-7xl leading-[0.9] mix-blend-darken">
            Product<br />
            <span className="ml-8 italic text-gray-500 text-4xl md:text-6xl">Design Engineer.</span>
          </h2>
        </CollageItem>

        {/* Bio Card */}
        <CollageItem key={`hero-card-${layoutKey}`} containerRef={containerRef} x="60%" y="30%" zIndex={15} rotation={5} speed={0.8}>
          <div className="relative bg-[#FDFBF7] p-5 shadow-[8px_16px_30px_-10px_rgba(0,0,0,0.15)] w-64 transition-transform hover:scale-[1.02] duration-500 overflow-hidden bg-[linear-gradient(#00000005_1px,transparent_1px),linear-gradient(90deg,#00000005_1px,transparent_1px)] bg-[size:16px_16px]">

            {/* 'Washi Tape' visual */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#D4C5A5]/80 opacity-80 rotate-1 shadow-sm backdrop-blur-[1px] z-10" />

            <div className="relative z-10 space-y-3 pt-2">
              <p className="font-hand text-xl leading-5 text-[#2A2A2A] transform -rotate-1">
                "I design things you can hold. Sometimes they work."
              </p>
              <div className="h-px w-6 bg-[#8B4513]/30" />
              <p className="font-sans text-[10px] font-bold tracking-widest text-[#1A1A1A] uppercase leading-relaxed opacity-90">
                Making stuff. <span className="text-gray-400">/</span> Breaking stuff. <span className="text-gray-400">/</span> Fixing stuff.
              </p>
            </div>

            <div className="relative z-10 mt-5 flex justify-between items-end">
              <div className="flex flex-col">
                <span className="font-mono text-[8px] text-gray-400 tracking-widest uppercase">Spec Sheet</span>
                <span className="font-mono text-[9px] text-accent-green bg-accent-green/10 px-1.5 py-0.5 rounded-sm w-fit mt-0.5">V1.2</span>
              </div>
              <span className="font-hand text-xl text-ink -rotate-3 transform translate-y-1">Jayaram H.</span>
            </div>

            {/* Small Stamp */}
            <div className="absolute bottom-3 right-3 opacity-60 mix-blend-multiply pointer-events-none transform rotate-[-8deg]">
              <div className="border border-dashed border-[#8B4513]/40 rounded-full w-9 h-9 flex items-center justify-center">
                <span className="font-mono text-[7px] text-[#8B4513]/60 font-bold uppercase text-center leading-tight">REF<br />A</span>
              </div>
            </div>
          </div>
        </CollageItem>

        {/* Quote / Tagline */}
        <CollageItem key={`hero-quote-${layoutKey}`} containerRef={containerRef} x="15%" y="60%" speed={0.6} rotation={-2} zIndex={10}>
          <div className="max-w-sm">
            <p className="font-serif-display text-xl md:text-2xl italic leading-tight text-charcoal">
              "There's a big difference between making a simple product & making a product simple."
            </p>
            <p className="font-mono text-[10px] mt-3 text-gray-500">— Des Traynor</p>
          </div>
        </CollageItem>

        {/* Floating Imagery */}
        <CollageItem key={`hero-img1-${layoutKey}`} containerRef={containerRef} x="55%" y="15%" speed={1.2} rotation={-15} zIndex={5}>
          <img src="https://picsum.photos/seed/gear/200/200" alt="Gear sketch" className="w-32 h-32 opacity-80 mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-500 rounded-full" />
        </CollageItem>

        <CollageItem key={`hero-img2-${layoutKey}`} containerRef={containerRef} x="80%" y="65%" speed={0.3} rotation={10} zIndex={1}>
          <img src="https://picsum.photos/seed/tech/300/400" alt="Tech Detail" className="w-48 h-64 object-cover opacity-60 mix-blend-multiply" style={{ clipPath: 'polygon(10% 0, 100% 0%, 90% 100%, 0% 100%)' }} />
        </CollageItem>

        {/* Decorative Elements */}
        <CollageItem key={`hero-star-${layoutKey}`} containerRef={containerRef} x="85%" y="25%" speed={0.1}>
          <StarSparkle className="w-10 h-10 opacity-60" />
        </CollageItem>

        <CollageItem key={`hero-scroll-${layoutKey}`} containerRef={containerRef} x="45%" y="85%" zIndex={30}>
          <div className="animate-bounce">
            <span className="font-hand text-xl text-gray-400">View Projects</span>
          </div>
        </CollageItem>
      </section>

      {/* --- NEW ELEMENTS (Increased Density) --- */}

      {/* New Quote: David Foster Wallace */}
      <CollageItem key={`dfw-quote-${layoutKey}`} containerRef={containerRef} x="35%" y="55%" speed={0.7} rotation={3} zIndex={12}>
        <div className="max-w-xs cursor-default">
          <p className="font-serif-display text-xl md:text-2xl italic leading-tight text-charcoal opacity-90">
            "This is water."
          </p>
          <p className="font-mono text-[10px] mt-3 text-gray-500">— David Foster Wallace</p>
        </div>
      </CollageItem>

      {/* Barcode Sticker */}
      <CollageItem key={`barcode-${layoutKey}`} containerRef={containerRef} x="80%" y="12%" speed={0.4} rotation={90} zIndex={4}>
        <div className="bg-white p-2 shadow-sm border border-gray-200 hover:scale-105 transition-transform duration-300">
          <div className="h-8 w-24 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/UPC-A-036000291452.svg/320px-UPC-A-036000291452.svg.png')] bg-cover opacity-80 mix-blend-multiply grayscale"></div>
          <p className="font-mono text-[8px] text-center mt-1 tracking-[0.2em]">092-2-XA</p>
        </div>
      </CollageItem>

      {/* Color Palette Card */}
      <CollageItem key={`palette-${layoutKey}`} containerRef={containerRef} x="4%" y="38%" speed={0.9} rotation={-5} zIndex={6}>
        <div className="bg-white p-1.5 shadow-md flex flex-col gap-1 w-8 hover:rotate-3 transition-transform">
          {['#2f2f2f', '#8B4513', '#D4C5A5', '#E8C4C4'].map(c => (
            <div key={c} className="w-full h-8" style={{ backgroundColor: c }} />
          ))}
        </div>
      </CollageItem>

      {/* Handwritten Note */}
      <CollageItem key={`note-${layoutKey}`} containerRef={containerRef} x="88%" y="92%" speed={1.1} rotation={-10} zIndex={25}>
        <div className="bg-[#FFFFF0] p-3 shadow-[2px_4px_8px_rgba(0,0,0,0.1)] -rotate-2 transform hover:scale-105 transition-transform duration-300 group">
          <p className="font-hand text-charcoal text-sm leading-tight text-blue-800/80">
            Draft v0.9<br />
            <span className="text-[10px] opacity-70">Check fit & finish.</span>
          </p>
          <div className="w-8 h-8 rounded-full border-2 border-red-500/30 absolute -top-2 -right-2" />
        </div>
      </CollageItem>


      {/* --- SECTION 2: OBJECTS / PROJECTS (130vh - 410vh) --- */}
      {/* Background Grid Pattern for Technical Feel */}
      <section id="work" className="relative w-full h-[280vh]">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-5"
          style={{
            backgroundImage: 'linear-gradient(#1A1A1A 0.5px, transparent 0.5px), linear-gradient(90deg, #1A1A1A 0.5px, transparent 0.5px)',
            backgroundSize: '40px 40px'
          }}
        />

        <CollageItem key={`work-header-${layoutKey}`} containerRef={containerRef} x="5%" y="5%" zIndex={5}>
          <h3 className="font-serif-display text-4xl md:text-5xl italic text-accent-green">Work Logs</h3>
          <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mt-1">Classified Prototypes</p>
          <Underline className="w-48 mt-2" />
        </CollageItem>

        {/* Render Projects scattered */}
        {projects.map((project, index) => {
          const tapeColor = tapeColors[index % tapeColors.length];
          return (
            <CollageItem
              key={`${project.id}-${layoutKey}`}
              x={`${project.x}%`}
              y={`${project.y}%`}
              rotation={project.rotation}
              speed={0.2 + (index * 0.1)}
              zIndex={10 + index}
              containerRef={containerRef}
            >
              {/* Complex Spec Sheet Card */}
              <div
                className="group relative bg-[#F2F0E9] w-72 p-4 pt-6 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.2)] hover:shadow-[0_25px_50px_-5px_rgba(0,0,0,0.3)] transition-all duration-500 cursor-grab active:cursor-grabbing"
                data-hoverable="true"
              >

                {/* Washi Tape */}
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 opacity-90 shadow-sm z-20 backdrop-blur-sm"
                  style={{ backgroundColor: tapeColor, transform: `translateX(-50%) rotate(${Math.random() * 4 - 2}deg)` }}
                />

                {/* Header Info */}
                <div className="flex justify-between items-end mb-3 border-b border-gray-300 pb-2">
                  <div className="flex flex-col">
                    <span className="font-mono text-[8px] uppercase text-gray-500">Project ID</span>
                    <span className="font-mono text-sm font-bold tracking-widest">{project.id}</span>
                  </div>
                  <span className="font-mono text-[8px] uppercase bg-black/5 px-1 py-0.5 rounded">{project.type}</span>
                </div>

                {/* Image Area */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-200 mb-4 group-hover:scale-[1.02] transition-transform duration-500 border border-transparent group-hover:border-black/10">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700"
                  />
                  {/* Grid overlay on image */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-20 mix-blend-multiply pointer-events-none" />

                  {/* Hover Overlay Text */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[1px]">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      onPointerDown={(e) => e.stopPropagation()}
                      className="bg-white/90 px-3 py-1 font-mono text-[10px] tracking-widest border border-black uppercase hover:bg-white hover:scale-105 transition-all cursor-pointer shadow-sm"
                    >
                      View Case Study
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h4 className="font-serif-display text-2xl font-medium leading-none text-charcoal group-hover:text-accent-blue transition-colors">{project.title}</h4>
                  <p className="font-sans text-[11px] mt-2 text-gray-600 leading-relaxed border-l-2 border-gray-300 pl-3 group-hover:border-accent-blue transition-colors">
                    {project.description}
                  </p>
                </div>

                {/* Footer / Decor */}
                <div className="mt-4 pt-2 border-t border-dashed border-gray-400/30 flex justify-between items-center">
                  <span className="font-hand text-gray-400 text-lg group-hover:text-[#1A1A1A] transition-colors">Fig. {index + 1}a</span>
                  {/* Stamp appears on hover */}
                  <Stamp className="opacity-0 group-hover:opacity-80 transition-opacity duration-300 scale-75 origin-right" text="REVIEWED" />
                </div>

                {/* Paper Texture Overlay */}
                <div className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
              </div>
            </CollageItem>
          );
        })}

        {/* Decorative Crosshairs & Elements scattered */}
        <CollageItem key={`decor-1-${layoutKey}`} containerRef={containerRef} x="30%" y="20%" zIndex={1} speed={0.1}>
          <Crosshair className="w-12 h-12 text-gray-400 opacity-50" />
        </CollageItem>
        <CollageItem key={`decor-2-${layoutKey}`} containerRef={containerRef} x="70%" y="50%" zIndex={1} speed={0.15}>
          <Crosshair className="w-16 h-16 text-gray-400 opacity-30 rotate-45" />
        </CollageItem>
        <CollageItem key={`decor-3-${layoutKey}`} containerRef={containerRef} x="10%" y="80%" zIndex={1} speed={0.1}>
          <Crosshair className="w-8 h-8 text-accent-blue opacity-20" />
        </CollageItem>

        <CollageItem key={`decor-4-${layoutKey}`} containerRef={containerRef} x="40%" y="30%" zIndex={1}>
          <SwirlVine className="w-56 h-56 opacity-30 rotate-45" />
        </CollageItem>

        <CollageItem key={`decor-5-${layoutKey}`} containerRef={containerRef} x="85%" y="60%" zIndex={1}>
          <CircleScribble className="w-24 h-24 opacity-50 text-accent-brown" />
        </CollageItem>

        {/* Random Floating Text */}
        <CollageItem key={`archive-text-${layoutKey}`} containerRef={containerRef} x="5%" y="90%" rotation={-90} zIndex={2}>
          <span className="text-8xl font-serif-display opacity-[0.03] pointer-events-none tracking-widest">ARCHIVE</span>
        </CollageItem>

      </section>

      {/* --- SECTION 3: FOOTER --- */}
      <section id="contact" className="relative h-[60vh] w-full flex flex-col items-center justify-center text-center">
        <SwirlVine className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 opacity-20" />

        <div className="relative z-20">
          <h2 className="font-serif-display text-3xl md:text-5xl mb-6">Let's build something<br /><span className="italic text-accent-brown">tangible</span>.</h2>
          <div className="flex justify-center gap-8">
            <a href="#" className="font-mono text-xs border-b border-black hover:text-accent-blue hover:border-accent-blue transition-colors" data-hoverable="true">Instagram</a>
            <a href="#" className="font-mono text-xs border-b border-black hover:text-accent-blue hover:border-accent-blue transition-colors" data-hoverable="true">Twitter / X</a>
            <a href="#" className="font-mono text-xs border-b border-black hover:text-accent-blue hover:border-accent-blue transition-colors" data-hoverable="true">LinkedIn</a>
          </div>
        </div>

        <div className="absolute bottom-4 text-[9px] font-sans text-gray-500 uppercase tracking-widest">
          © 2026 Jayaram Hariharan
        </div>
      </section>

    </div>
  );
};

export default App;