import Image from "next/image";

export default function Stream() {
  return (
    <div className="w-full h-fit grid lg:grid-cols-[repeat(2,1fr)] grid-cols-[repeat(1,1fr)] lg:gap-[120px] mt-[150px]">
      <div className="lg:w-[582px]  flex items-center justify-center h-fit relative">
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
          <h2 className="text-[40px] font-bold leading-[56px] tracking-normal text-left">
            Share Your{" "}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(57.89deg,#2df1e6_61.08%,#3694b0_67.87%,#468db3_68.39%,#6f79ba_69.88%,#8d6bbf_71.24%,#9f63c2_72.4%,#a660c3_73.23%)]">
              Stream
            </span>
          </h2>
          <p className="text-lg font-normal leading-[27px] tracking-normal text-left">
            What if you could have a team of highly skilled artificial
            intelligent music composers at your disposal to write a smash hit
            song?
          </p>
          <p className="text-lg font-normal leading-[27px] tracking-normal text-left">
            Upload your song idea ,pick any voice in our catalog and let a
            professional perform your next hit.
          </p>
        </div>
        <div className="flex flex-row items-start gap-8 w-[251px] h-12 p-0">
          <div className="flex flex-row items-center justify-center gap-2 min-w-fit h-12 border cursor-pointer px-4 py-[13.5px] rounded-lg border-solid">
            <p className="text-base font-medium leading-[21px] tracking-normal text-center text-white">
              Learn more
            </p>
          </div>
          <div className="flex flex-row items-center justify-center gap-2 w-fit h-12 cursor-pointer px-4 py-[13.5px] rounded-lg bg-[linear-gradient(90deg,#23afb7_1.46%,#169aa4_79.47%)]">
            <p className="text-base font-medium leading-[21px] tracking-normal text-center text-white">
              Try Now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
