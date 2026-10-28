import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nonthawat Ramkongmuang | Software Engineer & Developer",
  description: "Portfolio of Nonthawat Ramkongmuang (Foam) - Software Engineer & Full-Stack Developer specializing in Next.js, React, Flutter, and Node.js.",
  keywords: ["Nonthawat Ramkongmuang", "FoamNR", "Software Engineer", "Web Developer", "Next.js", "Flutter", "Portfolio"],
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#131418] text-[#f3f4f6] selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
