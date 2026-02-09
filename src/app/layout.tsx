import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";

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
      <body className="min-h-screen bg-white text-neutral-900 antialiased">
        <Navbar />
        <main className="max-w-2xl mx-auto px-4 py-20">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}


