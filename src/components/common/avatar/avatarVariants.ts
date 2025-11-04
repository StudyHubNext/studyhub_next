import { cva } from 'class-variance-authority';

export const avatarVariants = cva(
  [
    'bg-primary-100',
    'rounded-full',
    'flex',
    'items-center',
    'justify-center',
    'text-primary-600',
    'overflow-hidden',
  ],
  {
    variants: {
      size: {
        xs: ['w-6', 'h-6', 'text-xs'],
        sm: ['w-8', 'h-8', 'text-sm'],
        md: ['w-10', 'h-10', 'text-sm'],
        lg: ['w-12', 'h-12', 'text-base'],
        xl: ['w-16', 'h-16', 'text-lg'],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);
