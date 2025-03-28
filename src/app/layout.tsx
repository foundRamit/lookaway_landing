import { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "LookawayApp",
  description: "LookawayApp helps you take screen breaks with a customizable countdown timer and fullscreen blur effect.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-sans">{children}</body>
    </html>
  );
}
