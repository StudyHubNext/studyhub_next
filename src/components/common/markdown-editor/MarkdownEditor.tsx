'use client';

import React, { useMemo } from 'react';
import { EditorTabs } from '@/components/common/markdown-editor/ui/Tabs';
import { EditorToolbar } from '@/components/common/markdown-editor/ui/ToolBar';
import { EditorTextarea } from '@/components/common/markdown-editor/ui/TextArea';
import { EditorPreview } from '@/components/common/markdown-editor/ui/Preview';
import { EditorFooter } from '@/components/common/markdown-editor/ui/Footer';
import { useMarkdown } from '@/components/common/markdown-editor/hooks/useMarkdown';
import { useEditorState } from '@/components/common/markdown-editor/hooks/useEditorState';

interface MarkdownEditorProps {
  title?: string;
  placeholder?: string;
}

export default function MarkdownEditor({
  title = '스터디 그룹 소개 (선택사항)',
  placeholder = '마크다운을 입력하세요...',
}: MarkdownEditorProps = {}): React.ReactElement {
  const { parseMarkdown } = useMarkdown();
  const { state, textareaRef, insertMarkdown, handleTabChange, handleMarkdownChange } =
    useEditorState();

  const preview = useMemo(() => parseMarkdown(state.markdown), [state.markdown, parseMarkdown]);
  const isWriteTab = state.activeTab === '작성';

  return (
    <div className='mx-auto w-full max-w-2xl overflow-hidden rounded-lg bg-white shadow-lg'>
      <header className='border-b border-gray-200 bg-gray-50 px-6 py-4'>
        <h2 className='text-lg font-semibold text-gray-800'>{title}</h2>
      </header>

      <EditorTabs activeTab={state.activeTab} onTabChange={handleTabChange} />

      <EditorToolbar onInsertMarkdown={insertMarkdown} />

      <div className='min-h-64'>
        {isWriteTab ? (
          <EditorTextarea
            ref={textareaRef}
            value={state.markdown}
            onChange={handleMarkdownChange}
            placeholder={placeholder}
          />
        ) : (
          <EditorPreview content={preview} />
        )}
      </div>

      <EditorFooter />
    </div>
  );
}
