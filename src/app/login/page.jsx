'use client';

import LogInPage from '@/src/components/loginPage/loginPage';

export default function LogIn(params) {
  return (
    <div className='container'>
      <LogInPage {...params} />
    </div>
  );
}
