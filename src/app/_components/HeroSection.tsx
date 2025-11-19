import { Button, H, Text } from '@/components';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className='from-primary-50 bg-gradient-to-b to-white px-4 py-20 md:px-20'>
      <div className='mx-auto flex w-full max-w-7xl gap-12'>
        <div className='flex flex-1 flex-col gap-8'>
          <H level={1} className='text-5xl'>
            IT 전문 지식을 <p className='text-primary-600'>함께 배워나가세요</p>
          </H>
          <Text variant='large' className='text-gray-600'>
            최고의 강사진과 함께하는 IT 강의와 스터디 그룹으로 실무 역량을 키워보세요.
          </Text>
          <div className='flex gap-4'>
            <Button size='lg'>강의 둘러보기</Button>
            <Button
              size='lg'
              variant='outline'
              className='border-primary-600 text-primary-600 hover hover:border-primary-600 bg-transparent'
            >
              스터디 그룹 참여
            </Button>
          </div>
        </div>
        <div className='relative hidden flex-1 md:block'>
          <Image
            width={600}
            height={600}
            className='w-full object-contain'
            src='/landing.png'
            alt='landing'
          />
        </div>
      </div>
    </section>
  );
}
