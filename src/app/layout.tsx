import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/header";
import { ThemeProvider } from "./components/ThemeProvider";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";

export const metadata: Metadata = {
  title: "Luka Milanovic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Header />
        <HeroSection />
        <Projects />
        </ThemeProvider>
      </body>
    </html>
  );
}
