import Image from "next/image";

export default function CreateMusic() {
  const musicList = [
    { title: "Upload Song", icon: "/img/create-music/cloud.png" },
    { title: "License Voice", icon: "/img/create-music/vibes.png" },
    { title: "Create Music", icon: "/img/create-music/music-arrow.png" },
  ];
  return (
    <div className="flex flex-col items-center gap-12 w-full h-fit p-0 ">
      <div>
        <h1
          className="w-full lg:h-[46px] not-italic font-bold text-3xl lg:text-[40px] leading-[46px] text-white text-center"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          Create Music
        </h1>
        <p
          className="lg:w-[516px] lg:h-[35px] not-italic font-normal text-base leading-[27px] text-center text-[rgba(255,255,255,0.7)] mt-6"
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          Upload your song idea, pick any voice in our catalog and let a
          professional perform your next hit.
        </p>
      </div>
      <div className="flex flex-wrap justify-between items-center gap-7 lg:gap-20  lg:mt-[60px]">
        {musicList.map((item, index) => (
          <div
            className="w-[339px] h-[230px] flex flex-col items-center justify-between relative"
            key={index}
            data-aos="fade-up"
            data-aos-delay={300 * (index + 1)}
          >
            <div className="w-32 h-32">
              <div className="w-32 h-32 bg-[#0F0E19] flex justify-center items-center absolute rounded-[50%] left-[110px] -top-5">
                <Image src={item.icon} width={103} height={69} alt="alt" />
              </div>
            </div>
            <div>
              <Image
                src="/img/create-music/border-music.png"
                width={339}
                height={164}
                alt="alt"
              />
            </div>
            <div className="absolute w-fit h-8 not-italic font-normal text-[28px] leading-8 text-white left-[85px] top-[135px]">
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
