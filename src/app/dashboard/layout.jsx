"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { useParams, useRouter, usePathname } from "next/navigation";
import { toast } from "react-hot-toast";

import { useUpdateProfilePictureMutation } from "@/src/redux/features/profile/profile.api";
import { baseStorageURL } from "@/src/utils/url";
import { logout, selectToken } from "@/src/redux/features/auth/authSlice";

import Header from "@/src/components/shared/header/header";
import useAos from "@/src/hooks/useAos";

const DashboardLayout = ({ children }) => {
  const dispatch = useDispatch();
  const pathname = usePathname();

  const router = useRouter();
  const user = useSelector((state) => state.profile.profile);
  const token = useSelector(selectToken);

  const [activeChildren, setActiveChildren] = useState(0);
  const [updateProfilePicture] = useUpdateProfilePictureMutation();

  const lists = [
    {
      icon: "/svg/UserCircleOutline.svg",
      title: "overview",
      link: "/dashboard/overview",
    },
    {
      icon: "/svg/DownloadOutline.svg",
      title: "downloads",
      link: "/dashboard/downloads",
    },
    {
      icon: "/svg/ic_outline-music-note.svg",
      title: "my music",
      link: "/dashboard/mymusic",
    },
    {
      icon: "/svg/Mask group.svg",
      title: "manage subscription",
      link: "/dashboard/manage-subscription",
    },
    {
      icon: "/svg/mdi_user-outline.svg",
      title: "user account",
      link: "/dashboard/user-account",
    },
    {
      icon: "/svg/LogoutOutline.svg",
      title: "log out",
      action: () => {
        dispatch(logout());
        router.push("/login");
      },
    },
  ];

  const profilePicture =
    user && user.profilePicture
      ? `${baseStorageURL}/user/${user?.profilePicture}`
      : "/img/user.png";

  const handleProfilePicChange = async (e) => {
    if (e.target.files.length > 1) {
      toast.error("Please select a image to set profile picture");
    }

    const formData = new FormData();

    formData.append("profilePicture", e.target.files[0]);

    try {
      await updateProfilePicture(formData).unwrap();
    } catch (err) {
      console.log({ err });
    }
  };

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token]);
  useAos();

  return (
    <div className="dashboardLayout">
      <div className="bgEffect1"></div>
      <div className="bgEffect2"></div>
      <Header />
      <div className="container ">
        <div className="flex flex-col lg:flex-row items-start lg:gap-[117px] lg:pt-[94px] pb-0 px-0   ">
          <div className="relative lg:min-w-[291px] lg:min-h-[668px] h-fit block">
            <div className="w-fit max-w-full  flex-col gap-4 items-center mb-16 hidden lg:flex">
              <div className=" relative w-[120px] h-[120px]">
                <div className="w-full h-full overflow-hidden object-cover rounded-[50%]">
                  <Image
                    src={profilePicture}
                    width={120}
                    height={120}
                    alt="profile"
                  />
                </div>
                <button className="w-8 h-8 absolute flex items-center justify-center rounded-[50%] right-[5px] bottom-0 bg-[linear-gradient(90deg,#206983_24.29%,#2f5377_79.78%)]">
                  <Image
                    src="/svg/Plus.svg"
                    width={20}
                    height={20}
                    alt="edit"
                    className="  object-cover object-top rounded-[50%]"
                  />
                  <input
                    className="-indent-[999px] cursor-pointer absolute inline opacity-0 w-full h-full inset-0"
                    type="file"
                    accept="image/png, image/gif, image/jpeg"
                    name="image"
                    id="image"
                    onChange={handleProfilePicChange}
                  />
                </button>
              </div>
              <h4 className="font-bold text-[28px] leading-8 text-white">
                {user?.fullName || "N/A"}
              </h4>
            </div>
            <ul className="lg:block lg:overflow-x-auto lg:w-full lg:gap-x-0 lg:border-none lg:pb-0 flex overflow-x-scroll w-screen gap-x-5 border-b border-gray-600 pb-5">
              {lists.map((list, index) =>
                list.action ? (
                  <button key={index} onClick={list.action}>
                    <li className="flex items-center justify-center whitespace-nowrap min-w-fit px-2 gap-x-2 capitalize mt-4 text-lg ">
                      <div className="w-7 h-7 ">
                        <Image
                          src={list.icon}
                          width={28}
                          height={28}
                          alt="icon"
                        />
                      </div>
                      <span className="font-medium text-xl leading-[23px] text-white">
                        {list.title}
                      </span>
                    </li>
                  </button>
                ) : (
                  <Link key={index} href={list?.link}>
                    <li
                      className={`rounded-xl flex items-center py-2 lg:py-4 gap-x-2 capitalize mt-2 text-lg  whitespace-nowrap min-w-fit px-2 ${
                        pathname === list.link
                          ? " pl-6  right-[-59px] z-[1] hover:opacity-80 transition-all  top-0 bg-[linear-gradient(90deg,#23afb7_1.46%,#169aa4_79.47%)]"
                          : "hover:!bg-[#7e7e7e11]"
                      }`}
                    >
                      <div className="w-7 h-7 flex items-center justify-center">
                        <Image
                          src={list.icon}
                          width={28}
                          height={28}
                          alt="icon"
                        />
                      </div>
                      <span className="font-medium text-xl leading-[23px] text-white">
                        {list.title}
                      </span>
                    </li>
                  </Link>
                )
              )}
            </ul>
            <div className="absolute right-[-59px] h-full w-px top-0 bg-[#fffffd] hidden lg:block"></div>
          </div>
          <div className="w-full my-6 lg:my-0">{children}</div>
        </div>
      </div>
      <div>{activeChildren === 2 && <AudioPlayer />}</div>
    </div>
  );
};

export default DashboardLayout;
