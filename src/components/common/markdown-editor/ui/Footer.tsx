import React from 'react';

function EditorFooter() {
  return (
    <footer className='border-t border-gray-200 bg-gray-50 px-4 py-3 text-xs text-gray-600'>
      마크다운 문법 사용 가능합니다. **굵게** *기울임* `코드` [링크](URL) ## 제목
    </footer>
  );
}

export { EditorFooter };
