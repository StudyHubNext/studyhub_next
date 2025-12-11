import { Button, H, Input, Text } from '@/components';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function LoginPage() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-white'>
      <div className='flex w-full max-w-md flex-col gap-8'>
        <div className='flex flex-col gap-3'>
          <H level={2} className='text-center'>
            로그인
          </H>
          <Text variant='small' className='text-center text-gray-600'>
            아직 계정이 없으신가요?{' '}
            <Link href='/signup' className='font-semibold text-yellow-500 hover:underline'>
              회원가입하기
            </Link>
          </Text>
        </div>

        <div className='flex flex-col gap-3'>
          <Button
            variant='outline'
            className='flex w-full cursor-pointer items-center justify-center gap-2 py-4'
          >
            <Image src='/google.svg' alt='google' width={18} height={18} />
            Google 계정으로 로그인 / 가입
          </Button>
          <Button className='flex w-full cursor-pointer items-center justify-center bg-green-400 py-4 hover:bg-green-500 active:bg-green-700'>
            <span className='font-bold'>N</span>
            네이버 간편 로그인 / 가입
          </Button>
        </div>

        <form className='flex flex-col gap-3'>
          <label htmlFor='email' className='sr-only'>
            아이디 (이메일)
          </label>
          <Input
            id='email'
            type='email'
            placeholder='아이디 (example@gmail.com)'
            className='h-13'
          />
          <label htmlFor='password' className='sr-only'>
            비밀번호
          </label>
          <Input
            id='password'
            type='password'
            placeholder='비밀번호 (8-15자의 영문 대소문자, 숫자, 특수문자 포함)'
            className='h-13'
          />

          <Button
            type='submit'
            variant='secondary'
            size='lg'
            className='flex w-full justify-center py-4'
          >
            일반회원 로그인
          </Button>
        </form>
      </div>
    </div>
  );
}
