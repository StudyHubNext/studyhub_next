import FormField from '@/app/(auth)/signup/_components/FormField';
import { Button } from '@/components';
import { FORM_LABELS, FORM_PLACEHOLDERS, HELPER_TEXTS } from '@/constants/signup';

export default function EmailVerification() {
  return (
    <div className='flex flex-col'>
      <FormField
        id='email'
        label={FORM_LABELS.EMAIL}
        placeholder={FORM_PLACEHOLDERS.EMAIL}
        helperText={HELPER_TEXTS.EMAIL}
      >
        <Button variant='primary' className='text-nowrap'>
          인증코드전송
        </Button>
      </FormField>
      <FormField id='email' placeholder={FORM_PLACEHOLDERS.EMAIL_CODE}>
        <Button variant='secondary' className='text-nowrap'>
          인증번호확인
        </Button>
      </FormField>
    </div>
  );
}
