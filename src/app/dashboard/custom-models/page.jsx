"use client";
import Image from "next/image";
import { NoDataFound } from "@/src/components/helper";
import { useGetConvertedCustomMusicQuery } from "@/src/redux/features/music/musicApi";

const MyMusic = () => {
  const { data } = useGetConvertedCustomMusicQuery();

  return (
    <div className="dashboard_children relative">
      <div className="dashboard_children_title">
        <h4 className="text-xl font-semibold" data-aos="fade-up">
          Custom models created by you
        </h4>
      </div>
      <div className="mt-10">
        <div className="flex flex-col gap-y-12 lg:max-h-[670px] lg:overflow-y-scroll">
          {data?.map((item, index) => (
            <div
              key={index}
              className="relative w-[380px] h-[auto] overflow-hidden group rounded-md bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)]"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="w-full h-[280px] cursor-pointer relative">
                <div className="aspect-w-10 aspect-h-7">
                  <Image
                    className="object-cover group-hover:scale-105 transition-all"
                    src={`${process.env.NEXT_PUBLIC_BASE_STORAGE_URL}/voice/${item?.artistImage}`}
                    layout="fill"
                    alt=""
                  />
                </div>
              </div>
              <div className="absolute font-medium text-2xl leading-[130%] flex items-center justify-center text-white min-w-[102px] h-[42px] rounded-[0px_12px_12px_0px] left-0 top-[22.5px] bg-[#232229]">
                <p>{item?.genre}</p>
              </div>
              <div className="p-3.5">
                {/* rest of the content */}
                <div className="flex items-center justify-between">
                  <h3 className="not-italic font-bold text-[32px] leading-[130%] text-[#fffffd]">
                    {item?.name}
                  </h3>
                  <div className="flex items-center">
                    <Image
                      src="/img/rating.png"
                      width={18}
                      height={18}
                      alt="star"
                    />
                    <span className="not-italic font-light text-xs leading-[4px] text-[#fffffd] ml-[2.5px]">
                      {item?.ratings}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {data?.length <= 0 && <NoDataFound />}
    </div>
  );
};

export default MyMusic;
