import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { headers } from "next/headers";
import SiteWrapper from "@/components/layout/SiteWrapper";
import { SiteSettingsProvider } from "@/lib/context/SiteSettingsContext";
import { getSiteSettings } from "@/lib/sanity/fetch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Infinititech Partners - Transform Your Digital Future",
  description: "Data Center Management, Custom Software Development, Smart City Solutions, CRM, ERP, POS, Web & Mobile Apps, Digital Marketing",
  keywords: "data center, MDC software, smart city, CRM, ERP, POS, web development, mobile apps, digital marketing",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Check if this is the studio route using middleware header
  const headersList = headers();
  const pathname = headersList.get("x-pathname") || "";
  const isStudio = pathname.startsWith("/studio");

  // Fetch site settings from Sanity (only for non-studio routes)
  const siteSettings = isStudio ? null : await getSiteSettings();

  return (
    <html lang="en" className={isStudio ? "" : "scroll-smooth"}>
      <head>
        {!isStudio && (
          <Script id="gtm-head" strategy="beforeInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MZQF8HWV');`}
          </Script>
        )}
      </head>
      <body className={isStudio ? "" : `${inter.className} custom-cursor`} style={isStudio ? { margin: 0 } : undefined}>
        {isStudio ? (
          children
        ) : (
          <>
            {/* Google Tag Manager - Noscript */}
            <noscript>
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-MZQF8HWV"
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>

            {/* Google Analytics */}
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-9NFYD9F3XX"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-9NFYD9F3XX');
              `}
            </Script>

            <SiteSettingsProvider settings={siteSettings}>
              <SiteWrapper>{children}</SiteWrapper>
            </SiteSettingsProvider>
          </>
        )}
      </body>
    </html>
  );
}