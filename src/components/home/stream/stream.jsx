import Image from 'next/image'
import stream from '../../../styles/pages/stream.module.css'

export default function Stream() {
  return (
    <div className={stream.stream_container}>
      <div className={stream.left_img_div}>
        <Image className={stream.img_one} src="/img/stream/1.png" width={102} height={102} alt="circle" />
        <Image className={stream.img_two} src="/img/stream/2.png" width={550} height={400} alt="circle" />
        <Image className={stream.img_three} src="/img/stream/3.png" width={91} height={91} alt="circle" />
        <Image className={stream.musicIcon} src="/img/musicBtn.svg" width={80} height={80} alt="play" />
      </div>
      <div className={stream.right_text_div}>
        <div className={stream.right_text_div_title}>
          <h2>Share Your <span>Stream</span></h2>
          <p>What if you could have a team of highly skilled artificial intelligent music composers at your disposal to write a smash hit song?</p>
          <p>Upload your song idea ,pick any voice in our catalog and let a professional perform your next hit.</p>
        </div>
        <div className={stream.right_text_div_btn}>
          <div className={stream.learn_btn}><p>Learn more</p></div>
          <div className={stream.try_btn}><p>Try Now</p></div>
        </div>
      </div>
    </div>
  )
}