"use client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { downloadMusic, fetchUserMusic, streamMusic } from "@/src/axios/axios";
import { NoDataFound } from "@/src/components/helper";

const MyMusic = () => {
  const dispatch = useDispatch();
  const { music } = useSelector((state) => state.userMusic);
  const { streamingMusic, loading } = useSelector((state) => state.musicStream);
  const { downloadedMusic, error } = useSelector(
    (state) => state.musicDownload
  );
  const [isLoading, setIsLoading] = useState(null);
  function downloadAudioChunks(audioData) {
    // 1. Extract audio data by removing the ID3 tag
    const audioDataWithoutID3 = audioData?.substring(10);

    // 2. Convert data to the desired format if needed

    // 3. Create a downloadable Blob
    const blob = new Blob([audioDataWithoutID3], { type: "audio/mpeg" });

    // 4. Generate a download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "audio.mp3";

    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  const handleDownloadClick = () => {
    downloadAudioChunks(downloadedMusic);
  };

  const handleDownload = (music, index) => {
    setIsLoading(index); // Set the loading state to true

    dispatch(downloadMusic(music?.song))
      .then(() => {
        setIsLoading(null); // Set the loading state to null if the dispatch succeeds
      })
      .catch(() => {
        setIsLoading(null); // Set the loading state to null if the dispatch fails
      });
  };

  const onStreamMusic = (music, index, file) => {
    setIsLoading(index); // Set the loading state to true

    dispatch(streamMusic({ ...music, file }))
      .then(() => {
        setIsLoading(null); // Set the loading state to null if the dispatch succeeds
      })
      .catch(() => {
        setIsLoading(null); // Set the loading state to null if the dispatch fails
      });
  };
  useEffect(() => {
    dispatch(fetchUserMusic());
  }, []);
  console.log(music);
  return (
    <div className="dashboard_children lg:max-h-[670px] lg:overflow-y-scroll">
      <div className="grid  grid-cols-2 lg:grid-cols-[repeat(3,226px)] justify-between gap-y-12">
        {music?.length > 0 &&
          music?.map((item, index) => (
            <div
              key={index}
              className="lg:w-[226px] w-11/12 min-h-[396px] rounded-lg bg-[linear-gradient(90deg,#206983_24.29%,#2f5377_79.78%)] group"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div
                className="relative w-full h-[230px] overflow-hidden rounded-[8px_8px_0px_0px] cursor-pointer"
                onClick={() => onStreamMusic(item, index, item?.song)}
              >
                <Image
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-all"
                  src="/img/poster.png"
                  width={226}
                  height={230}
                  alt="songPoster"
                />
                {isLoading === index ? (
                  <div className="bg-[#32E5EB] text-transparent text-black p-4 rounded-full loader absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                    <span className="barr"></span>
                    <span className="barr"></span>
                    <span className="barr"></span>
                  </div>
                ) : (
                  <Image
                    className=" absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4"
                    src="/svg/play.svg"
                    width={53.33}
                    height={53.33}
                    alt="playButton"
                  />
                )}

                <div className="cursor-pointer absolute w-6 h-6 flex items-center justify-center rounded-[50%] right-3 bottom-[21px] bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)]">
                  <Image
                    src="/svg/share.svg"
                    width={16}
                    height={16}
                    alt="share"
                  />
                </div>
              </div>
              <div className="h-[calc(100%_-_230px)] flex flex-col items-start justify-between pt-1.5 pb-3.5 px-[18px]">
                <div className="w-full flex flex-col gap-3">
                  <small className="font-normal text-sm leading-[130%] text-[#b9b9b9]">
                    {item?.genre}
                  </small>
                  <h4
                    className="w-full font-medium text-xl leading-[130%] text-white whitespace-nowrap overflow-hidden text-ellipsis"
                    onClick={() => handleDownloadClick(item?._id)}
                  >
                    {item?.title}
                  </h4>
                  <span className="font-normal text-sm leading-[130%] text-[#b9b9b9]">
                    Duration : {item?.duration}m
                  </span>
                </div>
                {/* <button disabled={loading} onClick={() => handleStream(item?._id)}>Stream</button> */}
                <button
                  disabled={loading}
                  onClick={() => handleDownload(item, index)}
                  className="not-italic w-full h-[34px] font-medium text-base leading-[18px] text-[#fffffd] rounded-md bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)] transition-all hover:opacity-80"
                >
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
