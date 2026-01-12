import { cn } from '@/utils';
import { useUserStore } from '@/store/userStore';
import { SideBarFooter, SideBarHeader, SideBarNav } from '.';

interface HeaderSideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SideMenu({ isOpen, onClose }: HeaderSideMenuProps) {
  const { isLoggedIn } = useUserStore();

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

        {isLoggedIn && <SideBarFooter />}
      </div>
    </div>
  );
}
