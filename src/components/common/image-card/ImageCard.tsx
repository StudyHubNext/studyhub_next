import { cn } from '@/utils';
import { PhotoIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { type ComponentPropsWithoutRef, type ReactNode } from 'react';

interface ImageCardProps extends ComponentPropsWithoutRef<'div'> {
  title: string;
  imageUrl?: string;
  children?: ReactNode;
  overlayContent?: ReactNode;
}

export default function ImageCard({
  title,
  imageUrl,
  children,
  className,
  overlayContent,
  ...rest
}: ImageCardProps) {
  return (
    <div className='relative overflow-hidden rounded-lg border border-gray-200' {...rest}>
      <div>
        <div className='relative aspect-[2/1] overflow-hidden rounded-t-lg'>
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className='h-full w-full bg-gray-200 object-cover'
            />
          ) : (
            <div className='flex h-full items-center justify-center bg-gray-200'>
              <PhotoIcon className='h-8 w-8 text-gray-400' />
            </div>
          )}
          {overlayContent}
        </div>
      </div>
      <div className={cn('flex flex-col', className)}>{children}</div>
    </div>
  );
}
