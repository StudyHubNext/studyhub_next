import type { Meta, StoryObj } from '@storybook/nextjs';
import { Lock } from 'lucide-react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Design System/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number'],
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
    errorMessage: {
      control: 'text',
      if: { arg: 'error' },
    },
    icon: {
      control: false,
    },
  },
  args: {
    type: 'text',
    disabled: false,
    error: false,
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: '텍스트를 입력하세요...',
  },
};

export const WithIcon: Story = {
  args: {
    type: 'password',
    placeholder: '비밀번호를 입력하세요',
    icon: <Lock className='h-4 w-4 text-gray-400' />,
  },
};

export const Error: Story = {
  args: {
    placeholder: '잘못된 입력',
    error: true,
    errorMessage: '에러 메시지가 표시됩니다.',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: '비활성화 상태',
    disabled: true,
  },
};
