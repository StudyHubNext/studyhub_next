import { Avatar, Logo, Text } from '@/components/common';
import { Bars3Icon } from '@heroicons/react/20/solid';
import AuthButtonGroup from '../AuthButtonGroup';
import UserDropdown from './UserDropdown';
import HeaderNav from './HeaderNav';

interface HeaderProps {
  isLoggedIn: boolean;
}

export default function Header({ isLoggedIn }: HeaderProps) {
  return (
    <header className='fixed z-50 h-[var(--header-height)] w-full border-b border-gray-200 bg-white px-4 md:px-20'>
      <div className='m-auto flex h-full max-w-7xl items-center'>
        <div className='flex w-full justify-between'>
          <div className='flex items-center gap-2.5 md:hidden'>
            <Bars3Icon width='24' className='cursor-pointer' />
            <Logo size='sm' />
          </div>
          <div className='hidden md:flex'>
            <Logo />
          </div>

          <div className='flex items-center gap-8'>
            <HeaderNav />

            {isLoggedIn ? (
              <div className='flex items-center gap-2'>
                <Avatar profileImage='/profile-test.webp' name={'김개발'} size='sm' />
                <Text className='text-primary-600'>{'김개발'}</Text>
                <UserDropdown />
              </div>
            ) : (
              <AuthButtonGroup />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
