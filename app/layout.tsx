import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taskflow",
  description: "Task manager app",
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/svg",
        media: "(prefers-color-scheme: light)",
        url: "/favicon-light.svg",
      },
      {
        rel: "icon",
        type: "image/svg",
        media: "(prefers-color-scheme: dark)",
        url: "/favicon-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
