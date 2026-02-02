import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Utility Hub",
  description: "A collection of useful tools and small games.",
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
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

import { Analytics } from "@vercel/analytics/next";
