import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import MarkdownEditor from '@/components/common/markdown-editor/MarkdownEditor';

const meta: Meta<typeof MarkdownEditor> = {
  title: 'Design System/MarkdownEditor',
  component: MarkdownEditor,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof MarkdownEditor>;

export const Default: Story = {};

export const WithDescription: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <h3 className='mb-2 text-lg font-semibold'>마크다운 에디터</h3>
        <p className='mb-4 text-sm text-gray-600'>
          마크다운 문법을 사용하여 텍스트를 입력하고 미리보기 탭에서 렌더링된 HTML을 확인할 수
          있습니다.
        </p>
      </div>
      <MarkdownEditor />
    </div>
  ),
};

export const WithFeatures: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <h3 className='mb-2 text-lg font-semibold'>지원 기능</h3>
        <ul className='mb-4 list-inside list-disc space-y-1 text-sm text-gray-600'>
          <li>제목 (# ## ###)</li>
          <li>굵은 글씨 (**텍스트**)</li>
          <li>이탤릭 (*텍스트*)</li>
          <li>인라인 코드 (`코드`)</li>
          <li>링크 ([텍스트](url))</li>
          <li>목록 (- 항목, * 항목)</li>
          <li>번호 목록 (1. 항목)</li>
          <li>코드 블록 (```)</li>
          <li>블록인용 (&gt; 인용문)</li>
          <li>테이블 (GFM 지원)</li>
          <li>취소선 (~~텍스트~~)</li>
        </ul>
      </div>
      <MarkdownEditor />
    </div>
  ),
};

export const WithExample: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <h3 className='mb-2 text-lg font-semibold'>마크다운 예시</h3>
        <p className='mb-4 text-sm text-gray-600'>
          아래 입력창에 마크다운을 입력하고 미리보기 탭을 눌러보세요
        </p>
      </div>
      <MarkdownEditor
        title='예시 에디터'
        placeholder='# 제목&#10;&#10;## 부제목&#10;&#10;`인라인 코드` 또는 **굵은 글씨**를 사용해보세요&#10;&#10;- 목록 항목 1&#10;- 목록 항목 2&#10;&#10;```javascript&#10;const example = "코드 블록";&#10;```'
      />
    </div>
  ),
};
