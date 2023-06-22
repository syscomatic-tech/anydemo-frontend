'use client';

import Image from 'next/image';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import SubscriptionPlanCard from '@/src/components/SubscriptionPlanCard';

import o from '@/src/styles/pages/dashboard/overview.module.css';

const Overview = () => {
  const user = useSelector((state) => state.profile.profile);

  return (
    <div className='dashboard_children'>
      <div className={o.overviewCards}>
        <div className={o.card}>
          <div>
            <div className={o.icon}>
              <Image
                src='/svg/ic_outline-music-note.svg'
                width={18}
                height={18}
                alt='icon'
              />
            </div>
            <div className={o.content}>
              <p className={o.counter}>{user?.songCount || '00'}</p>
              <p className={o.name}>Created Songs</p>
            </div>
          </div>
        </div>
        <div className={o.card}>
          <div>
            <div className={o.icon}>
              <Image
                src='/svg/DownloadOutline.svg'
                width={18}
                height={18}
                alt='icon'
              />
            </div>
            <div className={o.content}>
              <p className={o.counter}>{user?.downloadCount || '0'}</p>
              <p className={o.name}>Downloaded</p>
            </div>
          </div>
        </div>
        <div className={o.card}>
          <div>
            <div className={o.icon}>
              <Image src='/svg/tag.svg' width={18} height={18} alt='icon' />
            </div>
            <div className={o.content}>
              <p className={o.counter}>{user?.sales || '0'}</p>
              <p className={o.name}>Sale Songs</p>
            </div>
          </div>
        </div>
        <div className={o.card} style={{ display: 'none' }}>
          <div>
            <div className={o.icon}>
              <Image src='/svg/grow.svg' width={18} height={18} alt='icon' />
            </div>
            <div className={o.content}>
              <p className={o.counter}>${user?.revenue || '0'}</p>
              <p className={o.name}>Revenue</p>
            </div>
          </div>
        </div>
      </div>
      <div className='dashboard_children_title'>
        <div className={o.profileTitle}>
          <h4 className={o.p_title + ' ' + 'title'}>Profile</h4>
          <Link href='/dashboard/user-account'>
            <button className='s_btn'>Edit Profile</button>
          </Link>
        </div>
        <div className={o.profile_info}>
          <div className={o.p_info}>
            <p className={o.name}>Email</p>
            <p className={o.info}>{user?.email || 'N/A'}</p>
          </div>
          <div className={o.p_info}>
            <p className={o.name}>Mobile Number</p>
            <p className={o.info}>{user?.phoneNumber || 'N/A'}</p>
          </div>
          <div className={o.p_info}>
            <p className={o.name}>User Name</p>
            <p className={o.info}>{user?.username || 'N/A'}</p>
          </div>
          <div className={o.p_info}>
            <p className={o.name}>Birthday</p>
            <p className={o.info}>{user?.birthday || 'N/A'}</p>
          </div>
        </div>
      </div>
      <div className='dashboard_children_title'>
        <h4 className='title'>Your Current Plan</h4>
        <SubscriptionPlanCard data={{ selected: true }} />
      </div>
    </div>
  );
};

export default Overview;
