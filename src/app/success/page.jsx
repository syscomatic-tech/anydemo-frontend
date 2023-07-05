"use client";
import Image from "next/image";
import Link from "next/link";

export default function Verify() {
  return (
    <div>
      <div className="fixed w-full h-full z-[1] flex items-center justify-center left-0 top-0 ">
        <div className="w-[679px] h-[497px] flex flex-col items-center justify-center ">
          <div className="w-20 h-20 object-cover object-center">
            <Image
              src="/img/logoBig.png"
              className="w-full h-full"
              width={80}
              height={80}
              alt=""
            />
          </div>
          <h2 className="font-bold text-[26px] leading-[30px] bg-clip-text text-white text-transparent  ">
            Payment Sucessfull
          </h2>
          <p className="mt-10 mb-[50px] mx-0">
            <span className="bg-clip-text text-white text-transparent font-normal text-xs leading-[14px]">
              Your payment was successfull!
            </span>
          </p>{" "}
          <Link href={"/dashboard/overview"} className="mainBtn py-2">
            <span>Go to dashboard</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
