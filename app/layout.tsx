import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sav Real Estate - Premium Properties in Nigeria",
  description:
    "Find your dream property with Sav Real Estate, Nigeria's leading real estate agency specializing in luxury homes, apartments, and commercial properties.",
  openGraph: {
    title: "Sav Real Estate - Premium Properties in Nigeria",
    description:
      "Find your dream property with Sav Real Estate, Nigeria's leading real estate agency specializing in luxury homes, apartments, and commercial properties.",
    url: "https://savvreal-estate.gelapps.online",
    siteName: "Sav Real Estate",
    images: [
      {
        url: "https://savvreal-estate.gelapps.online/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sav Real Estate - Premium Properties in Nigeria",
    description:
      "Find your dream property with Sav Real Estate, Nigeria's leading real estate agency specializing in luxury homes, apartments, and commercial properties.",
    images: ["https://savvreal-estate.gelapps.online/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
