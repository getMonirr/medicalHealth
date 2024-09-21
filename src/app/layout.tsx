import AllProviders from "@/providers/AllProviders";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// inter font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Typescript Next.js Starter",
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
    >
      <body className={inter.className}>
        <AllProviders>{children}</AllProviders>
      </body>
    </html>
  );
}
