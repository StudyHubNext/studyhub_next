import React from 'react';

interface EditorPreviewProps {
  content: React.ReactNode;
}

function EditorPreview({ content }: EditorPreviewProps) {
  return (
    <div className='h-80 overflow-y-auto p-4'>
      <style>{`
      .markdown-preview {
        font-size: 0.95rem;
        line-height: 1.6;
      }
      .markdown-preview h1,
      .markdown-preview h2,
      .markdown-preview h3,
      .markdown-preview h4,
      .markdown-preview h5,
      .markdown-preview h6 {
        margin-top: 1.5rem;
        margin-bottom: 1rem;
        font-weight: 700;
      }
      .markdown-preview h1 {
        font-size: 2rem;
        border-bottom: 2px solid #e5e7eb;
        padding-bottom: 0.5rem;
      }
      .markdown-preview h2 {
        font-size: 1.5rem;
      }
      .markdown-preview h3 {
        font-size: 1.25rem;
      }
      .markdown-preview p {
        margin-bottom: 1rem;
      }
      .markdown-preview code {
        background-color: #f3f4f6;
        padding: 0.25rem 0.5rem;
        border-radius: 0.375rem;
        color: #dc2626;
        font-family: 'Courier New', monospace;
        font-size: 0.9em;
      }
      .markdown-preview pre {
        background-color: #1f2937;
        color: #f3f4f6;
        padding: 1rem;
        border-radius: 0.5rem;
        overflow-x: auto;
        margin: 1rem 0;
      }
      .markdown-preview pre code {
        color: #f3f4f6;
        background-color: transparent;
        padding: 0;
        font-size: 0.9em;
      }
      .markdown-preview ul,
      .markdown-preview ol {
        margin-left: 1.5rem;
        margin-bottom: 1rem;
      }
      .markdown-preview li {
        margin-bottom: 0.5rem;
      }
      .markdown-preview a {
        color: #2563eb;
        text-decoration: underline;
      }
      .markdown-preview a:hover {
        color: #1d4ed8;
      }
      .markdown-preview blockquote {
        border-left: 4px solid #d1d5db;
        padding-left: 1rem;
        margin-left: 0;
        color: #6b7280;
        font-style: italic;
      }
    `}</style>
      <div className='markdown-preview prose prose-sm max-w-none'>{content}</div>
    </div>
  );
}

export { EditorPreview };
