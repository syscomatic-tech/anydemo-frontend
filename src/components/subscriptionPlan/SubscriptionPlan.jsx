"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

import { getAllPlans, subscribeToPlan } from "@/src/axios/axios";
import Loading from "@/src/components/shared/Loading";

const SubscriptionPlan = () => {
  const dispatch = useDispatch();

  const { plans, loading, planLoading } = useSelector((state) => state.plan);

  const [active, setActive] = useState("month");

  const handleSubscribe = (priceId) => {
    dispatch(subscribeToPlan(priceId));
  };
  const Check = () => (
    <Image src="/check.svg" width={24} height={24} alt="check" />
  );
  const Cross = () => (
    <Image src="/crossO.svg" width={24} height={24} alt="cross" />
  );
  useEffect(() => {
    dispatch(getAllPlans());
  }, []);
  return (
    <div>
      <div>
        <div className="pageTitle">
          <h1>Subscription Plan</h1>
        </div>
        <div className="mt-12 mb-16 mx-0">
          <div className="w-[296px] h-[38px] flex items-center m-auto">
            <div
              onClick={() => setActive("month")}
              className={
                "flex items-center justify-center font-normal text-base text-[#1E1E1E] transition-[color] duration-[0.2s] ease-[ease-in] w-6/12 h-full cursor-pointer bg-[#e9e9e9] rounded-[8px_0_0_8px]" +
                (active === "month" &&
                  "text-[#FFFFFD] bg-[linear-gradient(90deg,#23afb7_1.46%,#169aa4_79.47%)]")
              }
            >
              <span>Monthly</span>
            </div>
            <div
              onClick={() => setActive("year")}
              className={
                "flex items-center justify-center font-normal text-base text-[#1E1E1E] transition-[color] duration-[0.2s] ease-[ease-in] w-6/12 h-full cursor-pointer bg-[#e9e9e9] rounded-[0px_8px_8px_0px] " +
                (active === "year" &&
                  "text-[#FFFFFD] bg-[linear-gradient(90deg,#23afb7_1.46%,#169aa4_79.47%)]")
              }
            >
              <span>Yearly</span>
            </div>
          </div>
        </div>
        {loading && <Loading width={"100px"} height={"100px"} />}
        <div className="flex flex-wrap justify-around items-center gap-x-[27px] gap-y-10 mb-[150px]">
          {plans?.map((item, i) => (
            // conditional bg
            <div
              className={
                "relative text-white w-[370px] min-h-[517px] h-fit px-6 py-[53px] rounded-lg  " +
                (i === 1
                  ? "bg-[linear-gradient(212.36deg,#b843b7_27.16%,#a548b2_29.91%,#7d51a9_36.6%,#6058a2_42.71%,#4e5c9e_47.98%,#485e9c_51.81%,#4393bb_66.42%,#39eef2_89.85%)]"
                  : "bg-[#22627f]")
              }
              key={item._id}
            >
              <div>
                <h3 className="capitalize font-medium text-[28px] leading-8 pb-3 border-b-[0.3px] border-b-[#FFFFFD] border-solid">
                  {item?.title}
                </h3>
              </div>
              <div>
                <div className="flex items-center justify-start gap-x-2 mt-4">
                  <h1 className="font-bold text-xl leading-[41px]">
                    $
                    {active === "month"
                      ? item?.monthlyPricing
                      : item?.annualPricing}
                  </h1>
                  <span className="font-normal text-base leading-[18px] capitalize">
                    /per {active}
                  </span>
                </div>
                <div className="mt-4">
                  <ul>
                    {item?.features?.map((feature) => (
                      <li
                        key={feature._id}
                        className="mb-10 flex items-center gap-x-4 mt-[24.5px] "
                      >
                        {feature?.isAvailable ? <Check /> : <Cross />}
                        <span className="font-normal text-xl leading-[23px] text-[#FFFFFD]">
                          {feature?.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={
                    "font-medium text-lg text-center text-[#FFFFFD] bg-transparent w-full h-12 mt-[42px] px-8 py-[13.5px] rounded-lg   " +
                    (i === 1
                      ? "border-[none] bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)]"
                      : "border-solid border-[#2f9ccd] border-[1.5px]")
                  }
                >
                  <button
                    disabled={planLoading}
                    onClick={() =>
                      handleSubscribe(
                        active === "month"
                          ? item?.monthlyPricingId
                          : item?.annualPricingId
                      )
                    }
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
              {/* conditional tsg */}
              {i === 1 && (
                <div className="flex items-center absolute h-[26px] rounded right-4 top-4 bg-[#2f4668]">
                  <span className="font-normal text-xs px-6 py-0">Popular</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="pageTitle">
          <h1>Compare Subscription Plan</h1>
        </div>
        <div
          className={"grid grid-cols-4 gap-x-[22px] gap-y-10 mb-[150px] mt-16"}
        >
          <div className="text-white bg-transparent">
            <div className="mt-8">
              <div className="lg:block hidden">
                <h3 className="font-bold text-[28px] leading-8 text-[#1FC2C7] mb-12  ">
                  Key features
                </h3>
              </div>
              <div>
                <ul>
                  <li className="font-normal text-2xl leading-7 mb-10">
                    Create and send invoices
                  </li>
                  <li className="font-normal text-2xl leading-7 mb-10">
                    Track expenses
                  </li>
                  <li className="font-normal text-2xl leading-7 mb-10">
                    Unlimited contact
                  </li>
                  <li className="font-normal text-2xl leading-7 ">
                    Multi - currency
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-20">
              <div className="lg:block hidden">
                <h3 className="font-bold text-[28px] leading-8 text-[#1FC2C7] mb-12   ">
                  Advanced features
                </h3>
              </div>
              <div>
                <ul>
                  <li className="font-normal text-2xl leading-7 mb-10">
                    Create and send invoices
                  </li>
                  <li className="font-normal text-2xl leading-7 mb-10">
                    Track expenses
                  </li>
                  <li className="font-normal text-2xl leading-7 mb-10">
                    Unlimited contact
                  </li>
                  <li className="font-normal text-2xl leading-7 ">
                    Multi - currency
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {["1", "2", "3"].map((item, i) => (
            <div
              className={
                "relative text-white w-full min-h-[517px] h-fit px-6 py-[53px] rounded-lg " +
                (i === 1
                  ? "bg-[linear-gradient(212.36deg,#b843b7_27.16%,#a548b2_29.91%,#7d51a9_36.6%,#6058a2_42.71%,#4e5c9e_47.98%,#485e9c_51.81%,#4393bb_66.42%,#39eef2_89.85%)]"
                  : "bg-[#22627f]")
              }
            >
              <div>
                <h3 className="capitalize font-medium text-[28px] leading-8 pb-3 border-b-[0.3px] border-b-[#FFFFFD] border-solid">
                  Personal
                </h3>
              </div>
              <div>
                <div className="flex items-center justify-start gap-x-2 mt-4">
                  <h1 className="font-bold text-xl leading-[41px]">$50</h1>
                  <span className="font-normal text-base leading-[18px] capitalize">
                    /per month
                  </span>
                </div>
                <div
                  className={
                    "font-medium text-lg text-center text-[#FFFFFD] bg-transparent w-full h-12 mt-[42px] px-8 py-[13.5px] rounded-lg   " +
                    (i === 1
                      ? "border-[none] bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)]"
                      : "border-solid border-[#2f9ccd] border-[1.5px]")
                  }
                >
                  <button>Choose Plan</button>
                </div>
                <div className="">
                  <div>
                    <h3 className="font-bold text-[28px] leading-8 text-[#1FC2C7] mb-12 lg:hidden  ">
                      Key features
                    </h3>
                  </div>
                  <ul>
                    <li className="justify-center flex items-center gap-x-4 mt-[24.5px]">
                      <span className="lg:hidden ">
                        Create and send invoices
                      </span>
                      <Check />
                    </li>
                    <li className="justify-center flex items-center gap-x-4 mt-[24.5px]">
                      <span className="lg:hidden ">Track expenses</span>
                      <Cross />
                    </li>
                    <li className="justify-center flex items-center gap-x-4 mt-[24.5px]">
                      <span className="lg:hidden ">Unlimited contact</span>
                      <Check />
                    </li>
                    <li className="justify-center flex items-center gap-x-4 mt-[24.5px]">
                      <span className="lg:hidden ">Multi - currency</span>
                      <Check />
                    </li>
                  </ul>
                </div>
                <div className="">
                  <div>
                    <h3 className="font-bold text-[28px] leading-8 text-[#1FC2C7] mb-12 lg:hidden  ">
                      Advanced features
                    </h3>
                  </div>
                  <ul>
                    <li className="justify-center flex items-center gap-x-4 mt-[24.5px]">
                      <span className="lg:hidden ">
                        Create and send invoices
                      </span>
                      <Check />
                    </li>
                    <li className="justify-center flex items-center gap-x-4 mt-[24.5px]">
                      <span className="lg:hidden ">Track expenses</span>
                      <Cross />
                    </li>
                    <li className="justify-center flex items-center gap-x-4 mt-[24.5px]">
                      <span className="lg:hidden ">Unlimited contact</span>
                      <Check />
                    </li>
                    <li className="justify-center flex items-center gap-x-4 mt-[24.5px]">
                      <span className="lg:hidden ">Multi - currency</span>
                      <Check />
                    </li>
                  </ul>
                </div>
              </div>
              {/* conditional tsg */}
              {/* {i === 1 && <div className={s.s_popular}><span>Popular</span></div>} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
