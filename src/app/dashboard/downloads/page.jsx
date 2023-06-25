"use client";
import { useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";

import { streamMusic } from "@/src/axios/axios";
import { useGetDownloadedMusicQuery } from "@/src/redux/features/music/musicApi";

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
    <div className="dashboard_children">
      <div className="dashboard_children_title">
        <h4 className="text-xl font-semibold">Listen Your Downloaded Music</h4>
      </div>
      <div className="mt-10">
        <div className="flex flex-col gap-y-12 max-h-[580px] overflow-y-scroll">
          {downloadedMusics?.map((item, index) => (
            <div
              key={index}
              className="w-full flex items-center justify-between bg-[#2f4668] text-white px-2 lg:px-6 py-3.5"
            >
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
                <div className="flex flex-row gap-3 lg:gap-8 items-center">
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
                  <div className="w-5 h-5 relative">
                    <Image
                      width={20}
                      height={20}
                      src="/svg/threeDots.svg"
                      alt=""
                      onClick={() =>
                        setShowOptions(showOptions === index ? null : index)
                      }
                      className="cursor-pointer object-contain  w-full h-full"
                    />
                    {showOptions === index && (
                      <div
                        className=" flex items-center justify-start w-[159px] h-[133px] absolute z-[1] px-4 py-0 rounded-[5px] right-0 top-8 
                      bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)]"
                      >
                        <ul>
                          <li className="cursor-pointer w-full leading-5 font-medium text-base text-white whitespace-nowrap px-0 py-3 border-b-[#b843b7] border-b border-solid">
                            Remove from list
                          </li>
                          <li className="cursor-pointer w-full leading-5 font-medium text-base text-white whitespace-nowrap px-0 py-3 border-b-[#b843b7] border-b border-solid">
                            Share
                          </li>
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
