import { Section } from '../ui/section';

const timelineEvents = [
    {
        phase: "Phase 01",
        title: "Registration",
        desc: "Open till 10 Feb 2026. Secure your slot."
    },
    {
        phase: "Phase 02",
        title: "Build Phase",
        desc: "Intense engineering and execution till 15 Feb."
    },
    {
        phase: "Phase 03",
        title: "Deployment & Pitch",
        desc: "16 Feb 2026. Submit operational prototypes for evaluation."
    },
];

export const Timeline = () => {
    return (
        <Section className="bg-neutral-950">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                    Execution <span className="text-accent">Flow</span>
                </h2>
            </div>

            <div className="max-w-3xl mx-auto relative">
                {/* Center Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-neutral-800 md:-ml-px md:pl-0"></div>

                <div className="space-y-12">
                    {timelineEvents.map((t, i) => (
                        <div key={i} className={`flex flex-col md:flex-row items-start relative ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            {/* Dot */}
                            <div className="absolute left-[3px] md:left-1/2 w-4 h-4 bg-black border-2 border-accent rounded-full mt-1.5 md:-ml-2 z-10"></div>

                            {/* Content Space */}
                            <div className="md:w-1/2 pl-8 md:pl-0 md:pr-12 md:text-right"></div>

                            {/* Text Block */}
                            <div className={`md:w-1/2 pl-8 md:pl-0 ${i % 2 === 0 ? 'md:pl-12 md:text-left' : 'md:pr-12 md:text-right'}`}>
                                <span className="text-accent font-mono text-xs tracking-wider mb-1 block">
                                    {t.phase}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-2">{t.title}</h3>
                                <p className="text-neutral-500 text-sm leading-relaxed">{t.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
