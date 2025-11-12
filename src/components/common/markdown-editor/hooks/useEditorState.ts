import { useState, useRef, useEffect, useCallback } from 'react';
import type { TabType } from '../types';

interface EditorState {
  markdown: string;
  activeTab: TabType;
}

interface SelectionState {
  start: number;
  end: number;
}

export const useEditorState = () => {
  const [state, setState] = useState<EditorState>({
    markdown: '',
    activeTab: '작성',
  });
  const [selection, setSelection] = useState<SelectionState | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const insertMarkdown = useCallback(
    (before: string, after: string = ''): void => {
      const textarea = textareaRef.current;
      if (!textarea) return;

      let start = textarea.selectionStart;
      let end = textarea.selectionEnd;
      let selectedText = state.markdown.substring(start, end);

      // 선택된 텍스트가 없으면 현재 라인 전체 선택
      if (!selectedText) {
        // 현재 위치에서 라인의 시작 찾기
        let lineStart = start;
        while (lineStart > 0 && state.markdown[lineStart - 1] !== '\n') {
          lineStart -= 1;
        }
        // 현재 위치에서 라인의 끝 찾기
        let lineEnd = start;
        while (lineEnd < state.markdown.length && state.markdown[lineEnd] !== '\n') {
          lineEnd += 1;
        }

        selectedText = state.markdown.substring(lineStart, lineEnd);
        start = lineStart;
        end = lineEnd;
      }

      const newText =
        state.markdown.substring(0, start) +
        before +
        selectedText +
        after +
        state.markdown.substring(end);

      setState((prev) => ({ ...prev, markdown: newText }));

      setSelection({
        start: start + before.length,
        end: start + before.length + selectedText.length,
      });
    },
    [state.markdown],
  );

  useEffect(() => {
    if (selection && textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.focus();
      textarea.setSelectionRange(selection.start, selection.end);
      setSelection(null);
    }
  }, [selection]);

  const handleTabChange = useCallback((tab: TabType): void => {
    setState((prev) => ({ ...prev, activeTab: tab }));
  }, []);

  const handleMarkdownChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setState((prev) => ({ ...prev, markdown: e.target.value }));
  }, []);

  return {
    state,
    textareaRef,
    insertMarkdown,
    handleTabChange,
    handleMarkdownChange,
  };
};
