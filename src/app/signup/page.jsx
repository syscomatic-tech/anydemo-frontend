'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { useRegisterMutation } from '@/src/redux/features/auth/authApi';

import Loading from '@/src/components/shared/Loading';
import { baseURL } from '@/src/utils/url';
import { toast } from 'react-hot-toast';

const SignUpPage = () => {
  const { register, handleSubmit } = useForm();
  const token = useSelector((state) => state.auth.token);

  const [registerUser, { isLoading }] = useRegisterMutation();

  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleGoogleLogin = async () => {
    router.push(`${baseURL}/auth/google`);
    if (token) {
      router.push('/login');
    }
  };

  const onSubmit = async (values) => {
    try {
      await registerUser(values).unwrap();

      toast.success('User registered successfully');

      router.push('/login');
    } catch (err) {
      console.log({ err });
      toast.error(err?.data?.message ?? err?.message);
    }
  };

  return (
    <div className='container'>
      <div className='h-[116px] flex items-center justify-start'>
        <Link href='/'>
          <Image src='/img/header/logo.png' width={40} height={40} alt='logo' />
        </Link>
      </div>
      <div className='w-full min-h-[711px] h-full bg-[#0F0E19] flex items-center justify-center'>
        <div className='authContainer'>
          <div
            className='loginImgArea'
            data-aos='fade-right'
            data-aos-delay={300}
          >
            <div className='imgBox'>
              <div className='bg'></div>
              <Image src='/img/signup.png' width={445} height={485} alt='' />
            </div>
          </div>
          <div className='formArea' data-aos='fade-left' data-aos-delay={300}>
            <h4>Create Account</h4>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
              <div className='formControl'>
                <label htmlFor='text'>Full Name</label>
                <input
                  type='text'
                  id='name'
                  placeholder='Enter your full name'
                  {...register('fullName', {
                    required: 'Full name is required',
                  })}
                />
              </div>
              <div className='formControl'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  id='email'
                  {...register('email', {
                    required: 'Emaill is required',
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: 'Invalid email',
                    },
                  })}
                  placeholder='Enter your email'
                />
              </div>
              <div className='formControl'>
                <label htmlFor='password'>Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  {...register('password', {
                    required: 'Password is required',
                  })}
                  placeholder='Type your Password'
                />
              </div>
              <div className='controlPassword'>
                <div className='showPassword cursor-pointer'>
                  <input
                    onClick={() => setShowPassword(!showPassword)}
                    type='checkbox'
                    id='showPassword'
                    className='cursor-pointer accent-primary'
                  />
                  <label
                    htmlFor='showPassword'
                    className='cursor-pointer font-semibold'
                  >
                    Show Password
                  </label>
                </div>
              </div>
              {isLoading && <Loading></Loading>}
              <button
                type='submit'
                className='mainBtn mt-10  w-full'
                disabled={isLoading}
              >
                <span className=''>Signup</span>
              </button>
              <div className='alternativeLigInOptions'>
                <p>Or Sign up with</p>
                <div className='authIcon'>
                  <Image
                    src='/img/google.png'
                    width={32}
                    height={32}
                    alt='google'
                    onClick={handleGoogleLogin}
                  />
                </div>
                <div className='haveAccount'>
                  <p>Already have an account?</p>
                  <Link href='/login' className='login'>
                    Login
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
