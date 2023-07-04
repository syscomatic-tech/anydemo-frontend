"use client";

import { useOauthSuccessMutation } from "@/src/redux/features/auth/authApi";
import { selectToken } from "@/src/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

function GoogleLogin() {
  const router = useRouter();
  const token = useSelector(selectToken);

  const [OAuthSuccess] = useOauthSuccessMutation();

  const OAuthLogin = async () => {
    try {
      await OAuthSuccess().unwrap();
      toast.success("Log in successful");
      router.push("/dashboard/overview");
    } catch (error) {
      toast.error("Google login failed");
      router.push("/login");
    }
  };

  useEffect(() => {
    if (token) {
      return router.push("/dashboard/overview");
    }
    OAuthLogin();
  }, []);

  return <div>GoogleLogin</div>;
}

export default GoogleLogin;
