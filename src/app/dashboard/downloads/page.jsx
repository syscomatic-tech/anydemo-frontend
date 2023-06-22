'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';

import { streamMusic } from '@/src/axios/axios';
import { useGetDownloadedMusicQuery } from '@/src/redux/features/music/musicApi';

import d from '@/src/styles/pages/dashboard/downloads.module.css';

const Downloads = () => {
  const dispatch = useDispatch();
  const { data: downloadedMusics } = useGetDownloadedMusicQuery();

  const [showOptions, setShowOptions] = useState(null);

  const onStreamMusic = (music) => {
    const musicData = {
      _id: music.music,
      title: music.title,
      author: music.author.fullName,
    };
    dispatch(streamMusic(musicData));
  };

  return (
    <div className='dashboard_children'>
      <div className='dashboard_children_title'>
        <h4>Listen Your Downloaded Music</h4>
      </div>
      <div className={d.container}>
        <div className={d.songs}>
          {downloadedMusics?.map((item, index) => (
            <div key={index} className={d.song}>
              <div className={d.song_title}>
                <div className={d.song_img}>
                  <Image width={48} height={48} src='/img/song.png' alt='' />
                </div>
                <span title={item.title} className={'truncate max-w-[150px]'}>
                  {item.title}
                </span>
              </div>

              <div className={d.info}>
                <span className={d.category}>{item.genre}</span>
                <span className={d.time}>5:21</span>
                <div className={d.icons}>
                  <div
                    className={d.playIcon}
                    role='button'
                    onClick={() => onStreamMusic(item)}
                  >
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
    </div>
  );
};

export default Downloads;
