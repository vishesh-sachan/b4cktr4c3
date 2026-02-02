import { Section } from '../ui/section';

export const CommunityContext = () => {
    return (
        <Section noPadding className="py-20 bg-neutral-900/30 border-y border-white/5">
            <div className="max-w-4xl mx-auto text-center px-6">
                <p className="font-mono text-sm text-accent mb-4 uppercase tracking-widest">
                    Transmitting from HQ
                </p>
                <p className="text-xl md:text-3xl text-neutral-300 font-light leading-relaxed">
                    <span className="font-bold text-white">b4cktr4c3</span> is a builder-first tech community focused on <span className="text-white">execution</span>, <span className="text-white">security mindset</span>, and <span className="text-white">real engineering</span>.
                </p>
            </div>
        </Section>
    );
};
