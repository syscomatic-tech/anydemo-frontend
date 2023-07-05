"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { X } from "lucide-react";

import { selectProfile } from "@/src/redux/features/profile/profileSlice";
import { useUpdateProfileMutation } from "@/src/redux/features/profile/profile.api";
import { useChangePasswordMutation } from "@/src/redux/features/auth/authApi";

import Modal from "@/src/components/Modal";
import Input from "@/src/components/form/Input";

const ChangePasswordModal = ({ show, setShow }) => {
  const { control, handleSubmit, reset } = useForm();

  const [changePassword] = useChangePasswordMutation();

  const onSubmit = async (values) => {
    try {
      await changePassword(values).unwrap();
      toast.success("Password changed successfully");
    } catch (err) {
      toast.error(err?.data?.message ?? err?.message);
    } finally {
      reset();
      setShow(false);
    }
  };

  return (
    <Modal show={show} setShow={setShow}>
      <div className="card lg:w-[400px] bg-primary shadow-xl rounded-md">
        <div className="card-body p-4">
          <div className="card-actions flex justify-end">
            <button
              className="btn btn-square btn-sm"
              onClick={() => {
                reset();
                setShow(false);
              }}
            >
              <X color="white" />
            </button>
          </div>
          <h2 className="title text-white font-semibold text-[24px] mb-5">
            Change current password
          </h2>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              placeholder="Enter current password"
              type="password"
              control={control}
              name="currentPassword"
              label="Current password"
              rules={{
                required: "Current password is required",
              }}
            />
            <Input
              placeholder="Enter new password"
              type="password"
              control={control}
              name="newPassword"
              label="New password"
              rules={{
                required: "New password is required",
              }}
            />

            <div className="form-actions flex justify-end">
              <button type="submit" className="mainBtn">
                <span>Change password</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

const UserAccount = () => {
  const user = useSelector(selectProfile);

  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  const {
    handleSubmit,
    formState: { isDirty },
    control,
    reset,
  } = useForm({
    defaultValues: {
      fullName: user.fullName,
      email: user.email,
      username: user.username,
      phoneNumber: user.phoneNumber,
    },
  });

  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);

  const onSubmit = async (values) => {
    try {
      await updateProfile(values).unwrap();
      toast.success("Profile updated successfully");
    } catch (err) {
      toast.error(err?.data?.message ?? err?.message);
    }
  };

  return (
    <>
      <div className="lg:max-h-[670px] lg:overflow-y-scroll pb-5">
        <div className="dashboard_children_title">
          <h4 className="title">Profile</h4>
          <form
            className="form"
            onSubmit={handleSubmit(onSubmit)}
            onReset={reset}
          >
            <div className="grid lg:grid-cols-[repeat(2,1fr)] grid-cols-1 lg:gap-x-[54px] gap-y-3.5">
              <Input
                control={control}
                name="fullName"
                label="Full name"
                rules={{
                  required: "Full name is required",
                }}
              />
              <Input
                control={control}
                name="email"
                label="Email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email",
                  },
                }}
              />

              <Input
                control={control}
                name="username"
                label="Username"
                rules={{
                  required: "Username is required",
                }}
              />
              <Input
                control={control}
                name="phoneNumber"
                label="Phone number"
                rules={{
                  pattern: {
                    value:
                      /^\+?\d{1,3}?[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
                    message: "Please enter a valid phone number",
                  },
                }}
              />
            </div>
            <div className="flex justify-end items-center gap-8 mt-8">
              <button
                type="submit"
                className="mainBtn "
                disabled={!isDirty | isLoading}
              >
                <span>
                  {" "}
                  {isLoading ? " Updating Profile..." : " Update Profile"}
                </span>
              </button>
              <button
                type="reset"
                className="btnTransparent"
                disabled={isLoading}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
        <div className="dashboard_children_title">
          <h4 className="title">Password</h4>
          <div className="w-full rounded flex items-center justify-between gap-[25px] pl-[21px] pr-[38px] py-[17px] bg-[#1d1b2d]">
            <p className="w-[70%] font-normal text-base leading-6 text-white">
              Change Your Password
            </p>
            <button
              className="mainBtn"
              onClick={() => setShowChangePasswordModal(true)}
            >
              <span>Change password</span>
            </button>
          </div>
        </div>
        <div className="dashboard_children_title">
          <h4 className="title">Delete Account</h4>
          <div className="w-full rounded flex items-center justify-between gap-[25px] pl-[21px] pr-[38px] py-[17px] bg-[#1d1b2d]">
            <p className="w-[70%] font-normal text-base leading-6 text-white">
              Delete Your Account
            </p>
            <button className="mainBtn">
              <span>Delete Account</span>
            </button>
          </div>
        </div>
      </div>
      <ChangePasswordModal
        show={showChangePasswordModal}
        setShow={setShowChangePasswordModal}
      />
    </>
  );
};

export default UserAccount;
