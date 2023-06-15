'use client';
import React, { useState } from 'react';
import reset from '../../styles/pages/auth.module.css';
import Image from 'next/image';
import { resetPassword } from '@/src/axios/axios';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

const ResetPassword = ({ searchParams }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const token = searchParams.token;

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleResetPassword = () => {
    const data = {
      token,
      newPassword: password,
    };

    if (password === confirmPassword) {
      dispatch(resetPassword(data));
      router.push('/login');
    }
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    setPasswordError('');
  };

  const handleChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
    setPasswordError('');
  };

  const validatePassword = () => {
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
    }
  };

  return (
    <div className={reset.reset}>
      <div className='authContainer'>
        <div className='loginImgArea'>
          <div className='imgBox'>
            <div className='bg'></div>
            <Image src='/img/password.png' width={445} height={485} alt='' />
          </div>
        </div>
        <div className='formArea'>
          <h4>Create New Password</h4>
          <div className='form'>
            <div className={`formControl ${reset.mb_40}`}>
              <label htmlFor='password'>New Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                placeholder='Type your Password'
                value={password}
                onChange={handleChangePassword}
              />
            </div>
            <div className={`formControl ${reset.mb_16}`}>
              <label htmlFor='password'>Confirm Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                placeholder='Type your Password'
                value={confirmPassword}
                onChange={handleChangeConfirmPassword}
                onBlur={validatePassword}
              />
              {passwordError && (
                <div style={{ color: 'red' }}>{passwordError}</div>
              )}
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
            <button className='actionBtn' onClick={handleResetPassword}>
              Reset password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
