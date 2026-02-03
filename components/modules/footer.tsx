import { Section } from '../ui/section';
import { Mail, Github, Twitter } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="w-full bg-black pt-20 pb-10 overflow-hidden relative">
            <Section className="py-0">
                <div className="flex flex-col items-center">
                    {/* Massive Brand Signature */}
                    <h1 className="font-gothic text-[15vw] leading-none text-neutral-900 select-none pointer-events-none whitespace-nowrap opacity-50">
                        b4cktr4c3
                    </h1>

                    <div className="w-full max-w-7xl border-t border-white/10 mt-[-2vw] pt-12 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                        <div className="font-mono text-xs text-neutral-500">
                            Organized by the b4cktr4c3 community
                        </div>

                        {/* <div className="flex items-center gap-6"> */}
                            {/* Social placehlders */}
                            {/* <a href="#" className="text-neutral-500 hover:text-white transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-neutral-500 hover:text-white transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="mailto:contact@b4cktr4c3.com" className="text-neutral-500 hover:text-white transition-colors">
                                <Mail size={20} />
                            </a> */}
                        {/* </div> */}

                        <div className="font-mono text-xs text-neutral-600">
                            © {new Date().getFullYear()} Build.exe
                        </div>
                    </div>
                </div>
            </Section>
        </footer>
    );
};
