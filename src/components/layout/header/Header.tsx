'use client';

import { Avatar, Logo, Text } from '@/components/common';
import { Bars3Icon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import { useUserStore } from '@/store';
import AuthButtonGroup from '../AuthButtonGroup';
import UserDropdown from './UserDropdown';
import HeaderNav from './HeaderNav';
import SideBar from '../side-bar/SideBar';

export default function Header() {
  const { user, isLoggedIn } = useUserStore();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className='fixed z-50 h-[var(--header-height)] w-full border-b border-gray-200 bg-white px-4 md:px-20'>
      <div className='m-auto flex h-full max-w-7xl items-center'>
        <div className='flex w-full justify-between'>
          <div className='flex items-center gap-2.5 md:hidden'>
            <Bars3Icon width='24' className='cursor-pointer' onClick={() => setIsMenuOpen(true)} />
            <Logo size='sm' />
          </div>
          <div className='hidden md:flex'>
            <Logo />
          </div>

          <div className='flex items-center gap-8'>
            <HeaderNav />

            {isLoggedIn && user ? (
              <div className='flex items-center gap-2'>
                <Avatar profileImage={user.profileImageUrl} name={user.nickname} size='sm' />
                <Text className='text-primary-600'>{user.nickname}</Text>
                <UserDropdown />
              </div>
            ) : (
              <AuthButtonGroup />
            )}
          </div>
        </div>
      </div>

      {isMenuOpen && <SideBar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />}
    </header>
  );
}
