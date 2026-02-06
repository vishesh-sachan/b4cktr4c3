import { Section } from '../ui/section';
import { Card } from '../ui/card';
import { Calendar, Clock, MapPin, Users, Cpu, Code2, Layers } from 'lucide-react';

const Details = [
    {
        icon: <Calendar className="text-accent h-6 w-6" />,
        label: "Date",
        value: "18 Feb 2026"
    },
    {
        icon: <MapPin className="text-accent h-6 w-6" />,
        label: "Mode",
        value: "Offline (On Campus)"
    },
    {
        icon: <Users className="text-accent h-6 w-6" />,
        label: "Team Size",
        value: "Max 3 Members"
    },
    {
        icon: <Layers className="text-accent h-6 w-6" />,
        label: "Tracks",
        value: "Software & Hardware"
    },
    {
        icon: <Cpu className="text-accent h-6 w-6" />,
        label: "Eligibility",
        value: "Open to all Builders"
    },
    {
        icon: <Code2 className="text-accent h-6 w-6" />,
        label: "Tech Stack",
        value: "No Restrictions"
    },
];

export const EventDetails = () => {
    return (
        <Section id="details" className="bg-black">
            <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
                    Mission <span className="text-accent">Details</span>
                </h2>
                <p className="font-mono text-neutral-500">
                    OPERATIONAL PARAMETERS
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {Details.map((item, idx) => (
                    <Card key={idx} className="flex flex-col items-center gap-4 py-8 text-center transition-colors hover:bg-neutral-900/50">
                        <div className="bg-accent/10 mb-2 rounded-full p-3">
                            {item.icon}
                        </div>
                        <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                            {item.label}
                        </h3>
                        <p className="text-xl font-bold text-white md:text-2xl">
                            {item.value}
                        </p>
                    </Card>
                ))}
            </div>
        </Section>
    );
};
