import styles from './../styles/home.module.css';
import HomePage from '@/src/components/home/homePage';

export default function Home() {
  return (
    <div className={styles.home}>
      <HomePage />
    </div>
  );
}
