import type { Metadata } from "next";
import { Geist, Geist_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Utshob Bose — Full-Stack Developer · CS Graduate · AI Enthusiast",
  description:
    "Portfolio of Utshob Bose — Computer Science graduate (BRAC University), Program Associate at BIID Foundation, and Tech Co-founder of Science Simulab specializing in Next.js, React, Express.js, and scalable systems.",
  keywords: [
    "Utshob Bose",
    "Full-Stack Developer",
    "Next.js Developer",
    "MERN Stack",
    "BRAC University",
    "BIID Foundation",
    "Science Simulab",
    "Software Engineer Dhaka",
  ],
  authors: [{ name: "Utshob Bose" }],
  creator: "Utshob Bose",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bose-portfolio.vercel.app",
    title: "Utshob Bose — Full-Stack Developer · CS Graduate · AI Enthusiast",
    description:
      "Computer Science graduate specializing in full-stack web development, system design, and software engineering with Next.js, React, and Express.",
    siteName: "Utshob Bose Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Utshob Bose — Full-Stack Developer",
    description:
      "Computer Science graduate & Full-Stack Developer (Next.js, React, Express, MERN, AI).",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${pressStart2P.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#07080c] text-zinc-100 font-sans antialiased selection:bg-emerald-500/30 selection:text-emerald-300">
        {children}
      </body>
    </html>
  );
}
