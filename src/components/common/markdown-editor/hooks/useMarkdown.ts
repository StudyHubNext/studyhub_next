/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved */
import React, { useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const useMarkdown = () => {
  /**
   * 마크다운을 React 컴포넌트로 변환
   * @param text - 마크다운 텍스트
   * @returns React 컴포넌트
   */
  const parseMarkdown = useCallback(
    (text: string) => React.createElement(ReactMarkdown, { remarkPlugins: [remarkGfm] }, text),
    [],
  );

  return { parseMarkdown };
};
