'use client';
import Image from 'next/image';
import v from '../../styles/verify.module.css';
import Link from 'next/link';
import { verifyEmail } from '../../axios/axios';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

const VerifyPage = ({ searchParams }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const token = searchParams.token;

  const handleVerify = () => {
    if (token) {
      dispatch(verifyEmail(token));
      router.push('/login');
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
            clicking the following link
          </span>
        </p>
        <button className={v.action} onClick={handleVerify}>
          confirm your email
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
