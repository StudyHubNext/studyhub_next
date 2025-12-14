export const FORM_LABELS = {
  NAME: '이름',
  NICKNAME: '닉네임',
  BIRTH: '생년월일',
  EMAIL: '이메일',
  PHONE: '전화번호',
  PASSWORD: '비밀번호',
} as const;

export const FORM_PLACEHOLDERS = {
  NAME: '이름을 입력해주세요',
  NICKNAME: '닉네임을 입력해주세요',
  BIRTH: '8자리 입력해주세요(ex.19980427)',
  EMAIL: '이메일을 입력해주세요',
  EMAIL_CODE: '전송된 코드를 입력해주세요',
  PHONE: '전화번호를 입력해주세요',
  PHONE_CODE: '전송된 코드를 입력해주세요',
  PASSWORD: '비밀번호를 입력해주세요',
  PASSWORD_CONFIRM: '비밀번호를 다시 입력해주세요',
} as const;

export const HELPER_TEXTS = {
  EMAIL: '로그인 시 아이디로 사용합니다.',
  PASSWORD: '8~15자의 영문 대소문자, 숫자, 특수문자 포함',
};
