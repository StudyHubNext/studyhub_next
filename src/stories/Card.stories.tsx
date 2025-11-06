import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Card } from '@/components';

const titleVariants = ['base', 'large'] as const;

const meta: Meta<typeof Card> = {
  title: 'Design System/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
    titleVariant: {
      control: {
        type: 'select',
      },
      options: titleVariants,
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const AllVariants: Story = {
  render: () => (
    <div className='flex flex-col gap-8'>
      {titleVariants.map((variant) => (
        <div key={variant}>
          <h3 className='mb-4 text-lg font-semibold'>{variant}</h3>
          <Card title={`${variant} Variant`} titleVariant={variant}>
            <p>This is card content with {variant} title variant</p>
          </Card>
        </div>
      ))}
    </div>
  ),
};

export const Default: Story = {
  args: {
    title: 'Card Title',
    children: 'This is card content',
    titleVariant: 'large',
  },
};

export const WithLargeTitleVariant: Story = {
  args: {
    title: 'Large Title Card',
    children: 'Card content with large title variant',
    titleVariant: 'large',
  },
};

export const WithBaseTitleVariant: Story = {
  args: {
    title: 'Base Title Card',
    children: 'Card content with base title variant',
    titleVariant: 'base',
  },
};

export const WithLongContent: Story = {
  args: {
    title: 'Card with Long Content',
    children: (
      <div className='space-y-2'>
        <p>This is a paragraph of content inside the card.</p>
        <p>You can include multiple paragraphs or other elements.</p>
        <p>The card will expand to fit the content.</p>
      </div>
    ),
    titleVariant: 'large',
  },
};
