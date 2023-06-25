import Image from "next/image";
import Link from "next/link";
import React from "react";

const MusicIsolation = () => {
  return (
    <div className="flex items-center justify-between mt-36">
      <div>
        <h1 className="text-3xl lg:text-[36px] font-medium  lg:leading-[150%] tracking-normal ">
          Feel actual taste of music with voice isolation{" "}
          <span className="text-transparent bg-clip-text bg-[linear-gradient(57.89deg,#2df1e6_61.08%,#3694b0_67.87%,#468db3_68.39%,#6f79ba_69.88%,#8d6bbf_71.24%,#9f63c2_72.4%,#a660c3_73.23%)]">
            voice isolation
          </span>{" "}
        </h1>

        <Link href="/create">
          <button className={" mt-8 mainBtn"}>
            <span>Try for free</span>
          </button>
        </Link>
        <div className="mt-12 flex items-center justify-start gap-x-4 lg:gap-x-12">
          <div>
            <Image
              src="/img/demo01.png"
              alt=""
              width={80}
              height={60}
              className=""
            ></Image>
            <p className="text-white my-2">Take Night</p>
          </div>

          <div>
            <Image
              src="/img/demo01.png"
              alt=""
              width={80}
              height={60}
              className=""
            ></Image>
            <p className="text-white my-2">Take Night</p>
          </div>
          <div>
            <Image
              src="/img/demo01.png"
              alt=""
              width={80}
              height={60}
              className=""
            ></Image>
            <p className="text-white my-2">Take Night</p>
          </div>

          <div>
            <Image
              src="/img/demo01.png"
              alt=""
              width={80}
              height={60}
              className=""
            ></Image>
            <p className="text-white my-2">Take Night</p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <Image src="/img/beats_2.png" alt="" width={800} height={800}></Image>
      </div>
    </div>
  );
};

export default MusicIsolation;
