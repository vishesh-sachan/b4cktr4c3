import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}

export const Button: FC<ButtonProps> = ({
    children,
    className,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    leftIcon,
    rightIcon,
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black cursor-pointer';

    const variants = {
        primary: 'bg-accent text-white hover:bg-red-700 border border-transparent focus:ring-red-500',
        secondary: 'bg-transparent text-white border border-white/20 hover:border-white hover:bg-white/5 focus:ring-white',
        ghost: 'bg-transparent text-white hover:bg-white/5 border-transparent focus:ring-white/20',
    };

    const sizes = {
        sm: 'text-xs px-3 py-1.5 gap-1.5',
        md: 'text-sm px-6 py-3 gap-2',
        lg: 'text-base px-8 py-4 gap-3',
    };

    const width = fullWidth ? 'w-full' : '';

    return (
        <button
            className={cn(
                baseStyles,
                variants[variant],
                sizes[size],
                width,
                'font-mono uppercase tracking-wider', // Apply tech/mono aesthetic
                className
            )}
            {...props}
        >
            {leftIcon && <span className="shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </button>
    );
};
