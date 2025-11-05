import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Logo } from '@/components';

describe('Logo Component', () => {
  it('컴포넌트가 정상적으로 렌더링된다.', () => {
    render(<Logo />);
    expect(screen.getByText('S')).toBeInTheDocument();
  });

  it('클릭 시 홈("/")으로 이동하는 링크를 포함한다.', () => {
    render(<Logo />);
    expect(screen.getByText('S').closest('a')).toHaveAttribute('href', '/');
  });

  it('size가 "sm"이 아닐 때 "StudyHub" 텍스트를 보여준다.', () => {
    render(<Logo size='md' />);
    expect(screen.getByText('StudyHub')).toBeInTheDocument();
  });

  it('size가 "sm"일 때 "StudyHub" 텍스트를 보여주지 않는다.', () => {
    render(<Logo size='sm' />);
    expect(screen.queryByText('StudyHub')).not.toBeInTheDocument();
  });

  it('추가적인 className을 적용할 수 있다.', () => {
    const customClass = 'my-custom-logo';
    render(<Logo className={customClass} />);
    expect(screen.getByText('S')).toHaveClass(customClass);
  });
});
