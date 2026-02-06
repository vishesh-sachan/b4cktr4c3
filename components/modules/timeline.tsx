import { Section } from '../ui/section';

const timelineEvents = [
    {
        phase: "Phase 01",
        title: "Registration",
        desc: "Open till 12 Feb 2026. Secure your slot."
    },
    {
        phase: "Phase 02",
        title: "Build Phase",
        desc: "Intense engineering and execution till 17 Feb."
    },
    {
        phase: "Phase 03",
        title: "Deployment & Pitch",
        desc: "18 Feb 2026. Submit operational prototypes for evaluation."
    },
];

export const Timeline = () => {
    return (
        <Section className="bg-neutral-950">
            <div className="mb-16 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
                    Execution <span className="text-accent">Flow</span>
                </h2>
            </div>

            <div className="relative mx-auto max-w-3xl">
                {/* Center Line */}
                <div className="absolute bottom-0 left-0 top-0 w-px bg-neutral-800 md:left-1/2 md:-ml-px md:pl-0"></div>

                <div className="space-y-12">
                    {timelineEvents.map((t, i) => (
                        <div key={i} className={`relative flex flex-col items-start md:flex-row ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            {/* Dot */}
                            <div className="border-accent left-0.75 absolute z-10 mt-1.5 h-4 w-4 rounded-full border-2 bg-black md:left-1/2 md:-ml-2"></div>

                            {/* Content Space */}
                            <div className="pl-8 md:w-1/2 md:pl-0 md:pr-12 md:text-right"></div>

                            {/* Text Block */}
                            <div className={`pl-8 md:w-1/2 md:pl-0 ${i % 2 === 0 ? 'md:pl-12 md:text-left' : 'md:pr-12 md:text-right'}`}>
                                <span className="text-accent mb-1 block font-mono text-xs tracking-wider">
                                    {t.phase}
                                </span>
                                <h3 className="mb-2 text-xl font-bold text-white">{t.title}</h3>
                                <p className="text-sm leading-relaxed text-neutral-500">{t.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
