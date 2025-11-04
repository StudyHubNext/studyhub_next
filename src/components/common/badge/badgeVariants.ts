import { cva } from 'class-variance-authority';

export const badgeVariants = cva(
  ['flex', 'justify-center', 'items-center', 'gap-2', 'rounded-full'],
  {
    variants: {
      variant: {
        default: ['text-gray-800', 'bg-gray-100'],
        primary: ['text-primary-800', 'bg-primary-100'],
        success: ['text-success-800', 'bg-success-100'],
        danger: ['text-danger-800', 'bg-[#FEE2E2]'],
      },
      size: {
        sm: ['py-0.5', 'px-2', 'text-xs'],
        md: ['py-1', 'px-2.5', 'text-sm'],
        lg: ['py-1.5', 'px-3', 'text-base'],
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);
