import React from 'react';
import { type VariantProps } from 'class-variance-authority';
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

import { cn } from '@/utils';
import { toastVariants, toastIconVariants, toastCloseButtonVariants } from './toastVariants';

interface ToastProps extends VariantProps<typeof toastVariants> {
  title: string;
  message?: string;
  onClose?: () => void;
  className?: string;
}

export default function Toast({ variant, title, message, onClose, className }: ToastProps) {
  const IconComponent = {
    success: CheckCircleIcon,
    warning: ExclamationTriangleIcon,
    error: XCircleIcon,
  }[variant || 'success'];

  return (
    <div className={cn(toastVariants({ variant }), className)} role='alert'>
      <IconComponent className={toastIconVariants({ variant })} />

      <div className='flex-1'>
        <h3 className='text-sm font-semibold'>{title}</h3>
        {message && <p className='mt-1 text-sm'>{message}</p>}
      </div>

      {onClose && (
        <button
          type='button'
          onClick={onClose}
          className={toastCloseButtonVariants({ variant })}
          aria-label='닫기'
        >
          <XMarkIcon />
        </button>
      )}
    </div>
  );
}
