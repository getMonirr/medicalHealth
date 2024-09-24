"use client";

import { useVerifyEmailQuery } from "@/libs/redux/features/auth/authApi";
import { setUser } from "@/libs/redux/features/auth/authSlice";
import { jwtDecode } from "jwt-decode";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const VerifyEmail = () => {
  const token = useSearchParams().get("token");

  const dispatch = useDispatch();
  const router = useRouter();

  const { data, error, isLoading } = useVerifyEmailQuery({ token });

  if (error) return <div>error</div>;

  if (isLoading) return <div>loading...</div>;

  if (data.success) {
    // decode token
    const decodeToken = jwtDecode(data?.data?.token);

    // redirect user to save token in redux store and redirect to home page
    dispatch(setUser({ token: data?.data?.token, user: decodeToken }));

    // show success message
    toast.success("Email verified");

    // redirect to home page
    router.push("/");
  }

  return <div>email verification</div>;
};

export default VerifyEmail;
