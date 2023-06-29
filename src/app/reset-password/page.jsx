"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";

import Input from "@/src/components/form/Input";
import { useResetPasswordMutation } from "@/src/redux/features/auth/authApi";
import { useForm } from "react-hook-form";

export default function ResetPassword() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { control, handleSubmit } = useForm();

  const token = searchParams.get("token");

  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const onSubmit = async (values) => {
    if (!token) return toast.error("Invalid reset url");
    values.token = token;
    try {
      await resetPassword(values).unwrap();
      toast.success("Password reset successfully");
      router.push("/login");
    } catch (err) {
      toast.error(err?.data?.message ?? err?.message);
    }
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex  flex-col justify-center">
        <h1 className="text-white text-2xl font-semibold mb-5">
          Reset your password
        </h1>
        <form className="w-96 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <Input
            control={control}
            name="newPassword"
            label="New password"
            rules={{
              required: "Please enter your new password",
            }}
          />
          <button
            type="submit"
            className="mainBtn mt-10 h-10 w-full"
            disabled={isLoading}
          >
            <span>{isLoading ? " Changing password" : " Change password"}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
