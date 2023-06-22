'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import { getAllVoices } from '@/src/axios/axios';
import MainLayout from '@/src/components/layouts/MainLayout';
import LoadingProgressModal from '@/src/components/LoadingProgressModal';

import d from '../../styles/pages/demo.module.css';
import { useConvertMusicMutation } from '@/src/redux/features/music/musicApi';
import {
  selectConversionData,
  setArtist,
  setVoice,
} from '@/src/redux/features/music/musicConversionSlice';
import useLocalStorage from '@/src/hooks/useLocalStorage';
import { selectToken } from '@/src/redux/features/auth/authSlice';
import { useGetAllVoiceQuery } from '@/src/redux/features/voice/voice.api';

const MakeDemo = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [convertMusic] = useConvertMusicMutation();
  const { data: voices } = useGetAllVoiceQuery();

  const token = useSelector(selectToken);
  const musicData = useSelector(selectConversionData);

  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [openProgress, setOpenProgress] = useState(false);

  const options = {
    perPage: 3,
    gap: '16px',
    type: 'loop',
    perMove: 1,
    drag: true,
    pauseOnFocus: true,
    autoplay: false,
    pauseOnHover: true,
    arrows: false,
    classes: {
      prev: '',
      next: '',
    },
    pagination: false,
    autoplaySpeed: 3000,
    interval: 3000,
    width: '100%',
    height: '100%',
    breakpoints: {
      1150: {
        perPage: 2,
      },
    },
  };

  const fileInputRef = useRef(null);
  const handleAudioUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'audio/mpeg') {
      dispatch(setVoice(file));
    } else {
      toast.error('Please upload audio file');
    }
  };
  const selectArtist = (artistId) => {
    dispatch(setArtist(artistId));
  };

  const handleLabelClick = () => {
    fileInputRef.current.click();
  };
  const handleConvertMusic = async () => {
    if (!musicData.artist) {
      return toast.error('Please select artist');
    }

    if (!token) {
      toast.error('Login to get demo');
      return router.push(`/login?from=${location.href}`);
    }

    const audioFormData = new FormData();

    Object.entries(musicData).map(([key, value]) => {
      audioFormData.append(key, value);
    });

    try {
      setOpenProgress(true);
      await convertMusic(audioFormData).unwrap();

      toast.success('Music has been successfully converted');
      setOpenProgress(false);

      router.push('/dashboard/mymusic');
    } catch (err) {
      if (token) {
        setOpenProgress(false);
        toast.error(err?.data?.message ?? err?.message);
      }
    }
  };

  useEffect(() => {
    if (musicData.voice) {
      setStep2(true);
    }

    if (musicData.artist) {
      setStep3(true);
    }
  }, [musicData]);

  return (
    <div className='container'>
      <MainLayout>
        <div className={d.demo}>
          <div className='pageTitle'>
            <h1>Make a demo</h1>
            <p>Choose Your Favorite Artist Voice to make your song</p>
          </div>
          <div className={d.progress}>
            <div
              className={`${d.target} ${d.active}`}
              onClick={() => {
                setStep2(false);
                setStep3(false);
              }}
            >
              <span>01</span>
              <div className={d.circle}></div>
            </div>
            <div
              className={`${d.target} ${step2 ? d.active : ''}`}
              onClick={() => setStep3(false)}
            >
              <span>02</span>
              <div className={d.circle}></div>
            </div>
            <div className={`${d.target} ${step3 ? d.active : ''}`}>
              <span>03</span>
              <div className={d.circle}></div>
            </div>
            <div className={d.line}>
              <div className={d.line1 + ' ' + (step2 ? d.solid : '')}></div>
              <div className={d.line1 + ' ' + (step3 ? d.solid : '')}></div>
            </div>
          </div>
          {step2 && !step3 ? (
            <div className={d.pickVoice}>
              <h4>Pick a voice</h4>
              <div className={d.p_v_cards}>
                {voices?.map((v, i) => (
                  <div key={i} className={d.p_v_card}>
                    <div
                      className={d.imgArea}
                      onClick={() => {
                        selectArtist(v?._id);
                        setStep3(true);
                      }}
                    >
                      <Image
                        className={d.asBG}
                        src={v?.artistImage}
                        width={380}
                        height={296}
                        alt=''
                      />
                      <Image
                        className={d.checkIcon}
                        src='/img/check.png'
                        width={80}
                        height={80}
                        alt=''
                      />
                      <div className={d.tag}>
                        <p>{v?.genre}</p>
                      </div>
                    </div>
                    <div className={d.contentArea}>
                      <div className={d.p_v_titleArea}>
                        <h3>{v?.name}</h3>
                        <div className={d.rating}>
                          <Image
                            src='/img/rating.png'
                            width={18}
                            height={18}
                            alt='star'
                          />
                          <span>{v?.ratings}</span>
                        </div>
                      </div>
                      <div className={d.category}>{v?.code}</div>
                      <div className={d.p_v_btn}>
                        <button
                          onClick={() => {
                            selectArtist(v?._id);
                            setStep3(true);
                          }}
                        >
                          Try now
                        </button>
                      </div>
                    </div>
                    {/* conditional if premium */}
                    {i >= 4 && (
                      <div
                        className={d.premium}
                        // redirect to subscribe page
                        onClick={() => router.push('/subscriptionPlan')}
                      >
                        <span>Get Premium</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            !step3 && (
              <div className={d.upload}>
                <h4>Upload Your Recording</h4>
                <label htmlFor='uploadAudio' onClick={handleLabelClick}>
                  <button>
                    <Image
                      src='/img/plus.png'
                      width={50}
                      height={50}
                      alt='plus'
                    />
                  </button>
                </label>
                <input
                  encType='multipart/form-data'
                  type='file'
                  id='uploadAudio'
                  style={{ display: 'none' }}
                  ref={fileInputRef}
                  onChange={handleAudioUpload}
                  accept='audio/mpeg'
                />
              </div>
            )
          )}
          {step2 && step3 && (
            <div className={d.getDemoBtn}>
              <button onClick={handleConvertMusic}>Get your demo</button>
            </div>
          )}
          <div className={d.latestDemo}>
            <h4>Latest Demo</h4>
            <div className={d.latestDemo__content}>
              <Splide options={options}>
                {['1', '2', '3', '4'].map((demo, index) => {
                  return (
                    <SplideSlide key={index}>
                      <div className={d.demoCard}>
                        <div className={d.demoCard__img}>
                          <Image
                            src='/img/demo01.png'
                            width={295}
                            height={363}
                            alt=''
                          />
                        </div>
                        <Image
                          className={d.playBtn}
                          src='/svg/play.svg'
                          width={64}
                          height={64}
                          alt=''
                        />
                      </div>
                    </SplideSlide>
                  );
                })}
              </Splide>
            </div>
          </div>
          {openProgress && (
            <LoadingProgressModal
              title='AI preparing your music'
              open={openProgress}
              setOpen={setOpenProgress}
            />
          )}
        </div>
      </MainLayout>
    </div>
  );
};

export default MakeDemo;
