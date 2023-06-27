import Image from "next/image";
import Link from "next/link";

export default function Stream() {
  return (
    <div className="w-full h-fit grid lg:grid-cols-[repeat(2,1fr)] grid-cols-[repeat(1,1fr)] lg:gap-[120px] mt-[150px]">
      <div
        className="lg:w-[582px]  flex items-center justify-center h-fit relative cursor-pointer"
        data-aos="fade-left"
        data-aos-delay={300}
      >
        <Image
          className="absolute lg:w-[91px] h-[91px] z-0 left-0 -top-4"
          src="/img/stream/1.png"
          width={102}
          height={102}
          alt="circle"
        />
        <Image
          className="w-[550px] lg:h-[400px] z-[1]"
          src="/img/stream/2.png"
          width={550}
          height={400}
          alt="circle"
        />
        <Image
          className="absolute lg:w-[91px] h-[91px] z-0 right-0 -bottom-4"
          src="/img/stream/3.png"
          width={91}
          height={91}
          alt="circle"
        />
        <Image
          className="absolute -translate-x-2/4 -translate-y-2/4 z-[1] left-2/4 top-2/4"
          src="/img/musicBtn.svg"
          width={80}
          height={80}
          alt="play"
        />
      </div>
      <div className="flex flex-col items-start gap-6 lg:w-[517px] lg:h-[242px] p-0">
        <div className="flex flex-col items-start gap-6 h-fit mt-10">
          <h2
            className="text-[40px] font-bold leading-[56px] tracking-normal text-left"
            data-aos="fade-right"
            data-aos-delay={300}
          >
            Share Your{" "}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(57.89deg,#2df1e6_61.08%,#3694b0_67.87%,#468db3_68.39%,#6f79ba_69.88%,#8d6bbf_71.24%,#9f63c2_72.4%,#a660c3_73.23%)]">
              Stream
            </span>
          </h2>
          <p
            className="text-lg font-normal leading-[27px] tracking-normal text-left"
            data-aos="fade-right"
            data-aos-delay={500}
          >
            What if you could have a team of highly skilled artificial
            intelligent music composers at your disposal to write a smash hit
            song?
          </p>
          <p
            className="text-lg font-normal leading-[27px] tracking-normal text-left"
            data-aos="fade-right"
            data-aos-delay={600}
          >
            Upload your song idea ,pick any voice in our catalog and let a
            professional perform your next hit.
          </p>
        </div>
        <div className="flex flex-row items-center lg:gap-6 gap-3 w-fit h-10 p-0">
          {/* Visible for not logged in users  */}
          <Link
            href="#"
            className={" btnTransparent"}
            data-aos="fade-up"
            data-aos-delay={800}
          >
            <span>Learn More</span>
          </Link>

          <Link
            href="#"
            className={"mainBtn"}
            data-aos="fade-up"
            data-aos-delay={1000}
          >
            <span> Try now</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
