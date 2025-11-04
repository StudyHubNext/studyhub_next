import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Badge } from '@/components';

const variants = ['default', 'primary', 'success', 'danger'] as const;
const sizes = ['sm', 'md', 'lg'] as const;

const meta: Meta<typeof Badge> = {
  title: 'Design System/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: variants,
    },
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
type Story = StoryObj<typeof Badge>;

export const AllVariants: Story = {
  render: () => (
    <div className='flex flex-col gap-8'>
      {variants.map((variant) => (
        <div key={variant}>
          <h3 className='mb-2 text-lg font-semibold'>{variant}</h3>
          <div className='flex flex-wrap items-center gap-4'>
            {sizes.map((size) => (
              <Badge key={size} variant={variant} size={size} content={`${variant} / ${size}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'md',
    content: 'Default Badge',
  },
  render: (args) => (
    <div className='flex'>
      <Badge {...args} />
    </div>
  ),
};
