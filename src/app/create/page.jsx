"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import MainLayout from "@/src/components/layouts/MainLayout";
import LoadingProgressModal from "@/src/components/LoadingProgressModal";

import {
  useConvertMusicMutation,
  useGetConvertedCustomMusicQuery,
} from "@/src/redux/features/music/musicApi";
import {
  selectConversionData,
  setArtist,
  setVoice,
} from "@/src/redux/features/music/musicConversionSlice";
import { selectToken } from "@/src/redux/features/auth/authSlice";
import { useGetAllVoiceQuery } from "@/src/redux/features/voice/voice.api";
import useAos from "@/src/hooks/useAos";
const MakeDemo = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data: customArtists } = useGetConvertedCustomMusicQuery();
  const [convertMusic] = useConvertMusicMutation();
  const { data: voices } = useGetAllVoiceQuery();
  const token = useSelector(selectToken);
  const musicData = useSelector(selectConversionData);

  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [openProgress, setOpenProgress] = useState(false);

  const fileInputRef = useRef(null);
  const handleAudioUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "audio/mpeg") {
      dispatch(setVoice(file));
    } else {
      toast.error("Please upload audio file");
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
      return toast.error("Please select artist");
    }

    if (!token) {
      toast.error("Log in to get demo");
      return router.push(`/login?from=${location.href}`);
    }

    const audioFormData = new FormData();

    Object.entries(musicData).map(([key, value]) => {
      audioFormData.append(key, value);
    });

    try {
      setOpenProgress(true);
      await convertMusic(audioFormData).unwrap();

      toast.success("Music has been successfully converted");
      setOpenProgress(false);

      router.push("/dashboard/mymusic");
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
  useAos();

  return (
    <div className="container">
      <MainLayout>
        <div className="py-[80px]">
          <div className="pageTitle">
            <h1 data-aos="fade-up" data-aos-delay={200}>
              Make a demo
            </h1>
            <p data-aos="fade-up" data-aos-delay={300}>
              Choose Your Favorite Artist Voice to make your song
            </p>
          </div>
          <div
            className="relative flex items-center justify-between px-20 mt-36"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            <div
              className={`w-fit flex flex-col z-[2] `}
              onClick={() => {
                setStep2(false);
                setStep3(false);
              }}
            >
              <span className="font-medium text-2xl leading-7 text-center text-white  transition-all duration-[0.3s] ease-[ease-in-out]">
                01
              </span>
              <div
                className={`w-[31px] h-[31px] rounded-[50%] cursor-pointer ${
                  !step2 && !step3
                    ? " cursor-pointer bg-[linear-gradient(90deg,#19a7ad_11.69%,#1d8093_79.78%)]"
                    : "bg-[#2f4668] cursor-pointer"
                }`}
              ></div>
            </div>
            <div
              className={`w-fit flex flex-col z-[2] `}
              onClick={() => setStep3(false)}
            >
              <span className="font-medium text-2xl leading-7 text-center text-white  transition-all duration-[0.3s] ease-[ease-in-out]">
                02
              </span>
              <div
                className={`w-[31px] h-[31px] rounded-[50%]  ${
                  step2
                    ? "cursor-pointer bg-[linear-gradient(90deg,#19a7ad_11.69%,#1d8093_79.78%)]"
                    : "bg-[#2f4668]"
                }`}
              ></div>
            </div>
            <div
              className={`w-fit flex flex-col z-[2] ${
                step3 ? "cursor-pointer " : ""
              }`}
            >
              <span className="font-medium text-2xl leading-7 text-center text-white  transition-all duration-[0.3s] ease-[ease-in-out]">
                03
              </span>
              <div
                className={`w-[31px] h-[31px] rounded-[50%]  ${
                  step3
                    ? "cursor-pointer bg-[linear-gradient(90deg,#19a7ad_11.69%,#1d8093_79.78%)]"
                    : "bg-[#2f4668]"
                }`}
              ></div>
            </div>
            <div className="absolute z-[1] w-full flex items-center p-[inherit] left-0 top-[70%]">
              <div
                className={
                  "w-6/12 h-0 text-transparent border-[#4e4a88] border-b-[3px]  " +
                  (step2 ? "border-solid" : "border-dashed")
                }
              ></div>
              <div
                className={
                  "w-6/12 h-0 text-transparent border-[#4e4a88] border-b-[3px]  " +
                  (step3 ? "border-solid" : "border-dashed")
                }
              ></div>
            </div>
          </div>
          {step2 && !step3 ? (
            <div className="pt-[65px] pb-[150px] px-0">
              <h4 className="font-bold text-[40px] leading-[46px] text-[#32e5eb] mb-[34px]">
                Pick a voice
              </h4>
              <div className="flex flex-wrap justify-between gap-y-10">
                {voices?.map((v, i) => (
                  <div
                    key={i}
                    className="relative w-[380px] h-[auto] overflow-hidden group rounded-md bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)]"
                  >
                    <div
                      className="w-full h-[280px] cursor-pointer relative"
                      onClick={() => {
                        selectArtist(v?._id);
                        setStep3(true);
                      }}
                    >
                      <div className="aspect-w-10 aspect-h-7">
                        <Image
                          className="object-cover group-hover:scale-105 transition-all"
                          src={`${process.env.NEXT_PUBLIC_BASE_STORAGE_URL}/voice/${v?.artistImage}`}
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    {/* <Image
                      className="absolute  -translate-x-2/4 -translate-y-2/4 opacity-0 transition-all duration-[0.3s] ease-[ease-in-out] left-2/4 top-2/4"
                      src="/img/check.png"
                      width={80}
                      height={80}
                      alt=""
                    /> */}
                    <div className="absolute font-medium text-2xl leading-[130%] flex items-center justify-center text-white min-w-[102px] h-[42px] rounded-[0px_12px_12px_0px] left-0 top-[22.5px] bg-[#232229]">
                      <p>{v?.genre}</p>
                    </div>
                    <div className="p-3.5">
                      {/* rest of the content */}
                      <div className="flex items-center justify-between">
                        <h3 className="not-italic font-bold text-[32px] leading-[130%] text-[#fffffd]">
                          {v?.name}
                        </h3>
                        <div className="flex items-center">
                          <Image
                            src="/img/rating.png"
                            width={18}
                            height={18}
                            alt="star"
                          />
                          <span className="not-italic font-light text-xs leading-[4px] text-[#fffffd] ml-[2.5px]">
                            {v?.ratings}
                          </span>
                        </div>
                      </div>
                      <div className="not-italic font-light text-lg leading-[27px] text-[#8f8f8f] mt-2.5">
                        {v?.code}
                      </div>
                      <div className="text-end">
                        <button
                          onClick={() => {
                            selectArtist(v?._id);
                            setStep3(true);
                          }}
                          className="w-[124px] h-10 not-italic font-semibold text-base text-[#fffffd] rounded-md bg-[linear-gradient(47.36deg,#2df1e6_12.24%,#3694b0_37.45%,#468db3_39.38%,#6f79ba_44.93%,#8d6bbf_49.97%,#9f63c2_54.29%,#a660c3_57.37%)] hover:opacity-90 transition-all"
                        >
                          Try now
                        </button>
                      </div>
                    </div>
                    {/* conditional if premium */}
                    {i >= 4 && (
                      <div
                        className="absolute w-full h-full opacity-80 left-0 top-0 bg-white"
                        // redirect to subscribe page
                        onClick={() => router.push("/pricing")}
                      >
                        <span className="absolute -translate-x-2/4 not-italic font-medium text-[32px] text-black whitespace-nowrap left-2/4 top-[148px]">
                          Get Premium
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {customArtists?.length > 0 && (
                <div>
                  <h4 className="font-bold text-[40px] mt-12  leading-[46px] text-[#32e5eb] mb-[34px]">
                    Custom Voices Created By You
                  </h4>
                  <div className="flex flex-wrap justify-between gap-y-10">
                    {customArtists?.map((v, i) => (
                      <div
                        key={i}
                        className="relative w-[380px] h-[auto] overflow-hidden group rounded-md bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)]"
                      >
                        <div
                          className="w-full h-[280px] cursor-pointer relative"
                          onClick={() => {
                            selectArtist(v?._id);
                            setStep3(true);
                          }}
                        >
                          <div className="aspect-w-10 aspect-h-7">
                            <Image
                              className="object-cover group-hover:scale-105 transition-all"
                              src={`${process.env.NEXT_PUBLIC_BASE_STORAGE_URL}/voice/${v?.artistImage}`}
                              layout="fill"
                              alt=""
                            />
                          </div>
                        </div>
                        {/* <Image
                      className="absolute  -translate-x-2/4 -translate-y-2/4 opacity-0 transition-all duration-[0.3s] ease-[ease-in-out] left-2/4 top-2/4"
                      src="/img/check.png"
                      width={80}
                      height={80}
                      alt=""
                    /> */}
                        <div className="absolute font-medium text-2xl leading-[130%] flex items-center justify-center text-white min-w-[102px] h-[42px] rounded-[0px_12px_12px_0px] left-0 top-[22.5px] bg-[#232229]">
                          <p>{v?.genre}</p>
                        </div>
                        <div className="p-3.5">
                          {/* rest of the content */}
                          <div className="flex items-center justify-between">
                            <h3 className="not-italic font-bold text-[32px] leading-[130%] text-[#fffffd]">
                              {v?.name}
                            </h3>
                            <div className="flex items-center">
                              <Image
                                src="/img/rating.png"
                                width={18}
                                height={18}
                                alt="star"
                              />
                              <span className="not-italic font-light text-xs leading-[4px] text-[#fffffd] ml-[2.5px]">
                                {v?.ratings}
                              </span>
                            </div>
                          </div>
                          <div className="text-end">
                            <button
                              onClick={() => {
                                selectArtist(v?._id);
                                setStep3(true);
                              }}
                              className="w-[124px] h-10 not-italic font-semibold text-base text-[#fffffd] rounded-md bg-[linear-gradient(47.36deg,#2df1e6_12.24%,#3694b0_37.45%,#468db3_39.38%,#6f79ba_44.93%,#8d6bbf_49.97%,#9f63c2_54.29%,#a660c3_57.37%)] hover:opacity-90 transition-all"
                            >
                              Try now
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            !step3 && (
              <div
                className="flex flex-col items-start gap-6 lg:w-[912px] mt-[65px] mb-[255px] mx-auto p-0"
                data-aos="fade-up"
                data-aos-delay={500}
              >
                <h4 className=" font-medium text-[32px] leading-[37px] text-[#32e5eb]">
                  Upload Your Recording or Song
                </h4>
                <label htmlFor="uploadAudio" onClick={handleLabelClick}>
                  <button
                    className="lg:w-full w-[90vw] h-40 flex items-center justify-center bg-clip-padding  lg:px-[416px] py-[98px] rounded-lg border-2 border-solid bg-transparent  transition-all hover:bg-[#ffffff0c] bg-clip-padding-box"
                    style={{
                      borderImage:
                        "linear-gradient(47.36deg, #2df1e6 12.24%, #3694b0 37.45%, #468db3 39.38%, #6f79ba 44.93%, #8d6bbf 49.97%, #9f63c2 54.29%, #a660c3 57.37%)",
                      borderImageSlice: 1,
                    }}
                  >
                    <Image
                      src="/img/plus.png"
                      width={50}
                      height={50}
                      alt="plus"
                    />
                  </button>
                </label>
                <input
                  encType="multipart/form-data"
                  type="file"
                  id="uploadAudio"
                  style={{ display: "none" }}
                  ref={fileInputRef}
                  onChange={handleAudioUpload}
                  accept="audio/mpeg"
                />
              </div>
            )
          )}
          {step2 && step3 && (
            <div className="mt-[104px] mb-[333px] mx-0 text-center">
              <button
                onClick={handleConvertMusic}
                className="max-w-[565px] w-full h-[76px] font-medium text-2xl text-center text-[#fff8f8] px-0 py-6 rounded-lg bg-[linear-gradient(212.36deg,#b843b7_27.16%,#a548b2_29.91%,#7d51a9_36.6%,#6058a2_42.71%,#4e5c9e_47.98%,#485e9c_51.81%,#4393bb_66.42%,#39eef2_89.85%)] hover:opacity-90 transition-all "
              >
                Get your demo
              </button>
            </div>
          )}
          {openProgress && (
            <LoadingProgressModal
              title="AI preparing your music"
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
