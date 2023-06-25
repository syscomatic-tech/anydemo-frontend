"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";

import { useVerifyEmailAddressMutation } from "@/src/redux/features/auth/authApi";

export default function ResetPassword() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const [verifyEmailAddress, { isLoading }] = useVerifyEmailAddressMutation();

  const handleVerify = async () => {
    try {
      await verifyEmailAddress({ token }).unwrap();
      toast.success("Email verification successful");
      router.push("/login");
    } catch (err) {
      console.log({ err });
      toast.error(err?.data?.message ?? err?.message);
    }
  };
  return (
    <div>
      <div className="fixed w-full h-full z-[1] flex items-center justify-center left-0 top-0 bg-white">
        <div className="w-[679px] h-[497px] flex flex-col items-center justify-center bg-[#f3f3f3]">
          <div className="w-20 h-20 object-cover object-center">
            <Image
              src="/img/logoBig.png"
              className="w-full h-full"
              width={80}
              height={80}
              alt=""
            />
          </div>
          <h2 className="font-bold text-[26px] leading-[30px] bg-clip-text bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)] text-transparent  ">
            Reset your password
          </h2>
          <p className="mt-10 mb-[50px] mx-0">
            <span className="bg-clip-text bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)] text-transparent font-normal text-xs leading-[14px]">
              You have asked to have your password reset. kindly verify your
              email
            </span>
          </p>
          <button className="mainBtn">
            {isLoading ? " confirming your email..." : " confirm your email"}
          </button>
          <p className="mt-[18px] mb-9 mx-0">
            <span className="bg-clip-text bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)] text-transparent font-normal text-xs leading-[14px]">
              Have any issues? Visit
            </span>{" "}
            <Link
              className="text-[#8D53EB] font-normal text-xs leading-[14px] hover:underline"
              href="#"
            >
              {" "}
              contact us
            </Link>
          </p>
          <p className="w-[70%] text-center">
            <span className="bg-clip-text bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)] text-transparent font-normal text-xs leading-[14px]">
              If you got this mail as spam then click on "looks safe" or "Not
              spam". Hopefully, the button will work, If the button not working
              then mail your email address at
            </span>{" "}
            <Link
              className="text-[#8D53EB] font-normal text-xs leading-[14px] hover:underline"
              href="mailto:web@anydemo.com"
            >
              web@anydemo.com
            </Link>
            <span className="bg-clip-text bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)] text-transparent font-normal text-xs leading-[14px]">
              {" "}
              or Call at{" "}
            </span>
            <Link
              className="text-[#8D53EB] font-normal text-xs leading-[14px] hover:underline"
              href="tel:0244545254245"
            ></Link>
            <span className="bg-clip-text bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)] text-transparent font-normal text-xs leading-[14px]">
              ,{" "}
            </span>
            <Link
              className="text-[#8D53EB] font-normal text-xs leading-[14px] hover:underline"
              href="tel:024554532354"
            >
              024554532354
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
