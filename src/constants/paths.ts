export const PATHS = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  MYPAGE: '/mypage',
  GROUPS: {
    LIST: '/groups',
    CREATE: '/groups/create',
    DETAIL: (groupId: string | number) => `/groups/${groupId}`,
    EDIT: (groupId: string | number) => `/groups/${groupId}/edit`,
    RECORDS: {
      CREATE: (groupId: string | number) => `/groups/${groupId}/records/create`,
      DETAIL: (groupId: string | number, recordId: string | number) =>
        `/groups/${groupId}/records/${recordId}`,
      EDIT: (groupId: string | number, recordId: string | number) =>
        `/groups/${groupId}/records/${recordId}/edit`,
    },
  },
} as const;
