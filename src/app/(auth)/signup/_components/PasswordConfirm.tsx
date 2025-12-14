import { FORM_LABELS, FORM_PLACEHOLDERS, HELPER_TEXTS } from '@/constants/signup';
import FormField from '@/app/(auth)/signup/_components/FormField';
import { Input } from '@/components';

export default function PasswordConfirm() {
  return (
    <div className='flex flex-col gap-2'>
      <FormField
        id='password'
        label={FORM_LABELS.PASSWORD}
        placeholder={FORM_PLACEHOLDERS.PASSWORD}
        helperText={HELPER_TEXTS.PASSWORD}
      />
      <Input
        id='password'
        type='text'
        placeholder={FORM_PLACEHOLDERS.PASSWORD_CONFIRM}
        className='h-12'
      />
    </div>
  );
}
