# GEMINI.md

이 문서는 이 저장소의 코드를 사용하여 작업할 때 AI 어시스턴트에 대한 지침을 제공합니다.

---

## 프로젝트 개요

**StudyHub**는 온라인 스터디 그룹 및 강의 플랫폼을 위한 웹 애플리케이션으로 Next.js의 App Router를 기반으로 구축된 풀스택 애플리케이션이며, 별도의 백엔드 없이 MongoDB에 직접 연결되는 구조를 가지고 있습니다.

**기술 스택:**

- Next.js (App Router, Turbopack)
- React
- TypeScript
- Tailwind CSS
- Mongoose (MongoDB ODM)
- Vitest (단위/통합 테스트)
- Storybook (컴포넌트 문서화 및 테스트)
- ESLint / Prettier (코드 스타일 및 품질)
- Husky (Git Hooks)

**주요 특징:**

- 기능 기반 라우팅 그룹 (`(auth)`, `(main)`)
- 서버 컴포넌트를 통한 직접적인 데이터베이스 연동
- 재사용 가능한 UI 컴포넌트 라이브러리
- `class-variance-authority` (CVA)를 사용한 스타일 변형 관리
- Storybook을 통한 컴포넌트 시각화 및 테스트
- Vitest와 React Testing Library를 사용한 테스트 환경

---

## 개발 명령어

```bash
# 개발 서버 시작 (Turbopack 활성화)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 시작
npm run start

# ESLint로 린트 검사 실행
npm run lint

# Storybook 컴포넌트 문서 시작
npm run storybook

# 정적 Storybook 빌드
npm run build-storybook

# Vitest로 테스트 실행
npm run test

# 테스트 커버리지 리포트 생성
npm run test:coverage
```

**Git 훅 (Husky):**

- **pre-commit**: 스테이징된 파일을 대상으로 `lint-staged`를 실행하여 ESLint 및 Prettier를 적용합니다.
- **commit-msg**: 커밋 메시지 형식을 검사합니다. (구체적인 규칙은 `.husky/commit-msg` 파일 확인 필요)

---

## 코드 아키텍처

### 디렉토리 구조

```
src/
├── app/                          # Next.js App Router
│   ├── (auth)/                  # 인증 관련 레이아웃 그룹 (로그인, 회원가입)
│   │   ├── login/
│   │   └── signup/
│   │
│   ├── (main)/                  # 메인 애플리케이션 레이아웃 그룹
│   │   └── groups/              # 스터디 그룹 페이지
│   │
│   ├── _components/             # 루트 페이지(랜딩) 전용 컴포넌트
│   ├── layout.tsx               # 루트 레이아웃
│   ├── page.tsx                 # 랜딩 페이지
│   └── globals.css              # 전역 스타일
│
├── components/                   # 재사용 가능한 공유 컴포넌트
│   ├── common/                  # 범용 UI 컴포넌트 라이브러리 (버튼, 카드 등)
│   └── layout/                  # 레이아웃 컴포넌트 (Header, Footer, Sidebar)
│
├── constants/                    # 앱 전역 상수
│   ├── navList.ts
│   ├── paths.ts
│   └── signup.ts
│
├── hooks/                        # 커스텀 React 훅
│   ├── useOnClickOutside.ts
│   └── usePageNav.ts
│
├── mocks/                        # 목(mock) 데이터
│   └── lectures.mock.ts
│
├── stories/                      # Storybook 컴포넌트 문서
├── types/                        # 전역 TypeScript 타입
└── utils/                        # 유틸리티 함수
    ├── cn.ts                    # clsx와 tailwind-merge를 결합한 유틸리티
    └── dbConnect.ts             # MongoDB 연결 유틸리티
```

---

## UI 컴포넌트 라이브러리

`src/components/common/`에 위치한 재사용 가능한 UI 컴포넌트들입니다.

| 컴포넌트           | 설명                                                 |
| ------------------ | ---------------------------------------------------- |
| `avatar/`          | 사용자 프로필 이미지를 표시하는 아바타 컴포넌트      |
| `badge/`           | 상태나 라벨을 표시하는 뱃지 컴포넌트                 |
| `button/`          | 다양한 형태와 크기를 지원하는 버튼 (CVA 패턴 사용)   |
| `card/`            | 컨텐츠를 감싸는 기본 카드 컴포넌트                   |
| `image-card/`      | 이미지를 포함하는 카드 컴포넌트 (강의 등)            |
| `input/`           | 표준 입력 필드 컴포넌트                              |
| `logo/`            | 애플리케이션 로고 컴포넌트                           |
| `markdown-editor/` | 마크다운 입력 및 미리보기를 지원하는 에디터 컴포넌트 |
| `text/`            | 제목(H), 본문(Text) 등 타이포그래피 관련 컴포넌트    |

**컴포넌트 규칙:**

- 스타일 변형 관리를 위해 **Class Variance Authority (CVA)**를 적극적으로 사용합니다. (`buttonVariants.ts`, `logoVariants.ts` 등)
- 각 컴포넌트 폴더는 `index.ts`를 통해 외부에 노출됩니다.
- 대부분의 컴포넌트는 Storybook 문서(`*.stories.tsx`)를 가집니다.

---

## 커스텀 훅

`src/hooks/`에 위치한 전역 커스텀 훅입니다.

| 훅                  | 설명                                                   |
| ------------------- | ------------------------------------------------------ |
| `useOnClickOutside` | 특정 DOM 요소의 외부를 클릭했을 때 콜백을 실행하는 훅  |
| `usePageNav`        | 페이지 네비게이션(이동)을 프로그래밍적으로 처리하는 훅 |

---

## API 통합 패턴

이 프로젝트는 별도의 백엔드 API 서버를 두지 않고, Next.js 애플리케이션 내에서 직접 MongoDB 데이터베이스에 연결하는 방식을 사용합니다.

- **`src/utils/dbConnect.ts`**: MongoDB 연결을 관리하는 유틸리티입니다. Mongoose를 사용하여 데이터베이스 연결을 캐싱하고 재사용합니다.
- **서버 컴포넌트 및 서버 액션**: 데이터베이스 조회 및 변경은 주로 서버 컴포넌트 내에서 직접 수행되거나, 서버 액션을 통해 처리될 가능성이 높습니다.
- **API 라우트**: 현재 `src/app/api` 디렉토리가 없어, 외부에 노출되는 REST API 엔드포인트는 최소화된 것으로 보입니다.

---

## 상태 관리 패턴

- **`package.json`**에 `Zustand`나 `Redux` 같은 외부 상태 관리 라이브러리가 없습니다.
- 상태 관리는 주로 React의 내장 훅 (`useState`, `useReducer`, `useContext`)을 사용하여 컴포넌트 로컬 상태나 컨텍스트 기반의 전역 상태를 관리하는 것으로 보입니다.

---

## 디자인 시스템

### 색상 및 스타일링

- **Tailwind CSS**: 스타일링의 기본 시스템으로 사용됩니다. `tailwind.config.mjs` 파일에서 테마(색상, 폰트 등)를 확장하여 사용합니다.
- **CSS 변수**: `src/app/globals.css` 파일에서 전역적으로 사용될 수 있는 CSS 변수를 정의할 수 있습니다.

### 타이포그래피

- **`src/components/common/text/`**: `H.tsx` (제목), `Text.tsx` (본문) 등 의미에 맞는 타이포그래피 컴포넌트를 제공합니다.
- **폰트**: `next/font`를 사용하여 로컬 폰트(`PretendardVariable.woff2`)를 최적화하여 로드합니다.

### 아이콘

- **Lucide React**: `lucide-react` 라이브러리를 통해 다양한 아이콘을 사용합니다.
- **커스텀 SVG**: `public/` 폴더에 `google.svg`, `file.svg` 등 커스텀 아이콘을 포함하고 있습니다.

---

## 주요 파일 & 구성

| 파일                 | 목적                                                        |
| -------------------- | ----------------------------------------------------------- |
| `next.config.ts`     | Next.js 관련 구성 (현재 특별한 설정 없음)                   |
| `tsconfig.json`      | TypeScript 컴파일러 설정. 경로 별칭 `@/*` (`./src/*`) 포함  |
| `.prettierrc`        | Prettier 코드 포맷터 설정 (줄 길이 100, 작은따옴표 사용 등) |
| `.eslintrc.json`     | ESLint 린팅 규칙 설정 (Next.js, Airbnb, Prettier 규칙 확장) |
| `vitest.config.ts`   | Vitest 테스트 프레임워크 설정. JSDOM 환경 사용              |
| `.storybook/main.ts` | Storybook 애드온 및 주요 설정                               |
| `package.json`       | 프로젝트의 모든 종속성 및 스크립트 정의                     |

---

## 코드 스타일 및 임포트 규칙

Prettier와 ESLint에 의해 대부분의 코드 스타일이 강제됩니다.

- **들여쓰기**: 2칸
- **최대 줄 길이**: 100자
- **따옴표**: 작은따옴표(`'`) 사용 (JSX 속성은 예외)
- **세미콜론**: 항상 사용
- **후행 쉼표**: 항상 사용 (`"trailingComma": "all"`)
- **Tailwind 클래스 순서**: `prettier-plugin-tailwindcss`에 의해 자동으로 정렬됩니다.
- **임포트 경로**: `tsconfig.json`에 정의된 경로 별칭 `@/*`를 사용하여 절대 경로로 임포트하는 것을 권장합니다.

---

## 최근 개발 내역 및 TODO

이 섹션은 팀에서 직접 관리해야 합니다.

### 최근 개발 완료 기능

- (예시) 회원가입 이메일 및 휴대폰 인증 기능 구현 (PR #XX)
- (예시) 마크다운 에디터 컴포넌트 개발 (PR #XX)

### 미완료 작업 (TODO)

- [ ] 스터디 그룹 생성 기능 구현
- [ ] 그룹 상세 페이지 UI 및 데이터 연동
- [ ] 강의 목록 필터링 기능 추가
