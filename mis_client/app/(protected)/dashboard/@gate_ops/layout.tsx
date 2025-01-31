import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";

import { Sidebar, Navbar } from "./_components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MIS",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w- flex flex-1 border-2 border-black h-full`}
      >
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
