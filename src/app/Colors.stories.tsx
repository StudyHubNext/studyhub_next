import type { Meta } from '@storybook/nextjs-vite';
import React, { useEffect, useState } from 'react';

const meta: Meta = {
  title: 'Design System/Colors',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

function ColorSwatch({ name, colorVar }: { name: string; colorVar: string }) {
  const [hex, setHex] = useState('');

  useEffect(() => {
    const computedColor = getComputedStyle(document.documentElement)
      .getPropertyValue(colorVar.replace(/var\((--[a-zA-Z0-9-]+)\)/, '$1'))
      .trim();
    setHex(computedColor);
  }, [colorVar]);

  return (
    <div className='mb-2 flex items-center gap-3'>
      <div
        className='h-12 w-12 rounded-lg border border-gray-300'
        style={{
          backgroundColor: colorVar,
        }}
      />
      <div className='flex flex-col'>
        <span className='font-bold'>{name}</span>
        <span className='text-gray-500'>{hex}</span>
      </div>
    </div>
  );
}

function ColorPalette({ title, colors }: { title: string; colors: Record<string, string> }) {
  return (
    <div className='p-8'>
      <h2 className='mb-6 border-b border-gray-200 pb-2 text-2xl font-bold'>{title}</h2>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4'>
        {Object.entries(colors).map(([name, colorVar]) => (
          <ColorSwatch key={name} name={name} colorVar={colorVar} />
        ))}
      </div>
    </div>
  );
}

const primaryColors = {
  'Primary 50': 'var(--color-primary-50)',
  'Primary 100': 'var(--color-primary-100)',
  'Primary 200': 'var(--color-primary-200)',
  'Primary 300': 'var(--color-primary-300)',
  'Primary 400': 'var(--color-primary-400)',
  'Primary 500': 'var(--color-primary-500)',
  'Primary 600': 'var(--color-primary-600)',
  'Primary 700': 'var(--color-primary-700)',
  'Primary 800': 'var(--color-primary-800)',
  'Primary 900': 'var(--color-primary-900)',
};

const grayColors = {
  'Gray 50': 'var(--color-gray-50)',
  'Gray 100': 'var(--color-gray-100)',
  'Gray 200': 'var(--color-gray-200)',
  'Gray 300': 'var(--color-gray-300)',
  'Gray 400': 'var(--color-gray-400)',
  'Gray 500': 'var(--color-gray-500)',
  'Gray 600': 'var(--color-gray-600)',
  'Gray 700': 'var(--color-gray-700)',
  'Gray 800': 'var(--color-gray-800)',
  'Gray 900': 'var(--color-gray-900)',
};

const successColors = {
  'Success 100': 'var(--color-success-100)',
  'Success 500': 'var(--color-success-500)',
  'Success 600': 'var(--color-success-600)',
  'Success 800': 'var(--color-success-800)',
};

const dangerColors = {
  'Danger 100': 'var(--color-danger-100)',
  'Danger 500': 'var(--color-danger-500)',
  'Danger 600': 'var(--color-danger-600)',
  'Danger 800': 'var(--color-danger-800)',
};

export function Colors() {
  return (
    <div>
      <ColorPalette title='Primary Colors' colors={primaryColors} />
      <ColorPalette title='Gray Colors' colors={grayColors} />
      <ColorPalette title='Success Colors' colors={successColors} />
      <ColorPalette title='Danger Colors' colors={dangerColors} />
    </div>
  );
}
