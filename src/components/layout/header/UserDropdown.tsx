import { useState } from 'react';
import { ArrowLeftOnRectangleIcon, UserIcon } from '@heroicons/react/24/outline';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/20/solid';

import { Button } from '@/components/common';

export default function UserDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className='xs:block relative hidden'>
      <Button variant='ghost' className='w-8 p-2' onClick={() => handleToggleDropdown()}>
        {isDropdownOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </Button>

      {isDropdownOpen && (
        <div className='absolute top-10 right-2 flex w-48 flex-col rounded-lg border border-gray-200 bg-white py-2 shadow-md'>
          <div className='px-2'>
            <Button variant='ghost' className='w-full gap-3 p-2'>
              <UserIcon width={14} />
              마이페이지
            </Button>
          </div>
          <div className='py-2'>
            <hr className='border-gray-100' />
          </div>
          <div className='px-2'>
            <Button variant='ghost' className='text-danger-600 w-full gap-3 p-2'>
              <ArrowLeftOnRectangleIcon width={14} className='text-danger-600' />
              로그아웃
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
