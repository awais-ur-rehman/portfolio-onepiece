import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { siteConfig } from "@/config/site";
import "./globals.css";
const condensed = localFont({
  src: "../../public/fonts/big-shoulders.ttf",
  variable: "--font-condensed",
  weight: "100 900",
  display: "swap",
});
const serif = localFont({
  src: "../../public/fonts/italiana.ttf",
  variable: "--font-serif",
  weight: "400",
  display: "swap",
});
export const metadata: Metadata = {
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
};
export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${condensed.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
