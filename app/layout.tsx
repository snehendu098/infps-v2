import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import SplashCursor from "@/components/effects/SplashCursor";
import LiquidEther from "@/components/effects/LiquidEther";
import SmoothScroll from "@/components/effects/SmoothScroll";
import Snowfall from "@/components/effects/Snowfall";
import ChristmasLights from "@/components/effects/ChristmasLights";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Infinititech Partners - Transform Your Digital Future",
  description: "Data Center Management, Custom Software Development, Smart City Solutions, CRM, ERP, POS, Web & Mobile Apps, Digital Marketing",
  keywords: "data center, MDC software, smart city, CRM, ERP, POS, web development, mobile apps, digital marketing",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HSSWXRPFQR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HSSWXRPFQR');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {/* Christmas Effects */}
        <Snowfall />
        <ChristmasLights />

        {/* Scroll Progress Line */}
        <ScrollProgress />

        {/* Custom Cursor Effects */}
        <SplashCursor />
        <LiquidEther />
        <SmoothScroll />

        {/* Content */}
        <div className="relative w-full">
          <Navbar />
          <main className="pt-16 sm:pt-20 w-full overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}