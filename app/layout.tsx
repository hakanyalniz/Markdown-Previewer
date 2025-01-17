import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import Font Awesome's base styles

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

config.autoAddCss = false; // Disable auto-adding CSS to avoid conflicts

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Markdown Previewer",
  description: "Preview Markdowns",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased h-screen`}>
        {children}
      </body>
    </html>
  );
}
