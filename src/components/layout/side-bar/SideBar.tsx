import { cn } from '@/utils';
import { SideBarFooter, SideBarHeader, SideBarNav } from '.';

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

        {isLoggedIn ?? <SideBarFooter />}
      </div>
    </div>
  );
}
