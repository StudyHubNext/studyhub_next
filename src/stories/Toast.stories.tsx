import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Toast, ToastContainer } from '@/components';
import { useToast } from '@/store';

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

function ToastDemo() {
  const { success, warning, error } = useToast();

  return (
    <div className='flex flex-col gap-4 p-8'>
      <ToastContainer />

      <h2 className='mb-4 text-2xl font-bold'>Toast 시스템 데모</h2>
      <p className='mb-4 text-gray-600'>
        버튼을 클릭하여 오른쪽 상단에서 슬라이드되는 토스트 알림을 확인하세요.
      </p>

      <div className='flex flex-wrap gap-4'>
        <button
          type='button'
          onClick={() => success('성공!', { message: '작업이 성공적으로 완료되었습니다.' })}
          className='rounded-lg bg-green-500 px-6 py-3 text-white hover:bg-green-600'
        >
          성공 토스트 표시
        </button>

        <button
          type='button'
          onClick={() => warning('경고!', { message: '주의가 필요한 상황입니다.' })}
          className='rounded-lg bg-yellow-500 px-6 py-3 text-white hover:bg-yellow-600'
        >
          경고 토스트 표시
        </button>

        <button
          type='button'
          onClick={() => error('에러!', { message: '오류가 발생했습니다.' })}
          className='rounded-lg bg-red-500 px-6 py-3 text-white hover:bg-red-600'
        >
          에러 토스트 표시
        </button>

        <button
          type='button'
          onClick={() => {
            success('첫 번째 알림');
            setTimeout(() => warning('두 번째 알림'), 200);
            setTimeout(() => error('세 번째 알림'), 400);
          }}
          className='rounded-lg bg-purple-500 px-6 py-3 text-white hover:bg-purple-600'
        >
          여러 개 동시 표시
        </button>

        <button
          type='button'
          onClick={() =>
            success('자동 사라지는 알림', {
              message: '3초 후 자동으로 사라집니다.',
              duration: 3000,
            })
          }
          className='rounded-lg bg-blue-500 px-6 py-3 text-white hover:bg-blue-600'
        >
          3초 후 자동 제거
        </button>

        <button
          type='button'
          onClick={() =>
            success('계속 표시되는 알림', {
              message: '직접 닫아야 사라집니다.',
              duration: 0,
            })
          }
          className='rounded-lg bg-indigo-500 px-6 py-3 text-white hover:bg-indigo-600'
        >
          자동 제거 안됨 (duration: 0)
        </button>
      </div>

      <div className='mt-8'>
        <h3 className='mb-2 text-lg font-semibold'>사용 방법:</h3>
        <pre className='rounded-lg bg-gray-100 p-4'>
          {`import { useToast } from '@/store';

function MyComponent() {
  const { success, warning, error } = useToast();

  // 기본 사용 (5초 후 자동 제거)
  success('작업 완료!');

  // 메시지 추가
  warning('주의!', { message: '확인이 필요합니다.' });

  // 표시 시간 설정
  error('오류!', { duration: 3000 });

  // 자동 제거 안함
  success('중요 알림', { duration: 0 });
}`}
        </pre>
      </div>
    </div>
  );
}

export const InteractiveToastSystem: Story = {
  render: () => <ToastDemo />,
};
