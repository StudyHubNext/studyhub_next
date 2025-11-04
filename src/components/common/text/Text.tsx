import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils';
import { textVariants } from '@/components/common/text/textVariants';

interface TextProps extends ComponentPropsWithoutRef<'span'>, VariantProps<typeof textVariants> {
  children: ReactNode;
}

export default function Text({ variant, children, className, ...rest }: TextProps) {
  return (
    <span className={cn(textVariants({ variant }), className)} {...rest}>
      {children}
    </span>
  );
}
