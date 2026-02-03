import React from 'react';
import { motion } from 'framer-motion';
import { InfoItem } from '../types';
import { Crosshair, Stamp } from './Doodles';

interface InfoModalProps {
    info: InfoItem;
    onClose: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ info, onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[30000] flex items-center justify-center p-4 bg-charcoal/40 backdrop-blur-[2px]"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, y: 10 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-sm bg-paper shadow-xl border border-gray-300 p-6 flex flex-col cursor-auto"
                onClick={(e) => e.stopPropagation()}
                style={{
                    backgroundImage: 'linear-gradient(#00000005 1px, transparent 1px), linear-gradient(90deg, #00000005 1px, transparent 1px)',
                    backgroundSize: '15px 15px'
                }}
            >
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <span className="font-mono text-[8px] text-gray-400 uppercase tracking-widest block mb-1">Information / {info.category}</span>
                        <h2 className="font-serif-display text-2xl text-charcoal leading-none italic">{info.title}</h2>
                    </div>
                    <Crosshair className="w-5 h-5 text-accent-blue opacity-40 shrink-0" />
                </div>

                {/* Content Area */}
                <div className="flex-grow py-4 border-t border-b border-gray-200 mt-2">
                    {Array.isArray(info.content) ? (
                        <div className="grid grid-cols-2 gap-2">
                            {info.content.map((item, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-accent-blue rounded-full" />
                                    <span className="font-mono text-[11px] text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="font-hand text-lg text-charcoal leading-tight">
                            {info.content}
                        </p>
                    )}
                </div>

                {/* Footer */}
                <div className="mt-4 flex justify-between items-end">
                    <div className="flex flex-col">
                        <span className="font-mono text-[7px] text-gray-300 uppercase">System Log V1.0</span>
                        <Stamp text="VERIFIED" className="scale-50 origin-left opacity-30 mt-1" />
                    </div>

                    <button
                        onClick={onClose}
                        className="font-mono text-[9px] uppercase tracking-widest text-charcoal hover:text-accent-orange transition-colors"
                    >
                        [ Close ]
                    </button>
                </div>

                {/* Decorative corner element */}
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-gray-400" />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-gray-400" />
            </motion.div>
        </motion.div>
    );
};

export default InfoModal;
