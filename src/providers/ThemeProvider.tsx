import { ConfigProvider } from "antd";
import { ReactNode } from "react";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#03ACF2",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
