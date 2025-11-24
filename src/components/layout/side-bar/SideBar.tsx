import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';
import { Avatar, Button, Text } from '@/components/common';
import { cn } from '@/utils';
import { SideBarHeader, SideBarNav } from '.';

interface HeaderSideMenuProps {
  isLoggedIn: boolean;
  isOpen: boolean;
  onClose: () => void;
}

export default function SideMenu({ isLoggedIn, isOpen, onClose }: HeaderSideMenuProps) {
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
          <SideBarNav />
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
