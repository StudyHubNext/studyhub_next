import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Toast } from '@/components';

const variants = ['success', 'warning', 'error'] as const;

const meta: Meta<typeof Toast> = {
  title: 'Design System/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: variants,
    },
    title: {
      control: 'text',
    },
    message: {
      control: 'text',
    },
    onClose: {
      action: 'closed',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const AllVariants: Story = {
  render: () => (
    <div className='flex flex-col gap-6 p-4'>
      <div>
        <h3 className='mb-3 text-lg font-semibold'>Success</h3>
        <Toast
          variant='success'
          title='성공 알림'
          message='작업이 성공적으로 완료되었습니다.'
          onClose={() => console.log('Toast closed')}
        />
      </div>

      <div>
        <h3 className='mb-3 text-lg font-semibold'>Success (Title Only)</h3>
        <Toast
          variant='success'
          title='성공적으로 저장되었습니다'
          onClose={() => console.log('Toast closed')}
        />
      </div>

      <div>
        <h3 className='mb-3 text-lg font-semibold'>Warning</h3>
        <Toast
          variant='warning'
          title='경고 알림'
          message='주의가 필요한 상황이 발생했습니다. 확인 후 다시 시도해주세요.'
          onClose={() => console.log('Toast closed')}
        />
      </div>

      <div>
        <h3 className='mb-3 text-lg font-semibold'>Warning (Title Only)</h3>
        <Toast
          variant='warning'
          title='주의가 필요합니다'
          onClose={() => console.log('Toast closed')}
        />
      </div>

      <div>
        <h3 className='mb-3 text-lg font-semibold'>Error</h3>
        <Toast
          variant='error'
          title='에러 알림'
          message='오류가 발생했습니다. 네트워크 연결을 확인하고 다시 시도해주세요.'
          onClose={() => console.log('Toast closed')}
        />
      </div>

      <div>
        <h3 className='mb-3 text-lg font-semibold'>Error (Title Only)</h3>
        <Toast
          variant='error'
          title='오류가 발생했습니다'
          onClose={() => console.log('Toast closed')}
        />
      </div>

      <div>
        <h3 className='mb-3 text-lg font-semibold'>Without Close Button</h3>
        <Toast variant='success' title='닫기 버튼이 없는 토스트' message='자동으로 사라집니다.' />
      </div>
    </div>
  ),
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: '성공 알림',
    message: '작업이 성공적으로 완료되었습니다.',
    onClose: () => console.log('Toast closed'),
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: '경고 알림',
    message: '주의가 필요한 상황입니다. 확인 후 다시 시도해주세요.',
    onClose: () => console.log('Toast closed'),
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: '에러 알림',
    message: '오류가 발생했습니다. 다시 시도해주세요.',
    onClose: () => console.log('Toast closed'),
  },
};

export const TitleOnly: Story = {
  args: {
    variant: 'success',
    title: '성공적으로 저장되었습니다',
    onClose: () => console.log('Toast closed'),
  },
};

export const WithoutCloseButton: Story = {
  args: {
    variant: 'success',
    title: '자동 알림',
    message: '이 메시지는 자동으로 사라집니다.',
  },
};
