import { FC, HTMLAttributes, ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface SectionProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
    container?: boolean; // If true, wraps content in max-w container
    noPadding?: boolean;
}

export const Section: FC<SectionProps> = ({
    children,
    className,
    container = true,
    noPadding = false,
    ...props
}) => {
    return (
        <section
            className={cn(
                'relative w-full overflow-hidden',
                !noPadding && 'py-16 md:py-24',
                className
            )}
            {...props}
        >
            {container ? (
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    {children}
                </div>
            ) : (
                children
            )}
        </section>
    );
};
