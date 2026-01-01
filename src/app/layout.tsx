import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NavBar } from "@/components/site/navbar";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alex Kuligowski – Professional Project Portfolio",
  description:
    "Hello — welcome to my collection of software projects and ways to get in touch. Feel free to reach out if you'd like to connect or collaborate.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#eee9dc] text-slate-900`}
      >
        <NavBar />
        {children}

        <Analytics />
      </body>
    </html>
  );
}
