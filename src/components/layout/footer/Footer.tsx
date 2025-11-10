import { H, Text } from '@/components/common';
import Link from 'next/link';

export const FOOTER_NAV_LISTS = [
  {
    title: '서비스',
    list: [
      { name: '강의 목록', path: '/courses' },
      { name: '스터디 그룹', path: '/study-group' },
      { name: '구인 공고', path: '/recruitment' },
    ],
  },
  {
    title: '지원',
    list: [
      { name: '고객센터', path: '/' },
      { name: 'FAQ', path: '/' },
      { name: '개인정보처리방침', path: '/' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className='flex justify-center bg-gray-900 px-4 py-8 md:px-20 md:py-12'>
      <div className='w-full max-w-7xl'>
        <div className='grid gap-8 md:grid-cols-4'>
          <div className='col-span-2'>
            <Link href='/'>
              <H level={3} className='text-primary-400 mb-4'>
                StudyHub
              </H>
            </Link>
            <Text className='text-gray-300'>
              IT 전문가로 성장하는 여정에 함께합니다. 최고의 강의와 스터디 그룹으로 실무 역량을
              키워보세요.
            </Text>
          </div>
          {FOOTER_NAV_LISTS.map((navItem) => (
            <nav key={navItem.title}>
              <H level={4} className='mb-4 text-base font-semibold text-white'>
                {navItem.title}
              </H>
              <ul className='flex flex-col gap-2 text-gray-300'>
                {navItem.list.map((el) => (
                  <li key={el.name}>
                    <Link href={el.path}>{el.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className='mt-8 flex justify-center pt-8'>
          <Text className='text-gray-400'>© 2024 StudyHub. All rights reserved</Text>
        </div>
      </div>
    </footer>
  );
}
