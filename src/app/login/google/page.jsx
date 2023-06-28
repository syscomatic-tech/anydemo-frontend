'use client';

import { useOauthSuccessMutation } from '@/src/redux/features/auth/authApi';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

function GoogleLogin() {
  const router = useRouter();

  const [OAuthSuccess] = useOauthSuccessMutation();

  const OAuthLogin = async () => {
    try {
      await OAuthSuccess().unwrap();
      toast.success('Login successful');
      router.push('/dashboard/overview');
    } catch (error) {
      toast.error('Google login failed');
      router.push('/login');
    }
  };

  useEffect(() => {
    OAuthLogin();
  }, []);

  return <div>GoogleLogin</div>;
}

export default GoogleLogin;
