import { Bitter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";

import "./globals.css";
import "katex/dist/katex.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export const metadata = {
  title: "Aarya AI",
  description: "AI tutor for all",
};

const serif = Bitter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.className}`}>
      <body className="bg-slate-50 text-sm md:text-base lg:text-lg text-black">{children}</body>
    </html>
  );
}
