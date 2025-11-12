/* eslint-disable no-unused-vars */
import React from 'react';
import { Bold, Italic, Code, Link, Heading1, List, type LucideIcon } from 'lucide-react';

interface ToolbarButton {
  icon: LucideIcon;
  title: string;
  ariaLabel: string;
  before: string;
  after?: string;
}

const TOOLBAR_BUTTONS: ToolbarButton[] = [
  {
    icon: Bold,
    title: '굵은 글씨',
    ariaLabel: '굵은 글씨 추가',
    before: '**',
    after: '**',
  },
  {
    icon: Italic,
    title: '이탤릭',
    ariaLabel: '이탤릭 추가',
    before: '*',
    after: '*',
  },
  {
    icon: Code,
    title: '인라인 코드',
    ariaLabel: '인라인 코드 추가',
    before: '`',
    after: '`',
  },
  {
    icon: Link,
    title: '링크',
    ariaLabel: '링크 추가',
    before: '[텍스트](',
    after: ')',
  },
  {
    icon: Heading1,
    title: '제목',
    ariaLabel: '제목 추가',
    before: '# ',
    after: '',
  },
  {
    icon: List,
    title: '목록',
    ariaLabel: '목록 추가',
    before: '- ',
    after: '',
  },
];

interface EditorToolbarProps {
  onInsertMarkdown: (before: string, after?: string) => void;
}

function EditorToolbar({ onInsertMarkdown }: EditorToolbarProps) {
  function handleButtonClick(button: ToolbarButton): void {
    onInsertMarkdown(button.before, button.after);
  }

  return (
    <div className='flex flex-wrap gap-1 border-b border-gray-200 bg-white px-4 py-3'>
      {TOOLBAR_BUTTONS.map((button) => {
        const IconComponent = button.icon;
        return (
          <button
            key={button.title}
            onClick={() => handleButtonClick(button)}
            className='flex h-10 w-10 items-center justify-center rounded p-2 text-gray-600 transition hover:bg-gray-100 hover:text-gray-800'
            title={button.title}
            aria-label={button.ariaLabel}
            type='button'
          >
            <IconComponent size={20} />
          </button>
        );
      })}
    </div>
  );
}

export { EditorToolbar };
