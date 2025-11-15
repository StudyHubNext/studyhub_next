import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ImageCard } from '@/components';

const meta: Meta<typeof ImageCard> = {
  title: 'Design System/ImageCard',
  component: ImageCard,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the image card',
    },
    imageUrl: {
      control: 'text',
      description: 'URL of the image to display',
    },
    children: {
      control: 'text',
      description: 'Content to display below the image',
    },
    overlayContent: {
      description: 'Content to overlay on the image',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ImageCard>;

export const Default: Story = {
  args: {
    title: 'Sample Image Card',
    imageUrl: '',
    children: (
      <div className='p-4'>
        <h3 className='text-lg font-semibold'>Card Title</h3>
        <p className='text-gray-600'>This is the card content below the image.</p>
      </div>
    ),
  },
};

export const WithoutImage: Story = {
  args: {
    title: 'No Image Card',
    children: (
      <div className='p-4'>
        <h3 className='text-lg font-semibold'>Card Without Image</h3>
        <p className='text-gray-600'>
          This card displays a placeholder icon when no image is provided.
        </p>
      </div>
    ),
  },
};

export const WithOverlay: Story = {
  args: {
    title: 'Card with Overlay',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=250&fit=crop',
    overlayContent: (
      <div className='absolute inset-0 flex items-center justify-center bg-black/50'>
        <button className='rounded bg-white px-6 py-2 font-semibold text-black hover:bg-gray-200'>
          View More
        </button>
      </div>
    ),
    children: (
      <div className='p-4'>
        <h3 className='text-lg font-semibold'>Interactive Card</h3>
        <p className='text-gray-600'>This card has an interactive overlay on the image.</p>
      </div>
    ),
  },
};

export const Multiple: Story = {
  render: () => (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
      <ImageCard
        title='Card 1'
        imageUrl='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=250&fit=crop'
      >
        <div className='p-4'>
          <h3 className='font-semibold'>Card 1</h3>
          <p className='text-sm text-gray-600'>Sample content</p>
        </div>
      </ImageCard>

      <ImageCard
        title='Card 2'
        imageUrl='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=250&fit=crop'
      >
        <div className='p-4'>
          <h3 className='font-semibold'>Card 2</h3>
          <p className='text-sm text-gray-600'>Sample content</p>
        </div>
      </ImageCard>

      <ImageCard title='Card 3'>
        <div className='p-4'>
          <h3 className='font-semibold'>Card 3 (No Image)</h3>
          <p className='text-sm text-gray-600'>Sample content</p>
        </div>
      </ImageCard>
    </div>
  ),
};

export const CustomStyling: Story = {
  args: {
    title: 'Custom Styled Card',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=250&fit=crop',
    className: 'bg-blue-50',
    children: (
      <div className='p-6'>
        <h3 className='text-xl font-bold text-blue-900'>Custom Styled</h3>
        <p className='text-blue-700'>This card has custom styling applied.</p>
      </div>
    ),
  },
};
