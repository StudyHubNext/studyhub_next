import { forwardRef, InputHTMLAttributes, ReactNode, useId } from 'react';
import { cn } from '@/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errorMessage?: string;
  icon?: ReactNode;
}

function Input(
  { className, type, error = false, errorMessage, icon, id: providedId, ...props }: InputProps,
  ref: React.Ref<HTMLInputElement>,
) {
  const autoId = useId();
  const id = providedId || autoId;
  const errorId = `error-${id}`;

  return (
    <div className='w-full'>
      <div className='relative flex items-center'>
        {icon && (
          <div className='pointer-events-none absolute left-3 flex items-center'>{icon}</div>
        )}
        <input
          id={id}
          type={type}
          className={cn(
            'flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400',
            'focus:ring-primary-500/50 focus:border-primary-500 focus:ring-2 focus:outline-none',
            'disabled:cursor-not-allowed disabled:opacity-50',
            {
              'border-danger-500 focus:ring-danger-500/50': error,
              'pl-10': icon,
            },
            className,
          )}
          ref={ref}
          aria-invalid={error}
          aria-describedby={error && errorMessage ? errorId : undefined}
          {...props}
        />
      </div>
      {error && errorMessage && (
        <p id={errorId} className='text-danger-500 mt-1 text-xs'>
          {errorMessage}
        </p>
      )}
    </div>
  );
}

export default forwardRef<HTMLInputElement, InputProps>(Input);
