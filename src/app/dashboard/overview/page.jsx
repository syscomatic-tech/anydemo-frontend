"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";

import SubscriptionPlanCard from "@/src/components/SubscriptionPlanCard";

const Overview = () => {
  const user = useSelector((state) => state.profile.profile);
  const dataCards = [
    {
      title: "Created Songs",
      value: user?.songCount || "0",
      icon: "/svg/ic_outline-music-note.svg",
    },
    {
      title: "Downloaded",
      value: user?.downloadCount || "0",
      icon: "/svg/DownloadOutline.svg",
    },
    { title: "Sale Songs", value: user?.sales || "0", icon: "/svg/tag.svg" },
    { title: "Revenue", value: user?.revenue || "0", icon: "/svg/grow.svg" },
  ];

  return (
    <div className="dashboard_children">
      <div className="flex justify-between gap-y-4 lg:gap-y-0 flex-wrap items-center">
        {dataCards.map((item, index) => (
          <div
            className="w-[180px] h-[94px] flex items-center text-[#FFFFFD] justify-center px-0 py-[21px] rounded-lg bg-[#414978] transition-all hover:opacity-80 cursor-pointer"
            key={index}
            data-aos="fade-up"
            data-aos-delay={200 * (index + 1)}
          >
            <div className="flex items-center gap-3 justify-center">
              <div className="w-8 h-8 flex items-center justify-center rounded-[50%] bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)]">
                <Image src={item.icon} width={18} height={18} alt="icon" />
              </div>
              <div className="flex flex-col gap-1 items-start">
                <p className={"font-bold text-[28px] leading-8"}>
                  {item.value}
                </p>
                <p className={"font-normal text-sm leading-4"}>{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="dashboard_children_title">
        <div
          className="flex items-center justify-between mb-10"
          data-aos="fade-up"
          data-aos-delay={300}
        >
          <h4 className={"mb-0 title"}>Profile</h4>
          <Link href="/dashboard/user-account">
            <button className="mainBtn s_btn ">
              <span>Edit Profile</span>
            </button>
          </Link>
        </div>
        <div
          className="grid grid-cols-[repeat(2,1fr)] gap-x-4 gap-y-8"
          data-aos="fade-up"
          data-aos-delay={400}
        >
          <div className="flex flex-col gap-2">
            <p className=" text-lg font-semibold leading-[21px]">Email</p>
            <p className="font-normal text-base leading-[18px] text-gray-200">
              {user?.email || "N/A"}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className=" text-lg font-semibold leading-[21px]">
              Mobile Number
            </p>
            <p className="font-normal text-base leading-[18px] text-gray-200">
              {user?.phoneNumber || "N/A"}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className=" text-lg font-semibold leading-[21px]">User Name</p>
            <p className="font-normal text-base leading-[18px] text-gray-200">
              {user?.username || "N/A"}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className=" text-lg font-semibold leading-[21px]">Birthday</p>
            <p className="font-normal text-base leading-[18px] text-gray-200">
              {user?.birthday || "N/A"}
            </p>
          </div>
        </div>
      </div>
      <div
        className="dashboard_children_title"
        data-aos="fade-up"
        data-aos-delay={600}
      >
        <h4 className="title">Your Current Plan</h4>
        <SubscriptionPlanCard data={{ selected: true }} />
      </div>
    </div>
  );
};

export default Overview;
