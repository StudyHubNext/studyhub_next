import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import RootLayout from '@/app/layout';

const meta: Meta<typeof RootLayout> = {
  title: 'Layout/Layout',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof RootLayout>;

export const Layout: Story = {
  render: () => (
    <RootLayout>
      <div className='bg-primary-100 p-4 text-center'>레이아웃 테스트</div>
    </RootLayout>
  ),
};
