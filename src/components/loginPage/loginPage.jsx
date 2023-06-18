import Image from 'next/image';
import login from '../../styles/pages/auth.module.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';

import { useLoginMutation } from '@/src/redux/features/auth/authApi';
import { authenticateWithGoogle } from '../../axios/axios';

export default function LogInPage() {
  const searchParams = useSearchParams();
  const { register, handleSubmit } = useForm();

  const callback = searchParams.get('from');

  const [showPassword, setShowPassword] = useState(false);

  const [loginUser] = useLoginMutation();

  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user]);

  const handleGoogleLogin = () => {
    dispatch(authenticateWithGoogle());
  };

  const onSubmit = async (values) => {
    try {
      await loginUser(values).unwrap();

      if (callback) {
        return router.push(callback);
      }
      router.push('/dashboard/overview');
    } catch (err) {
      toast.error(err?.data?.message ?? err?.message);
    }
  };

  return (
    <div>
      <div className={login.header_logo}>
        <Link href='/'>
          <Image src='/img/header/logo.png' width={40} height={40} alt='logo' />
        </Link>
      </div>
      <div className={login.login}>
        <div className='authContainer'>
          <div className='loginImgArea'>
            <div className='imgBox'>
              <div className='bg'></div>
              <Image src='/img/login.png' width={445} height={485} alt='' />
            </div>
          </div>
          <d className='formArea'>
            <h4>Login your Account</h4>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
              <div className='formControl'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  name='email'
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: 'Invalid email',
                    },
                  })}
                  id='email'
                  placeholder='Enter your email'
                />
              </div>
              <div className='formControl'>
                <label htmlFor='password'>Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  {...register('password', {
                    required: 'Password is required',
                  })}
                  id='password'
                  placeholder='Enter your password'
                />
              </div>
              <div className='controlPassword'>
                <div className='showPassword'>
                  <input
                    onClick={() => setShowPassword(!showPassword)}
                    type='checkbox'
                    id='showPassword'
                  />
                  <label htmlFor='showPassword'>Show Password</label>
                </div>
                <Link href='/forgotPassword' className='forgotPassword'>
                  Forgot Password?
                </Link>
              </div>
              <button type='submit' className='actionBtn'>
                Login
              </button>
              <div className='alternativeLigInOptions'>
                <p>Or login with</p>
                <div className='authIcon'>
                  <Image
                    src='/img/google.png'
                    width={32}
                    height={32}
                    alt='google'
                    onClick={() => handleGoogleLogin()}
                  />
                  <Image
                    src='/img/facebook.png'
                    width={32}
                    height={32}
                    alt='facebook'
                  />
                </div>
                <div className='haveAccount'>
                  <p>Don’t have an account?</p>
                  <Link href='/signUp' className='signUp'>
                    Sign up
                  </Link>
                </div>
              </div>
            </form>
          </d>
        </div>
      </div>
      {/* <Verify /> */}
      {/* <ResendEmail /> */}
    </div>
  );
}
