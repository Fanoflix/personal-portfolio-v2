import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

import { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import AppShell from "@/components/AppShell";
import TopNavbar from "@/components/TopNavbar";
const inter = localFont({
  src: "../../public/fonts/web/InterVariable.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Ammar | SWE",
  description: "Software Engineer, Frontend Focused.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${inter.variable} antialiased`}
      lang="en"
      suppressHydrationWarning={true}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <TopNavbar />
          <AppShell>{children}</AppShell>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
