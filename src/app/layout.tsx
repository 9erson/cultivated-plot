import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cultivated Plot",
  description: "A landscaping business website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
