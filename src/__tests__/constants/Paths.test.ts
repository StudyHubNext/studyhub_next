import { PATHS } from '@/constants/paths';
import { describe, it, expect } from 'vitest';

describe('constants/paths', () => {
  it('정적 경로들이 올바른 값을 가지고 있어야 한다', () => {
    expect(PATHS.HOME).toBe('/');
    expect(PATHS.LOGIN).toBe('/login');
    expect(PATHS.SIGNUP).toBe('/signup');
  });

  describe('GROUPS 경로', () => {
    it('그룹 관련 정적 경로들이 올바른 값을 가지고 있어야 한다', () => {
      expect(PATHS.GROUPS.LIST).toBe('/groups');
      expect(PATHS.GROUPS.CREATE).toBe('/groups/create');
    });

    it('그룹 상세 및 수정 동적 경로가 ID를 포함하여 올바르게 생성되어야 한다', () => {
      const groupId = 123;
      expect(PATHS.GROUPS.DETAIL(groupId)).toBe(`/groups/${groupId}`);
      expect(PATHS.GROUPS.EDIT(groupId)).toBe(`/groups/${groupId}/edit`);
    });
  });

  describe('GROUPS.RECORDS 경로', () => {
    const groupId = 'abc';
    const recordId = 456;

    it('스터디 기록 생성 동적 경로가 groupId를 포함하여 올바르게 생성되어야 한다', () => {
      expect(PATHS.GROUPS.RECORDS.CREATE(groupId)).toBe(`/groups/${groupId}/records/create`);
    });

    it('스터디 기록 상세 동적 경로가 ID들을 포함하여 올바르게 생성되어야 한다', () => {
      expect(PATHS.GROUPS.RECORDS.DETAIL(groupId, recordId)).toBe(
        `/groups/${groupId}/records/${recordId}`,
      );
    });

    it('스터디 기록 수정 동적 경로가 ID들을 포함하여 올바르게 생성되어야 한다', () => {
      expect(PATHS.GROUPS.RECORDS.EDIT(groupId, recordId)).toBe(
        `/groups/${groupId}/records/${recordId}/edit`,
      );
    });
  });
});
