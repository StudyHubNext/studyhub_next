import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from '@/components';

const variants = ['primary', 'secondary', 'outline', 'ghost', 'danger'] as const;
const sizes = ['sm', 'md', 'lg'] as const;

const meta: Meta<typeof Button> = {
  title: 'Design System/Button',
  component: Button,
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
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const AllVariants: Story = {
  render: () => (
    <div className='flex flex-col gap-8'>
      {variants.map((variant) => (
        <div key={variant}>
          <h3 className='mb-2 text-lg font-semibold'>{variant}</h3>
          <div className='flex flex-wrap items-center gap-4'>
            {sizes.map((size) => (
              <Button key={size} variant={variant} size={size}>
                {`${variant} / ${size}`}
              </Button>
            ))}
            <Button key='disabled' variant={variant} size='lg' disabled>
              {`${variant} / lg (disabled)`}
            </Button>
          </div>
        </div>
      ))}
    </div>
  ),
};

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'md',
  },
};
