import { SERVICE_LISTS } from '@/constants';
import Link from 'next/link';
import { cn } from '@/utils';
import { useRouter } from 'next/router';

export default function HeaderNav() {
  const { pathname } = useRouter();

  return (
    <nav className='hidden md:block'>
      <ul className={cn('flex gap-8')}>
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
  );
}
