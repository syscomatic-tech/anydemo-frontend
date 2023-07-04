"use client";
import { useRouter, usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

import Link from "next/link";
import { logout, selectToken } from "@/src/redux/features/auth/authSlice";
import { baseStorageURL } from "@/src/utils/url";
import { useGetProfileQuery } from "@/src/redux/features/profile/profile.api";
import { toast } from "react-hot-toast";

const Header = () => {
  const router = useRouter();
  const pathName = usePathname();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.profile);
  const accessToken = useSelector(selectToken);
  const { data } = useGetProfileQuery({
    skip: accessToken === "",
  });
  const handleLogout = async () => {
    try {
      toast("Logging you out...");
      dispatch(logout());
      await router.push("/login");
      toast.success("Logged you out successfully!");
    } catch (error) {
      // Handle any errors that occur during the process
      console.error("Logout failed:", error);
      toast.error("Logout failed. Please try again!");
    }
  };

  const lists = [
    {
      icon: "/svg/UserCircleOutline.svg",
      title: "overview",
      path: "/dashboard/overview",
    },
    {
      icon: "/svg/DownloadOutline.svg",
      title: "downloads",
      path: "/dashboard/downloads",
    },
    {
      icon: "/svg/voice_isolation.svg",
      title: "Isolated Voice",
      path: "/dashboard/isolated-voices",
    },
    {
      icon: "/svg/ic_outline-music-note.svg",
      title: "my music",
      path: "/dashboard/mymusic",
    },
    {
      icon: "/svg/custom-model.svg",
      title: "custom models",
      path: "/dashboard/custom-models",
    },
    {
      icon: "/svg/Mask group.svg",
      title: "manage subscription",
      path: "/dashboard/manage-subscription",
    },
    {
      icon: "/svg/mdi_user-outline.svg",
      title: "user account",
      path: "/dashboard/user-account",
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
    <div className="navbar container py-6 z-[10000]">
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

      {/* Visible for large screens only  */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6 capitalize">
          <li
            className={
              pathName.includes("create" || "isolation" || "custom")
                ? "text-[#32e5eb] text-lg dropdown dropdown-hover transition-all  hover:text-[#32e5eb]"
                : "not-italic font-normal text-lg leading-[21px] text-center transition-all  hover:text-[#32e5eb]  text-white dropdown dropdown-hover"
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
              className="   w-fit  cursor-pointer  capitalize dropdown-content  z-[20] menu p-2 shadow bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)] rounded  "
              tabIndex={0}
            >
              <li className="py-2 text-white border-b hover:border-gray-200 transition-all hover:bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)] hover:rounded   border-gray-500">
                <Link href="/create">Voice Cloning</Link>
              </li>
              <li className="py-2 text-white border-b hover:border-gray-200 transition-all hover:bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)] hover:rounded   border-gray-500">
                <Link href="/isolation">Voice Isolation</Link>
              </li>
              <li className="py-2 text-white border-b hover:border-gray-200 transition-all hover:bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)] hover:rounded   border-gray-500">
                <Link href="/custom">Custom Model</Link>
              </li>
            </ul>
          </li>
          {mainMenu.map((menu, index) => (
            <li
              key={index}
              style={{ opacity: menu.status === "disabled" ? 0.4 : 1 }}
              className={
                pathName.includes(menu.path)
                  ? "text-[#32e5eb] text-lg transition-all  hover:text-[#32e5eb]"
                  : "not-italic font-normal text-lg leading-[21px] transition-all  hover:text-[#32e5eb] text-center  text-white"
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
          {/* Logged in user's profile picture and the dropdown  */}
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
                    width={22.5}
                    height={14.5}
                    alt="bar"
                    className="block lg:hidden cursor-pointer"
                  />
                </div>{" "}
              </label>

              {/* Visible for small screens  */}
              <ul
                className="block lg:hidden  gap-10 w-fit  cursor-pointer  capitalize dropdown-content  z-[20] menu p-2 shadow bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)] rounded  "
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
                  <label tabIndex={2}>Create</label>
                  <ul
                    className="   w-fit  cursor-pointer  capitalize dropdown-content  z-[20] menu p-2 shadow bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)] rounded  "
                    tabIndex={2}
                  >
                    <li className="py-2 text-white border-b  border-gray-500">
                      <Link href="/create">Voice Cloning</Link>
                    </li>
                    <li className="py-2 text-white border-b  border-gray-500">
                      <Link href="/isolation">Voice Isolation</Link>
                    </li>
                    <li className="py-2 text-white ">
                      <Link href="/custom">Custom Model</Link>
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
                {/* Visible for logged in users  */}
                {accessToken ? (
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
                ) : (
                  <div className=" gap-3 w-fit h-10 p-0">
                    {/* Visible for not logged in users  */}
                    <Link href="/login" className={" btnTransparent"}>
                      <span>Sign In</span>
                    </Link>

                    <Link href="/signup" className={"mainBtn"}>
                      <span> Sign Up</span>
                    </Link>
                  </div>
                )}
              </ul>
              {/* Visible for large screens */}
              <ul
                className="lg:block  gap-10 w-fit  cursor-pointer  capitalize dropdown-content z-[20] menu p-2 shadow bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)] rounded  hidden"
                tabIndex={0}
              >
                {lists.map((list, index) => (
                  <li
                    key={index}
                    className="py-4 text-white border-b hover:border-gray-200 transition-all hover:bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)] hover:rounded   border-gray-500"
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
                <li
                  onClick={() => handleLogout()}
                  className="py-4 text-white border-b hover:border-gray-200 transition-all hover:bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)] hover:rounded   border-gray-500"
                >
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
              {/* Visible for not logged in users  */}
              <Link href="/login" className={" btnTransparent"}>
                <span>Sign In</span>
              </Link>

              <Link href="/signup" className={"mainBtn"}>
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
