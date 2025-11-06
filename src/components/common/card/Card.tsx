import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import Text from '@/components/common/text/Text';
import { cn } from '@/utils';

interface CardProps extends ComponentPropsWithoutRef<'div'> {
  title: string;
  children: ReactNode;
  titleVariant?: 'base' | 'large';
  titleClassName?: string;
  cardClassName?: string;
}

export default function Card({
  title,
  children,
  titleVariant = 'large',
  titleClassName,
  cardClassName,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'relative flex flex-col rounded-lg border border-gray-200 bg-white p-6',
        cardClassName,
      )}
      {...props}
    >
      <Text
        variant={titleVariant}
        className={cn('pb-2 leading-normal font-semibold', titleClassName)}
      >
        {title}
      </Text>
      {children}
    </div>
  );
}
