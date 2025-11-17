'use client';

import { useState } from 'react';
import Link from 'next/link';
import { H, Input, Text, Button } from '@/components/common';
import Image from 'next/image';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleKakaoLogin = () => {
    console.log('구글 로그인');
  };

  const handleNaverLogin = () => {
    console.log('네이버 로그인');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = '이메일을 입력해주세요.';
    }
    if (!password) {
      newErrors.password = '비밀번호를 입력해주세요.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('로그인:', { email, password });
    }
  };

  return (
    <div className='flex min-h-screen items-center justify-center bg-white px-4 py-12'>
      <div className='flex w-full max-w-md flex-col'>
        <H level={2} className='mb-3 text-center'>
          로그인
        </H>
        <Text variant={'small'} className='mb-8 text-center text-gray-600'>
          아직 계정이 없으신가요?{' '}
          <Link href='/signup' className='font-semibold text-yellow-500 hover:underline'>
            회원가입하기
          </Link>
        </Text>

        <div className='mb-6 space-y-3'>
          <button
            onClick={handleKakaoLogin}
            className='flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white py-3 font-semibold text-gray-900 transition-colors hover:bg-gray-100'
          >
            <Image src='/google.svg' alt='google' width={20} height={20} />
            Google 계정으로 로그인 / 가입
          </button>
          <button
            onClick={handleNaverLogin}
            className='flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 py-3 font-semibold text-white transition-colors hover:bg-green-600'
          >
            <span className='font-bold'>N</span>
            네이버 간편 로그인 / 가입
          </button>
        </div>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <Input
            type='email'
            placeholder='아이디 (example@gmail.com)'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            errorMessage={errors.email}
          />
          <Input
            type='password'
            placeholder='비밀번호 (8-15자의 영문 대소문자, 숫자, 특수문자 포함)'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!errors.password}
            errorMessage={errors.password}
          />

          <div className='flex justify-center gap-4 text-sm'>
            <Link href='/find-id' className='text-yellow-500 hover:underline'>
              아이디 찾기
            </Link>
            <span className='text-gray-300'>|</span>
            <Link href='/find-password' className='text-yellow-500 hover:underline'>
              비밀번호 찾기
            </Link>
          </div>

          <Button
            type='submit'
            variant='secondary'
            size='lg'
            className='flex w-full justify-center'
          >
            일반회원 로그인
          </Button>
        </form>
      </div>
    </div>
  );
}
