import { cva } from 'class-variance-authority';

export const toastVariants = cva(
  [
    'flex',
    'items-start',
    'gap-3',
    'p-4',
    'rounded-lg',
    'border',
    'shadow-sm',
    'w-full',
    'max-w-md',
  ],
  {
    variants: {
      variant: {
        success: ['bg-success-100', 'border-success-600', 'text-success-800'],
        warning: ['bg-primary-100', 'border-primary-400', 'text-primary-800'],
        error: ['bg-red-100', 'border-danger-600', 'text-danger-800'],
      },
    },
    defaultVariants: {
      variant: 'success',
    },
  },
);

export const toastIconVariants = cva(['flex-shrink-0', 'w-5', 'h-5'], {
  variants: {
    variant: {
      success: ['text-success-600'],
      warning: ['text-primary-600'],
      error: ['text-danger-600'],
    },
  },
  defaultVariants: {
    variant: 'success',
  },
});

export const toastCloseButtonVariants = cva(
  [
    'flex-shrink-0',
    'w-5',
    'h-5',
    'cursor-pointer',
    'transition-opacity',
    'hover:opacity-70',
    'ml-auto',
  ],
  {
    variants: {
      variant: {
        success: ['text-success-600'],
        warning: ['text-primary-600'],
        error: ['text-danger-600'],
      },
    },
    defaultVariants: {
      variant: 'success',
    },
  },
);
