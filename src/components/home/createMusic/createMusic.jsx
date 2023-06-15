import createMusic from '../../../styles/pages/create-music.module.css'
import Image from 'next/image';

export default function CreateMusic() {
  return (
    <div className={createMusic.createMusic_container}>
      <div className={createMusic.createMusic_title}>
        <h1>Create Music</h1>
        <p>Upload your song idea, pick any voice in our catalog and let a professional perform your next hit.</p>
      </div>
      <div className={createMusic.card_container}>
        <div className={createMusic.card_wrapper}>
          <div className={createMusic.card}>
            <div className={createMusic.up_image}>
              <Image src='/img/create-music/cloud.png' width={103} height={69} alt="alt" />
            </div>
          </div>
          <div className={createMusic.card_border}>
            <Image src='/img/create-music/border-music.png' width={339} height={164} alt="alt" />
          </div>
          <div className={createMusic.card_content}>
            <p>Upload Song</p>
          </div>
        </div>
        <div className={createMusic.card_wrapper}>
          <div className={createMusic.card}>
            <div className={createMusic.up_image}>
              <Image src='/img/create-music/vibes.png' width={81} height={81} alt="alt" />
            </div>
          </div>
          <div className={createMusic.card_border}>
            <Image src='/img/create-music/border-music.png' width={339} height={164} alt="alt" />
          </div>
          <div className={createMusic.card_content}>
            <p>License Voice</p>
          </div>
        </div>
        <div className={createMusic.card_wrapper}>
          <div className={createMusic.card}>
            <div className={createMusic.up_image}>
              <Image src='/img/create-music/music-arrow.png' width={81} height={81} alt="alt" />
            </div>
          </div>
          <div className={createMusic.card_border}>
            <Image src='/img/create-music/border-music.png' width={339} height={164} alt="alt" />
          </div>
          <div className={createMusic.card_content}>
            <p>Create Music</p>
          </div>
        </div>
      </div>
    </div >
  )
}