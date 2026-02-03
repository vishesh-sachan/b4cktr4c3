'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowRight, Terminal } from 'lucide-react';

export const Hero = () => {
    const scrollToDetails = () => {
        const el = document.getElementById('details');
        el?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToRegister = () => {
        window.open('https://forms.gle/E4aqDhmoT8DWFzBx9', '_blank');
    };

    return (
        <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white">
            {/* Background Texture/Grid */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />
            {/* Noise overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="relative z-10 max-w-5xl px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mb-6">
                        <span className="font-mono text-xl md:text-2xl text-white tracking-widest">
                            {"{"}b4cktr4c3{"}"} PRESENTS
                        </span>
                    </div>

                    <h1 className="font-sans font-black text-6xl md:text-9xl tracking-tighter mb-4 text-white">
                        BUILD<span className="text-accent">:IT</span>
                    </h1>

                    <p className="font-mono text-lg md:text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
                        An elite engineering competition by <span className="text-white font-bold">{"{"}b4cktr4c3{"}"}</span>.
                        <br />
                        <span className="text-white/80">Build fast. Think deep. Execute harder.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                        <Button size="lg" onClick={scrollToRegister} rightIcon={<ArrowRight size={18} />}>
                            Initialize Registration
                        </Button>
                        <Button variant="secondary" size="lg" onClick={scrollToDetails} leftIcon={<Terminal size={18} />}>
                            View Manifest
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Caution Tape Strips */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden text-lg">
                <div className="absolute bottom-32 -left-20 -right-20 h-10 bg-yellow-400 rotate-2 flex items-center justify-center opacity-100 z-20 border-y border-white">
                    <motion.div
                        className="whitespace-nowrap font-mono font-black text-black uppercase tracking-widest flex gap-8"
                        animate={{ x: [0, -1000] }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    >
                        {Array(20).fill("CAUTION // BUILD IN PROGRESS // EXECUTION ONLY // ").map((text, i) => (
                            <span key={i}>{text}</span>
                        ))}
                    </motion.div>
                </div>
                <div className="absolute bottom-32 -left-20 -right-20 h-10 bg-black -rotate-2 flex items-center justify-center opacity-100 z-20 border-y border-white">
                    <motion.div
                        className="whitespace-nowrap text-xl flex gap-8"
                        animate={{ x: [-1000, 0] }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    >
                        {Array(20).fill(null).map((_, i) => (
                            <span key={i} className="font-gothic text-white tracking-normal">
                                {"{"}b<span className="text-red-600">4</span>cktr<span className="text-red-600">4</span>c<span className="text-red-600">3</span>{"}"}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Decorative floating elements */}
            <div className="absolute bottom-10 left-10 hidden md:block font-mono text-xs text-neutral-700">
                SYSTEM_READY
                <br />
                V.1.0.0
            </div>
            <div className="absolute bottom-10 right-10 hidden md:block font-mono text-xs text-neutral-700 text-right">
                COORD: NULL
                <br />
                STATUS: ONLINE
            </div>
        </div>
    );
};
