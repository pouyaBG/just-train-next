import { Footer, Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car hub",
  description: "discover the beast car",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
