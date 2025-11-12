import React from 'react';

interface EditorTextareaProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

const EditorTextarea = React.forwardRef<HTMLTextAreaElement, EditorTextareaProps>(
  ({ value, onChange: handleChange, placeholder = '마크다운을 입력하세요...' }, ref) => (
    <textarea
      ref={ref}
      value={value}
      onChange={handleChange}
      className='font-base resize-vertical h-80 w-full border-none p-4 focus:outline-none'
      placeholder={placeholder}
    />
  ),
);

EditorTextarea.displayName = 'EditorTextarea';

export { EditorTextarea };
