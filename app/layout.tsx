import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chadi Amara Nebli",
  description: "Modern & Minimal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head >
        <link className="rounded-[50%]" rel="icon" href="./shedipdp2.png" sizes="any" />

        {/* ✅ Open Graph Meta Tags for Social Previews */}
        <meta property="og:title" content="Chadi Amara Nebli - Portfolio" />
        <meta property="og:description" content="Portfolio showcasing my work and skills." />
        <meta property="og:url" content="https://sheedii.github.io/portfolio/" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Card for Twitter Previews */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chadi Amara Nebli - Portfolio" />
        <meta name="twitter:description" content="Explore my projects and skills as a FullStack Software Engineer." />
      </head>
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
