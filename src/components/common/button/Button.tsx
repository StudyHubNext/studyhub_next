import React from 'react';

import { type VariantProps } from 'class-variance-authority';

import { buttonVariants } from '@/components/common/button/buttonVariants';
import { cn } from '@/utils/cn';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export default function Button({
  variant,
  size,
  className,
  type = 'button',
  children,
  ...props
}: ButtonProps) {
  return (
    <button type={type} className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {children}
    </button>
  );
}
