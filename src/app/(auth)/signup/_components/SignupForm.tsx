import { FORM_LABELS, FORM_PLACEHOLDERS } from '@/constants/signup';
import { Button } from '@/components';
import FormField from './FormField';
import EmailVerification from './EmailVerification';
import PhoneVerification from './PhoneVerification';
import PasswordConfirm from './PasswordConfirm';

export default function SignupForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
      <FormField id='name' label={FORM_LABELS.NAME} placeholder={FORM_PLACEHOLDERS.NAME} />
      <FormField
        id='nickname'
        label={FORM_LABELS.NICKNAME}
        placeholder={FORM_PLACEHOLDERS.NICKNAME}
      />
      <FormField id='birth' label={FORM_LABELS.BIRTH} placeholder={FORM_PLACEHOLDERS.BIRTH} />
      <EmailVerification />
      <PhoneVerification />
      <PasswordConfirm />
      <Button type='submit' variant='primary' size='lg' className='flex w-full justify-center py-4'>
        가입하기
      </Button>
    </form>
  );
}
