import { cn } from '@/utils';
import { type VariantProps } from 'class-variance-authority';

import Image from 'next/image';
import { avatarVariants } from './avatarVariants';

interface AvatarProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof avatarVariants> {
  name: string;
  profileImage?: string;
  className?: string;
}

export default function Avatar({ size, name, profileImage, className }: AvatarProps) {
  return (
    <div className={cn(avatarVariants({ size }), className)}>
      {profileImage ? (
        <Image
          width={100}
          height={100}
          className='h-full w-full object-cover'
          src={profileImage}
          alt={name}
        />
      ) : (
        <>{name.charAt(0)}</>
      )}
    </div>
  );
}
