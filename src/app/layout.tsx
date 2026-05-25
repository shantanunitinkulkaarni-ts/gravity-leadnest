import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LeadNest | AI WhatsApp Real Estate CRM",
  description: "AI-powered WhatsApp lead nurturing platform built exclusively for Indian real estate agents.",
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
