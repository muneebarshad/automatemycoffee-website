import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import localFont from "next/font/local";
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
});

export const viewport: Viewport = {
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Automate My Coffee — AI Automation Agency",
  description: "We automate the stuff you hate doing. AI automation agency launching soon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${nationalPark.variable} h-full`}>
      <body className="min-h-full flex flex-col font-(family-name:--font-outfit)">
        {children}
      </body>
    </html>
  );
}
