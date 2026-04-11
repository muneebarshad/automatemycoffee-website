import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import localFont from "next/font/local";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const nationalPark = localFont({
  src: "./fonts/NationalPark.ttf",
  variable: "--font-national-park",
  weight: "100 800",
  display: "swap",
});

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: "#BE582A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://automatemycoffee.com"),
  title: "Automate My Coffee — AI Automation Agency",
  description: "We automate the stuff you hate doing. AI automation agency launching soon.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Automate My Coffee — AI Automation Agency",
    description: "We automate the stuff you hate doing. AI automation agency launching soon.",
    siteName: "Automate My Coffee",
    type: "website",
    locale: "en_US",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automate My Coffee — AI Automation Agency",
    description: "We automate the stuff you hate doing. AI automation agency launching soon.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${nationalPark.variable} h-full`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col font-(family-name:--font-outfit)">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
