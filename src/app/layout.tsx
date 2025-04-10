import { Metadata } from "next";
import localFont from "next/font/local";
import AppShell from "../components/AppShell";
import { ThemeProvider } from "../components/ThemeProvider/theme-provider";
import "./globals.css";

const inter = localFont({
  src: "../../public/fonts/web/InterVariable.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "DEV:Ammar | SWE",
  description: "Software Engineer, Frontend Focused.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${inter.variable} antialiased`} lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
