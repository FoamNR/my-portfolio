import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profileData } from "@/data/portfolio";
import { siteDescription, siteTitle, siteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Icons come from the file conventions app/icon.png, app/apple-icon.png and app/favicon.ico.
// The Open Graph image comes from app/opengraph-image.tsx.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: `${profileData.name} portfolio`,
  authors: [{ name: profileData.name, url: profileData.contact.githubUrl }],
  creator: profileData.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: `${profileData.name} (${profileData.nickname})`,
    title: siteTitle,
    description: siteDescription,
    locale: "en_US",
    firstName: "Nonthawat",
    lastName: "Ramkongmuang",
    username: "FoamNR",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#131418",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#131418] text-[#f3f4f6] selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
