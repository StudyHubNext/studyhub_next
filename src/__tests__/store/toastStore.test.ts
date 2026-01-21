import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { useToastStore } from '@/store/toastStore';
import { act } from '@testing-library/react';

describe('toastStore', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    useToastStore.setState({ toasts: [] });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('초기 상태는 빈 배열이어야 합니다.', () => {
    const { toasts } = useToastStore.getState();
    expect(toasts).toEqual([]);
  });

  it('addToast로 토스트를 추가할 수 있어야 합니다.', () => {
    const { addToast } = useToastStore.getState();

    act(() => {
      addToast({
        variant: 'success',
        title: '성공',
        message: '작업 완료',
      });
    });

    const { toasts } = useToastStore.getState();
    expect(toasts).toHaveLength(1);
    expect(toasts[0].variant).toBe('success');
    expect(toasts[0].title).toBe('성공');
    expect(toasts[0].message).toBe('작업 완료');
    expect(toasts[0].id).toBeDefined();
  });

  it('여러 개의 토스트를 추가하면 맨 앞에 추가되어야 합니다.', () => {
    const { addToast } = useToastStore.getState();

    act(() => {
      addToast({ variant: 'success', title: '첫 번째' });
      addToast({ variant: 'warning', title: '두 번째' });
      addToast({ variant: 'error', title: '세 번째' });
    });

    const { toasts } = useToastStore.getState();
    expect(toasts).toHaveLength(3);
    expect(toasts[0].title).toBe('세 번째');
    expect(toasts[1].title).toBe('두 번째');
    expect(toasts[2].title).toBe('첫 번째');
  });

  it('removeToast로 특정 토스트를 제거할 수 있어야 합니다.', () => {
    const { addToast, removeToast } = useToastStore.getState();

    let toastId: string;
    act(() => {
      addToast({ variant: 'success', title: '제거할 토스트' });
      const { toasts } = useToastStore.getState();
      toastId = toasts[0].id;
    });

    act(() => {
      removeToast(toastId);
    });

    const { toasts } = useToastStore.getState();
    expect(toasts).toHaveLength(0);
  });

  it('clearToasts로 모든 토스트를 제거할 수 있어야 합니다.', () => {
    const { addToast, clearToasts } = useToastStore.getState();

    act(() => {
      addToast({ variant: 'success', title: '토스트 1' });
      addToast({ variant: 'warning', title: '토스트 2' });
      addToast({ variant: 'error', title: '토스트 3' });
    });

    expect(useToastStore.getState().toasts).toHaveLength(3);

    act(() => {
      clearToasts();
    });

    expect(useToastStore.getState().toasts).toHaveLength(0);
  });

  it('duration이 설정되면 자동으로 제거되어야 합니다.', () => {
    const { addToast } = useToastStore.getState();

    act(() => {
      addToast({
        variant: 'success',
        title: '자동 제거',
        duration: 3000,
      });
    });

    expect(useToastStore.getState().toasts).toHaveLength(1);

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    expect(useToastStore.getState().toasts).toHaveLength(0);
  });

  it('duration이 0이면 자동 제거되지 않아야 합니다.', () => {
    const { addToast } = useToastStore.getState();

    act(() => {
      addToast({
        variant: 'success',
        title: '수동 제거',
        duration: 0,
      });
    });

    expect(useToastStore.getState().toasts).toHaveLength(1);

    act(() => {
      vi.advanceTimersByTime(10000);
    });

    expect(useToastStore.getState().toasts).toHaveLength(1);
  });
});

describe('useToast helper functions', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    useToastStore.setState({ toasts: [] });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('addToast를 통해 success variant를 추가할 수 있어야 합니다.', () => {
    const { addToast } = useToastStore.getState();

    act(() => {
      addToast({
        variant: 'success',
        title: '성공!',
        message: '작업 완료',
      });
    });

    const { toasts } = useToastStore.getState();
    expect(toasts).toHaveLength(1);
    expect(toasts[0].variant).toBe('success');
    expect(toasts[0].title).toBe('성공!');
    expect(toasts[0].message).toBe('작업 완료');
  });

  it('addToast를 통해 warning variant를 추가할 수 있어야 합니다.', () => {
    const { addToast } = useToastStore.getState();

    act(() => {
      addToast({
        variant: 'warning',
        title: '경고!',
        message: '주의 필요',
      });
    });

    const { toasts } = useToastStore.getState();
    expect(toasts).toHaveLength(1);
    expect(toasts[0].variant).toBe('warning');
    expect(toasts[0].title).toBe('경고!');
  });

  it('addToast를 통해 error variant를 추가할 수 있어야 합니다.', () => {
    const { addToast } = useToastStore.getState();

    act(() => {
      addToast({
        variant: 'error',
        title: '에러!',
        message: '오류 발생',
      });
    });

    const { toasts } = useToastStore.getState();
    expect(toasts).toHaveLength(1);
    expect(toasts[0].variant).toBe('error');
    expect(toasts[0].title).toBe('에러!');
  });
});
