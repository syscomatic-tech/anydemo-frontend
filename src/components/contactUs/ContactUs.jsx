import Image from 'next/image';
import Link from 'next/link';

import c from '../../styles/pages/contact.module.css';

const ContactUs = () => {
  return (
    <div className={c.content}>
      <div className={c.heading + ' ' + 'pageTitle'}>
        <h1>Get In Touch</h1>
        <p>
          lputate Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos.
        </p>
      </div>
      <div className={c.box}>
        <div className={c.infoArea}>
          <div className={c.title}>
            <h3>Contact Information</h3>
            <p>Say something to start a live chat!</p>
          </div>
          <ul className={c.lists}>
            <li>
              <Image src='/svg/phone.svg' width={20} height={20} alt='phone' />
              <span>+1012 3456 789</span>
            </li>
            <li>
              <Image src='/svg/mail.svg' width={20} height={20} alt='mail' />
              <span>demo@gmail.com</span>
            </li>
            <li>
              <Image
                src='/svg/location.svg'
                width={20}
                height={20}
                alt='location'
              />
              <span>
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </span>
            </li>
          </ul>
          <div className={c.social}>
            <Link href='#'>
              <Image
                src='/svg/twitter.svg'
                width={15}
                height={12}
                alt='twitter'
              />
            </Link>
            <Link href='#'>
              <Image
                src='/svg/instagram.svg'
                width={15}
                height={15}
                alt='instagram'
              />
            </Link>
            <Link href='#'>
              <Image
                src='/svg/discord.svg'
                width={15}
                height={10}
                alt='discord'
              />
            </Link>
          </div>
          <div className={c.bg1}></div>
          <div className={c.bg2}></div>
        </div>
        <div className={c.formArea}>
          <div className={c.form + ' ' + 'form'}>
            <div className={c.title}>
              <h3>Send Us a Message</h3>
            </div>
            <div className={c.inputArea}>
              <div className='formControl'>
                <label htmlFor='firstName'>First Name</label>
                <input type='text' id='firstName' />
              </div>
              <div className='formControl'>
                <label htmlFor='lastName'>Last Name</label>
                <input type='text' id='lastName' />
              </div>
            </div>
            <div className={c.inputArea}>
              <div className='formControl'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' />
              </div>
              <div className='formControl'>
                <label htmlFor='phone'>Phone Number</label>
                <input type='text' id='phone' />
              </div>
            </div>
            <div className='formControl'>
              <label htmlFor='message'>Message</label>
              <textarea
                rows='4'
                type='text'
                id='message'
                placeholder='Write your message...'
              />
            </div>
            <div className={c.btn}>
              <button className='actionBtn'>Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
