import Image from "next/image";
import Link from "next/link";
import React from "react";

const MusicIsolation = () => {
  const isolationList = [
    { title: "Late Night", icon: "/img/poster.png" },
    { title: "Late Night", icon: "/img/poster.png" },
    { title: "Late Night", icon: "/img/poster.png" },
    { title: "Late Night", icon: "/img/poster.png" },
  ];
  return (
    <div className="flex items-center justify-between mt-36">
      <div>
        <h1
          className="text-3xl lg:text-[36px] font-medium  lg:leading-[150%] tracking-normal "
          data-aos="fade-right"
          data-aos-delay="200"
        >
          Feel actual taste of music with voice isolation{" "}
          <span className="text-transparent bg-clip-text bg-[linear-gradient(57.89deg,#2df1e6_61.08%,#3694b0_67.87%,#468db3_68.39%,#6f79ba_69.88%,#8d6bbf_71.24%,#9f63c2_72.4%,#a660c3_73.23%)]">
            voice isolation
          </span>{" "}
        </h1>

        <Link href="/create" data-aos="fade-right" data-aos-delay="600">
          <button className={" mt-8 mainBtn"}>
            <span>Try for free</span>
          </button>
        </Link>
        <div className="mt-12 flex items-center justify-start gap-x-4 lg:gap-x-12">
          {isolationList.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={300 * (index + 1)}
            >
              <Image
                src={item.icon}
                alt=""
                width={80}
                height={80}
                className=""
              ></Image>
              <p className="text-white my-2 font-semibold">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden lg:block">
        <Image
          src="/img/beats_2.png"
          alt=""
          width={800}
          height={800}
          data-aos="fade-left"
          data-aos-delay="400"
        ></Image>
      </div>
    </div>
  );
};

export default MusicIsolation;
