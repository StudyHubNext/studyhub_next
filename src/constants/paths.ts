const GROUPS_BASE = '/groups';
const MYPAGE_BASE = '/mypage';
const GROUP_DETAIL_BASE = (groupId: string | number) => `${GROUPS_BASE}/${groupId}`;
const GROUP_RECORDS_BASE = (groupId: string | number) => `${GROUP_DETAIL_BASE(groupId)}/records`;
const GROUP_RECORD_DETAIL_BASE = (groupId: string | number, recordId: string | number) =>
  `${GROUP_RECORDS_BASE(groupId)}/${recordId}`;

export const PATHS = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  LECTURES:
    'https://www.inflearn.com/?infPartner=true&utm_source=google&utm_medium=pmax&utm_campaign=purchase_regular_g-purchase-main&utm_content=_branding_all&utm_term=_240325_no-2&gad_source=1&gad_campaignid=20714471420',

  MYPAGE: {
    PROFILE: `${MYPAGE_BASE}/profile`,
    LECTURES: `${MYPAGE_BASE}/bookmarked-lectures`,
    APPLICATIONS: `${MYPAGE_BASE}/applications`,
    STUDY: `${MYPAGE_BASE}/study`,
  },

  GROUPS: {
    LIST: GROUPS_BASE,
    CREATE: `${GROUPS_BASE}/create`,
    DETAIL: GROUP_DETAIL_BASE,
    EDIT: (groupId: string | number) => `${GROUP_DETAIL_BASE(groupId)}/edit`,

    RECORDS: {
      CREATE: (groupId: string | number) => `${GROUP_RECORDS_BASE(groupId)}/create`,
      DETAIL: GROUP_RECORD_DETAIL_BASE,
      EDIT: (groupId: string | number, recordId: string | number) =>
        `${GROUP_RECORD_DETAIL_BASE(groupId, recordId)}/edit`,
    },
  },

  NOT_FOUND: '/404',
} as const;
