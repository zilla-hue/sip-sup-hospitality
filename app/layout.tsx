import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

// Load Inter font with more weights for better typography
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  preload: false, // Disable preloading to prevent abort errors
  fallback: ["system-ui", "arial"], // Provide fallback fonts
});

export const metadata: Metadata = {
  title: "SIP-SUP Hospitality - Hotel & Hospitality Management Firm",
  description:
    "Professional hotel and hospitality management solutions to help your business thrive in the competitive hospitality industry.",
  keywords:
    "hospitality management, hotel management, hospitality courses, hospitality consulting",
  authors: [{ name: "SIP-SUP Hospitality" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex min-h-screen flex-col">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
