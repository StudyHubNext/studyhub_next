import { Input, Text } from '@/components';

interface FormFieldProps {
  id: string;
  label?: string;
  type?: string;
  placeholder?: string;
  helperText?: string;
  children?: React.ReactNode;
}

export default function FormField({
  id,
  label,
  type = 'text',
  placeholder,
  helperText,
  children,
}: FormFieldProps) {
  return (
    <div className='flex w-full flex-col gap-2'>
      <div className='flex items-center gap-3'>
        <label htmlFor={id}>{label}</label>
        {helperText && (
          <Text variant='small' className='text-primary-500'>
            {helperText}
          </Text>
        )}
      </div>
      <div className='flex gap-2'>
        <Input id={id} type={type} placeholder={placeholder} className='h-12' />
        {children}
      </div>
    </div>
  );
}
