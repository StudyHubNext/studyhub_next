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

export const SIDE_NAV_LISTS = [...SERVICE_LISTS, { name: '마이페이지', path: PATHS.MYPAGE }];

export const MYPAGE_NAV_LISTS = [
  { name: '내 정보', path: PATHS.MYPAGE.PROFILE },
  { name: '북마크한 강의', path: PATHS.MYPAGE.LECTURES },
  { name: '지원 내역', path: PATHS.MYPAGE.APPLICATIONS },
  { name: '내 스터디', path: PATHS.MYPAGE.STUDY },
];
