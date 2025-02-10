import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chadi Amara Nebli - Portfolio",
  description: "Modern & Minimal Portfolio showcasing my work and skills.",
  openGraph: {
    title: "Chadi Amara Nebli - Portfolio",
    description: "Discover my projects and skills as a FullStack Software Engineer.",
    url: "https://sheedii.github.io/portfolio/",
    siteName: "Chadi's Portfolio",
    images: [
      {
        url: "https://your-image-url.com/preview.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chadi Amara Nebli - Portfolio",
    description: "Explore my projects and experience as a FullStack Software Engineer.",
    images: ["https://your-image-url.com/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider 
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
