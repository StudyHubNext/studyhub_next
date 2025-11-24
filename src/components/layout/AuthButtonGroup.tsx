'use client';

import { Button } from '@/components/common';
import { usePageNav } from '@/hooks';

export default function AuthButtonGroup() {
  const { navigateToLogin, navigateToSignup } = usePageNav();

  return (
    <div className='flex gap-2'>
      <Button variant='ghost' className='flex-grow text-base'>
        로그인
      </Button>
      <Button className='flex-grow text-base' onClick={navigateToSignup}>
        회원가입
      </Button>
    </div>
  );
}
