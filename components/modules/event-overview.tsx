import { Section } from '../ui/section';
import { Card } from '../ui/card';
import { Quote } from 'lucide-react';

export const EventOverview = () => {
    return (
        <Section className="bg-neutral-950">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        The <span className="text-accent">Protocol</span>
                    </h2>
                    <p className="text-lg text-neutral-400 mb-6 leading-relaxed">
                        BUILD:IT is not your standard college event. It is a competition designed to test
                        <span className="text-white font-medium"> sheer execution capability</span>.
                    </p>
                    <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                        We don't care about your slide deck. We care about your code, your architecture, and your ability to ship a working product under pressure.
                    </p>

                    <div className="space-y-4 font-mono text-sm text-neutral-300">
                        <div className="flex items-center gap-3">
                            <span className="text-accent">01.</span>
                            <span>Elite Engineering Competition</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-accent">02.</span>
                            <span>Software & Hardware Tracks</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-accent">03.</span>
                            <span>Execution-focused judging</span>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <Card variant="filled" className="border-l-4 border-l-accent">
                        <Quote className="text-neutral-600 mb-4 h-8 w-8" />
                        <p className="font-mono text-xl md:text-2xl text-white italic">
                            "Talk is cheap. Show me the code."
                        </p>
                        <div className="mt-4 text-sm text-neutral-500 font-mono">— Linus Torvalds</div>
                    </Card>
                </div>
            </div>
        </Section>
    );
};
