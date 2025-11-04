import React from 'react';

import { type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils';
import { badgeVariants } from './badgeVariants';

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  content: string;
  className?: string;
}

export default function Badge({ variant, size, className, content, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {content}
    </span>
  );
}
