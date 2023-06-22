'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

import { useUpdateProfilePictureMutation } from '@/src/redux/features/profile/profile.api';
import { baseStorageURL } from '@/src/utils/url';
import Overview from '@/src/components/dashboard/Overview';
import Downloads from '@/src/components/dashboard/Downloads';
import MyMusic from '@/src/components/dashboard/MyMusic';
import ManageSubscription from '@/src/components/dashboard/ManageSubscription';
import UserAccount from '@/src/components/dashboard/UserAccount';

import Header from '../shared/header/header';
import AudioPlayer from '../shared/AudioPlayer';
import d from '../../styles/pages/dashboard/dashboard.module.css';

const DashboardLayout = () => {
  const [activeChildren, setActiveChildren] = useState(0);
  const param = useParams();
  const user = useSelector((state) => state.profile.profile);

  const [updateProfilePicture] = useUpdateProfilePictureMutation();

  const Children = () => {
    switch (param.category) {
      case 'overview':
        return <Overview />;
      case 'downloads':
        return <Downloads />;
      case 'myMusic':
        return <MyMusic />;
      case 'manageSubscription':
        return <ManageSubscription />;
      case 'userAccount':
        return <UserAccount />;
      default:
        return <Overview />;
    }
  };
  const lists = [
    {
      icon: '/svg/UserCircleOutline.svg',
      title: 'overview',
      link: '/dashboard/overview',
    },
    {
      icon: '/svg/DownloadOutline.svg',
      title: 'downloads',
      link: '/dashboard/downloads',
    },
    {
      icon: '/svg/ic_outline-music-note.svg',
      title: 'my music',
      link: '/dashboard/myMusic',
    },
    {
      icon: '/svg/Mask group.svg',
      title: 'manage subscription',
      link: '/dashboard/manageSubscription',
    },
    {
      icon: '/svg/mdi_user-outline.svg',
      title: 'user account',
      link: '/dashboard/userAccount',
    },
    {
      icon: '/svg/LogoutOutline.svg',
      title: 'log out',
      link: '/login',
    },
  ];

  const profilePicture = user.profilePicture
    ? `${baseStorageURL}/user/${user.profilePicture}`
    : '/img/user.png';

  const handleProfilePicChange = async (e) => {
    if (e.target.files.length > 1) {
      toast.error('Please select a image to set profile picture');
    }

    const formData = new FormData();

    formData.append('profilePicture', e.target.files[0]);

    try {
      await updateProfilePicture(formData).unwrap();
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <div className='dashboardLayout'>
      <div className='bgEffect1'></div>
      <div className='bgEffect2'></div>
      <Header />
      <div className='container'>
        <div className={d.dashboardBody}>
          <div className={d.mainArea}>
            <div className={d.profile}>
              <div className={d.imgArea}>
                <div className={d.profileImage}>
                  <Image
                    src={profilePicture}
                    width={120}
                    height={120}
                    alt='profile'
                  />
                </div>
                <button className={d.edit}>
                  <Image
                    src='/svg/Plus.svg'
                    width={20}
                    height={20}
                    alt='edit'
                  />
                  <input
                    className='-indent-[999px] cursor-pointer absolute inline opacity-0 w-full h-full inset-0'
                    type='file'
                    accept='image/png, image/gif, image/jpeg'
                    name='image'
                    id='image'
                    onChange={handleProfilePicChange}
                  />
                </button>
              </div>
              <h4>{user?.fullName || 'N/A'}</h4>
            </div>
            <ul className={d.lists}>
              {lists.map((list, index) => (
                <Link key={index} href={list?.link}>
                  <li
                    className={
                      list.link.includes(param.category) ? d.active : ''
                    }
                  >
                    <div className={d.icon}>
                      <Image
                        src={list.icon}
                        width={28}
                        height={28}
                        alt='icon'
                      />
                    </div>
                    <span>{list.title}</span>
                  </li>
                </Link>
              ))}
            </ul>
            <div className={d.divider}></div>
          </div>
          <div className={d.childrenArea}>
            <Children />
          </div>
        </div>
      </div>
      <div>{activeChildren === 2 && <AudioPlayer />}</div>
    </div>
  );
};

export default DashboardLayout;
