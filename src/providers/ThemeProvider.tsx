import { ConfigProvider } from "antd";
import { ReactNode } from "react";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#03ACF2",
        },
        components: {
          Carousel: {
            dotHeight: "10px",
            dotWidth: "10px",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
