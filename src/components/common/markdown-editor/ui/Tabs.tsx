/* eslint-disable no-unused-vars */
import React from 'react';
import type { TabType } from '@/components/common/markdown-editor/types';

interface EditorTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

function EditorTabs({ activeTab, onTabChange }: EditorTabsProps) {
  const tabs: TabType[] = ['작성', '미리보기'];

  return (
    <div className='flex border-b border-gray-200'>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`flex-1 px-4 py-3 text-center font-medium transition ${
            activeTab === tab
              ? 'border-b-2 border-blue-500 bg-blue-50 text-blue-600'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export { EditorTabs };
