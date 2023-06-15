'use client';
import React, { useState } from 'react';
import forgotPass from '@/src/styles/pages/auth.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { forgetPassword } from '../../axios/axios';

const ForgotPassword = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [userMail, setUserMail] = useState(null);
  const handleForgotPassword = () => {
    const email = {
      email: userMail,
    };
    console.log(email);
    dispatch(forgetPassword(email)); // Use dispatch instead of useDispatch
  };
  return (
    <div className='container'>
      <div className={forgotPass.forgotPass}>
        <div className='authContainer'>
          <div className='loginImgArea'>
            <div className='imgBox'>
              <div className='bg'></div>
              <Image src='/img/password.png' width={445} height={485} alt='' />
            </div>
          </div>
          <div className='formArea'>
            <h4>Forgot Password?</h4>
            <div className='form'>
              <div className={`formControl ${forgotPass.mb_0}`}>
                <label htmlFor='email'>Email</label>
                <input
                  onChange={(e) => setUserMail(e.target.value)}
                  type='email'
                  id='email'
                  placeholder='Enter your email'
                />
              </div>
              <button
                onClick={() => handleForgotPassword()}
                className='actionBtn'
              >
                Reset password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
