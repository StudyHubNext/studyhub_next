import { Avatar, Button, Text } from '@/components/common';
import { useUserStore } from '@/store';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';

export default function SideBarFooter() {
  const { user, logout } = useUserStore();

  return (
    <footer className='border-t border-gray-200 p-4'>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center gap-3'>
          <Avatar profileImage={user?.profileImageUrl} name={user?.nickname ?? ''} size='md' />
          <div className='flex flex-col'>
            <Text className='font-semibold'>{user?.nickname}</Text>
            <Text variant='extraSmall' className='text-gray-600'>
              {user?.email}
            </Text>
          </div>
        </div>
        <Button variant='secondary' size='lg' className='justify-center px-4 py-2' onClick={logout}>
          <ArrowLeftOnRectangleIcon width={18} />
          로그아웃
        </Button>
      </div>
    </footer>
  );
}
