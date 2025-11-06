import { useMediaQuery } from 'react-responsive';

import { MEDIA_QUERY } from '@/constants';
import Link from 'next/link';
import { Avatar, Logo, Text } from '@/components/common';
import { cn } from '@/utils';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Bars3Icon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import AuthButtonGroup from '../AuthButtonGroup';

export const SERVICE_LISTS = [
  { name: '강의 목록', path: '/courses' },
  { name: '스터디 그룹', path: '/study-group' },
  { name: '구인 공고', path: '/recruitment' },
];

interface HeaderProps {
  isLoggedIn: boolean;
}

export default function Header({ isLoggedIn }: HeaderProps) {
  const isTablet = useMediaQuery({ query: MEDIA_QUERY.tablet });
  const isMobile = useMediaQuery({ query: MEDIA_QUERY.mobile });
  const { pathname } = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <header className='fixed z-50 h-16 w-full border-b border-gray-200 bg-white px-4 md:px-20'>
      <div className='m-auto flex h-full max-w-7xl items-center'>
        <div className='flex w-full justify-between'>
          {isMobile ? (
            <div className='flex gap-2.5'>
              <Bars3Icon width='24' className='cursor-pointer' />
              <Logo size='sm' />
            </div>
          ) : (
            <Logo />
          )}

          <div className='flex items-center gap-8'>
            <nav className={cn(isTablet ? 'hidden' : 'flex')}>
              <ul className={cn('flex gap-8', isTablet && 'flex-col')}>
                {SERVICE_LISTS.map((navItem) => (
                  <li key={navItem.path}>
                    <Link
                      href={navItem.path}
                      className={cn(
                        'text-gray-600 hover:text-gray-900',
                        pathname.startsWith(navItem.path) &&
                          'text-primary-600 hover:text-primary-600 font-medium',
                      )}
                    >
                      {navItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {isLoggedIn ? (
              <div className='flex items-center gap-2'>
                <Avatar profileImage='/profile-test.webp' name={'김개발'} size='sm' />
                <Text className='text-primary-600'>{'김개발'}</Text>
                {!isMobile && (
                  <button
                    type='button'
                    className='w-8 cursor-pointer p-2'
                    onClick={() => handleToggleDropdown()}
                  >
                    {isDropdownOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  </button>
                )}
              </div>
            ) : (
              <>{!isMobile && <AuthButtonGroup />}</>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
