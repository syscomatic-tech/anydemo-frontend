"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import { customModel } from "@/src/axios/axios";
import LoadingProgressModal from "@/src/components/LoadingProgressModal";
import MainLayout from "@/src/components/layouts/MainLayout";
import useAos from "@/src/hooks/useAos";
import { selectToken } from "@/src/redux/features/auth/authSlice";
import { useForm } from "react-hook-form";

const MakeDemo = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();

  const token = useSelector(selectToken);
  const [openProgress, setOpenProgress] = useState(false);
  const [step2, setStep2] = useState(false);
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

  const onSubmit = async (values) => {
    if (!token) {
      toast.error("Log in to get demo");
      return router.push(`/login?from=${location.href}`);
    }

    try {
      const formData = new FormData();

      Object.entries(values).forEach(([key, value]) => {
        if (key === "artistImage") {
          formData.append(key, value[0]);
        } else {
          formData.append(key, value);
        }
      });

      setOpenProgress(true);
      dispatch(customModel(formData));

      // reset();
    } catch (error) {
      toast.error(err?.data?.message ?? err?.message);
    } finally {
      setOpenProgress(false);
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
          <div className="pt-[65px] pb-[150px] px-0">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <div>
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
                      placeholder="Enter Code"
                      {...register("code", {
                        required: " Code is required",
                      })}
                      required
                    />
                  </div>
                  <div className="formControl lg:w-1/2">
                    <label htmlFor="modelFile">Model File</label>
                    <input
                      type="link"
                      id="modelFile"
                      placeholder="Enter Model File Link"
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

                  <div className="formControl  lg:w-1/2">
                    <label htmlFor="artistImage">Artist Image</label>
                    <input
                      id="artistImage"
                      accept="image/*"
                      className="file-input file-input-bordered file-input-sm w-full max-w-xs"
                      placeholder="Enter Image"
                      {...register("artistImage")}
                      type="file"
                      name="artistImage"
                      required
                    />
                  </div>
                  <div className="formControl lg:w-1/2">
                    <label htmlFor="ratings">Rating</label>
                    <input
                      type="range"
                      min={1}
                      max={5}
                      id="ratings"
                      className="accent-white cursor-pointer"
                      placeholder="Enter Rating"
                      {...register("ratings", {
                        required: " Rating is required",
                      })}
                      required
                    />
                  </div>
                </div>
                <div className="flex gap-[15px]  items-center justify-center">
                  <button className="mainBtn w-1/2" type="submit">
                    <span>Proceed</span>
                  </button>
                </div>
              </div>

              {/* <div
                className={`mt-[104px] mb-[333px] mx-0 text-center ${
                  step2 ? 'visible' : 'hidden'
                }`}
              >
                <button
                  type='submit'
                  className='max-w-[565px] w-full h-[76px] font-medium text-2xl text-center text-[#fff8f8] px-0 py-6 rounded-lg bg-[linear-gradient(212.36deg,#b843b7_27.16%,#a548b2_29.91%,#7d51a9_36.6%,#6058a2_42.71%,#4e5c9e_47.98%,#485e9c_51.81%,#4393bb_66.42%,#39eef2_89.85%)]'
                >
                  Get your demo
                </button>
              </div> */}
            </form>
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
