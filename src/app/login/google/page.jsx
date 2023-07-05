'use client';

import { authenticate, selectToken } from '@/src/redux/features/auth/authSlice';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

function GoogleLogin() {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const searchParams = useSearchParams();

  const auth = searchParams.get('auth');

  const OAuthLogin = async (auth) => {
    const token = JSON.parse(auth);

    if (token) {
      dispatch(
        authenticate({
          user: token.user,
          token: token.accessToken,
        })
      );

      toast.success('Log in successful');
      router.push('/dashboard/overview');
    } else {
      toast.error('Google log in failed');
      router.push('/login');
    }
  };

  useEffect(() => {
    if (token) {
      return router.push('/dashboard/overview');
    }
    OAuthLogin(auth);
  }, [auth, token]);

  return <div>GoogleLogin</div>;
}

export default GoogleLogin;
