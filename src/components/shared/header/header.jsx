"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

import Link from "next/link";
import { logout, selectToken } from "@/src/redux/features/auth/authSlice";
import { baseStorageURL } from "@/src/utils/url";

import { useGetProfileQuery } from "@/src/redux/features/profile/profile.api";

const Header = () => {
  const router = useRouter();
  const pathName = usePathname();
  const dispatch = useDispatch();
  const [activeMobNav, setActiveMobNav] = useState(false);

  const user = useSelector((state) => state.profile.profile);
  const accessToken = useSelector(selectToken);

  useGetProfileQuery({
    skip: accessToken === "",
  });

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  const lists = [
    {
      icon: "/svg/UserCircleOutline.svg",
      title: "Overview",
      path: "/dashboard/overview",
    },
    {
      icon: "/svg/DownloadOutline.svg",
      title: "Downloads",
      path: "/dashboard/downloads",
    },
    {
      icon: "/svg/ic_outline-music-note.svg",
      title: "My Music",
      path: "/dashboard/myMusic",
    },
    {
      icon: "/svg/Mask group.svg",
      title: "Manage Subscription",
      path: "/dashboard/manageSubscription",
    },
    {
      icon: "/svg/mdi_user-outline.svg",
      title: "User Account",
      path: "/dashboard/userAccount",
    },
  ];
  const mainMenu = [
    {
      title: "stream",
      path: "#",
      status: "disabled",
    },
    {
      title: "shop",
      path: "#",
      status: "disabled",
    },
    {
      title: "pricing",
      path: "/pricing",
    },
    {
      title: "join",
      path: "/join",
    },
    {
      title: "contact",
      path: "/contact",
    },
  ];

  const profilePicture =
    user && user.profilePicture
      ? `${baseStorageURL}/user/${user?.profilePicture}`
      : "/img/user.png";

  return (
    <div className="navbar container py-6 z-50">
      <div className="navbar-start">
        <div className="cursor-pointer">
          <Link href="/">
            <Image
              className="logo"
              src={"/img/header/logo.png"}
              width={40}
              height={40}
              alt="logo"
            />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6 capitalize">
          <li
            className={
              pathName.includes("create" || "isolation")
                ? "text-[#32e5eb] text-lg dropdown dropdown-hover"
                : "not-italic font-normal text-lg leading-[21px] text-center  text-white dropdown dropdown-hover"
            }
          >
            <label tabIndex={0}>
              Create{" "}
              <span>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </label>
            <ul
              className="   w-fit  cursor-pointer  capitalize dropdown-content  z-[1] menu p-2 shadow bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)] rounded  "
              tabIndex={0}
            >
              <li className="py-2 text-white border-b  border-gray-500">
                <Link href="/create">Voice Cloning</Link>
              </li>
              <li className="py-2 text-white border-b  border-gray-500">
                <Link href="/isolation">Voice Isolation</Link>
              </li>
              <li className="py-2 text-white ">
                <Link href="/create">Custom Model</Link>
              </li>
            </ul>
          </li>
          {mainMenu.map((menu, index) => (
            <li
              key={index}
              style={{ opacity: menu.status === "disabled" ? 0.4 : 1 }}
              className={
                pathName.includes(menu.path)
                  ? "text-[#32e5eb] text-lg"
                  : "not-italic font-normal text-lg leading-[21px] text-center  text-white"
              }
            >
              {menu.status === "disabled" ? (
                <span>{menu.title}</span>
              ) : (
                <Link href={menu.path}>{menu.title}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          {accessToken ? (
            <div className="">
              <label tabIndex={0} className="btn m-1 border-none">
                <div className="relative">
                  <div
                    className={
                      "lg:flex flex-row items-center gap-4 w-fit h-10 p-0   cursor-pointer hidden "
                    }
                  >
                    <Image
                      src={profilePicture}
                      width={40}
                      height={40}
                      alt="profile"
                      className="rounded-full object-cover h-10 w-10  object-top "
                    />
                    <p className="font-normal !normal-case text-base leading-[18px] text-white">
                      {user?.fullName}
                    </p>
                  </div>
                  <Image
                    src="/img/header/burger.png"
                    width={16.5}
                    height={10.5}
                    alt="bar"
                    className="block lg:hidden cursor-pointer"
                  />
                </div>{" "}
              </label>
              <ul
                className="block lg:hidden  gap-10 w-fit  cursor-pointer  capitalize dropdown-content  z-[1] menu p-2 shadow bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)] rounded  "
                tabIndex={0}
              >
                {accessToken && (
                  <li
                    onClick={() => router.push("/dashboard/overview")}
                    className="py-4 text-white border-b   border-gray-500"
                  >
                    <div
                      className={
                        "flex flex-row items-center gap-4 w-fit h-10 p-0   cursor-pointer  "
                      }
                    >
                      <Image
                        src={profilePicture}
                        width={40}
                        height={40}
                        alt="profile"
                        className="rounded-full object-cover h-10 w-10  object-top "
                      />
                      <p className="font-normal !normal-case whitespace-nowrap text-base leading-[18px] text-white">
                        {user?.fullName}
                      </p>
                    </div>
                  </li>
                )}
                <li
                  className={
                    pathName.includes("create" || "isolation")
                      ? "text-[#32e5eb] border-b py-4  border-gray-500 dropdown dropdown-left"
                      : "not-italic font-normal text-lg leading-[21px]   text-white border-b py-4  border-gray-500 dropdown dropdown-left"
                  }
                >
                  <label tabIndex={1}>Create</label>
                  <ul
                    className="   w-fit  cursor-pointer  capitalize dropdown-content  z-[1] menu p-2 shadow bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)] rounded  "
                    tabIndex={1}
                  >
                    <li className="py-2 text-white border-b  border-gray-500">
                      <Link href="/create">Voice Cloning</Link>
                    </li>
                    <li className="py-2 text-white border-b  border-gray-500">
                      <Link href="/isolation">Voice Isolation</Link>
                    </li>
                    <li className="py-2 text-white ">
                      <Link href="#">Custom Model</Link>
                    </li>
                  </ul>
                </li>
                {mainMenu.map((menu, index) => (
                  <li
                    key={index}
                    style={{ opacity: menu.status === "disabled" ? 0.4 : 1 }}
                    className={
                      pathName.includes(menu.path)
                        ? "text-[#32e5eb] border-b py-4  border-gray-500"
                        : "not-italic font-normal text-lg leading-[21px]   text-white border-b py-4  border-gray-500"
                    }
                  >
                    {menu.status === "disabled" ? (
                      <span>{menu.title}</span>
                    ) : (
                      <Link href={menu.path}>{menu.title}</Link>
                    )}
                  </li>
                ))}

                {accessToken && (
                  <li onClick={() => handleLogout()} className="py-4">
                    <div className="mr-2">
                      <Image
                        src="/svg/LogoutOutline.svg"
                        width={28}
                        height={28}
                        alt="icon"
                      />
                      <span className="font-semibold text-white text-base whitespace-nowrap">
                        Log Out
                      </span>
                    </div>
                  </li>
                )}
              </ul>

              <ul
                className="lg:block  gap-10 w-fit  cursor-pointer  capitalize dropdown-content z-[1] menu p-2 shadow bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)] rounded  hidden"
                tabIndex={0}
              >
                {lists.map((list, index) => (
                  <li
                    key={index}
                    className="border-b py-4 text-white border-gray-500 "
                  >
                    <Link href={list.path}>
                      <div className="mr-2">
                        <Image
                          src={list.icon}
                          width={28}
                          height={28}
                          alt="icon"
                        />
                      </div>
                      <span className="font-semibold text-base whitespace-nowrap">
                        {list.title}
                      </span>
                    </Link>
                  </li>
                ))}
                <li onClick={() => handleLogout()} className="py-4">
                  <div className="mr-2">
                    <Image
                      src="/svg/LogoutOutline.svg"
                      width={28}
                      height={28}
                      alt="icon"
                    />
                    <span className="font-semibold text-white text-base whitespace-nowrap">
                      Log Out
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex flex-row items-center lg:gap-6 gap-3 w-fit h-10 p-0">
              <Link href="/login" className={" btnTransparent"}>
                <span>Sign In</span>
              </Link>

              <Link href="/signUp" className={"mainBtn"}>
                <span> Sign Up</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
