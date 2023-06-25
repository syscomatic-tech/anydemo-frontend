"use client";

import Link from "next/link";
import Image from "next/image";

import useLocalStorage from "@/src/hooks/useLocalStorage";

const ResendEmail = () => {
  return (
    <div>
      <div className="fixed w-full h-full z-[1] flex items-center justify-center left-0 top-0 bg-white">
        <div className="w-[679px] h-[497px] flex flex-col items-center justify-center bg-[#f3f3f3]">
          <div className="w-20 h-20 object-cover object-center">
            <Image
              src="/img/logoBig.png"
              className="w-full h-full"
              width={80}
              height={80}
              alt=""
            />
          </div>
          <h2 className="font-bold text-[26px] leading-[30px] bg-clip-text bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)] text-transparent  ">
            Resend Email Request
          </h2>
          <p className="mt-10 mb-[50px] mx-0">
            <span className="bg-clip-text bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)] text-transparent font-normal text-xs leading-[14px]">
              Click the following button to resend your email verification.
              Kindly check the spam folder if you can't find the email in your
              inbox tab.
            </span>
          </p>
          <button className="w-[225px] h-[31px] font-medium text-[11px] leading-[14px] text-center text-[#FFF8F8] px-4 py-2 rounded-[5px] bg-[linear-gradient(90deg,#23afb7_1.46%,#169aa4_79.47%)]">
            Resend Email
          </button>
          <p className="mt-[18px] mb-9 mx-0">
            <span className="bg-clip-text bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)] text-transparent font-normal text-xs leading-[14px]">
              Have any issues? Visit
            </span>{" "}
            <Link
              className="text-[#8D53EB] font-normal text-xs leading-[14px] hover:underline"
              href="#"
            >
              {" "}
              contact us
            </Link>
          </p>
          <p className="w-[70%] text-center">
            <span className="bg-clip-text bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)] text-transparent font-normal text-xs leading-[14px]">
              If you got this mail as spam then click on "looks safe" or "Not
              spam". Hopefully, the button will work, If the button not working
              then mail your email address at
            </span>{" "}
            <Link
              className="text-[#8D53EB] font-normal text-xs leading-[14px] hover:underline"
              href="mailto:web@anydemo.com"
            >
              web@anydemo.com
            </Link>
            <span className="bg-clip-text bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)] text-transparent font-normal text-xs leading-[14px]">
              {" "}
              or Call at{" "}
            </span>
            <Link
              className="text-[#8D53EB] font-normal text-xs leading-[14px] hover:underline"
              href="tel:0244545254245"
            ></Link>
            <span className="bg-clip-text bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)] text-transparent font-normal text-xs leading-[14px]">
              ,{" "}
            </span>
            <Link
              className="text-[#8D53EB] font-normal text-xs leading-[14px] hover:underline"
              href="tel:024554532354"
            >
              024554532354
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResendEmail;
