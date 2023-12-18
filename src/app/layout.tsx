import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";

// const inter = Inter({ subsets: ['latin'] })
const primaryFont = Poppins({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Comment Snippet Generator",
  description: "Comment Snippet Generator made by soham901",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="" suppressHydrationWarning>
      <body className={primaryFont.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
