import { cva } from 'class-variance-authority';

export const headingVariants = cva('text-gray-900', {
  variants: {
    level: {
      1: 'text-4xl font-bold',
      2: 'text-3xl font-bold',
      3: 'text-2xl font-semibold',
      4: 'text-xl font-semibold',
      5: 'text-lg font-semibold',
    },
  },
  defaultVariants: {
    level: 1,
  },
});
