import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { usePageNav } from '@/hooks/usePageNav';
import { PATHS } from '@/constants';

const mockPush = vi.fn();
const mockBack = vi.fn();
const mockUseRouter = vi.fn(() => ({
  push: mockPush,
  back: mockBack,
}));

let mockParams = {};
const mockUseParams = vi.fn(() => mockParams);

vi.mock('next/navigation', () => ({
  useRouter: () => mockUseRouter(),
  useParams: () => mockUseParams(),
}));

describe('usePageNav Hook', () => {
  beforeEach(() => {
    mockPush.mockClear();
    mockBack.mockClear();
    mockUseRouter.mockClear();
    mockParams = {};
  });

  it('handleGoBack이 router.back을 호출해야 합니다.', () => {
    const { result } = renderHook(() => usePageNav());

    act(() => {
      result.current.handleGoBack();
    });

    expect(mockBack).toHaveBeenCalledTimes(1);
  });

  it('정적 경로 네비게이션 함수들이 올바른 경로로 router.push를 호출해야 합니다.', () => {
    const { result } = renderHook(() => usePageNav());

    act(() => result.current.navigateToHome());
    expect(mockPush).toHaveBeenCalledWith(PATHS.HOME);

    act(() => result.current.navigateToLogin());
    expect(mockPush).toHaveBeenCalledWith(PATHS.LOGIN);

    act(() => result.current.navigateToGroupList());
    expect(mockPush).toHaveBeenCalledWith(PATHS.GROUPS.LIST);

    act(() => result.current.navigateToGroupCreate());
    expect(mockPush).toHaveBeenCalledWith(PATHS.GROUPS.CREATE);
  });

  describe('동적 경로 네비게이션', () => {
    it('navigateToGroupDetail이 인자로 받은 groupId로 경로를 생성해야 합니다.', () => {
      const { result } = renderHook(() => usePageNav());
      const groupId = 'test-group-123';

      act(() => {
        result.current.navigateToGroupDetail(groupId);
      });

      expect(mockPush).toHaveBeenCalledWith(PATHS.GROUPS.DETAIL(groupId));
    });

    it('navigateToGroupDetail이 인자가 없을 때 useParams의 groupId로 경로를 생성해야 합니다.', () => {
      const groupId = 'param-group-456';
      mockParams = { groupId };
      const { result } = renderHook(() => usePageNav());

      act(() => {
        result.current.navigateToGroupDetail();
      });

      expect(mockPush).toHaveBeenCalledWith(PATHS.GROUPS.DETAIL(groupId));
    });

    it('navigateToGroupEdit이 인자가 없을 때 useParams의 groupId로 경로를 생성해야 합니다.', () => {
      const groupId = 'param-group-789';
      mockParams = { groupId };
      const { result } = renderHook(() => usePageNav());

      act(() => {
        result.current.navigateToGroupEdit();
      });

      expect(mockPush).toHaveBeenCalledWith(PATHS.GROUPS.EDIT(groupId));
    });

    it('navigateToRecordCreate가 useParams의 groupId로 경로를 생성해야 합니다.', () => {
      const groupId = 'param-group-101';
      mockParams = { groupId };
      const { result } = renderHook(() => usePageNav());

      act(() => {
        result.current.navigateToRecordCreate();
      });

      expect(mockPush).toHaveBeenCalledWith(PATHS.GROUPS.RECORDS.CREATE(groupId));
    });

    it('navigateToRecordDetail이 인자로 받은 ID들로 경로를 생성해야 합니다.', () => {
      const { result } = renderHook(() => usePageNav());
      const groupId = 'group-abc';
      const recordId = 'record-123';

      act(() => {
        result.current.navigateToRecordDetail(groupId, recordId);
      });

      expect(mockPush).toHaveBeenCalledWith(PATHS.GROUPS.RECORDS.DETAIL(groupId, recordId));
    });

    it('navigateToRecordDetail이 인자가 없을 때 useParams의 ID들로 경로를 생성해야 합니다.', () => {
      const groupId = 'param-group-def';
      const recordId = 'param-record-456';
      mockParams = { groupId, recordId };
      const { result } = renderHook(() => usePageNav());

      act(() => {
        result.current.navigateToRecordDetail();
      });

      expect(mockPush).toHaveBeenCalledWith(PATHS.GROUPS.RECORDS.DETAIL(groupId, recordId));
    });

    it('navigateToRecordEdit이 useParams의 ID들로 경로를 생성해야 합니다.', () => {
      const groupId = 'param-group-ghi';
      const recordId = 'param-record-789';
      mockParams = { groupId, recordId };
      const { result } = renderHook(() => usePageNav());

      act(() => {
        result.current.navigateToRecordEdit();
      });

      expect(mockPush).toHaveBeenCalledWith(PATHS.GROUPS.RECORDS.EDIT(groupId, recordId));
    });
  });
});
