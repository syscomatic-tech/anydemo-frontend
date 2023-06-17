'use client';

import Link from 'next/link';
import Image from 'next/image';

import useLocalStorage from '@/src/hooks/useLocalStorage';

import v from '../../styles/resendEmail.module.css';

const ResendEmail = () => {
  const [state] = useLocalStorage('email');
  const email = state;

  return (
    <div className={v.resendEmail}>
      <div className={v.resendEmailContainer}>
        <div className={v.imgBox}>
          <Image src='/img/logoBig.png' width={80} height={80} alt='' />
        </div>
        <h2 className={v.title}>verify your email address</h2>
        <p className={v.tag}>
          <span>
            You’ve entered <strong>{email || 'N/A'}</strong> as the email
            address for your account
          </span>
        </p>
        <p className={v.note}>
          <span>
            Just click on the link that email to complete your signup.
          </span>
        </p>
        <p className={v.note}>
          <span>
            If you don’t see it, you may need to{' '}
            <strong>check your spam</strong> folder.
          </span>
        </p>
        <p className={v.info}>
          <span>If you not got any mail, please clicking button below</span>
        </p>
        <button className={v.action}>Resend Email</button>
        <Link
          href='/login'
          className={
            'w-[399px] h-[48px] px-[32px] py-[13.5px] rounded-[8px] bg-white mb-5 text-center font-semibold'
          }
        >
          Login
        </Link>
        <p className={v.haveIssue}>
          <span>
            Any Question? Email us at{' '}
            <Link href='mailto:anydemo@gmail.com'>
              {' '}
              <strong>anydemo@gmail.com</strong>
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ResendEmail;
