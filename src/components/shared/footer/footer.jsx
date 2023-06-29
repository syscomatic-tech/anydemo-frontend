import { useNewsletterMutation } from '@/src/redux/features/contact/contactApi';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const Footer = () => {
  const { register, handleSubmit, reset } = useForm();
  const [newsletter, { isLoading }] = useNewsletterMutation();
  const onSubmit = async (values) => {
    try {
      await newsletter(values).unwrap();
      toast.success('Your Request Sent Successfully!');
      reset();
    } catch (err) {
      toast.error(err?.data?.message ?? err?.message);
    }
  };
  return (
    <div className='w-full h-fit-content'>
      <div className='container'>
        <div className='py-[72px] px-0 w-full min-h-[365px]'>
          <div className='flex justify-between flex-wrap gap-[64px]'>
            <div
              className='w-fit-content'
              data-aos='fade-up'
              data-aos-delay={700}
            >
              <h4 className='font-ubuntu font-normal  text-[28px] leading-[32px] text-white mb-[24px]'>
                Product
              </h4>
              <ul>
                <li className='mt-4'>
                  <a
                    href='#'
                    className='font-ubuntu font-normal  text-[18px] leading-[21px] text-white transition-all hover:text-[#32e5eb]'
                  >
                    Features
                  </a>
                </li>
                <li className='mt-4'>
                  <a
                    href='#'
                    className='font-ubuntu font-normal  text-[18px] leading-[21px] text-white transition-all hover:text-[#32e5eb]'
                  >
                    Integrations
                  </a>
                </li>
                <li className='mt-4'>
                  <a
                    href='#'
                    className='font-ubuntu font-normal  text-[18px] leading-[21px] text-white transition-all hover:text-[#32e5eb]'
                  >
                    Pricing plans
                  </a>
                </li>
                <li className='mt-4'>
                  <a
                    href='#'
                    className='font-ubuntu font-normal  text-[18px] leading-[21px] text-white transition-all hover:text-[#32e5eb]'
                  >
                    Product updates
                  </a>
                </li>
              </ul>
            </div>
            <div
              className='w-fit-content'
              data-aos='fade-up'
              data-aos-delay={700}
            >
              <h4 className='font-ubuntu font-normal  text-[28px] leading-[32px] text-white mb-[24px]'>
                Resources
              </h4>
              <ul>
                <li className='mt-4'>
                  <a
                    href='#'
                    className='font-ubuntu font-normal  text-[18px] leading-[21px] text-white transition-all hover:text-[#32e5eb]'
                  >
                    Blog
                  </a>
                </li>
                <li className='mt-4'>
                  <a
                    href='#'
                    className='font-ubuntu font-normal  text-[18px] leading-[21px] text-white transition-all hover:text-[#32e5eb]'
                  >
                    User guides
                  </a>
                </li>
                <li className='mt-4'>
                  <a
                    href='#'
                    className='font-ubuntu font-normal  text-[18px] leading-[21px] text-white transition-all hover:text-[#32e5eb]'
                  >
                    Community
                  </a>
                </li>
                <li className='mt-4'>
                  <a
                    href='#'
                    className='font-ubuntu font-normal  text-[18px] leading-[21px] text-white transition-all hover:text-[#32e5eb]'
                  >
                    Developers
                  </a>
                </li>
                <li className='mt-4'>
                  <a
                    href='#'
                    className='font-ubuntu font-normal  text-[18px] leading-[21px] text-white transition-all hover:text-[#32e5eb]'
                  >
                    Legal
                  </a>
                </li>
                <li className='mt-4'>
                  <a
                    href='#'
                    className='font-ubuntu font-normal  text-[18px] leading-[21px] text-white transition-all hover:text-[#32e5eb]'
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div
              className='w-fit-content'
              data-aos='fade-up'
              data-aos-delay={700}
            >
              <h4 className='font-ubuntu font-normal  text-[28px] leading-[32px] text-white mb-[24px]'>
                Company
              </h4>
              <ul>
                <li className='mt-4'>
                  <a
                    href='#'
                    className='font-ubuntu font-normal  text-[18px] leading-[21px] text-white transition-all hover:text-[#32e5eb]'
                  >
                    About us
                  </a>
                </li>
                <li className='mt-4'>
                  <a
                    href='#'
                    className='font-ubuntu font-normal  text-[18px] leading-[21px] text-white transition-all hover:text-[#32e5eb]'
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div
              className='w-fit-content'
              data-aos='fade-up'
              data-aos-delay={700}
            >
              <h4 className='font-ubuntu font-normal  text-[28px] leading-[32px] text-white mb-[24px]'>
                Subscribe to our newsletter
              </h4>
              <ul>
                <li className='mt-4'>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='subscribeForm'
                  >
                    <input
                      type='email'
                      id='email'
                      placeholder='Enter Your Email'
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: 'Invalid email',
                        },
                      })}
                      required
                    />
                    <button type='submit' className='mainBtn'>
                      <span>{isLoading ? 'Subscribing...' : 'Subscribe'}</span>
                    </button>
                    <div className='gradientBorder'></div>
                  </form>
                </li>
              </ul>
            </div>
          </div>
          <div className='w-full h-[.5px] bg-gray-600 mt-[32px]'></div>
          <div className='mt-[32px] flex flex-wrap gap-[32px] items-center justify-between'>
            <p className='font-ubuntu font-normal text-[14px] leading-[16px] text-white'>
              ©️ 2023 AnyDemo, Inc . Privacy . Terms . Sitemap
            </p>
            <ul className='flex items-center gap-[16px]'>
              <li className='mt-4 flex items-center gap-x-2'>
                <span className=' text-white '>Follow us on</span>
                <a href='https://twitter.com/any_demo' target='_blank'>
                  <Image
                    src='/img/footer/twitter.png'
                    width={32}
                    height={32}
                    alt='twitter'
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
