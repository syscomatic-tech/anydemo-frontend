'use client';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

import { updateProfile } from '../../axios/axios';

import u from '../../styles/pages/dashboard/userAccount.module.css';

const UserAccount = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    userName: '',
    phone: '',
  });

  const handleForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    await dispatch(updateProfile(formData)); // Use dispatch instead of useDispatch
  };

  return (
    <div className='dashboard_children'>
      <div className='dashboard_children_title'>
        <h4 className='title'>Profile</h4>
        <form className='form'>
          <div className={u.inputArea}>
            <div className='formControl'>
              <label htmlFor='name'>Full Name</label>
              <input
                name='fullName'
                type='text'
                id='name'
                onChange={handleForm}
              />
            </div>
            <div className='formControl'>
              <label htmlFor='email'>Email</label>
              <input
                name='email'
                type='email'
                id='email'
                onChange={handleForm}
              />
            </div>
            <div className='formControl'>
              <label htmlFor='userName'>User Name</label>
              <input
                name='username'
                type='text'
                id='userName'
                onChange={handleForm}
              />
            </div>
            <div className='formControl'>
              <label htmlFor='phone'>Mobile Number</label>
              <input
                name='phoneNumber'
                type='tel'
                id='phone'
                onChange={handleForm}
              />
            </div>
          </div>
          <div className={u.btnArea}>
            <button
              type='submit'
              className='s_btn'
              onClick={handleUpdateProfile}
            >
              Update Profile
            </button>
            <button className='s_btn s_btn_t'>Reset</button>
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
