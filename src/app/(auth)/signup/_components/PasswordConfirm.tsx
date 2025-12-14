import { FORM_LABELS, FORM_PLACEHOLDERS, HELPER_TEXTS } from '@/constants/signup';
import FormField from '@/app/(auth)/signup/_components/FormField';

export default function PasswordConfirm() {
  return (
    <div className='flex flex-col gap-2'>
      <FormField
        id='password'
        type='password'
        label={FORM_LABELS.PASSWORD}
        placeholder={FORM_PLACEHOLDERS.PASSWORD}
        helperText={HELPER_TEXTS.PASSWORD}
      />
      <FormField
        id='password-confirm'
        type='password'
        placeholder={FORM_PLACEHOLDERS.PASSWORD_CONFIRM}
      />
    </div>
  );
}
