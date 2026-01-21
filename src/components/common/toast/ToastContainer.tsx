'use client';

import { useToastStore } from '@/store';
import Toast from './Toast';

export default function ToastContainer() {
  const toasts = useToastStore((state) => state.toasts);
  const removeToast = useToastStore((state) => state.removeToast);

  return (
    <div className='pointer-events-none fixed top-4 right-4 z-50 flex flex-col gap-3'>
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className='animate-slide-in-right pointer-events-auto'
          style={{
            animation: 'slide-in-right 0.3s ease-out',
          }}
        >
          <Toast
            variant={toast.variant}
            title={toast.title}
            message={toast.message}
            onClose={() => removeToast(toast.id)}
          />
        </div>
      ))}
    </div>
  );
}
