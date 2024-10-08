"use client";

import { ReactNode, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import StoreProvider from "@/libs/redux/StoreProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import AOS from "aos";
import "aos/dist/aos.css";
import ThemeProvider from "./ThemeProvider";

const AllProviders = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <StoreProvider>
        <ToastContainer />
        <AntdRegistry>
          <ThemeProvider>{children}</ThemeProvider>
        </AntdRegistry>
      </StoreProvider>
    </>
  );
};

export default AllProviders;
