"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { NoDataFound } from "@/src/components/helper";
import SubscriptionPlanCard from "@/src/components/SubscriptionPlanCard";
import { cancelSubscription, getAllPlans } from "@/src/axios/axios";

const ManageSubscription = () => {
  const [selectedPlan, setSelectedPlan] = useState({});
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.profile);
  const { plans } = useSelector((state) => state.plan);
  const subscription = user?.subscription;
  console.log("subscription", subscription, plans);

  const handleCancelSubscription = () => {
    dispatch(cancelSubscription());
  };

  const convertDate = (date) => {
    const d = new Date(date);
    const month = d.toLocaleString("default", { month: "long" });
    const day = d.getDate();
    const year = d.getFullYear();
    //formate 06 April, 2023
    return `${day} ${month}, ${year}`;
  };
  useEffect(() => {
    !plans && dispatch(getAllPlans());
    //find my selected plan
    const myPlan = plans?.find(
      (plan) =>
        plan.annualPricingId || plan.monthlyPricingId === subscription?.priceId
    );
    setSelectedPlan(myPlan);
  }, [plans, subscription]);

  return (
    <div className="max-h-[670px] overflow-y-scroll pb-5">
      <div className="dashboard_children_title">
        <h4 className="title">Your Subscription Plan</h4>
        <SubscriptionPlanCard selected={true} data={selectedPlan} />
      </div>
      <div className="dashboard_children_title">
        <h4 className="title">Purchases</h4>
        <div className="lg:w-9/12 rounded flex items-center justify-between gap-[25px] pl-[21px] pr-[38px] py-[17px] bg-[#1d1b2d] ">
          <div className="flex flex-col gap-4">
            <span className="font-medium text-xl leading-[23px]">
              Recurring Purchases
            </span>
            <span className="font-bold text-lg leading-[21px]">
              1 year 2month
            </span>
          </div>
          <button className="s_btn" onClick={handleCancelSubscription}>
            Cancel Subscription
          </button>
        </div>
      </div>
      <div className="dashboard_children_title">
        <h4 className="title">Device Management</h4>
        <div className="lg:w-9/12 rounded flex items-center justify-between gap-[25px] pl-[21px] pr-[38px] py-[17px] bg-[#1d1b2d] ">
          <div className="flex flex-col gap-4">
            <span className={"font-medium text-xl leading-[23px]"}>
              No of Device
            </span>
            <span className="text-2xl">3</span>
          </div>
          <span className="font-medium text-xl leading-[23px] text-[#1FC2C7] cursor-pointer">
            Manage
          </span>
        </div>
      </div>
      <div className="dashboard_children_title">
        <h4 className="title">Subscription History</h4>
        <div
          className={
            "lg:w-9/12 rounded flex items-center justify-between gap-[25px] pl-[21px] pr-[38px] py-[17px] bg-[#1d1b2d] flex-wrap gap-x-10"
          }
        >
          <div className={"flex flex-col gap-4 gap-y-[11px] w-fit"}>
            <span>Billing Issue</span>
            <small>{convertDate(subscription?.billingDate)}</small>
          </div>
          <div className={"flex flex-col gap-4 gap-y-[11px] w-fit"}>
            <span>Ending Date</span>
            <small>{convertDate(subscription?.endDate)}</small>
          </div>
        </div>
      </div>
      <div className="dashboard_children_title">
        <h4 className="title">Subscription Plan</h4>
        {plans?.length > 0 ? (
          plans?.map((data, i) => (
            <SubscriptionPlanCard data={data} selected={false} key={i} />
          ))
        ) : (
          <NoDataFound width={250} height={250} />
        )}
      </div>
    </div>
  );
};

export default ManageSubscription;
