import Image from "next/image";

export default function Shop() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 w-full mt-16 lg:mt-[150px] p-0">
      <div>
        <h1 className="w-full not-italic font-bold text-[40px] leading-[46px] text-white text-center">
          Shop
        </h1>
        <p className="w-full not-italic font-normal text-lg leading-[27px] text-center text-[rgba(255,255,255,0.7)] mt-6">
          Upload your song idea, pick any voice in our catalog and let a
          professional perform your next hit.
        </p>
      </div>
      <div className="w-full">
        <div className="grid lg:grid-cols-[repeat(3,1fr)] grid-cols-[repeat(1,1fr)] gap-6 w-full h-full justify-between items-center mt-5 m-0 p-0">
          <div className="flex flex-col items-start gap-4 max-w-[380px] w-full min-h-[405px] h-fit shadow-[2px_2px_25px_rgba(0,0,0,0.05)] p-0 rounded-md bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)]">
            <div className="w-full rounded-md">
              <Image
                src="/img/shop/shop3.png"
                width={380}
                height={230}
                alt="circle"
                className="w-full"
              />
            </div>
            <div className="px-4 py-0">
              <div className="h-fit w-full font-medium leading-[31px] tracking-[0px] text-left text-[#FFFFFD] left-4 top-[18px]">
                <h2 className="font-medium text-2xl leading-[130%]">
                  Holly Herndon & Jlin (feat. Spawn) – Godmother
                </h2>
              </div>
              <div className="h-[41px] w-auto flex flex-row items-center gap-2 flex-none order-1 self-stretch grow-0 mt-[30px] p-0 rounded-none">
                <Image
                  src="/img/shop/shop-profile.png"
                  width={30}
                  height={30}
                  alt="circle"
                />
                <div className="flex flex-col items-start gap-x-1">
                  <h3>John Williams</h3>
                  <span className="flex flex-row items-center gap-2">
                    <p>Mar 23</p>
                    <p> Jazz</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 max-w-[380px] w-full min-h-[405px] h-fit shadow-[2px_2px_25px_rgba(0,0,0,0.05)] p-0 rounded-md bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)]">
            <div className="w-full rounded-md">
              <Image
                src="/img/shop/shop2.png"
                width={380}
                height={230}
                alt="circle"
              />
            </div>
            <div className="px-4 py-0">
              <div className="h-fit w-full font-medium leading-[31px] tracking-[0px] text-left text-[#FFFFFD] left-4 top-[18px]">
                <h2 className="font-medium text-2xl leading-[130%]">
                  Holly Herndon & Jlin (feat. Spawn) – Godmother
                </h2>
              </div>
              <div className="h-[41px] w-auto flex flex-row items-center gap-2 flex-none order-1 self-stretch grow-0 mt-[30px] p-0 rounded-none">
                <Image
                  src="/img/shop/shop-profile.png"
                  width={30}
                  height={30}
                  alt="circle"
                />
                <div className="flex flex-col items-start gap-x-1">
                  <h3>John Williams</h3>
                  <span className="flex flex-row items-center gap-2">
                    <p>Mar 23</p>
                    <p> Jazz</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 max-w-[380px] w-full min-h-[405px] h-fit shadow-[2px_2px_25px_rgba(0,0,0,0.05)] p-0 rounded-md bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)]">
            <div className="w-full rounded-md">
              <Image
                src="/img/shop/shop1.png"
                width={380}
                height={230}
                alt="circle"
              />
            </div>
            <div className="px-4 py-0">
              <div className="h-fit w-full font-medium leading-[31px] tracking-[0px] text-left text-[#FFFFFD] left-4 top-[18px]">
                <h2 className="font-medium text-2xl leading-[130%]">
                  Holly Herndon & Jlin (feat. Spawn) – Godmother
                </h2>
              </div>
              <div className="h-[41px] w-auto flex flex-row items-center gap-2 flex-none order-1 self-stretch grow-0 mt-[30px] p-0 rounded-none">
                <Image
                  src="/img/shop/shop-profile.png"
                  width={30}
                  height={30}
                  alt="circle"
                />
                <div className="flex flex-col items-start gap-x-1">
                  <h3>John Williams</h3>
                  <span className="flex flex-row items-center gap-2">
                    <p>Mar 23</p>
                    <p> Jazz</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start gap-2 w-[99px] h-12 flex-none order-1 grow-0 cursor-pointer px-4 py-[13.5px] rounded-lg bg-[linear-gradient(47.36deg,#2df1e6_12.24%,#3694b0_37.45%,#468db3_39.38%,#6f79ba_44.93%,#8d6bbf_49.97%,#9f63c2_54.29%,#a660c3_57.37%)]">
        <span>Try Now</span>
      </div>
    </div>
  );
}
