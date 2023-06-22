'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { useRegisterMutation } from '@/src/redux/features/auth/authApi';
import { authenticateWithGoogle } from '../../axios/axios';

import signUp from '../../styles/pages/auth.module.css';
import { toast } from 'react-hot-toast';

const SignUpPage = () => {
  const { register, handleSubmit } = useForm();
  const token = useSelector((state) => state.auth.token);

  const [registerUser, { isLoading }] = useRegisterMutation();

  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleGoogleLogin = async () => {
    dispatch(authenticateWithGoogle());
    if (token) {
      router.push('/login');
    }
  };

  const onSubmit = async (values) => {
    try {
      await registerUser(values).unwrap();

      router.push('/checkMailToVerify');

      toast.success('User registered successfully');
    } catch (err) {
      console.log({ err });
      toast.error(err?.data?.message ?? err?.message);
    }
  };

  return (
    <div className='container'>
      <div className={signUp.header_logo}>
        <Link href='/'>
          <Image src='/img/header/logo.png' width={40} height={40} alt='logo' />
        </Link>
      </div>
      <div className={signUp.signUp}>
        <div className='authContainer'>
          <div className='loginImgArea'>
            <div className='imgBox'>
              <div className='bg'></div>
              <Image src='/img/signup.png' width={445} height={485} alt='' />
            </div>
          </div>
          <div className='formArea'>
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
                <div className='showPassword'>
                  <input
                    onClick={() => setShowPassword(!showPassword)}
                    type='checkbox'
                    id='showPassword'
                  />
                  <label htmlFor='showPassword'>Show Password</label>
                </div>
              </div>
              <button type='submit' className='actionBtn' disabled={isLoading}>
                {isLoading ? 'Creating account...' : 'Create account'}
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
                  <Image
                    src='/img/facebook.png'
                    width={32}
                    height={32}
                    alt='facebook'
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
