"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { forgetPassword } from "../../axios/axios";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [userMail, setUserMail] = useState(null);
  const handleForgotPassword = () => {
    const email = {
      email: userMail,
    };
    dispatch(forgetPassword(email)); // Use dispatch instead of useDispatch
  };
  return (
    <div className="container">
      <div
        className="flex items-center my-8 cursor-pointer w-32 transition-all hover:opacity-70 "
        onClick={() => router.back()}
      >
        <Image src="/svg/back.svg" width={32} height={32} alt="" />
        <p className="text-lg text-white font-semibold ml-2 ">Go Back</p>
      </div>
      <div className="w-full my-auto min-h-[711px] h-full bg-[#0F0E19] flex items-center justify-center">
        <div className="authContainer">
          <div className="loginImgArea">
            <div className="imgBox">
              <div className="bg"></div>
              <Image src="/img/password.png" width={445} height={485} alt="" />
            </div>
          </div>
          <div className="formArea">
            <h4>Forgot Password?</h4>
            <div className="form">
              <div className={`formControl mb-0`}>
                <label htmlFor="email">Email</label>
                <input
                  onChange={(e) => setUserMail(e.target.value)}
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <button
                onClick={() => handleForgotPassword()}
                className="mainBtn w-full"
              >
                <span>Reset password</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
