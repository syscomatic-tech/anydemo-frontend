import Image from "next/image";

export default function Shop() {
  const shops = [
    {
      title: "Holly Herndon & Jlin (feat. Spawn) – Godmother",
      artist: "John Alex",
      type: "Jazz",
      date: "Mar 23",
      image: "/img/shop/shop3.png",
      pfp: "/img/shop/shop-profile.png",
    },
    {
      title: "Holly Herndon & Jlin (feat. Spawn) – Godmother",
      artist: "John Alex",
      type: "Jazz",
      date: "Mar 23",
      image: "/img/shop/shop2.png",
      pfp: "/img/shop/shop-profile.png",
    },
    {
      title: "Holly Herndon & Jlin (feat. Spawn) – Godmother",
      artist: "John Alex",
      type: "Jazz",
      date: "Mar 23",
      image: "/img/shop/shop1.png",
      pfp: "/img/shop/shop-profile.png",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-12 w-full mt-16 lg:mt-[150px] p-0">
      <div>
        <h1
          className="w-full not-italic font-bold text-[40px] leading-[46px] text-white text-center"
          data-aos="fade-up"
        >
          Shop
        </h1>
        <p
          className="w-full not-italic font-normal text-lg leading-[27px] text-center text-[rgba(255,255,255,0.7)] mt-6"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          Upload your song idea, pick any voice in our catalog and let a
          professional perform your next hit.
        </p>
      </div>
      <div className="w-full">
        <div className="grid lg:grid-cols-[repeat(3,1fr)] grid-cols-[repeat(1,1fr)] gap-6 w-full h-full justify-between items-center mt-5 m-0 p-0">
          {shops.map((item, index) => (
            <div
              className="flex flex-col items-start gap-4 max-w-[380px] w-full min-h-[405px] h-fit shadow-[2px_2px_25px_rgba(0,0,0,0.05)] p-0 rounded-md bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)]"
              key={index}
              data-aos="fade-up"
              data-aos-delay={300 * (index + 1)}
            >
              <div className="w-full rounded-md">
                <Image
                  src={item.image}
                  width={380}
                  height={230}
                  alt="circle"
                  className="w-full"
                />
              </div>
              <div className="px-4 py-0">
                <div className="h-fit w-full font-medium leading-[31px] tracking-[0px] text-left text-[#FFFFFD] left-4 top-[18px]">
                  <h2 className="font-medium text-2xl leading-[130%]">
                    {item.title}
                  </h2>
                </div>
                <div className="h-[41px] w-auto flex flex-row items-center gap-2 flex-none order-1 self-stretch grow-0 mt-[30px] p-0 rounded-none">
                  <Image src={item.pfp} width={30} height={30} alt="circle" />
                  <div className="flex flex-col items-start gap-x-1">
                    <h3> {item.artist}</h3>
                    <span className="flex flex-row items-center gap-2">
                      <p> {item.date}</p>
                      <p> {item.type}</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="mainBtn" data-aos="fade-down" data-aos-delay={300}>
        <span>Try Now</span>
      </button>
    </div>
  );
}
