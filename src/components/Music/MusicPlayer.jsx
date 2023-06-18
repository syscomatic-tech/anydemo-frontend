'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';
import Image from 'next/image';

import {
  selectCurrentMusic,
  selectStreamingMusic,
} from '@/src/redux/features/music/musicStreamSlice';

export default function MusicPlayer() {
  const streamingMusic = useSelector(selectStreamingMusic);
  const currentMusic = useSelector(selectCurrentMusic);

  return (
    <div
      className={`music-player-box fixed bottom-0 p-4 w-full z-[1000] bg-gradient-to-b from-[#3B343F] from-[0.07%] to-[#1D1F27] to-[82.76%] ${
        !streamingMusic && 'hidden'
      }`}
    >
      {streamingMusic && (
        <div className='music-player-container max-w-[1200px] mx-auto flex justify-between gap-4'>
          <div className='flex items-center gap-4'>
            <div className='music-cover'>
              <Image src='/img/poster.png' width={48} height={48} />
            </div>
            <div className='music-details'>
              <h2 className='music-title text-white font-semibold text-[20px] max-w-[300px] truncate'>
                {currentMusic.title}
              </h2>
              <p className='author text-gray-300'>{currentMusic.author}</p>
            </div>
          </div>
          <ReactAudioPlayer
            className='flex-1 audio-player'
            src={streamingMusic}
            controls
            autoPlay
          >
            Your browser does not support the audio tag
          </ReactAudioPlayer>
          <div></div>
        </div>
      )}
    </div>
  );
}
