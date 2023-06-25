import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="heroSection" data-aos="fade-up-right">
      {/* for small screens  */}
      <div className=" mx-auto lg:hidden flex justify-between items-center">
        <div
          className={
            " flex flex-col justify-center text-center items-center rounded-none "
          }
        >
          <h1 className="text-[36px] font-medium leading-[34px] tracking-normal ">
            The one tool you need to{" "}
            <span className="text-[#32E5EB]">make</span> any demo
          </h1>
          <p className=" font-medium  text-sm leading-[30px] text-[#989898] mt-3">
            Upload your song idea, pick a voice and let our AI turn it into a
            hit
          </p>
          <Link href="/create">
            <button className={" mt-4 btnTransparent"}>
              <span>Try for free</span>
            </button>
          </Link>
        </div>
      </div>

      {/* for large screens  */}

      <div className="w-1200 mx-auto hidden lg:flex justify-between items-center">
        <div
          className={
            "h-[366px] w-[513px] flex flex-col justify-center text-left items-start rounded-none pageTitle"
          }
        >
          <h1 className="h-48 w-[435px] text-[56px] font-medium leading-[64px] tracking-normal text-left">
            The one tool you need to{" "}
            <span className="text-[#32E5EB]">make</span> any demo
          </h1>
          <p className="w-[300px] font-medium text-left text-sm leading-[30px] text-[#989898] mt-5">
            Upload your song idea, pick a voice and let our AI turn it into a
            hit
          </p>
          <Link href="/create">
            <button className={" mt-8 btnTransparent"}>
              <span>Try for free</span>
            </button>
          </Link>
        </div>
        <div className="h-[400px] w-[580px] lg:flex justify-between items-center rounded-lg hidden">
          <Image
            src="/img/hero/hero-one.png"
            alt="hero-section"
            width={280}
            height={400}
          />
          <Image
            src="/img/hero/hero-two.png"
            alt="hero-section"
            width={260}
            height={320}
          />
        </div>
      </div>
    </div>
  );
}
