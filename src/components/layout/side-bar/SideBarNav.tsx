import { BookOpenIcon, MegaphoneIcon, UserGroupIcon, UserIcon } from '@heroicons/react/24/outline';
import { Button, Text } from '@/components/common';
import { SIDE_NAV_LISTS } from '@/constants';
import { cn } from '@/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ICONS = [
  { name: '강의 목록', icon: <BookOpenIcon width={18} /> },
  { name: '스터디 그룹', icon: <UserGroupIcon width={18} /> },
  { name: '구인 공고', icon: <MegaphoneIcon width={18} /> },
  { name: '마이페이지', icon: <UserIcon width={18} /> },
];

export default function SideBarNav() {
  const pathname = usePathname();

  return (
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
                  pathname.startsWith(navItem.path) && 'text-primary-600 bg-primary-50 font-medium',
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
  );
}
