import { create } from 'zustand';
import type { ToastItem } from '@/components/common/toast/types';

interface ToastStore {
  toasts: ToastItem[];
  addToast: (toast: Omit<ToastItem, 'id'>) => void;
  removeToast: (id: string) => void;
  clearToasts: () => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],

  addToast: (toast) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast: ToastItem = {
      id,
      ...toast,
    };

    set((state) => ({
      toasts: [newToast, ...state.toasts],
    }));

    if (toast.duration !== 0) {
      setTimeout(() => {
        set((state) => ({
          toasts: state.toasts.filter((t) => t.id !== id),
        }));
      }, toast.duration || 5000);
    }
  },

  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    })),

  clearToasts: () => set({ toasts: [] }),
}));

export const useToast = () => {
  const addToast = useToastStore((state) => state.addToast);

  return {
    toast: (title: string, options?: { message?: string; duration?: number }) => {
      addToast({
        variant: 'success',
        title,
        message: options?.message,
        duration: options?.duration,
      });
    },
    success: (title: string, options?: { message?: string; duration?: number }) => {
      addToast({
        variant: 'success',
        title,
        message: options?.message,
        duration: options?.duration,
      });
    },
    warning: (title: string, options?: { message?: string; duration?: number }) => {
      addToast({
        variant: 'warning',
        title,
        message: options?.message,
        duration: options?.duration,
      });
    },
    error: (title: string, options?: { message?: string; duration?: number }) => {
      addToast({
        variant: 'error',
        title,
        message: options?.message,
        duration: options?.duration,
      });
    },
  };
};
