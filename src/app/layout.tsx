import "./globals.css";

import { Space_Grotesk } from "next/font/google";
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Tiny Tools",
  description: "useful tools and small games",
  icons: {
    icon: "/favicon-v1.ico",
    shortcut: "/favicon-v1.ico",
    apple: "/favicon-v1.ico",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} min-h-screen bg-white text-neutral-900 antialiased flex flex-col`}>
        <main className="max-w-7xl mx-auto px-8 py-15 flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}


