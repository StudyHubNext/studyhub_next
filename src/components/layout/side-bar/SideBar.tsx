'use client';

import {
  ArrowLeftOnRectangleIcon,
  BookOpenIcon,
  MegaphoneIcon,
  UserGroupIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { Avatar, Button, Text } from '@/components/common';
import { SIDE_NAV_LISTS } from '@/constants';
import { cn } from '@/utils';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SideBarHeader } from '.';

interface HeaderSideMenuProps {
  isLoggedIn: boolean;
  isOpen: boolean;
  onClose: () => void;
}

const NAV_ICONS = [
  { name: '강의 목록', icon: <BookOpenIcon width={18} /> },
  { name: '스터디 그룹', icon: <UserGroupIcon width={18} /> },
  { name: '구인 공고', icon: <MegaphoneIcon width={18} /> },
  { name: '마이페이지', icon: <UserIcon width={18} /> },
];

export default function SideMenu({ isLoggedIn, isOpen, onClose }: HeaderSideMenuProps) {
  const pathname = usePathname();

  return (
    <div className='fixed inset-0 z-50'>
      <div
        className={cn(
          'absolute inset-0 bg-black/50',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={onClose}
      />

      <div className='fixed top-0 left-0 flex h-full w-80 flex-col justify-between bg-white shadow-lg'>
        <div>
          <SideBarHeader onClose={onClose}></SideBarHeader>

          <div className='flex flex-col gap-2 p-4'>
            <Text variant='small' className='px-3 py-2 font-semibold text-gray-500'>
              메뉴
            </Text>
            <nav>
              <ul className='flex flex-col gap-2'>
                {SIDE_NAV_LISTS.map((navItem) => (
                  <Link key={navItem.name} href={navItem.path}>
                    <Button
                      variant='ghost'
                      size='lg'
                      className={cn(
                        'hover:bg-primary-50 w-full gap-3 px-3',
                        pathname.startsWith(navItem.path) &&
                          'text-primary-600 bg-primary-50 font-medium',
                      )}
                    >
                      {NAV_ICONS.find((icon) => navItem.name === icon.name)?.icon}
                      {navItem.name}
                    </Button>
                  </Link>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {isLoggedIn ?? (
          <footer className='border-t border-gray-200 p-4'>
            <div className='flex flex-col gap-4'>
              <div className='flex items-center gap-3'>
                <Avatar profileImage='/profile-test.webp' name='김개발' size='md' />
                <div className='flex flex-col'>
                  <Text className='font-semibold'>김 개발</Text>
                  <Text variant='extraSmall' className='text-gray-600'>
                    kim.dev@example.com
                  </Text>
                </div>
              </div>
              <Button variant='secondary' size='lg' className='justify-center px-4 py-2'>
                <ArrowLeftOnRectangleIcon width={18} className='h-7' />
                로그아웃
              </Button>
            </div>
          </footer>
        )}
      </div>
    </div>
  );
}
