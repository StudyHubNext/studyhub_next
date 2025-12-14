import { Footer } from '@/components';

export default function GroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
