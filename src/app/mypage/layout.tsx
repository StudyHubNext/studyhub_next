import type { Metadata } from 'next';
import '@/app/globals.css';
import MypageNav from './_components/MypageNav';

export const metadata: Metadata = {
  title: '마이페이지',
  description: '사용자 정보를 관리하고 활동 내역을 확인하는 페이지입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='bg-gray-50 px-4 py-8 md:px-20'>
      <div className='grid grid-cols-4 gap-8'>
        <MypageNav />
        <div className='col-span-3'>{children}</div>
      </div>
    </div>
  );
}
