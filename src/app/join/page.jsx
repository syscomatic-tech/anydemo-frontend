import MainLayout from '@/src/components/layouts/MainLayout';
import Join from '@/src/components/join/Join';

export const metadata = {
  title: 'Join Us',
  description: 'Develop with Next.js, Developed by My Yasin & Ruhul Amin',
};
const joinPage = () => {
  return (
    <MainLayout>
      <div className='container'>
        <Join />
      </div>
    </MainLayout>
  );
};

export default joinPage;
