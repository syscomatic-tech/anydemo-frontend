"use client";
import { useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";

import { streamMusic } from "@/src/axios/axios";
import {
  useDeleteDownloadedMusicMutation,
  useGetDownloadedMusicQuery,
} from "@/src/redux/features/music/musicApi";
import Link from "next/link";
import { NoDataFound } from "@/src/components/helper";
import { toast } from "react-hot-toast";

const Downloads = () => {
  const dispatch = useDispatch();
  const { data: downloadedMusics, refetch } = useGetDownloadedMusicQuery();
  const [deleteMusic, { isLoading }] = useDeleteDownloadedMusicMutation();
  const onStreamMusic = (music, index) => {
    dispatch(streamMusic(music));
    console.log(music);
  };
  const handleDelete = (musicId) => {
    deleteMusic(musicId)
      .unwrap()
      .then(() => {
        toast.success("Music deleted successfully!");
        refetch(); // Fetch the updated list of downloaded music
      })
      .catch((error) => {
        toast.error("Failed to delete music");
      });

    if (isLoading) {
      toast("Deleting in progress...");
    }
  };
  return (
    <div className="dashboard_children relative">
      <div className="dashboard_children_title">
        <h4 className="text-xl font-semibold" data-aos="fade-up">
          Listen Your Downloaded Music
        </h4>
      </div>
      <div className="mt-10">
        <div className="flex flex-col gap-y-12 lg:max-h-[670px] lg:overflow-y-scroll">
          {downloadedMusics?.map((item, index) => (
            <div
              key={index}
              className="w-full flex items-center justify-between bg-[#2f4668]  text-white px-2 lg:px-6 py-3.5"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
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
                <span>{item?.duration}</span>
                <div className="flex flex-row gap-3 lg:gap-8 items-center ">
                  <div
                    className="w-8 h-8"
                    role="button"
                    onClick={() => onStreamMusic(item, index)}
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
                    <label tabIndex={1}>
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
                      tabIndex={1}
                    >
                      <li
                        className="py-2 text-white 0 transition-all hover:bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)] hover:rounded   border-gray-500"
                        onClick={() => handleDelete(item._id)}
                      >
                        <span> Remove from list</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {downloadedMusics?.length <= 0 && <NoDataFound />}
    </div>
  );
};

export default Downloads;
