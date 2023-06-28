import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="heroSection mt-12">
      {/* for large screens  */}

      <div className=" mx-auto hidden lg:flex justify-between items-center">
        <div
          className={
            " flex flex-col justify-start  items-start rounded-none pageTitle"
          }
        >
          <h1
            className="h-48 w-[435px] text-[56px] font-medium leading-[64px] tracking-normal text-left"
            data-aos="fade-up"
          >
            The one tool you need to{" "}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(57.89deg,#2df1e6_61.08%,#3694b0_67.87%,#468db3_68.39%,#6f79ba_69.88%,#8d6bbf_71.24%,#9f63c2_72.4%,#a660c3_73.23%)]">
              make
            </span>{" "}
            any demo
          </h1>
          <p
            className="w-[300px] font-medium text-left text-sm  text-[#989898] mt-5"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Upload your song idea, pick a voice and let our AI turn it into a
            hit
          </p>
          <Link href="/isolation" data-aos="fade-up" data-aos-delay="900">
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
            data-aos="fade-up"
            data-aos-delay="500"
          />
          <Image
            src="/img/hero/hero-two.png"
            alt="hero-section"
            width={260}
            height={320}
            data-aos="fade-up"
            data-aos-delay="600"
          />
        </div>
      </div>

      {/* for small screens  */}
      <div className=" mx-auto lg:hidden flex justify-between items-center">
        <div
          className={
            " flex flex-col justify-center text-center items-center rounded-none pageTitle gap-y-4"
          }
        >
          <h1 className="!text-4xl  font-medium  tracking-normal ">
            The one tool you need to{" "}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(57.89deg,#2df1e6_61.08%,#3694b0_67.87%,#468db3_68.39%,#6f79ba_69.88%,#8d6bbf_71.24%,#9f63c2_72.4%,#a660c3_73.23%)]">
              make
            </span>{" "}
            any demo
          </h1>
          <p className=" font-medium   text-sm  text-[#989898] mt-8">
            Upload your song idea, pick a voice and let our AI turn it into a
            hit.
          </p>
          <Link href="/isolation">
            <button className={" mt-4 btnTransparent"}>
              <span>Try for free</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
