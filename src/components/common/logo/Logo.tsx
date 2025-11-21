import { cn } from '@/utils';
import { type VariantProps } from 'class-variance-authority';

import Text from '@/components/common/text/Text';
import Link from 'next/link';
import { PATHS } from '@/constants';
import { logoVariants } from './logoVariants';

interface LogoProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof logoVariants> {}

export default function Logo({ size, className, ...props }: LogoProps) {
  return (
    <Link href={PATHS.HOME} className='flex items-center gap-2' aria-label='메인 페이지로 이동'>
      <div {...props} className={cn(logoVariants({ size }), className)}>
        S
      </div>
      {size !== 'sm' && <Text className='text-primary-600 text-xl font-bold'>StudyHub</Text>}
    </Link>
  );
}
