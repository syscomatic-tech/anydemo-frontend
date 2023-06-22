'use client';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { downloadMusic, fetchUserMusic, streamMusic } from '@/src/axios/axios';
import { NoDataFound } from '@/src/components/helper';

import m from '@/src/styles/pages/dashboard/myMusic.module.css';

const MyMusic = () => {
  const dispatch = useDispatch();
  const { music } = useSelector((state) => state.userMusic);
  const { streamingMusic, loading } = useSelector((state) => state.musicStream);
  const { downloadedMusic, error } = useSelector(
    (state) => state.musicDownload
  );
  console.log('downloadedMusic', downloadedMusic, error);

  const contentType = 'audio/mpeg';
  const fileName = 'music.mp3';
  // function downloadAudio(base64Data, fileName, contentType) {
  //   const byteCharacters = atob(base64Data);
  //   const byteArrays = [];

  //   for (let offset = 0; offset < byteCharacters.length; offset += 512) {
  //     const slice = byteCharacters.slice(offset, offset + 512);

  //     const byteNumbers = new Array(slice.length);
  //     for (let i = 0; i < slice.length; i++) {
  //       byteNumbers[i] = slice.charCodeAt(i);
  //     }

  //     const byteArray = new Uint8Array(byteNumbers);
  //     byteArrays.push(byteArray);
  //   }

  //   const blob = new Blob(byteArrays, { type: contentType });

  //   const url = URL.createObjectURL(blob);

  //   const link = document.createElement('a');
  //   link.href = url;
  //   link.download = fileName;
  //   link.click();

  //   URL.revokeObjectURL(url);
  // }
  function downloadAudioChunks(audioData) {
    // 1. Extract audio data by removing the ID3 tag
    const audioDataWithoutID3 = audioData.substring(10);

    // 2. Convert data to the desired format if needed

    // 3. Create a downloadable Blob
    const blob = new Blob([audioDataWithoutID3], { type: 'audio/mpeg' });

    // 4. Generate a download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'audio.mp3';

    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  const handleDownloadClick = () => {
    downloadAudioChunks(downloadedMusic);
  };

  const handleDownload = (music) => {
    dispatch(downloadMusic(music));
  };

  const onStreamMusic = (music) => {
    dispatch(streamMusic(music));
  };

  useEffect(() => {
    dispatch(fetchUserMusic());
  }, []);

  return (
    <div className='dashboard_children'>
      <div className={m.musicCards}>
        {music?.map((item, index) => (
          <div key={index} className={m.musicCard}>
            <div className={m.musicCardImg}>
              <Image
                className={m.songPoster}
                src='/img/poster.png'
                width={226}
                height={230}
                alt='songPoster'
              />
              <Image
                className={m.playBtn}
                src='/svg/play.svg'
                width={53.33}
                height={53.33}
                alt='playButton'
                onClick={() => onStreamMusic(item)}
              />
              <div className={m.share}>
                <Image
                  src='/svg/share.svg'
                  width={16}
                  height={16}
                  alt='share'
                />
              </div>
            </div>
            <div className={m.musicCardContent}>
              <div className={m.info}>
                <small>{item?.genre}</small>
                <h4 onClick={() => handleDownloadClick(item?._id)}>
                  {item?.title}
                </h4>
                <span>Duration : {item?.duration}m</span>
              </div>
              {/* <button disabled={loading} onClick={() => handleStream(item?._id)}>Stream</button> */}
              <button disabled={loading} onClick={() => handleDownload(item)}>
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
      {music?.length <= 0 && <NoDataFound />}
    </div>
  );
};

export default MyMusic;
