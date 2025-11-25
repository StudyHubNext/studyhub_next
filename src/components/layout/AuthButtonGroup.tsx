'use client';

import { Button } from '@/components/common';
import { usePageNav } from '@/hooks';
import { useUserStore } from '@/store/userStore';

export default function AuthButtonGroup() {
  const { navigateToSignup } = usePageNav();
  const { login } = useUserStore();

  return (
    <div className='flex gap-2'>
      <Button variant='ghost' className='flex-grow text-base' onClick={login}>
        로그인
      </Button>
      <Button className='flex-grow text-base' onClick={navigateToSignup}>
        회원가입
      </Button>
    </div>
  );
}
