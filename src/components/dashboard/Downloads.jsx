'use client';
import { useEffect, useState } from 'react';
import d from '../../styles/pages/dashboard/downloads.module.css';
import Image from 'next/image';
import AudioPlayer from '@/src/components/shared/AudioPlayer';
import { useDispatch } from 'react-redux';
import { downloadedMusicList } from '@/src/axios/axios';
const Downloads = () => {
  const dispatch = useDispatch();

  const [showOptions, setShowOptions] = useState(null);

  useEffect(() => {
    dispatch(downloadedMusicList());
  }, []);

  return (
    <div className='dashboard_children'>
      <div className='dashboard_children_title'>
        <h4>Listen Your Downloaded Music</h4>
      </div>
      <div className={d.container}>
        <div className={d.songs}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <div key={index} className={d.song}>
              <div className={d.song_title}>
                <div className={d.song_img}>
                  <Image width={48} height={48} src='/img/song.png' alt='' />
                </div>
                <span className={d.songName}>A Sky Full</span>
              </div>

              <div className={d.info}>
                <span className={d.category}>Bettles</span>
                <span className={d.time}>5:21</span>
                <div className={d.icons}>
                  <div className={d.playIcon}>
                    <Image width={32} height={32} src='/svg/play.svg' alt='' />
                  </div>
                  <div className={d.threeDotsIcon}>
                    <Image
                      width={20}
                      height={20}
                      src='/svg/threeDots.svg'
                      alt=''
                      onClick={() =>
                        setShowOptions(showOptions === index ? null : index)
                      }
                    />
                    {showOptions === index && (
                      <div className={d.options}>
                        <ul>
                          <li>Remove from list</li>
                          <li>Share</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={d.player}>
        <AudioPlayer />
      </div>
    </div>
  );
};

export default Downloads;
