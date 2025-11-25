'use client';

import { Avatar, Button, Card, Text } from '@/components';
import { MYPAGE_NAV_LISTS } from '@/constants';
import {
  BookmarkIcon,
  BookOpenIcon,
  ClipboardDocumentCheckIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { JSX } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils';

const NAV_ICON_MAP: Record<string, JSX.Element> = {
  '내 정보': <UserCircleIcon width={18} />,
  '북마크한 강의': <BookmarkIcon width={18} />,
  '지원 내역': <ClipboardDocumentCheckIcon width={18} />,
  '내 스터디': <BookOpenIcon width={18} />,
};

export default function MypageNav() {
  const pathname = usePathname();

  return (
    <Card cardClassName='flex flex-col gap-8'>
      <div className='flex flex-col items-center gap-4'>
        <Avatar size='xl' profileImage='/profile-test.webp' name='김개발'></Avatar>
        <div className='flex flex-col items-center gap-2'>
          <Text variant='large' className='font-semibold'>
            김개발
          </Text>
          <Text variant='small'>abc111@gmail.com</Text>
          <Text variant='extraSmall' className='text-gray-500'>
            가입일: 2024년 1월
          </Text>
        </div>
      </div>

      <nav>
        <ul className='flex flex-col gap-2'>
          {MYPAGE_NAV_LISTS.map((navItem) => (
            <li key={navItem.name}>
              <Link href={navItem.path}>
                <Button
                  variant='ghost'
                  size='md'
                  className={cn(
                    'hover:bg-primary-50 w-full gap-3 px-3',
                    pathname.startsWith(navItem.path) &&
                      'text-primary-600 bg-primary-50 font-medium',
                  )}
                >
                  {NAV_ICON_MAP[navItem.name]}
                  {navItem.name}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Card>
  );
}
