import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  themeColor: "#09090A",
};

export const metadata: Metadata = {
  title: "Background Circles | Kokonut UI",
  description: "Beautiful animated background circles component with multiple color variants for modern web applications.",
  keywords: ["UI component", "animation", "background", "circles", "React", "Next.js", "Kokonut UI"],
  authors: [{ name: "Kokonut UI Team" }],
  creator: "Kokonut UI",
  publisher: "Kokonut UI",
  openGraph: {
    title: "Background Circles | Kokonut UI",
    description: "Beautiful animated background circles component with multiple color variants for modern web applications.",
    url: "https://kokonut-ui.com/components/background-circles",
    siteName: "Kokonut UI",
    images: [
      {
        url: "https://kokonut-ui.com/images/background-circles-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Background Circles Component Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Background Circles | Kokonut UI",
    description: "Beautiful animated background circles component with multiple color variants for modern web applications.",
    creator: "@kokonutui",
    images: ["https://kokonut-ui.com/images/background-circles-preview.jpg"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
