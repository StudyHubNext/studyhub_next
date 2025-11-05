import { cn } from '@/utils';
import { type VariantProps } from 'class-variance-authority';

import Image from 'next/image';
import { avatarVariants } from './avatarVariants';

interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  name: string;
  profileImage?: string;
}

const SIZE_IN_PIXELS = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64,
};

export default function Avatar({ size, name, profileImage, className, ...props }: AvatarProps) {
  const imageSize = size ? SIZE_IN_PIXELS[size] : SIZE_IN_PIXELS.md;

  return (
    <div {...props} className={cn(avatarVariants({ size }), className)}>
      {profileImage ? (
        <Image
          width={imageSize}
          height={imageSize}
          className='h-full w-full object-cover'
          src={profileImage}
          alt={name}
        />
      ) : (
        name.charAt(0)
      )}
    </div>
  );
}
