import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OneWatchKit",
  description:
    "One watch. Three straps. Every situation. Curated kits built around proven base watches.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}