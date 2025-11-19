import { H, ImageCard, Text } from '@/components';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { LECTURES } from '@/mocks';

export default function LectureSection() {
  return (
    <section className='bg-gray-50 px-4 py-16 md:px-20'>
      <div className='mx-auto flex w-full max-w-7xl flex-col gap-8'>
        <div className='xs:flex-row xs:items-center flex flex-col items-start justify-between gap-4'>
          <div className='flex flex-col gap-2'>
            <H level={2}>인기 강의</H>
            <Text className='text-gray-600'>지금 가장 많은 사람들이 수강하는 강의들</Text>
          </div>
          <Text className='text-primary-600 flex cursor-pointer gap-1 hover:underline'>
            모든 강의 보기 <ArrowRightIcon width={16} />
          </Text>
        </div>
        <div className='xs:flex-row flex flex-col justify-between gap-6'>
          {LECTURES.slice(0, 3).map((lecture) => (
            <div key={lecture.id} className='w-full'>
              <ImageCard title={lecture.title} imageUrl={lecture.image} className='bg-white'>
                <div className='flex flex-col gap-3 p-5'>
                  <H level={3} className='text-lg'>
                    {lecture.title}
                  </H>
                  <Text variant='small' className='text-gray-600'>
                    {lecture.instructor}
                  </Text>
                  <div className='flex items-center gap-1'>
                    <Text variant='large' className='font-bold'>
                      {lecture.discountedPrice.toLocaleString('ko-KR')}
                    </Text>
                    <Text variant='small' className='text-gray-500 line-through'>
                      {lecture.price.toLocaleString('ko-KR')}
                    </Text>
                  </div>
                </div>
              </ImageCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
