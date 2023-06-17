import styles from './../styles/home.module.css';

import MainLayout from '@/src/components/layouts/MainLayout';
import CreateMusic from '@/src/components/home/createMusic/createMusic';
import GetStarted from '@/src/components/home/getStarted/getStarted';
import Shop from '@/src/components/home/shop/shop';
import Stream from '@/src/components/home/stream/stream';
import HeroSection from '@/src/components/home/heroSection/heroSection';

export default function Home() {
  return (
    <div className={styles.home}>
      <MainLayout>
        <div className='container'>
          <HeroSection />
          <CreateMusic />
          <Stream />
          <Shop />
        </div>
        <GetStarted />
      </MainLayout>
    </div>
  );
}
