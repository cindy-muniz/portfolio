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

export const metadata = {
  metadataBase: new URL("https://cindy-muniz.vercel.app"),
  title: "Cindy Muniz",
  description: "CS student at Georgia Tech — builder and community leader.",
  openGraph: {
    title: "Cindy Muniz",
    description: "CS student at Georgia Tech — builder and community leader.",
    url: "https://cindy-muniz.vercel.app",
    siteName: "Cindy Muniz",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cindy Muniz — CS student at Georgia Tech",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cindy Muniz",
    description: "CS student at Georgia Tech — builder and community leader.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}