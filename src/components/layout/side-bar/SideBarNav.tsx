import { BookOpenIcon, MegaphoneIcon, UserGroupIcon, UserIcon } from '@heroicons/react/24/outline';
import { Button, Text } from '@/components/common';
import { SIDE_NAV_LISTS } from '@/constants';
import { cn } from '@/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { JSX } from 'react';

const NAV_ICON_MAP: Record<string, JSX.Element> = {
  '강의 목록': <BookOpenIcon width={18} />,
  '스터디 그룹': <UserGroupIcon width={18} />,
  '구인 공고': <MegaphoneIcon width={18} />,
  마이페이지: <UserIcon width={18} />,
};

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
            <li key={navItem.name}>
              <Link href={navItem.path}>
                <Button
                  variant='ghost'
                  size='lg'
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
    </div>
  );
}
