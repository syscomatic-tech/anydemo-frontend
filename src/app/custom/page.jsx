"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import MainLayout from "@/src/components/layouts/MainLayout";
import LoadingProgressModal from "@/src/components/LoadingProgressModal";
import { selectToken } from "@/src/redux/features/auth/authSlice";
import useAos from "@/src/hooks/useAos";
import { useForm } from "react-hook-form";
import { customModel } from "@/src/axios/axios";

const MakeDemo = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const token = useSelector(selectToken);
  const [step2, setStep2] = useState(false);
  const [openProgress, setOpenProgress] = useState(false);

  const [formDatas, setFormDatas] = useState(null);

  const onSubmit = (values) => {
    setFormDatas(values);
    setStep2(true);
    console.log("submitted successfully", values);
  };

  console.log(formDatas);

  const options = {
    perPage: 3,
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
  const handleConvertMusic = async () => {
    if (formDatas === null) {
      toast.error("Submit the form first");
      setStep2(false);
      return;
    }
    if (!token) {
      toast.error("Login to get demo");
      return router.push(`/login?from=${location.href}`);
    }

    try {
      setOpenProgress(true);
      await dispatch(customModel(formDatas));

      setOpenProgress(false);
    } catch (err) {
      if (token) {
        setOpenProgress(false);
        toast.error(err?.data?.message ?? err?.message);
      }
    }
  };

  useAos();

  return (
    <div className="container">
      <MainLayout>
        <div className="py-[80px]">
          <div className="pageTitle">
            <h1>Custom Model</h1>
            <p>Choose Your Favorite Artist Voice to make your song</p>
          </div>
          <div className="relative flex items-center justify-between px-20 mt-44">
            <div
              className={`w-fit flex flex-col z-[2] `}
              onClick={() => setStep2(false)}
            >
              <span className="font-medium text-2xl leading-7 text-center text-white  transition-all duration-[0.3s] ease-[ease-in-out]">
                01
              </span>
              <div
                className={`w-[31px] h-[31px] rounded-[50%]  ${
                  !step2
                    ? "cursor-pointer bg-[linear-gradient(90deg,#19a7ad_11.69%,#1d8093_79.78%)]"
                    : "bg-[#2f4668]"
                }`}
              ></div>
            </div>
            <div
              className={`w-fit flex flex-col z-[2] ${
                step2 ? "cursor-pointer " : ""
              }`}
            >
              <span className="font-medium text-2xl leading-7 text-center text-white  transition-all duration-[0.3s] ease-[ease-in-out]">
                02
              </span>
              <div
                className={`w-[31px] h-[31px] rounded-[50%]  ${
                  step2
                    ? "cursor-pointer bg-[linear-gradient(90deg,#19a7ad_11.69%,#1d8093_79.78%)]"
                    : "bg-[#2f4668]"
                }`}
              ></div>
            </div>
            <div className="absolute z-[1] w-full flex items-center p-[inherit] left-0 top-[70%]">
              <div
                className={
                  "w-full h-0 text-transparent border-[#4e4a88] border-b-[3px]  " +
                  (step2 ? "border-solid" : "border-dashed")
                }
              ></div>
            </div>
          </div>
          {!step2 && (
            <div className="pt-[65px] pb-[150px] px-0">
              <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="lg:flex items-center justify-between lg:gap-x-6">
                  <div className="formControl lg:w-1/2">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter  Name"
                      {...register("name", {
                        required: " Name is required",
                      })}
                      required
                    />
                  </div>
                  <div className="formControl lg:w-1/2">
                    <label htmlFor="genre">Genre</label>
                    <input
                      type="text"
                      id="genre"
                      placeholder="Enter Genre"
                      {...register("genre", {
                        required: " Genre is required",
                      })}
                      required
                    />
                  </div>
                </div>
                <div className="lg:flex items-center justify-between lg:gap-x-6">
                  <div className="formControl lg:w-1/2">
                    <label htmlFor="code">Code</label>
                    <input
                      type="text"
                      id="code"
                      placeholder="Enter Genre"
                      {...register("code", {
                        required: " Rating is required",
                      })}
                      required
                    />
                  </div>
                  <div className="formControl lg:w-1/2">
                    <label htmlFor="modelFile">Model File</label>
                    <input
                      type="link"
                      id="modelFile"
                      placeholder="Enter Genre"
                      {...register("modelFile", {
                        required: " modelFile is required",
                      })}
                      required
                    />
                  </div>
                </div>
                <div className="lg:flex items-center justify-between lg:gap-x-6">
                  <div className="formControl lg:w-1/2">
                    <label htmlFor="modelType">Model Type</label>
                    <select
                      id="modelType"
                      className="select text-white text-opacity-40 border-none rounded bg-[#1D1B2D] pl-3 pr-6 w-full max-w-xs"
                      {...register("modelType", {
                        required: " modelType is required",
                      })}
                      required
                    >
                      <option disabled selected>
                        Select Model Type
                      </option>
                      <option value={"svc"}>SVC</option>
                      <option value={"rvc"}>RVC</option>
                    </select>
                  </div>

                  <div className="formControl lg:w-1/2">
                    <label htmlFor="artistImage">Artist Image</label>
                    <input
                      type="file"
                      id="artistImage"
                      placeholder="Enter Genre"
                      {...register("artistImage", {
                        required: " artistImage is required",
                      })}
                      required
                    />
                  </div>
                </div>
                <div className="formControl">
                  <label htmlFor="ratings">Rating</label>
                  <input
                    type="range"
                    min={1}
                    max={5}
                    id="ratings"
                    placeholder="Enter Rating"
                    {...register("ratings", {
                      required: " Rating is required",
                    })}
                    required
                  />
                </div>
                <div className="flex gap-[15px]  items-center justify-center">
                  <button className="mainBtn w-1/2" type="submit">
                    <span>Proceed</span>
                  </button>
                </div>
              </form>
            </div>
          )}
          {step2 && (
            <div className="mt-[104px] mb-[333px] mx-0 text-center">
              <button
                onClick={handleConvertMusic}
                className="max-w-[565px] w-full h-[76px] font-medium text-2xl text-center text-[#fff8f8] px-0 py-6 rounded-lg bg-[linear-gradient(212.36deg,#b843b7_27.16%,#a548b2_29.91%,#7d51a9_36.6%,#6058a2_42.71%,#4e5c9e_47.98%,#485e9c_51.81%,#4393bb_66.42%,#39eef2_89.85%)]"
              >
                Get your demo
              </button>
            </div>
          )}
          <div>
            <h4 className="font-bold text-[40px] leading-[46px] text-start text-white mb-12">
              Latest Demo
            </h4>
            <div>
              <Splide options={options}>
                {["1", "2", "3", "4"].map((demo, index) => {
                  return (
                    <SplideSlide key={index}>
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
          {openProgress && (
            <LoadingProgressModal
              title="AI preparing your music"
              open={openProgress}
              setOpen={setOpenProgress}
            />
          )}
        </div>
      </MainLayout>
    </div>
  );
};

export default MakeDemo;
