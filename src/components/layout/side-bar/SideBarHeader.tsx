import { Logo } from '@/components/common';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface HeaderSideMenuProps {
  onClose: () => void;
}

export default function SideBarHeader({ onClose }: HeaderSideMenuProps) {
  return (
    <header className='flex justify-between border-b border-gray-200 p-4'>
      <div className='flex items-center gap-2'>
        <Logo size='md' />
      </div>
      <button type='button' aria-label='닫기' onClick={onClose}>
        <XMarkIcon aria-hidden='true' width={18} className='cursor-pointer' />
      </button>
    </header>
  );
}
