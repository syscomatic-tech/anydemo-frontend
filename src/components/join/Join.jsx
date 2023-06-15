import Image from 'next/image';
import j from '../../styles/pages/join.module.css';
const Join = () => {
  return (
    <div className={j.joinPage}>
      <div className="pageTitle">
        <h1><span>Join</span> For Monetization</h1>
        <p>Want to monetize your voice? we can help</p>
      </div>
      <div className={j.joinContent}>
        <div className={j.joinLeft}>
          <Image src="/img/unsplash.png" width={570} height={774} />
        </div>
        <div className={j.joinRight}>
          <div className="form">
            <div className='formControl'>
              <label htmlFor="name">Artist’s Name</label>
              <input type="text" id="name" placeholder="Enter Your Name" />
            </div>
            <div className='formControl'>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter Your Email" />
            </div>
            <div className='formControl'>
              <label htmlFor="phone">Mobile Number</label>
              <input type="tel" id="phone" placeholder="Enter Your Number" />
            </div>
            <div className='formControl'>
              <label htmlFor="FB_link">Artist’s Facebook Link</label>
              <input type="url" id="FB_link" placeholder="Enter Your Facebook Link" />
            </div>
            <div className='formControl'>
              <label htmlFor="message">Message</label>
              <textarea style={{ maxHeight: '80px' }} type="text" id="message" />
            </div>
            <div className={j.actionBtn}>
              <div><button className='actionBtn actionBtn_secondary'>Reset</button></div>
              <div><button className='actionBtn'>Submit</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Join