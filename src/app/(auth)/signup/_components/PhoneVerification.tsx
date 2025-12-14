import { Button } from '@/components';
import { FORM_LABELS, FORM_PLACEHOLDERS } from '@/constants/signup';
import FormField from './FormField';

export default function PhoneVerification() {
  return (
    <div className='flex flex-col'>
      <FormField id='phone' label={FORM_LABELS.PHONE} placeholder={FORM_PLACEHOLDERS.PHONE}>
        <Button variant='primary' className='text-nowrap'>
          인증코드전송
        </Button>
      </FormField>
      <FormField id='phone-code' placeholder={FORM_PLACEHOLDERS.PHONE_CODE}>
        <Button variant='secondary' className='text-nowrap'>
          인증번호확인
        </Button>
      </FormField>
    </div>
  );
}
