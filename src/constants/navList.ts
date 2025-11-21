import { PATHS } from './paths';

export const SERVICE_LISTS = [
  { name: '강의 목록', path: PATHS.LECTURES },
  { name: '스터디 그룹', path: PATHS.GROUPS.LIST },
  { name: '구인 공고', path: PATHS.NOT_FOUND },
];

export const FOOTER_NAV_LISTS = [
  {
    title: '서비스',
    list: SERVICE_LISTS,
  },
  {
    title: '지원',
    list: [
      { name: '고객센터', path: PATHS.NOT_FOUND },
      { name: 'FAQ', path: PATHS.NOT_FOUND },
      { name: '개인정보처리방침', path: PATHS.NOT_FOUND },
    ],
  },
];
