import { Section } from '../ui/section';
import { Card } from '../ui/card';
import { Calendar, Clock, MapPin, Users, Cpu, Code2, Layers } from 'lucide-react';

const Details = [
    {
        icon: <Calendar className="w-6 h-6 text-accent" />,
        label: "Date",
        value: "16 Feb 2026"
    },
    {
        icon: <MapPin className="w-6 h-6 text-accent" />,
        label: "Mode",
        value: "Offline (On Campus)"
    },
    {
        icon: <Users className="w-6 h-6 text-accent" />,
        label: "Team Size",
        value: "Max 3 Members"
    },
    {
        icon: <Layers className="w-6 h-6 text-accent" />,
        label: "Tracks",
        value: "Software & Hardware"
    },
    {
        icon: <Cpu className="w-6 h-6 text-accent" />,
        label: "Eligibility",
        value: "Open to all Builders"
    },
    {
        icon: <Code2 className="w-6 h-6 text-accent" />,
        label: "Tech Stack",
        value: "No Restrictions"
    },
];

export const EventDetails = () => {
    return (
        <Section id="details" className="bg-black">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                    Mission <span className="text-accent">Details</span>
                </h2>
                <p className="font-mono text-neutral-500">
                    OPERATIONAL PARAMETERS
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Details.map((item, idx) => (
                    <Card key={idx} className="flex flex-col items-center text-center py-8 gap-4 hover:bg-neutral-900/50 transition-colors">
                        <div className="p-3 rounded-full bg-accent/10 mb-2">
                            {item.icon}
                        </div>
                        <h3 className="text-neutral-500 uppercase tracking-widest text-xs font-mono">
                            {item.label}
                        </h3>
                        <p className="text-xl md:text-2xl font-bold text-white">
                            {item.value}
                        </p>
                    </Card>
                ))}
            </div>
        </Section>
    );
};
