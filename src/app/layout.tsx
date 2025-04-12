import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

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
  title: "Jihad Jadallah | Full Stack Developer & Designer",
  description:
    "Full Stack Developer and Designer specializing in modern web applications, UI/UX design, and creative solutions. Explore my portfolio featuring innovative projects and technical expertise.",
  keywords: [
    "Full Stack Developer",
    "Web Designer",
    "UI/UX Designer",
    "React Developer",
    "Next.js",
    "Portfolio",
    "Jihad Jadallah",
  ],
  authors: [{ name: "Jihad Jadallah" }],
  creator: "Jihad Jadallah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jihadjadallah.com",
    title: "Jihad Jadallah | Full Stack Developer & Designer",
    description:
      "Full Stack Developer and Designer specializing in modern web applications, UI/UX design, and creative solutions.",
    siteName: "Jihad Jadallah Portfolio",
    images: [
      {
        url: "/avatar.png",
        width: 1200,
        height: 630,
        alt: "Jihad Jadallah",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jihad Jadallah | Full Stack Developer & Designer",
    description:
      "Full Stack Developer and Designer specializing in modern web applications, UI/UX design, and creative solutions.",
    images: ["/avatar.png"],
    creator: "@jihadjadallah",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative bg-gray-900/90 antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
