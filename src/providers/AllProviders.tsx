"use client";

import { ReactNode, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import StoreProvider from "@/libs/redux/StoreProvider";
import AOS from "aos";
import "aos/dist/aos.css";

const AllProviders = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <StoreProvider>
        <ToastContainer />
        {children}
      </StoreProvider>
    </>
  );
};

export default AllProviders;
