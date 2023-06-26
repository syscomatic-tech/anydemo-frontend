"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { getAllVoices } from "@/src/axios/axios";
import MainLayout from "@/src/components/layouts/MainLayout";
import LoadingProgressModal from "@/src/components/LoadingProgressModal";

import { useConvertMusicMutation } from "@/src/redux/features/music/musicApi";
import {
  selectConversionData,
  setArtist,
  setVoice,
} from "@/src/redux/features/music/musicConversionSlice";
import useLocalStorage from "@/src/hooks/useLocalStorage";
import { selectToken } from "@/src/redux/features/auth/authSlice";
import { useGetAllVoiceQuery } from "@/src/redux/features/voice/voice.api";

const MakeDemo = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [convertMusic] = useConvertMusicMutation();
  const { data: voices } = useGetAllVoiceQuery();

  const token = useSelector(selectToken);
  const musicData = useSelector(selectConversionData);
  const [step2, setStep2] = useState(false);
  const [openProgress, setOpenProgress] = useState(false);

  const options = {
    perPage: 3,
    gap: "16px",
    type: "loop",
    perMove: 1,
    drag: true,
    pauseOnFocus: true,
    autoplay: false,
    pauseOnHover: true,
    arrows: false,
    classes: {
      prev: "",
      next: "",
    },
    pagination: false,
    autoplaySpeed: 3000,
    interval: 3000,
    width: "100%",
    height: "100%",
    breakpoints: {
      1150: {
        perPage: 2,
      },
    },
  };

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
    if (!token) {
      toast.error("Login to get demo");
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
  }, [musicData]);

  return (
    <div className="container">
      <MainLayout>
        <div className="py-[80px]">
          <div className="pageTitle">
            <h1>Make a demo</h1>
            <p>Choose Your Favorite Artist Voice to make your song</p>
          </div>
          <div className="relative flex items-center justify-between px-20 mt-44">
            <div
              className={`w-fit flex flex-col z-[2] `}
              onClick={() => {
                setStep2(false);
              }}
            >
              <span className="font-medium text-2xl leading-7 text-center text-white  transition-all duration-[0.3s] ease-[ease-in-out]">
                01
              </span>
              <div
                className={`w-[31px] h-[31px] rounded-[50%]  ${
                  !step2
                    ? "cursor-pointer bg-[linear-gradient(90deg,#19a7ad_11.69%,#1d8093_79.78%)]"
                    : "bg-[#2f4668]"
                }`}
              ></div>
            </div>

            <div
              className={`w-fit flex flex-col z-[2] ${
                step2 ? "cursor-pointer " : ""
              }`}
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
            <div className="absolute z-[1] w-full flex items-center p-[inherit] left-0 top-[70%]">
              <div
                className={
                  "w-full h-0 text-transparent border-[#4e4a88] border-b-[3px]  " +
                  (step2 ? "border-solid" : "border-dashed")
                }
              ></div>
            </div>
          </div>
          {!step2 && (
            <div className="flex flex-col items-start gap-6 lg:w-[912px] mt-[65px] mb-[255px] mx-auto p-0">
              <h4 className=" font-medium text-[32px] leading-[37px] text-[#32e5eb]">
                Upload Your Recording
              </h4>
              <label htmlFor="uploadAudio" onClick={handleLabelClick}>
                <button
                  className="lg:w-full w-[90vw] h-40 flex items-center justify-center bg-clip-padding  lg:px-[416px] py-[98px] rounded-lg border-2 border-solid bg-transparent   bg-clip-padding-box"
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
          )}
          {step2 && (
            <div className="mt-[104px] mb-[333px] mx-0 text-center">
              <button
                onClick={handleConvertMusic}
                className="max-w-[565px] w-full h-[76px] font-medium text-2xl text-center text-[#fff8f8] px-0 py-6 rounded-lg bg-[linear-gradient(212.36deg,#b843b7_27.16%,#a548b2_29.91%,#7d51a9_36.6%,#6058a2_42.71%,#4e5c9e_47.98%,#485e9c_51.81%,#4393bb_66.42%,#39eef2_89.85%)]"
              >
                Get your demo
              </button>
            </div>
          )}
          <div>
            <h4 className="font-bold text-[40px] leading-[46px] text-start text-white mb-12">
              Latest Demo
            </h4>
            <div>
              <Splide options={options}>
                {["1", "2", "3", "4"].map((demo, index) => {
                  return (
                    <SplideSlide key={index}>
                      <div className="w-[295px] h-[363px] cursor-pointer relative m-auto hover:opacity-70 group">
                        <div>
                          <Image
                            src="/img/demo01.png"
                            width={295}
                            height={363}
                            alt=""
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                        <Image
                          className="opacity-0 group-hover:opacity-100 transition-all duration-[0.3s] ease-[ease-in-out] absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                          src="/svg/play.svg"
                          width={64}
                          height={64}
                          alt=""
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
