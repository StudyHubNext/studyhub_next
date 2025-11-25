import { Avatar, Button, Text } from '@/components/common';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';

export default function SideBarFooter() {
  return (
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
          <ArrowLeftOnRectangleIcon width={18} />
          로그아웃
        </Button>
      </div>
    </footer>
  );
}
