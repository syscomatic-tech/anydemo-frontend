import Image from "next/image";
import Link from "next/link";
import React from "react";

const SubscriptionPlanCard = (props) => {
  const { data, selected } = props || {};
  return (
    <div className="subscriptionPlanCard">
      <div className="subscriptionPlanCard_header">
        <h4 className="text-4xl text-white">{data?.title}</h4>
        {selected ? (
          <Link href="/pricing">
            <button className="plan_btn hover:!opacity-80 transition-all">
              <span>Change Plan</span>
            </button>
          </Link>
        ) : (
          <Link href="/pricing">
            <button className="plan_btn hover:!opacity-80 transition-all">
              <span>Select Plan</span>
            </button>
          </Link>
        )}
      </div>
      <div className="subscriptionPlanCard_feature">
        <div className="featuresItems">
          {data?.features?.map((item, index) => (
            <div key={index} className="featuresItem">
              <div className="checkIcon">
                <Image
                  width={22}
                  height={22}
                  src={!item.isAvailable ? "/check.svg" : "/crossO.svg"}
                  alt=""
                />
              </div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      {/* for mobile version */}
      {data?.selected ? (
        <button className="plan_btn sm_plan_btn">
          <span>Change Plan</span>
        </button>
      ) : (
        <Link href="/pricing">
          <button className="plan_btn sm_plan_btn">
            <span>Select Plan</span>
          </button>
        </Link>
      )}
    </div>
  );
};

export default SubscriptionPlanCard;
