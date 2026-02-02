import { FC, HTMLAttributes, ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    variant?: 'outline' | 'filled';
}

export const Card: FC<CardProps> = ({
    children,
    className,
    variant = 'outline',
    ...props
}) => {
    return (
        <div
            className={cn(
                'relative p-6 md:p-8 transition-colors duration-300',
                variant === 'outline' && 'border border-white/10 bg-black/50 hover:border-white/20',
                variant === 'filled' && 'bg-white/5 border border-transparent hover:bg-white/10',
                className
            )}
            {...props}
        >
            {/* Corner decorations for tech aesthetic */}
            <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/30" />
            <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-white/30" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-white/30" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/30" />

            {children}
        </div>
    );
};
