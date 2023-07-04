"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import Loading from "@/src/components/shared/Loading";
import { useLoginMutation } from "@/src/redux/features/auth/authApi";
import { baseURL } from "@/src/utils/url";

export default function LogIn() {
  const searchParams = useSearchParams();
  const { register, handleSubmit } = useForm();

  const callback = searchParams.get("from");

  const [showPassword, setShowPassword] = useState(false);

  const [loginUser, { isLoading }] = useLoginMutation();

  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  const handleGoogleLogin = () => {
    router.push(`${baseURL}/auth/google`);
  };

  const onSubmit = async (values) => {
    try {
      await loginUser(values).unwrap();
      toast.success(
        "User logged in successfully. Redirecting to the previous page..."
      );
      if (callback) {
        return router.push(callback);
      }
      router.push("/dashboard/overview");
    } catch (err) {
      toast.error(err?.data?.message ?? err?.message);
    }
  };

  return (
    <div className="container">
      <div className="h-[116px] flex items-center justify-start">
        <Link href="/">
          <Image src="/img/header/logo.png" width={40} height={40} alt="logo" />
        </Link>
      </div>
      <div className="w-full min-h-[711px] h-full bg-[#0F0E19] flex items-center justify-center">
        <div className="authContainer">
          <div
            className="loginImgArea"
            data-aos="fade-right"
            data-aos-delay={300}
          >
            <div className="imgBox">
              <div className="bg"></div>
              <Image src="/img/login.png" width={445} height={485} alt="" />
            </div>
          </div>
          <div className="formArea" data-aos="fade-left" data-aos-delay={300}>
            <h4>Log in your Account</h4>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <div className="formControl">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email",
                    },
                  })}
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="formControl">
                <label htmlFor="password">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                  })}
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="controlPassword">
                <div className="showPassword cursor-pointer">
                  <input
                    onClick={() => setShowPassword(!showPassword)}
                    type="checkbox"
                    id="showPassword"
                    className="cursor-pointer accent-primary"
                  />
                  <label
                    htmlFor="showPassword"
                    className="cursor-pointer font-semibold"
                  >
                    Show Password
                  </label>
                </div>
                <Link
                  href="/forgot-password"
                  className="forgotPassword hover:underline transition-all font-semibold"
                >
                  Forgot Password?
                </Link>
              </div>
              {isLoading && <Loading></Loading>}
              <button
                type="submit"
                className="mainBtn mt-10  w-full"
                disabled={isLoading}
              >
                <span className="">Log in</span>
              </button>
              <div className="alternativeLigInOptions">
                <p>Or login with</p>
                <div className="authIcon">
                  <Image
                    src="/img/google.png"
                    width={32}
                    height={32}
                    alt="google"
                    onClick={() => handleGoogleLogin()}
                  />
                </div>
                <div className="haveAccount">
                  <p>Don’t have an account?</p>
                  <Link href="/signup" className="signUp">
                    Sign up
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <Verify /> */}
      {/* <ResendEmail /> */}
    </div>
  );
}
