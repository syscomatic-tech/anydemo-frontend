import Image from 'next/image';
import login from '../../styles/pages/auth.module.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

import { loginUser, authenticateWithGoogle } from '../../axios/axios';

export default function LogInPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user]);

  const handleLogin = () => {
    const userData = {
      email: formData.email,
      password: formData.password,
    };
    dispatch(loginUser(userData)); // Use dispatch instead of useDispatch
  };

  const handleGoogleLogin = () => {
    dispatch(authenticateWithGoogle());
  };

  const handleForm = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          <div className='formArea'>
            <h4>Login your Account</h4>
            <div className='form'>
              <div className='formControl'>
                <label htmlFor='email'>Email</label>
                <input
                  onChange={handleForm}
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Enter your email'
                />
              </div>
              <div className='formControl'>
                <label htmlFor='password'>Password</label>
                <input
                  onChange={handleForm}
                  type={showPassword ? 'text' : 'password'}
                  name='password'
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
              <button onClick={() => handleLogin()} className='actionBtn'>
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
            </div>
          </div>
        </div>
      </div>
      {/* <Verify /> */}
      {/* <ResendEmail /> */}
    </div>
  );
}
