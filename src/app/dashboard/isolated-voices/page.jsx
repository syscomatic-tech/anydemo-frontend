"use client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { downloadMusic, fetchUserMusic, streamMusic } from "@/src/axios/axios";
import { NoDataFound } from "@/src/components/helper";

const Downloads = () => {
  const dispatch = useDispatch();
  const { music } = useSelector((state) => state.userMusic);
  const { streamingMusic, loading } = useSelector((state) => state.musicStream);
  const { downloadedMusic, error } = useSelector(
    (state) => state.musicDownload
  );
  const [isLoading, setIsLoading] = useState(null);

  function downloadAudioChunks(audioData) {
    const audioDataWithoutID3 = audioData?.substring(10);
    const blob = new Blob([audioDataWithoutID3], { type: "audio/mpeg" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "audio.mp3";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  const handleDownloadClick = () => {
    downloadAudioChunks(downloadedMusic);
  };

  const handleDownload = (music, index) => {
    setIsLoading(index); // Set the loading state to true

    dispatch(downloadMusic(music))
      .then(() => {
        setIsLoading(null); // Set the loading state to null if the dispatch succeeds
      })
      .catch(() => {
        setIsLoading(null); // Set the loading state to null if the dispatch fails
      });
  };

  const onStreamMusic = (music, index) => {
    setIsLoading(index); // Set the loading state to true

    dispatch(streamMusic(music))
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
  return (
    <div className="dashboard_children relative">
      <div className="dashboard_children_title">
        <h4 className="text-xl font-semibold" data-aos="fade-up">
          Listen Your Isolated Voices
        </h4>
      </div>
      <div className="mt-10">
        <div className="flex flex-col gap-y-12 lg:max-h-[670px] lg:overflow-y-scroll">
          {music?.map((item, index) => (
            <div
              className="w-full "
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
              key={index}
            >
              <div className=" flex items-center justify-between bg-[#2f4668]  text-white px-2 lg:px-6 py-3.5">
                <div className="flex flex-row gap-2 lg:gap-6 items-center">
                  <div className="w-12 h-12 overflow-hidden rounded-[9.6px]">
                    <Image width={48} height={48} src="/img/song.png" alt="" />
                  </div>
                  <span title={item.title} className={"truncate max-w-[150px]"}>
                    {item.title}
                  </span>
                </div>

                <div className="flex flex-row gap-3 lg:gap-20 items-center">
                  <span>{item.genre}</span>
                  <span>5:21</span>
                  <div className="flex flex-row gap-3 lg:gap-8 items-center ">
                    <div
                      className="w-8 h-8"
                      role="button"
                      onClick={() => onStreamMusic(item)}
                    >
                      <Image
                        width={32}
                        height={32}
                        src="/svg/play.svg"
                        alt=""
                        className="cursor-pointer object-contain  w-full h-full"
                      />
                    </div>
                    <div className="w-5 h-5 relative dropdown dropdown-end ">
                      <label tabIndex={0}>
                        <Image
                          width={20}
                          height={20}
                          src="/svg/threeDots.svg"
                          alt=""
                          className="cursor-pointer object-contain  w-full h-full "
                        />
                      </label>
                      <ul
                        className="   w-fit  cursor-pointer  capitalize dropdown-content absolute right-0 z-[100] menu p-2 shadow bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)] rounded  "
                        tabIndex={0}
                      >
                        <li className="py-2 text-white border-b hover:border-gray-200 transition-all hover:bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)] hover:rounded   border-gray-500">
                          <span> Remove from list</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[linear-gradient(180deg,#3B343F_0%,#1D1F27_83.03%)]  text-white px-2 lg:px-6 py-3.5">
                <div className=" flex items-center justify-between ">
                  <div className="flex flex-row w-4/5 justify-center gap-2 lg:gap-x-6 items-center">
                    <div className="w-12 h-10 overflow-hidden rounded-[9.6px]">
                      <p>Voice</p>
                    </div>
                    <div className="w-full h-10 relative">
                      <Image
                        src="/svg/voice.svg"
                        alt=""
                        layout="fill"
                        objectFit="cover"
                      ></Image>
                    </div>
                  </div>

                  <div className="flex flex-row gap-3 lg:gap-8 items-center ">
                    <div
                      className="w-8 h-8"
                      role="button"
                      onClick={() => onStreamMusic(item)}
                    >
                      <Image
                        width={32}
                        height={32}
                        src="/svg/play.svg"
                        alt=""
                        className="cursor-pointer object-contain  w-full h-full"
                      />
                    </div>
                    <div className="w-5 h-5  ">
                      <Image
                        width={20}
                        height={20}
                        src="/svg/DownloadOutline.svg"
                        alt=""
                        className="cursor-pointer object-contain  w-full h-full "
                      />
                    </div>
                  </div>
                </div>
                <div className=" flex items-center justify-between mt-6">
                  <div className="flex flex-row w-4/5 justify-center gap-2 lg:gap-x-6 items-center">
                    <div className="w-12 h-10 overflow-hidden rounded-[9.6px]">
                      <p>Tone</p>
                    </div>
                    <div className="w-full h-10 relative">
                      <Image
                        src="/svg/tone.svg"
                        alt=""
                        layout="fill"
                        objectFit="cover"
                      ></Image>
                    </div>
                  </div>

                  <div className="flex flex-row gap-3 lg:gap-8 items-center ">
                    <div
                      className="w-8 h-8"
                      role="button"
                      onClick={() => onStreamMusic(item)}
                    >
                      <Image
                        width={32}
                        height={32}
                        src="/svg/play.svg"
                        alt=""
                        className="cursor-pointer object-contain  w-full h-full"
                      />
                    </div>
                    <div className="w-5 h-5  ">
                      <Image
                        width={20}
                        height={20}
                        src="/svg/DownloadOutline.svg"
                        alt=""
                        className="cursor-pointer object-contain  w-full h-full "
                      />
                    </div>
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
