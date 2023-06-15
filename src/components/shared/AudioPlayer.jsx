'use client'
import Image from 'next/image';
import a from '../../styles/audioPlayer.module.css';

const AudioPlayer = () => {
  return (
    <div className={a.player}>
      <div className={a.songInfoContainer}>
        <div className={a.songInfo}>
          <div className={a.playerImg}>
            <Image width={48} height={48} src="/img/song.png" alt="songPoster" />
          </div>
          <div className={a.sName}>
            <p>i don't know</p>
            <span>random rain</span>
          </div>
        </div>
        <svg className={a.sm_option} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 3.375L0.75 5.25V1.5L3.75 3.375ZM11.25 3.75H6V4.5H11.25V3.75ZM11.25 6.75V7.5H0.75V6.75H11.25ZM11.25 10.5V9.75H0.75V10.5H11.25Z" fill="#B2B2B2" />
        </svg>
      </div>
      <div className={a.controlArea}>
        <div className={a.controller}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.45205 6.62727L5.12329 5.86364C4.06849 4.62273 2.53425 3.95455 1 3.95455V4.90909C2.24658 4.90909 3.49315 5.48182 4.35616 6.43636L4.45205 6.62727ZM11.6438 11.1136C10.4932 11.1136 9.43836 10.6364 8.57534 9.87273L8 10.6364C8.9589 11.5909 10.3014 12.0682 11.6438 12.0682V13.5L15 11.5909L11.6438 9.68182V11.1136ZM11.6438 5.38636V6.81818L15 4.90909L11.6438 3V4.43182C10.1096 4.43182 8.57534 5.1 7.61644 6.34091L4.35616 10.0636C3.49315 11.0182 2.24658 11.5909 1 11.5909V12.5455C2.53425 12.5455 4.06849 11.8773 5.0274 10.6364L8.28767 6.91364C9.15068 5.95909 10.3973 5.38636 11.6438 5.38636Z" fill="#1FC2C7" />
          </svg>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 3L5 7.619V3.5H3V13.5H5V9.381L13 14V3Z" fill="#B2B2B2" />
          </svg>
          {1 === 1 ?
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14" cy="14" r="9" fill="white" />
              <path d="M4.27403 24.07C2.93689 22.7786 1.87034 21.2338 1.13662 19.5257C0.402889 17.8176 0.016682 15.9806 0.000528595 14.1217C-0.0156248 12.2627 0.338599 10.4192 1.04253 8.69868C1.74646 6.97813 2.78601 5.415 4.1005 4.1005C5.415 2.78601 6.97813 1.74646 8.69868 1.04253C10.4192 0.338599 12.2627 -0.0156248 14.1217 0.000528595C15.9806 0.016682 17.8176 0.402889 19.5257 1.13662C21.2338 1.87034 22.7786 2.93689 24.07 4.27403C26.6202 6.91447 28.0314 10.4509 27.9995 14.1217C27.9676 17.7924 26.4952 21.3038 23.8995 23.8995C21.3038 26.4952 17.7924 27.9676 14.1217 27.9995C10.4509 28.0314 6.91447 26.6202 4.27403 24.07ZM9.97203 8.57203V19.772H12.772V8.57203H9.97203ZM15.572 8.57203V19.772H18.372V8.57203H15.572Z" fill="url(#paint0_linear_1121_678)" />
              <defs>
                <linearGradient id="paint0_linear_1121_678" x1="-2.8162" y1="20.5422" x2="14.8701" y2="4.25534" gradientUnits="userSpaceOnUse">
                  <stop offset="0.0775" stop-color="#2DF1E6" />
                  <stop offset="0.4923" stop-color="#3694B0" />
                  <stop offset="0.524" stop-color="#468DB3" />
                  <stop offset="0.6154" stop-color="#6F79BA" />
                  <stop offset="0.6984" stop-color="#8D6BBF" />
                  <stop offset="0.7694" stop-color="#9F63C2" />
                  <stop offset="0.8201" stop-color="#A660C3" />
                </linearGradient>
              </defs>
            </svg>
            :
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14" cy="14" r="14" fill="url(#paint0_linear_1097_386)" />
              <path d="M10.5 19.25L19.6875 14L10.5 8.75V19.25Z" fill="#FFFFFD" />
              <defs>
                <linearGradient id="paint0_linear_1097_386" x1="-2.8162" y1="20.5422" x2="14.8701" y2="4.25534" gradientUnits="userSpaceOnUse">
                  <stop offset="0.0775" stop-color="#2DF1E6" />
                  <stop offset="0.4923" stop-color="#3694B0" />
                  <stop offset="0.524" stop-color="#468DB3" />
                  <stop offset="0.6154" stop-color="#6F79BA" />
                  <stop offset="0.6984" stop-color="#8D6BBF" />
                  <stop offset="0.7694" stop-color="#9F63C2" />
                  <stop offset="0.8201" stop-color="#A660C3" />
                </linearGradient>
              </defs>
            </svg>}
          <svg style={{ transform: 'rotate(180deg)' }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 3L5 7.619V3.5H3V13.5H5V9.381L13 14V3Z" fill="#B2B2B2" />
          </svg>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 4.5H10V6L13.5 4L10 2V3.5H5.5C3 3.5 1 5.5 1 8C1 8.6 1.1 9.2 1.4 9.8L2.3 9.3C2.1 8.9 2 8.5 2 8C2 6.1 3.6 4.5 5.5 4.5ZM14.6 6.2L13.7 6.7C13.9 7.1 14 7.5 14 8C14 9.9 12.4 11.5 10.5 11.5H6V10L2.5 12L6 14V12.5H10.5C13 12.5 15 10.5 15 8C15 7.4 14.9 6.8 14.6 6.2Z" fill="#1FC2C7" />
          </svg>

        </div>
        <div className={a.timeProgress}>
          <span>0:00</span>
          <div className={a.progress}>
            <div className={a.progressFill} style={{ width: '45%' }}></div>
          </div>
          <span>3:20</span>
        </div>
      </div>
      <div className={a.volumeArea}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 3.375L0.75 5.25V1.5L3.75 3.375ZM11.25 3.75H6V4.5H11.25V3.75ZM11.25 6.75V7.5H0.75V6.75H11.25ZM11.25 10.5V9.75H0.75V10.5H11.25Z" fill="#B2B2B2" />
        </svg>
        <div className={a.volumeProgress}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.79154 0.75L9.29837 1.32713C10.4912 2.43298 11.2423 4.0078 11.2423 5.7581C11.2423 7.50839 10.4904 9.08321 9.29837 10.1891L9.79078 10.7662C10.4868 10.1308 11.0427 9.35726 11.4231 8.495C11.8034 7.63275 11.9999 6.70069 12 5.75826C12.0001 4.81584 11.8037 3.88374 11.4235 3.02143C11.0432 2.15912 10.4874 1.38553 9.79154 0.75V0.75ZM8.07301 2.76201L7.5806 3.33914C7.90185 3.65488 8.15699 4.03144 8.33113 4.44685C8.50527 4.86226 8.59493 5.3082 8.59486 5.75863C8.59479 6.20907 8.50499 6.65498 8.33072 7.07033C8.15645 7.48569 7.90119 7.86217 7.57984 8.17781L8.07225 8.75493C8.8589 7.99854 9.35132 6.93656 9.35132 5.75885C9.35132 4.58114 8.85966 3.51841 8.07301 2.76201V2.76201ZM0 3.48891V8.02728H2.12093L6.05116 10.2965V1.21972L2.12093 3.48891H0ZM5.29477 2.5298V8.98639L2.32365 7.27089H0.756396V4.2453H2.32365L5.29477 2.5298Z" fill="#B2B2B2" />
          </svg>
          <div className={a.volumeProgressFill}>
            <div className={a.volumeProgressFillInner} style={{ width: '20%' }}>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default AudioPlayer