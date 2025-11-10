import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Footer as FooterComponent } from '@/components';

const meta: Meta<typeof FooterComponent> = {
  title: 'Layout/Footer',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof FooterComponent>;

export const Footer: Story = {
  render: () => <FooterComponent />,
};
