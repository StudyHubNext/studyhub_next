import { Button, H, Text } from '@/components';

export default function CallToActionSection() {
  return (
    <section className='bg-primary-500 px-4 py-16 md:px-20'>
      <div className='mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-8 text-center'>
        <div className='flex flex-col gap-4'>
          <H level={2} className='text-white'>
            지금 시작하여 IT 전문가가 되어보세요!
          </H>
          <Text variant='large' className='text-primary-100'>
            수백 개의 강의와 활발한 스터디 그룹이 여러분을 기다리고 있습니다.
          </Text>
        </div>
        <div className='flex gap-4'>
          <Button size='lg' className='text-primary-600 border-white bg-white hover:text-white'>
            무료로 시작하기
          </Button>
          <Button
            size='lg'
            variant='outline'
            className='hover:bg-primary-600 hover:border-primary-600 bg-transparent text-white hover:text-white'
          >
            스터디 그룹 만들기
          </Button>
        </div>
      </div>
    </section>
  );
}
