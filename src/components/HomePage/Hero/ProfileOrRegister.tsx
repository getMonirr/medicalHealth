"use client";

import MedBtn from "@/components/Shared/MedBtn";
import { logout, selectToken } from "@/libs/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/libs/redux/hooks";
import { Avatar, Button } from "antd";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TiUserOutline } from "react-icons/ti";
import { toast } from "react-toastify";

const ProfileOrRegister = () => {
  const token = useAppSelector(selectToken);
  const dispatch = useAppDispatch();

  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return <>Loading...</>;
  }

  const decodeToken = token && (jwtDecode(token) as any);

  const handleLogout = () => {
    dispatch(logout());

    toast.success("Logout success");
  };

  return (
    <>
      {token ? (
        <div className="flex items-center gap-4">
          <p>{decodeToken?.email}</p>
          <Avatar size="large" icon={<TiUserOutline />} />
          <Button onClick={handleLogout} type="text" danger>
            Logout
          </Button>
        </div>
      ) : (
        <>
          <Link href="/auth/login">
            <Button
              type="text"
              style={{
                font: "bold",
                textTransform: "uppercase",
              }}
            >
              Login
            </Button>
          </Link>
          <Link href="/auth/register" className="z-50">
            <MedBtn>Register</MedBtn>
          </Link>
        </>
      )}
    </>
  );
};

export default ProfileOrRegister;
