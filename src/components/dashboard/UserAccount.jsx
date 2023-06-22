'use client';

import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { selectProfile } from '@/src/redux/features/profile/profileSlice';
import { useUpdateProfileMutation } from '@/src/redux/features/profile/profile.api';

import u from '../../styles/pages/dashboard/userAccount.module.css';

const UserAccount = () => {
  const user = useSelector(selectProfile);
  const token = useSelector((state) => state.auth.token);

  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  const {
    register,
    handleSubmit,
    formState: { isDirty },
  } = useForm({
    defaultValues: {
      fullName: user.fullName,
      email: user.email,
      username: user.username,
      phoneNumber: user.phoneNumber,
    },
  });

  const onSubmit = async (values) => {
    try {
      await updateProfile(values).unwrap();
      toast.success('Profile updated successfully');
    } catch (err) {
      toast.error(err?.data?.message ?? err?.message);
    }
  };

  return (
    <div className='dashboard_children'>
      <div className='dashboard_children_title'>
        <h4 className='title'>Profile</h4>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <div className={u.inputArea}>
            <div className='formControl'>
              <label htmlFor='name'>Full Name</label>
              <input
                type='text'
                id='name'
                {...register('fullName', { required: 'Full name is required' })}
              />
            </div>
            <div className='formControl'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                {...register('email', { required: 'Email is required' })}
              />
            </div>
            <div className='formControl'>
              <label htmlFor='userName'>User Name</label>
              <input
                type='text'
                id='userName'
                {...register('username', { required: 'Username is required' })}
              />
            </div>
            <div className='formControl'>
              <label htmlFor='phone'>Mobile Number</label>
              <input
                type='tel'
                id='phone'
                {...register('phoneNumber', {
                  // pattern: {
                  //   value: /^(?:(?:\+|)?\d{13}$/,
                  //   message: 'Please enter a valid phone number',
                  // },
                })}
              />
            </div>
          </div>
          <div className={u.btnArea}>
            <button
              type='submit'
              className='s_btn'
              disabled={!isDirty | isLoading}
            >
              {isLoading ? ' Updating Profile' : ' Update Profile'}
            </button>
            <button type='reset' className='s_btn s_btn_t' disabled={isLoading}>
              Reset
            </button>
          </div>
        </form>
      </div>
      <div className='dashboard_children_title'>
        <h4 className='title'>Password</h4>
        <div className={u.subCard}>
          <p>
            Once I have this information, I can guide you through the process of
            changing your password
          </p>
          <Link href={token ? `/reset-password?token=${token}` : '/login'}>
            <button className='s_btn'>Change password</button>
          </Link>
        </div>
      </div>
      <div className='dashboard_children_title'>
        <h4 className='title'>Delete Account</h4>
        <div className={u.subCard}>
          <p>
            Once I have this information, I can guide you through the process of
            changing your password
          </p>
          <button className='s_btn'>Delete Account</button>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
