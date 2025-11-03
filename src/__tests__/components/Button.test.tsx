import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import Button from '@/components/button/Button';

describe('Button Component', () => {
  it('자식 노드를 올바르게 렌더링해야 합니다.', () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('onClick 핸들러가 클릭 시 호출되어야 합니다.', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    const buttonElement = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('disabled 상태일 때 onClick 핸들러가 호출되지 않아야 합니다.', () => {
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} disabled>
        Click Me
      </Button>,
    );

    const buttonElement = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(buttonElement);

    expect(buttonElement).toBeDisabled();
    expect(handleClick).not.toHaveBeenCalled();
  });
});
