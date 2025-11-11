import { Button } from '@/components/common';

export default function AuthButtonGroup() {
  return (
    <div className='xs:flex hidden md:gap-2'>
      <Button variant='ghost' className='flex-grow text-base'>
        로그인
      </Button>
      <Button className='flex-grow text-base'>회원가입</Button>
    </div>
  );
}
