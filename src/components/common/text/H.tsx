import type { ReactNode } from 'react';
import { headingVariants } from '@/components/common/text/textVariants';
import { cn } from '@/utils';

interface HProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  level: 1 | 2 | 3 | 4 | 5;
  className?: string;
}

export default function H({ children, className, level, ...rest }: HProps) {
  const Tag = `h${level}` as React.ElementType;

  return (
    <Tag className={cn(headingVariants({ level }), className)} {...rest}>
      {children}
    </Tag>
  );
}
