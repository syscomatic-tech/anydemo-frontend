"use client";
import useAos from "@/src/hooks/useAos";
import { useGetAllDemoQuery } from "@/src/redux/features/voice/voice.api";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
const demo = () => {
  const { data: demos } = useGetAllDemoQuery();
  console.log("demos", demos);
  const options = {
    perPage: 3, // Update the perPage option to 3
    gap: "16px",
    type: "loop",
    perMove: 1,
    drag: true,
    pauseOnFocus: true,
    autoplay: false,
    pauseOnHover: true,
    arrows: false,
    classes: {
      prev: "",
      next: "",
    },
    pagination: false,
    autoplaySpeed: 3000,
    interval: 3000,
    width: "100%",
    height: "100%",
    breakpoints: {
      1150: {
        perPage: 2,
      },
    },
  };

  useAos();
  return (
    <div>
      <div>
        <h4
          className="font-bold text-[40px] leading-[46px] text-start text-white mb-12"
          data-aos="fade-right"
          data-aos-delay={600}
        >
          Latest Demo
        </h4>
        <div>
          <Splide options={options}>
            {demos?.map((demo, index) => {
              return (
                <SplideSlide
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={300 * (index + 1)}
                >
                  <div className="w-[295px] h-[363px] cursor-pointer relative m-auto hover:opacity-70 group">
                    <div>
                      <Image
                        src="/img/demo01.png"
                        width={295}
                        height={363}
                        alt=""
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <Image
                      className="opacity-0 group-hover:opacity-100 transition-all duration-[0.3s] ease-[ease-in-out] absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                      src="/svg/play.svg"
                      width={64}
                      height={64}
                      alt=""
                    />
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default demo;
