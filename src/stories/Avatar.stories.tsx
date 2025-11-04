import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Avatar } from '@/components';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

const meta: Meta<typeof Avatar> = {
  title: 'Design System/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: sizes,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const AllVariants: Story = {
  render: () => (
    <div className='flex flex-col gap-8'>
      {sizes.map((size) => (
        <div key={size} className='flex items-center gap-2'>
          <span>{size} :</span>
          <Avatar size={size} name='김개발' />
          <Avatar size={size} profileImage='/profile-test.webp' name='김개발' />
        </div>
      ))}
    </div>
  ),
};

export const Medium: Story = {
  args: {
    name: '김개발',
    size: 'md',
  },
};
