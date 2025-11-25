import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Header as HeaderComponent } from '@/components';

const meta: Meta<typeof HeaderComponent> = {
  title: 'Layout/Header',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof HeaderComponent>;

export const Header: Story = {
  render: () => <HeaderComponent />,
};
