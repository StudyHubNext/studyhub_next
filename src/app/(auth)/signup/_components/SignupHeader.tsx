import { H, Text } from '@/components';
import Link from 'next/link';

export default function SignupHeader() {
  return (
    <div className='flex flex-col gap-3'>
      <H level={2} className='text-center'>
        회원가입
      </H>
      <Text variant='small' className='text-center text-gray-600'>
        이미 계정이 있으신가요?{' '}
        <Link href='/login' className='font-semibold text-yellow-500 hover:underline'>
          로그인하기
        </Link>
      </Text>
    </div>
  );
}
