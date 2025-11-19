import { Button, H, ImageCard, Text } from '@/components';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { LECTURES } from '@/mocks';

export default function LectureSection() {
  return (
    <section className='bg-gray-50 px-4 py-16 md:px-20'>
      <div className='mx-auto flex w-full max-w-7xl flex-col gap-8'>
        <div className='itmes-center flex justify-between'>
          <div className='flex flex-col gap-2'>
            <H level={2}>인기 강의</H>
            <Text className='text-gray-600'>지금 가장 많은 사람들이 수강하는 강의들</Text>
          </div>
          <Button variant='ghost' className='text-primary-600'>
            모든 강의 보기 <ArrowRightIcon width={16} />
          </Button>
        </div>
        <div className='flex justify-between gap-6'>
          {LECTURES.slice(0, 4).map((lecture) => (
            <ImageCard
              key={lecture.id}
              title={lecture.title}
              imageUrl={lecture.image}
              className='w-100 bg-white'
            >
              <div className='flex flex-col gap-3 p-5'>
                <H level={3} className='text-lg'>
                  {lecture.title}
                </H>
                <Text variant='small' className='text-gray-600'>
                  {lecture.instructor}
                </Text>
                <div className='flex items-center gap-1'>
                  <Text variant='large' className='font-bold'>
                    {lecture.discounted_price}
                  </Text>
                  <Text variant='small' className='text-gray-500 line-through'>
                    {lecture.price}
                  </Text>
                </div>
              </div>
            </ImageCard>
          ))}
        </div>
      </div>
    </section>
  );
}
