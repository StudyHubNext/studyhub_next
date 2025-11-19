import { H, Text } from '@/components';
import { cn } from '@/utils';
import { AcademicCapIcon, UsersIcon, BookOpenIcon } from '@heroicons/react/24/outline';

const FEATURE_LIST = [
  {
    title: '다양한 강의',
    description: '프론트엔드부터 백엔드, 데이터사이언스까지 모든 분야의 전문 강의를 제공합니다.',
    iconColor: 'bg-primary-100 text-primary-600',
    icon: BookOpenIcon,
  },
  {
    title: '스터디 그룹',
    description: '같은 목표를 가진 사람들과 함께 학습하며 서로 동기부여하고 성장할 수 있습니다.',
    iconColor: 'bg-success-100 text-success-600',
    icon: UsersIcon,
  },
  {
    title: '전문 강사진',
    description: '실무 경험이 풍부한 전문가들이 직접 제작한 고품질의 강의 콘텐츠를 만나보세요.',
    iconColor: 'bg-purple-100 text-purple-600',
    icon: AcademicCapIcon,
  },
];

export default function FeatureSection() {
  return (
    <section className='px-4 py-20 md:px-20'>
      <div className='mx-auto w-full max-w-7xl flex-col'>
        <div className='mb-12 flex flex-col items-center gap-4'>
          <H level={2}>왜 StudyHub를 선택해야 할까요?</H>
          <Text variant='large' className='text-gray-600'>
            체계적인 학습과 실무 경험을 동시에 얻을 수 있는 최적의 플랫폼입니다.
          </Text>
        </div>
        <div>
          <ul className='xs:flex-row xs:gap-8 flex flex-col gap-12'>
            {FEATURE_LIST.map((feature) => (
              <li key={feature.title} className='xs:px-0 flex flex-col items-center gap-4 px-8'>
                <div
                  className={cn(
                    feature.iconColor,
                    'flex h-16 w-16 items-center justify-center rounded-full',
                  )}
                >
                  <feature.icon width={24} />
                </div>
                <H level={3} className='text-xl'>
                  {feature.title}
                </H>
                <Text className='text-center break-keep text-gray-600'>{feature.description}</Text>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
