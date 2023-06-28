import Image from "next/image";
import Link from "next/link";
import React from "react";

const MusicIsolation = () => {
  return (
    <div className="flex items-center justify-between mt-36">
      <div className="">
        <h1
          className="text-3xl lg:text-[36px] font-medium  lg:leading-[150%] tracking-normal "
          data-aos="fade-left"
          data-aos-delay={300}
        >
          Enjoy unlimited{" "}
          <span className="text-transparent bg-clip-text bg-[linear-gradient(57.89deg,#2df1e6_61.08%,#3694b0_67.87%,#468db3_68.39%,#6f79ba_69.88%,#8d6bbf_71.24%,#9f63c2_72.4%,#a660c3_73.23%)]">
            custom voiceAi
          </span>{" "}
          models
        </h1>

        <button
          className={" mt-8 mainBtn lg:mx-0 mx-auto"}
          data-aos="fade-up"
          data-aos-delay={700}
        >
          <span>
            {" "}
            <Link href="/custom">Let’s create custom model</Link>
          </span>
        </button>
      </div>
      <div
        className="hidden lg:block -ml-16"
        data-aos="fade-right"
        data-aos-delay={500}
      >
        <Image src="/img/beats.png" alt="" width={1000} height={1000}></Image>
      </div>
    </div>
  );
};

export default MusicIsolation;
