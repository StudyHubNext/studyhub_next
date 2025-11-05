import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Logo } from '@/components';

const sizes = ['sm', 'md', 'lg'] as const;

const meta: Meta<typeof Logo> = {
  title: 'Design System/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: sizes,
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const AllVariants: Story = {
  render: () => (
    <div className='flex flex-col gap-8'>
      {sizes.map((size) => (
        <div key={size} className='flex items-center gap-2'>
          <span>{size} :</span>
          <Logo size={size} />
        </div>
      ))}
    </div>
  ),
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
};
