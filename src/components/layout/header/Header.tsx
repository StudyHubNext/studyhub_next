import { useMediaQuery } from 'react-responsive';

import { MEDIA_QUERY } from '@/constants';
import { Avatar, Logo, Text } from '@/components/common';
import { Bars3Icon } from '@heroicons/react/20/solid';
import AuthButtonGroup from '../AuthButtonGroup';
import UserDropdown from './UserDropdown';
import HeaderNav from './HeaderNav';

interface HeaderProps {
  isLoggedIn: boolean;
}

export default function Header({ isLoggedIn }: HeaderProps) {
  const isMobile = useMediaQuery({ query: MEDIA_QUERY.mobile });

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
            <HeaderNav />

            {isLoggedIn ? (
              <div className='flex items-center gap-2'>
                <Avatar profileImage='/profile-test.webp' name={'김개발'} size='sm' />
                <Text className='text-primary-600'>{'김개발'}</Text>
                <UserDropdown />
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
