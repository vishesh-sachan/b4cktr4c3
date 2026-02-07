'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowRight, Terminal } from 'lucide-react';
import Image from 'next/image';

export const Hero = () => {
    const scrollToDetails = () => {
        const el = document.getElementById('details');
        el?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToRegister = () => {
        window.open('https://forms.gle/E4aqDhmoT8DWFzBx9', '_blank');
    };

    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black text-white">
            {/* Background Texture/Grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />
            {/* Noise overlay */}
            <div className="bg-[url( pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay'https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="relative z-10 max-w-5xl px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Logo */}
                    <div className="flex justify-center -mb-12">
                        <Image 
                            src="/HUlogo.svg" 
                            alt="Logo" 
                            width={240} 
                            height={240}
                            className="h-48 w-48 md:h-60 md:w-60"
                            style={{ minWidth: '192px', minHeight: '192px' }}
                            priority
                        />
                    </div>

                    <div className="mb-6">
                        <span className="font-mono text-xl tracking-widest text-white md:text-2xl">
                            {"{"}b4cktr4c3{"}"} PRESENTS
                        </span>
                    </div>

                    <h1 className="mb-4 font-sans text-6xl font-black tracking-tighter text-white md:text-9xl">
                        BUILD<span className="text-accent">:IT</span>
                    </h1>

                    <p className="mx-auto mb-8 max-w-2xl font-mono text-lg text-neutral-400 md:text-xl">
                        An elite engineering competition by <span className="font-bold text-white">{"{"}b4cktr4c3{"}"}</span>.
                        <br />
                        <span className="text-white/80">Build fast. Think deep. Execute harder.</span>
                    </p>

                    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
            <div className="pointer-events-none absolute inset-0 overflow-hidden text-lg">
                <div className="absolute -left-20 -right-20 bottom-32 z-20 flex h-10 rotate-2 items-center justify-center border-y border-white bg-yellow-400 opacity-100">
                    <motion.div
                        className="flex gap-8 whitespace-nowrap font-mono font-black uppercase tracking-widest text-black"
                        animate={{ x: [0, -1000] }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    >
                        {Array(20).fill("CAUTION // BUILD IN PROGRESS // EXECUTION ONLY // ").map((text, i) => (
                            <span key={i}>{text}</span>
                        ))}
                    </motion.div>
                </div>
                <div className="absolute -left-20 -right-20 bottom-32 z-20 flex h-10 -rotate-2 items-center justify-center border-y border-white bg-black opacity-100">
                    <motion.div
                        className="flex gap-8 whitespace-nowrap text-xl"
                        animate={{ x: [-1000, 0] }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    >
                        {Array(20).fill(null).map((_, i) => (
                            <span key={i} className="font-gothic tracking-normal text-white">
                                {"{"}b<span className="text-red-600">4</span>cktr<span className="text-red-600">4</span>c<span className="text-red-600">3</span>{"}"}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Decorative floating elements */}
            <div className="absolute bottom-10 left-10 hidden font-mono text-xs text-neutral-700 md:block">
                SYSTEM_READY
                <br />
                V.1.0.0
            </div>
            <div className="absolute bottom-10 right-10 hidden text-right font-mono text-xs text-neutral-700 md:block">
                COORD: NULL
                <br />
                STATUS: ONLINE
            </div>
        </div>
    );
};
