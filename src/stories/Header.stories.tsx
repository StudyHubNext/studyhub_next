import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Header as HeaderComponent } from '@/components';

const meta: Meta<typeof HeaderComponent> = {
  title: 'Layout/Header',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    isLoggedIn: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeaderComponent>;

export const Header: Story = {
  args: {
    isLoggedIn: true,
  },
  render: (args) => <HeaderComponent {...args} />,
};
