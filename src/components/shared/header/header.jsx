'use client';
import Image from 'next/image';
import header from './../../../styles/pages/header.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '@/src/axios/axios';

const Header = () => {
  const router = useRouter();
  const pathName = usePathname();
  const dispatch = useDispatch();
  const [activeMobNav, setActiveMobNav] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const user = useSelector((state) => state.profile.profile);

  console.log('user', user);
  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      setIsLogin(true);
      dispatch(getProfile());
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setIsLogin(false);
    router.push('/login');
  };
  const lists = [
    {
      icon: '/svg/UserCircleOutline.svg',
      title: 'Overview',
      path: '/dashboard/overview',
    },
    {
      icon: '/svg/DownloadOutline.svg',
      title: 'Downloads',
      path: '/dashboard/downloads',
    },
    {
      icon: '/svg/ic_outline-music-note.svg',
      title: 'My Music',
      path: '/dashboard/myMusic',
    },
    {
      icon: '/svg/Mask group.svg',
      title: 'Manage Subscription',
      path: '/dashboard/manageSubscription',
    },
    {
      icon: '/svg/mdi_user-outline.svg',
      title: 'User Account',
      path: '/dashboard/userAccount',
    },
    // {
    //   icon: '/svg/LogoutOutline.svg',
    //   title: 'Log Out',
    //   path: '/login'
    // }
  ];
  const mainMenu = [
    {
      title: 'create',
      path: '/create',
    },
    {
      title: 'stream',
      path: '#',
      status: 'disabled',
    },
    {
      title: 'shop',
      path: '#',
      status: 'disabled',
    },
    {
      title: 'pricing',
      path: '/pricing',
    },
    {
      title: 'join',
      path: '/join',
    },
    {
      title: 'contact',
      path: '/contact',
    },
  ];

  return (
    <div className={header.header}>
      <div className='container'>
        <header className={header.header_container}>
          <div className={header.header_logo}>
            <Link href='/'>
              <Image
                src='/img/header/logo.png'
                width={40}
                height={40}
                alt='logo'
              />
            </Link>
          </div>
          <div
            className={
              header.header_links + ' ' + (isLogin ? header.profile_sm : '')
            }
            style={{ display: activeMobNav ? 'flex' : '' }}
          >
            <ul>
              {mainMenu.map((menu, index) => (
                <li
                  key={index}
                  style={{ opacity: menu.status === 'disabled' ? 0.4 : 1 }}
                  className={pathName.includes(menu.path) ? header.active : ''}
                >
                  {menu.status === 'disabled' ? (
                    <span>{menu.title}</span>
                  ) : (
                    <Link href={menu.path}>{menu.title}</Link>
                  )}
                </li>
              ))}
              {isLogin && (
                <li className='lg_d_none' onClick={() => handleLogout()}>
                  <Link
                    href=''
                    style={{ gap: '18px' }}
                    className={header.auth + ' ' + 'primaryBtn fillBtn'}
                  >
                    <Image
                      src='/svg/LogoutOutline.svg'
                      width={18}
                      height={18}
                      alt='icon'
                    />
                    Log Out
                  </Link>
                </li>
              )}
            </ul>
            {isLogin ? (
              <div className={header.profile}>
                <div
                  className={
                    header.header_profile + ' ' + header.header_profile_logo
                  }
                  onClick={() => setActiveMobNav(!activeMobNav)}
                >
                  <Image
                    src='/img/header/profile.png'
                    width={40}
                    height={40}
                    alt='profile'
                  />
                  <p>{user?.fullName}</p>
                </div>
                {activeMobNav && (
                  <div className={header.profile_links}>
                    <ul>
                      {lists.map((list, index) => (
                        <Link key={index} href={list.path}>
                          <li>
                            <div>
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
                      <li
                        onClick={() => handleLogout()}
                        style={{ paddingTop: '20px' }}
                      >
                        <div>
                          <Image
                            src='/svg/LogoutOutline.svg'
                            width={28}
                            height={28}
                            alt='icon'
                          />
                        </div>
                        <span>Log Out</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div className={header.header_profile}>
                <Link
                  href='/login'
                  className={header.auth + ' ' + 'primaryBtn btnTransparent'}
                >
                  Sign In
                </Link>
                <Link
                  href='/signUp'
                  className={header.auth + ' ' + 'primaryBtn fillBtn'}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
          <div
            className={header.bar}
            onClick={() => setActiveMobNav(!activeMobNav)}
          >
            <Image
              src='/img/header/burger.png'
              width={16.5}
              height={10.5}
              alt='bar'
            />
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
