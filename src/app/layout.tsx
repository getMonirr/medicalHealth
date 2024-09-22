import AllProviders from "@/providers/AllProviders";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

// lato font
const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  style: "normal",
});

export const metadata: Metadata = {
  title: "Medical Health",
  description: "Created by @getMonirr",
};

// RootLayout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={{
        scrollBehavior: "smooth",
        // horizontal scrolling hidden
        overflowX: "hidden",
      }}
      className="bg-med-white text-med-text"
    >
      <body className={lato.className}>
        <AllProviders>{children}</AllProviders>
      </body>
    </html>
  );
}
