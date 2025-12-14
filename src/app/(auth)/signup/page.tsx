'use client';

import SignupHeader from '@/app/(auth)/signup/_components/SignupHeader';
import SignupForm from '@/app/(auth)/signup/_components/SignupForm';

export default function SignupPage() {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='flex w-full max-w-md flex-col gap-9 px-6 py-20'>
        <SignupHeader />
        <SignupForm />
      </div>
    </div>
  );
}
