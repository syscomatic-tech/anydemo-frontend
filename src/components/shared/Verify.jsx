'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'react-hot-toast';

import { useVerifyEmailAddressMutation } from '@/src/redux/features/auth/authApi';
import v from '@/src/styles/verify.module.css';

const VerifyPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const token = searchParams.get('token');

  const [verifyEmailAddress, { isLoading }] = useVerifyEmailAddressMutation();

  const handleVerify = async () => {
    try {
      await verifyEmailAddress({ token }).unwrap();
      toast.success('Email verification successful');
      router.push('/login');
    } catch (err) {
      console.log({ err });
      toast.error(err?.data?.message ?? err?.message);
    }
  };
  return (
    <div className={v.verify}>
      <div className={v.verifyContainer}>
        <div className={v.imgBox}>
          <Image src='/img/logoBig.png' width={80} height={80} alt='' />
        </div>
        <h2 className={v.title}>Verify your identity</h2>
        <p className={v.tag}>
          <span>
            Thank you for signing up. Please verify your email address by
            clicking the following button
          </span>
        </p>
        <button className={v.action} onClick={handleVerify}>
          {isLoading ? ' confirming your email...' : ' confirm your email'}
        </button>
        <p className={v.haveIssue}>
          <span>Have any issues? Visit</span> <Link href='#'> contact us</Link>
        </p>
        <p className={v.contact}>
          <span>
            If you got this mail as spam then click on "looks safe" or "Not
            spam". Hopefully, the button will work, If the button not working
            then mail your email address at
          </span>{' '}
          <Link href='mailto:web@anydemo.com'>web@anydemo.com</Link>
          <span> or Call at </span>
          <Link href='tel:0244545254245'></Link>
          <span>, </span>
          <Link href='tel:024554532354'>024554532354</Link>
        </p>
      </div>
    </div>
  );
};

export default VerifyPage;
