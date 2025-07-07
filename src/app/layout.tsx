import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RootElements from "@/components/RootElements";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UIRace | Real Frontend Challenges",
  description:
    "Practice frontend development with real UI challenges. UIRace helps you improve your HTML, CSS, JavaScript, TypeScript, and React skills by building interfaces that match real design requirements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RootElements>{children}</RootElements>
      </body>
    </html>
  );
}
