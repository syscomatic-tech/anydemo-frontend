import MainLayout from '@/src/components/layouts/MainLayout';
import ContactUs from '@/src/components/contactUs/ContactUs';

export const metadata = {
  title: 'Contact Us',
  description: 'Develop with Next.js, Developed by My Yasin & Ruhul Amin',
};
const contact = () => {
  return (
    <MainLayout>
      <div className='container'>
        <ContactUs />
      </div>
    </MainLayout>
  );
};

export default contact;
