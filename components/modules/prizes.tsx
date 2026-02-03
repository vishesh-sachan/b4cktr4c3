import { Section } from '../ui/section';
import { Card } from '../ui/card';
import { Trophy, Award, Briefcase } from 'lucide-react';

export const Prizes = () => {
    return (
        <Section className="bg-black">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                    Bounties & <span className="text-accent">Perks</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card variant="outline" className="text-center group hover:border-accent/50">
                    <Trophy className="w-10 h-10 text-neutral-500 mx-auto mb-6 group-hover:text-amber-400 transition-colors" />
                    <h3 className="text-2xl font-bold text-white mb-2">Cash Pool</h3>
                    <p className="font-mono text-accent text-lg">Coming Soon</p>
                    <p className="text-neutral-500 text-sm mt-4">
                        Substantial rewards for top executors.
                    </p>
                </Card>

                <Card variant="outline" className="text-center group hover:border-accent/50">
                    <Award className="w-10 h-10 text-neutral-500 mx-auto mb-6 group-hover:text-blue-400 transition-colors" />
                    <h3 className="text-2xl font-bold text-white mb-2">Recognition</h3>
                    <p className="font-mono text-white/80 text-lg">Certificates</p>
                    <p className="text-neutral-500 text-sm mt-4">
                        Proof of work for every finalist.
                    </p>
                </Card>

                <Card variant="outline" className="text-center group hover:border-accent/50">
                    <Briefcase className="w-10 h-10 text-neutral-500 mx-auto mb-6 group-hover:text-green-400 transition-colors" />
                    <h3 className="text-2xl font-bold text-white mb-2">Opportunities</h3>
                    <p className="font-mono text-white/80 text-lg">Network Access</p>
                    <p className="text-neutral-500 text-sm mt-4">
                        Direct intros to b4cktr4c3 members.
                    </p>
                </Card>
            </div>
        </Section>
    );
};
