import { cva } from 'class-variance-authority';

export const logoVariants = cva(
  [
    'bg-primary-500',
    'rounded-lg',
    'flex',
    'items-center',
    'justify-center',
    'text-white',
    'font-bold',
  ],
  {
    variants: {
      size: {
        sm: ['w-7', 'h-7', 'text-sm'],
        md: ['w-8', 'h-8', 'text-sm'],
        lg: ['w-10', 'h-10', 'text-base'],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);
