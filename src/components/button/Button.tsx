import type React from 'react';

import { type VariantProps } from 'class-variance-authority';

import { buttonVariants } from '@/components/button/buttonVariants';
import { cn } from '@/utils/cn';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export default function Button({ variant, size, className, children, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {children}
    </button>
  );
}
