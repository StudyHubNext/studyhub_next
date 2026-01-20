import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { Toast } from '@/components';

describe('Toast Component', () => {
  it('제목을 올바르게 렌더링해야 합니다.', () => {
    render(<Toast variant='success' title='성공 알림' />);
    const titleElement = screen.getByText('성공 알림');
    expect(titleElement).toBeInTheDocument();
  });

  it('메시지를 올바르게 렌더링해야 합니다.', () => {
    render(<Toast variant='success' title='성공 알림' message='작업이 완료되었습니다.' />);
    const messageElement = screen.getByText('작업이 완료되었습니다.');
    expect(messageElement).toBeInTheDocument();
  });

  it('메시지가 없을 때는 제목만 렌더링해야 합니다.', () => {
    render(<Toast variant='success' title='성공 알림' />);
    const titleElement = screen.getByText('성공 알림');
    expect(titleElement).toBeInTheDocument();
  });

  it('onClose 핸들러가 제공되면 닫기 버튼을 렌더링해야 합니다.', () => {
    const handleClose = vi.fn();
    render(<Toast variant='success' title='성공 알림' onClose={handleClose} />);
    const closeButton = screen.getByRole('button', { name: /닫기/i });
    expect(closeButton).toBeInTheDocument();
  });

  it('onClose 핸들러가 없으면 닫기 버튼을 렌더링하지 않아야 합니다.', () => {
    render(<Toast variant='success' title='성공 알림' />);
    const closeButton = screen.queryByRole('button', { name: /닫기/i });
    expect(closeButton).not.toBeInTheDocument();
  });

  it('닫기 버튼 클릭 시 onClose 핸들러가 호출되어야 합니다.', () => {
    const handleClose = vi.fn();
    render(<Toast variant='success' title='성공 알림' onClose={handleClose} />);

    const closeButton = screen.getByRole('button', { name: /닫기/i });
    fireEvent.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('success variant를 올바르게 렌더링해야 합니다.', () => {
    const { container } = render(<Toast variant='success' title='성공 알림' />);
    const toastElement = container.firstChild;
    expect(toastElement).toHaveClass('bg-success-100');
  });

  it('warning variant를 올바르게 렌더링해야 합니다.', () => {
    const { container } = render(<Toast variant='warning' title='경고 알림' />);
    const toastElement = container.firstChild;
    expect(toastElement).toHaveClass('bg-primary-100');
  });

  it('error variant를 올바르게 렌더링해야 합니다.', () => {
    const { container } = render(<Toast variant='error' title='에러 알림' />);
    const toastElement = container.firstChild;
    expect(toastElement).toHaveClass('bg-red-100');
  });

  it('role="alert" 속성을 가져야 합니다.', () => {
    render(<Toast variant='success' title='성공 알림' />);
    const toastElement = screen.getByRole('alert');
    expect(toastElement).toBeInTheDocument();
  });

  it('커스텀 className을 적용할 수 있어야 합니다.', () => {
    const { container } = render(
      <Toast variant='success' title='성공 알림' className='custom-class' />,
    );
    const toastElement = container.firstChild;
    expect(toastElement).toHaveClass('custom-class');
  });
});
